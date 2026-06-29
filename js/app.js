/* ====================================================================
   APP.JS — test engine. You generally should not need to edit this
   file to add your own content; edit js/questions-data.js instead.
   Tunable behavior lives in CONFIG below.
   ==================================================================== */

const CONFIG = {
  rwModuleSeconds: 32 * 60,
  mathModuleSeconds: 35 * 60,
  breakSeconds: 10 * 60,
  adaptiveThreshold: 0.6,       // % correct on Module 1 needed to be routed to the harder Module 2
  lowTimeWarningSeconds: 5 * 60,
  // Desmos public demo key from Desmos's own API docs (rate-limited).
  // For real classroom use, register a free key at https://www.desmos.com/api/v1.12/docs/index.html
  // and paste it here.
  desmosApiKey: '1626b7b159ea4513a959a12fedf5bd3b'
};

const PHASES = [
  { key: 'rw-m1',  type: 'test',    section: 'readingWriting', moduleLabel: 'Module 1', timeLimit: CONFIG.rwModuleSeconds,   dataKey: 'module1' },
  { key: 'rw-m2',  type: 'test',    section: 'readingWriting', moduleLabel: 'Module 2', timeLimit: CONFIG.rwModuleSeconds,   adaptive: true },
  { key: 'break',  type: 'break',   timeLimit: CONFIG.breakSeconds },
  { key: 'math-m1',type: 'test',    section: 'math',            moduleLabel: 'Module 1', timeLimit: CONFIG.mathModuleSeconds, dataKey: 'module1' },
  { key: 'math-m2',type: 'test',    section: 'math',            moduleLabel: 'Module 2', timeLimit: CONFIG.mathModuleSeconds, adaptive: true },
  { key: 'results',type: 'results' }
];

const INTERSTITIAL_TEXT = {
  'rw-m2': {
    title: 'Reading and Writing — Module 2',
    body: 'You will now begin Module 2. You will have 32 minutes. Once you start the timer cannot be paused.'
  },
  'math-m2': {
    title: 'Math — Module 2',
    body: 'You will now begin Module 2 of the Math section. You will have 35 minutes. The graphing calculator remains available throughout.'
  }
};

/* ---------------------------- state ---------------------------- */
const state = {
  studentName: '',
  qIndex: 0,
  answers: {},       // { phaseKey: { questionId: answer } }
  eliminated: {},    // { phaseKey: { questionId: Set(choiceIndex) } }
  flags: {},          // { phaseKey: Set(questionId) }
  passageCache: {},  // { 'phaseKey::questionId': html }
  results: {},        // { phaseKey: { correct, total } }
  rwTier: null,
  mathTier: null,
  elimModeOn: false,
  timerHidden: false,
  violations: []
};

let phaseIndex = -1;
let lockdownActive = false;
let violationGuard = false;
let desmosCalculator = null;

/* ---------------------------- timer ---------------------------- */
const Timer = {
  remaining: 0,
  intervalId: null,
  onTick: null,
  onComplete: null,
  start(seconds, onTick, onComplete) {
    this.stop();
    this.remaining = seconds;
    this.onTick = onTick;
    this.onComplete = onComplete;
    this.onTick(this.remaining);
    this.intervalId = setInterval(() => {
      this.remaining--;
      if (this.remaining <= 0) {
        this.remaining = 0;
        this.onTick(this.remaining);
        this.stop();
        if (this.onComplete) this.onComplete();
      } else {
        this.onTick(this.remaining);
      }
    }, 1000);
  },
  stop() {
    if (this.intervalId) { clearInterval(this.intervalId); this.intervalId = null; }
  }
};

function fmtTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${String(sec).padStart(2, '0')}`;
}

/* ---------------------------- screens ---------------------------- */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function getCurrentPhase() { return PHASES[phaseIndex]; }

function getQuestionsForPhase(phase) {
  const sectionData = SAT_CONTENT[phase.section];
  if (phase.dataKey === 'module1') return sectionData.module1;
  return sectionData.module2;
}

/* ---------------------------- phase flow ---------------------------- */
function goToPhase(index) {
  phaseIndex = index;
  const phase = PHASES[index];
  if (!phase) { showResultsScreen(); return; }
  if (phase.type === 'test') {
    const prev = PHASES[index - 1];
    if (index === 0 || (prev && prev.type === 'break')) {
      startTestPhase(phase);
    } else {
      showInterstitial(phase);
    }
  } else if (phase.type === 'break') {
    startBreak(phase);
  } else if (phase.type === 'results') {
    showResultsScreen();
  }
}

function showInterstitial(phase) {
  lockdownActive = false;
  showScreen('screen-interstitial');
  const info = INTERSTITIAL_TEXT[phase.key] || { title: phase.moduleLabel, body: 'Click continue when you are ready to begin.' };
  document.getElementById('interstitial-title').textContent = info.title;
  document.getElementById('interstitial-body').textContent = info.body;
  document.getElementById('btn-interstitial-continue').onclick = () => startTestPhase(phase);
}

function startBreak(phase) {
  lockdownActive = false;
  showScreen('screen-break');
  Timer.start(phase.timeLimit, (remaining) => {
    document.getElementById('break-timer').textContent = fmtTime(remaining);
  }, () => goToPhase(phaseIndex + 1));
  document.getElementById('btn-skip-break').onclick = () => { Timer.stop(); goToPhase(phaseIndex + 1); };
}

function startTestPhase(phase) {
  showScreen('screen-test');
  state.qIndex = 0;
  if (!state.answers[phase.key]) state.answers[phase.key] = {};
  if (!state.eliminated[phase.key]) state.eliminated[phase.key] = {};
  if (!state.flags[phase.key]) state.flags[phase.key] = new Set();
  state.elimModeOn = false;

  document.getElementById('header-section-name').textContent = phase.section === 'readingWriting' ? 'Reading and Writing' : 'Math';
  document.getElementById('header-module-name').textContent = phase.moduleLabel;
  document.getElementById('btn-toggle-calc').classList.toggle('hidden', phase.section !== 'math');
  document.getElementById('pane-calc').classList.add('hidden');

  renderQuestion();

  lockdownActive = true;
  Timer.start(phase.timeLimit, onTimerTick, () => endModule(phase, { auto: true }));
}

function onTimerTick(remaining) {
  const el = document.getElementById('timer-display');
  const pill = document.getElementById('btn-toggle-timer');
  if (state.timerHidden) {
    el.textContent = 'Hidden';
    pill.classList.remove('low-time');
  } else {
    el.textContent = fmtTime(remaining);
    pill.classList.toggle('low-time', remaining <= CONFIG.lowTimeWarningSeconds);
  }
}

/* ---------------------------- question rendering ---------------------------- */
function renderQuestion() {
  const phase = getCurrentPhase();
  const questions = getQuestionsForPhase(phase);
  const q = questions[state.qIndex];
  const isRW = phase.section === 'readingWriting';

  document.getElementById('pane-passage').classList.toggle('hidden', !isRW);

  if (isRW) {
    const cacheKey = phase.key + '::' + q.id;
    document.getElementById('passage-content').innerHTML = state.passageCache[cacheKey] || q.passage;
  }

  document.getElementById('q-number-badge').textContent = state.qIndex + 1;
  document.getElementById('question-stem').innerHTML = q.question;

  const flagged = state.flags[phase.key].has(q.id);
  const flagBtn = document.getElementById('btn-flag');
  flagBtn.classList.toggle('active', flagged);
  flagBtn.innerHTML = flagged ? '&#9873; Marked for Review' : '&#9873; Mark for Review';

  const isGrid = q.type === 'grid';
  document.getElementById('choices-container').classList.toggle('hidden', isGrid);
  document.getElementById('grid-container').classList.toggle('hidden', !isGrid);
  document.querySelector('.elim-toggle').classList.toggle('hidden', isGrid);

  if (isGrid) {
    document.getElementById('grid-input').value = state.answers[phase.key][q.id] || '';
  } else {
    const container = document.getElementById('choices-container');
    container.innerHTML = '';
    container.classList.toggle('elim-mode-off', !state.elimModeOn);
    const selected = state.answers[phase.key][q.id];
    const elimSet = state.eliminated[phase.key][q.id] || new Set();

    q.choices.forEach((choiceText, i) => {
      const div = document.createElement('div');
      div.className = 'choice' + (selected === i ? ' selected' : '') + (elimSet.has(i) ? ' eliminated' : '');
      div.innerHTML = `
        <span class="choice-letter">${String.fromCharCode(65 + i)}</span>
        <span class="choice-text">${choiceText}</span>
        <button type="button" class="choice-eliminate-btn" title="Cross out this choice">&times;</button>
      `;
      div.querySelector('.choice-eliminate-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleEliminate(phase, q, i);
      });
      div.addEventListener('click', () => selectAnswer(phase, q, i));
      container.appendChild(div);
    });
  }

  document.getElementById('footer-q-current').textContent = state.qIndex + 1;
  document.getElementById('footer-q-total').textContent = questions.length;
  document.getElementById('btn-prev').disabled = state.qIndex === 0;
  document.getElementById('btn-next').textContent = (state.qIndex === questions.length - 1) ? 'Review & Submit' : 'Next';
}

function selectAnswer(phase, q, i) {
  state.answers[phase.key][q.id] = i;
  renderQuestion();
}

function toggleEliminate(phase, q, i) {
  if (!state.eliminated[phase.key][q.id]) state.eliminated[phase.key][q.id] = new Set();
  const set = state.eliminated[phase.key][q.id];
  if (set.has(i)) set.delete(i); else set.add(i);
  renderQuestion();
}

/* ---------------------------- highlighting ---------------------------- */
function highlightSelection() {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed || sel.rangeCount === 0) return;
  const range = sel.getRangeAt(0);
  const passageEl = document.getElementById('passage-content');
  if (!passageEl.contains(range.commonAncestorContainer)) return;
  const mark = document.createElement('mark');
  try {
    range.surroundContents(mark);
  } catch (e) {
    const frag = range.extractContents();
    mark.appendChild(frag);
    range.insertNode(mark);
  }
  sel.removeAllRanges();
  cachePassage();
}

function clearHighlights() {
  const passageEl = document.getElementById('passage-content');
  passageEl.querySelectorAll('mark').forEach(m => { m.replaceWith(...m.childNodes); });
  cachePassage();
}

function cachePassage() {
  const phase = getCurrentPhase();
  const questions = getQuestionsForPhase(phase);
  const q = questions[state.qIndex];
  const cacheKey = phase.key + '::' + q.id;
  state.passageCache[cacheKey] = document.getElementById('passage-content').innerHTML;
}

/* ---------------------------- navigation overlay ---------------------------- */
function openNavOverlay() {
  const phase = getCurrentPhase();
  const questions = getQuestionsForPhase(phase);
  const grid = document.getElementById('nav-grid');
  grid.innerHTML = '';
  questions.forEach((q, i) => {
    const ans = state.answers[phase.key][q.id];
    const answered = ans !== undefined && ans !== '';
    const flagged = state.flags[phase.key].has(q.id);
    const cell = document.createElement('button');
    cell.type = 'button';
    cell.className = 'nav-cell' + (answered ? ' answered' : '') + (flagged ? ' flagged' : '');
    cell.textContent = i + 1;
    cell.addEventListener('click', () => { state.qIndex = i; closeNavOverlay(); renderQuestion(); });
    grid.appendChild(cell);
  });
  document.getElementById('nav-overlay').classList.remove('hidden');
}
function closeNavOverlay() { document.getElementById('nav-overlay').classList.add('hidden'); }

/* ---------------------------- grid-in answer matching ---------------------------- */
function parseNum(s) {
  s = s.trim();
  if (/^-?\d+\/\d+$/.test(s)) { const [n, d] = s.split('/').map(Number); return d !== 0 ? n / d : null; }
  const f = parseFloat(s);
  return isNaN(f) ? null : f;
}
function matchesGrid(value, acceptable) {
  if (value === undefined || value === null || String(value).trim() === '') return false;
  const v = String(value).trim();
  for (const a of acceptable) {
    if (v.toLowerCase() === a.toLowerCase()) return true;
    const vn = parseNum(v), an = parseNum(a);
    if (vn !== null && an !== null && Math.abs(vn - an) < 0.01) return true;
  }
  return false;
}

/* ---------------------------- module submission ---------------------------- */
function endModule(phase, opts = {}) {
  Timer.stop();
  lockdownActive = false;
  const questions = getQuestionsForPhase(phase);
  let correct = 0;
  questions.forEach(q => {
    const ans = state.answers[phase.key] ? state.answers[phase.key][q.id] : undefined;
    if (q.type === 'grid') {
      if (matchesGrid(ans, q.acceptableAnswers)) correct++;
    } else {
      if (ans === q.correctIndex) correct++;
    }
  });
  state.results[phase.key] = { correct, total: questions.length };

  const nextPhase = PHASES[phaseIndex + 1];
  if (nextPhase && nextPhase.adaptive && nextPhase.section === phase.section) {
    const pct = questions.length ? correct / questions.length : 0;
    const tier = pct >= CONFIG.adaptiveThreshold ? 'hard' : 'easy';
    if (phase.section === 'readingWriting') state.rwTier = tier; else state.mathTier = tier;
  }

  closeNavOverlay();
  goToPhase(phaseIndex + 1);
}

/* ---------------------------- Desmos (Math only) ---------------------------- */
function ensureDesmosLoaded(callback) {
  if (window.Desmos) { callback(); return; }
  const s = document.createElement('script');
  s.src = `https://www.desmos.com/api/v1.12/calculator.js?apiKey=${CONFIG.desmosApiKey}`;
  s.onload = () => callback();
  s.onerror = () => console.error('Desmos failed to load — check internet connection.');
  document.head.appendChild(s);
}
function initDesmosIfNeeded() {
  if (desmosCalculator) return;
  ensureDesmosLoaded(() => {
    const elt = document.getElementById('desmos-container');
    desmosCalculator = Desmos.GraphingCalculator(elt, { expressionsCollapsed: false });
  });
}

/* ---------------------------- lockdown / strict environment ---------------------------- */
function showViolationBanner(text) {
  const banner = document.getElementById('violation-banner');
  document.getElementById('violation-text').textContent = text;
  banner.classList.remove('hidden');
  setTimeout(() => banner.classList.add('hidden'), 4000);
}

function triggerViolation(type) {
  if (!lockdownActive || violationGuard) return;
  violationGuard = true;
  const phase = getCurrentPhase();
  state.violations.push({ phase: phase.key, type, time: new Date().toLocaleTimeString() });
  showViolationBanner(`${type} detected — this module has been submitted automatically.`);
  endModule(phase, { auto: true, violation: true });
  setTimeout(() => { violationGuard = false; }, 2000);
}

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement && lockdownActive) triggerViolation('Exited full screen');
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden && lockdownActive) triggerViolation('Tab switch / app switch');
});
window.addEventListener('blur', () => {
  if (lockdownActive) triggerViolation('Window lost focus');
});
window.addEventListener('beforeunload', (e) => {
  if (lockdownActive) { e.preventDefault(); e.returnValue = ''; }
});
document.addEventListener('contextmenu', (e) => { if (lockdownActive) e.preventDefault(); });
document.addEventListener('keydown', (e) => {
  if (!lockdownActive) return;
  const k = e.key ? e.key.toUpperCase() : '';
  if (k === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(k)) || (e.ctrlKey && k === 'U')) {
    e.preventDefault();
  }
});

/* ---------------------------- results ---------------------------- */
function showResultsScreen() {
  showScreen('screen-results');
  lockdownActive = false;
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});

  const rwM1 = state.results['rw-m1'] || { correct: 0, total: 0 };
  const rwM2 = state.results['rw-m2'] || { correct: 0, total: 0 };
  const mathM1 = state.results['math-m1'] || { correct: 0, total: 0 };
  const mathM2 = state.results['math-m2'] || { correct: 0, total: 0 };

  const report = Scoring.buildReport({
    rw: { module1: rwM1, module2: rwM2, tier: state.rwTier || 'easy' },
    math: { module1: mathM1, module2: mathM2, tier: state.mathTier || 'easy' }
  });

  document.getElementById('score-total').textContent = report.total;
  document.getElementById('score-breakdown').innerHTML = `
    <div class="score-block"><div class="label">Reading and Writing</div><div class="value">${report.readingWriting}</div></div>
    <div class="score-block"><div class="label">Math</div><div class="value">${report.math}</div></div>
  `;

  const rows = [
    ['Reading and Writing — Module 1', rwM1, 'Mixed'],
    ['Reading and Writing — Module 2', rwM2, state.rwTier === 'hard' ? 'Harder' : 'Easier'],
    ['Math — Module 1', mathM1, 'Mixed'],
    ['Math — Module 2', mathM2, state.mathTier === 'hard' ? 'Harder' : 'Easier']
  ];
  document.querySelector('#results-table tbody').innerHTML = rows
    .map(([label, r, diff]) => `<tr><td>${label}</td><td>${r.correct}</td><td>${r.total}</td><td>${diff}</td></tr>`)
    .join('');

  const violationsEl = document.getElementById('violations-log');
  violationsEl.innerHTML = state.violations.length
    ? `<h2>Lockdown Events</h2><ul>${state.violations.map(v => `<li>${v.time} — ${v.type} during ${v.phase}</li>`).join('')}</ul>`
    : '';
}

/* ---------------------------- static UI wiring ---------------------------- */
function init() {
  const nameInput = document.getElementById('student-name');
  const btnStart = document.getElementById('btn-start');
  nameInput.addEventListener('input', () => { btnStart.disabled = nameInput.value.trim() === ''; });

  btnStart.addEventListener('click', async () => {
    state.studentName = nameInput.value.trim();
    document.getElementById('header-student-name').textContent = state.studentName;
    try { await document.documentElement.requestFullscreen(); }
    catch (e) { console.warn('Full screen request failed or was denied', e); }
    goToPhase(0);
  });

  document.getElementById('btn-prev').addEventListener('click', () => {
    if (state.qIndex > 0) { state.qIndex--; renderQuestion(); }
  });
  document.getElementById('btn-next').addEventListener('click', () => {
    const phase = getCurrentPhase();
    const questions = getQuestionsForPhase(phase);
    if (state.qIndex < questions.length - 1) { state.qIndex++; renderQuestion(); }
    else { openNavOverlay(); }
  });
  document.getElementById('btn-question-nav').addEventListener('click', openNavOverlay);
  document.getElementById('btn-nav-close').addEventListener('click', closeNavOverlay);
  document.getElementById('btn-nav-submit').addEventListener('click', () => {
    if (confirm('Submit this module? You will not be able to return to it once submitted.')) {
      endModule(getCurrentPhase(), { auto: false });
    }
  });

  document.getElementById('btn-flag').addEventListener('click', () => {
    const phase = getCurrentPhase();
    const questions = getQuestionsForPhase(phase);
    const q = questions[state.qIndex];
    const set = state.flags[phase.key];
    if (set.has(q.id)) set.delete(q.id); else set.add(q.id);
    renderQuestion();
  });
  document.getElementById('btn-toggle-elim').addEventListener('click', () => {
    state.elimModeOn = !state.elimModeOn;
    renderQuestion();
  });

  document.getElementById('btn-highlight').addEventListener('click', highlightSelection);
  document.getElementById('btn-remove-highlight').addEventListener('click', clearHighlights);

  document.getElementById('grid-input').addEventListener('input', (e) => {
    const phase = getCurrentPhase();
    const questions = getQuestionsForPhase(phase);
    const q = questions[state.qIndex];
    state.answers[phase.key][q.id] = e.target.value;
  });

  document.getElementById('btn-toggle-timer').addEventListener('click', () => {
    state.timerHidden = !state.timerHidden;
    onTimerTick(Timer.remaining);
  });

  document.getElementById('btn-toggle-calc').addEventListener('click', () => {
    document.getElementById('pane-calc').classList.remove('hidden');
    initDesmosIfNeeded();
  });
  document.getElementById('btn-close-calc').addEventListener('click', () => {
    document.getElementById('pane-calc').classList.add('hidden');
  });

  document.getElementById('btn-toggle-directions').addEventListener('click', () => {
    const phase = getCurrentPhase();
    document.getElementById('directions-title').textContent =
      (phase.section === 'readingWriting' ? 'Reading and Writing' : 'Math') + ' Directions';
    document.getElementById('directions-body').innerHTML = DIRECTIONS[phase.section];
    document.getElementById('directions-overlay').classList.remove('hidden');
  });
  document.getElementById('btn-directions-close').addEventListener('click', () => {
    document.getElementById('directions-overlay').classList.add('hidden');
  });

  document.getElementById('btn-restart').addEventListener('click', () => location.reload());
}

init();