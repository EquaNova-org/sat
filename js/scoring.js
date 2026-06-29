/* ====================================================================
   SCORING — an original, approximate adaptive-scoring model.

   This is NOT the official College Board scoring algorithm (that
   table is proprietary and unpublished per test form). It is a
   reasonable approximation, in the same spirit as third-party
   estimators: it converts raw score (# correct) into a 200-800
   scaled score per section, while accounting for which Module 2
   difficulty tier the student was routed into — mirroring how the
   real adaptive digital SAT caps your ceiling if you land in the
   easier Module 2, and opens the full range if you land in the
   harder one.

   Treat all output as an ESTIMATE for practice purposes only.
   ==================================================================== */

const Scoring = {

  /**
   * @param {number} module1Correct
   * @param {number} module1Total
   * @param {number} module2Correct
   * @param {number} module2Total
   * @param {'easy'|'hard'} tier - which Module 2 difficulty the student received
   * @returns {number} scaled score, 200-800, rounded to nearest 10
   */
  sectionScore(module1Correct, module1Total, module2Correct, module2Total, tier) {
    const rawCorrect = module1Correct + module2Correct;
    const rawTotal = module1Total + module2Total;
    const pct = rawTotal > 0 ? rawCorrect / rawTotal : 0;

    // Tier sets the achievable band, mirroring the real adaptive ceiling/floor effect.
    const band = tier === 'hard'
      ? { min: 400, max: 800 }
      : { min: 200, max: 650 };

    let score = band.min + pct * (band.max - band.min);
    score = Math.round(score / 10) * 10;
    return Math.max(200, Math.min(800, score));
  },

  /**
   * Builds the full results summary from raw answer/key data.
   * @param {object} data - see app.js callSite for shape
   */
  buildReport(data) {
    const rw = this.sectionScore(
      data.rw.module1.correct, data.rw.module1.total,
      data.rw.module2.correct, data.rw.module2.total,
      data.rw.tier
    );
    const math = this.sectionScore(
      data.math.module1.correct, data.math.module1.total,
      data.math.module2.correct, data.math.module2.total,
      data.math.tier
    );

    return {
      readingWriting: rw,
      math: math,
      total: rw + math
    };
  }
};
