/* ====================================================================
   QUESTION BANK — this is the only file you need to edit to load your
   own content. Source: Digital SAT, October 2026, Test 1.

   Each module is a plain array; the test engine reads array lengths
   dynamically (R&W: 27 + 27 questions, Math: 22 + 22).

   READING & WRITING question shape:
   { id, passage (HTML), question (HTML), choices: [4 strings],
     correctIndex (0=A..3=D), skill }

   MATH multiple choice:  { id, question, type: "mcq", choices, correctIndex, skill }
   MATH grid-in:          { id, question, type: "grid", acceptableAnswers: ["20"], skill }
   (grid answers are matched as text or as a number within 0.01)

   FIGURES: questions that depend on a graph/figure use
   <img src="img/<question-id>.png">. Put a screenshot of the figure at
   that path (relative to index.html). Until then a placeholder shows.

   There is a single Module 2 per section (module2); the adaptive tier
   (easier/harder) only affects score estimation in scoring.js.
   ==================================================================== */

const SAT_CONTENT = {
  "readingWriting": {
    "module1": [
      {
        "id": "rw-m1-01",
        "passage": "<p>The following text is from Jacqueline Woodson’s 2018 novel <em>Harbor Me</em>.</p><p>I’ve <u>pulled</u> the voice recorder from my closet and have it sitting on the middle of my bed now. When I press play, Esteban’s voice fills my room.</p><p><small>©2018 by Jacqueline Woodson</small></p>",
        "question": "<p>As used in the text, what does the word “pulled” most nearly mean?</p>",
        "choices": [
          "Developed",
          "Attracted",
          "Startled",
          "Taken"
        ],
        "correctIndex": 3,
        "skill": "Vocabulary"
      },
      {
        "id": "rw-m1-02",
        "passage": "<p>______ the source of a malfunction in a complex electrical system can be a painstaking, time-consuming process: a repair technician may need to test each individual component one by one until the specific part causing the problematic behavior is identified.</p>",
        "question": "<p>Which choice completes the text with the most logical and precise word or phrase?</p>",
        "choices": [
          "Adapting",
          "Isolating",
          "Incorporating",
          "Fabricating"
        ],
        "correctIndex": 1,
        "skill": "Vocabulary"
      },
      {
        "id": "rw-m1-03",
        "passage": "<p>An effort to raise the toll that drivers must pay to use the Teodoro Moscoso Bridge, which spans the San José Lagoon in Puerto Rico, should explain why a higher toll is necessary; no amount of justification, however, is likely to persuade some drivers who believe the current toll is ______.</p>",
        "question": "<p>Which choice completes the text with the most logical and precise word or phrase?</p>",
        "choices": [
          "warranted",
          "exorbitant",
          "equivocal",
          "contentious"
        ],
        "correctIndex": 1,
        "skill": "Vocabulary"
      },
      {
        "id": "rw-m1-04",
        "passage": "<p>While once ______, basic computer security training that only teaches recognition of obvious scams cannot provide enough protection against today’s sophisticated fake emails, which employ such subtle deception techniques that many organizations now require their staff to complete comprehensive cybersecurity education programs.</p>",
        "question": "<p>Which choice completes the text with the most logical and precise word or phrase?</p>",
        "choices": [
          "uncommon",
          "superficial",
          "sufficient",
          "affordable"
        ],
        "correctIndex": 2,
        "skill": "Vocabulary"
      },
      {
        "id": "rw-m1-05",
        "passage": "<p>The following text is from Yung Wing’s 1909 memoir <em>My Life in China and America</em>. Yung Wing was the first person from China to graduate from a US university.</p><p><u>Little did I realize when in 1845 I wrote, while in the Morrison School, a composition on “An Imaginary Voyage to New York and the Hudson,” that I was to see New York in reality.</u> This incident leads me to the reflection that sometimes our imagination foreshadows what lies uppermost in our minds and brings possibilities within the sphere of realities.</p>",
        "question": "<p>Which choice best describes the function of the underlined sentence in the text as a whole?</p>",
        "choices": [
          "It foreshadows Yung’s future difficulties in publishing his writings.",
          "It describes an event in Yung’s life that exemplifies a phenomenon.",
          "It indicates Yung’s unwillingness to distinguish between reality and fantasy as a child.",
          "It illustrates the role that education played in Yung’s childhood."
        ],
        "correctIndex": 1,
        "skill": "Purpose/Structure"
      },
      {
        "id": "rw-m1-06",
        "passage": "<p>Research on minor solar eruptions in magnetically quiet regions revealed an interesting pattern. <u>Material expelled during these events follows a narrow arc trajectory back to the Sun’s surface.</u> High-resolution images show these eruptions produce thin streams of hot gas moving at speeds between 55 and 200 kilometers per second. Although these are impressive speeds, they are not sufficient to overcome the confining forces of the Sun’s gravity and magnetic field, so the material is pulled back down.</p>",
        "question": "<p>Which choice best describes the function of the underlined sentence in the text as a whole?</p>",
        "choices": [
          "It describes a natural phenomenon that is explained later in the text.",
          "It presents a research finding that challenges the view mentioned in the first sentence of the text.",
          "It acknowledges an exception to the pattern described in the first sentence of the text.",
          "It discusses a natural occurrence that leads to the consequences explained later in the text."
        ],
        "correctIndex": 0,
        "skill": "Purpose/Structure"
      },
      {
        "id": "rw-m1-07",
        "passage": "<img src=\"img/rw-m1-07.jpg\" alt=\"Bar graph: volcanoes active since 1800 and since 1960 in Tanzania and Ethiopia\" style=\"max-width:100%;height:auto;margin:8px 0\" onerror=\"this.outerHTML='<p><em>[Figure missing &mdash; add img/rw-m1-07.png]</em></p>'\"><p>A student is collecting data about countries with volcanoes that have been active in the time since 1800 and in the time since 1960. The student records that Ethiopia has ______</p>",
        "question": "<p>Which choice most effectively uses data from the graph to complete the statement?</p>",
        "choices": [
          "the same number of volcanoes that have been active since 1800 as Tanzania has.",
          "no volcanoes that have been active since 1800.",
          "more volcanoes that have been active since 1960 than Tanzania has.",
          "fewer volcanoes that have been active since 1960 than Tanzania has."
        ],
        "correctIndex": 2,
        "skill": "Evidence"
      },
      {
        "id": "rw-m1-08",
        "passage": "<p>Arthur Conan Doyle, the author of the 1902 novel <em>The Hound of the Baskervilles</em> and dozens of other stories featuring the detective Sherlock Holmes, hoped to be remembered chiefly for his historical novels. Although he completed many such works, including <em>The White Company</em> (1891), he became world-famous instead as the creator of Holmes, the character still most closely associated with his name. A student researching popular fiction asserts that <u>even though Doyle grew weary of the character, he ultimately yielded to readers’ desire for more Holmes stories</u>.</p>",
        "question": "<p>Which statement, if true, would best illustrate the student’s claim in the underlined text?</p>",
        "choices": [
          "Doyle had Holmes plunge to his apparent death in an 1893 story in order to free himself to write other kinds of fiction.",
          "Doyle based Holmes’s powers of deduction partly on those of Joseph Bell, a physician who had taught him at the University of Edinburgh.",
          "Doyle regarded <em>The White Company</em> as one of his finest achievements, even though it is far less widely read today than his Holmes stories.",
          "After killing off Holmes in 1893 to focus on other writing, Doyle revived the detective a decade later in response to persistent appeals from readers."
        ],
        "correctIndex": 3,
        "skill": "Evidence"
      },
      {
        "id": "rw-m1-09",
        "passage": "<p>The following text is from Hilda Eunice Burgos’s 2018 novel <em>Ana Maria Reyes Does Not Live in a Castle</em>. The narrator is in sixth grade.</p><p>The next day I went to my piano lesson, as I did every Tuesday after school. My piano teacher, Doña Dulce Sanchez, lived two blocks from my school, in the opposite direction from my house.</p><p><small>©2018 by Hilda Eunice Burgos</small></p>",
        "question": "<p>According to the text, where did the narrator’s piano teacher live?</p>",
        "choices": [
          "Near the center of town",
          "Two blocks from the narrator’s school",
          "Across the street from the narrator’s home",
          "One block from the narrator’s home"
        ],
        "correctIndex": 1,
        "skill": "Inference"
      },
      {
        "id": "rw-m1-10",
        "passage": "<p>Unlike terrestrial and shallow-water ecosystems that rely predominantly on photosynthetic primary producers, hydrothermal vent communities depend on chemolithoautotrophic bacteria. These microscopic organisms derive metabolic energy by oxidizing hydrogen sulfide emitted from geothermal fissures along the ocean floor, forming the bedrock of an abyssal food web isolated from solar radiation.</p>",
        "question": "<p>Based on the text, what distinguishes hydrothermal vent communities from surface ecosystems?</p>",
        "choices": [
          "Their reliance on chemical oxidation rather than sunlight for primary energy generation.",
          "Their complete vulnerability to seasonal shifts in solar radiation levels.",
          "Their exclusive dependence on plant matter descending from shallow waters.",
          "Their inability to maintain complex ecological interactions in cold temperatures."
        ],
        "correctIndex": 0,
        "skill": "Inference"
      },
      {
        "id": "rw-m1-11",
        "passage": "<p>Hydrologists recently developed a model to forecast how growing water demand will affect streamflow in river basins in the western United States. Unfortunately, when the model is applied to basins fed mainly by melting snowpack, its forecasts of spring streamflow are too low, and when it is applied to basins fed mainly by rainfall, its forecasts of summer streamflow are too high. The Yampa River basin in northwestern Colorado receives most of its water from snowmelt. If used to forecast the effect of growing water demand on the Yampa River basin over the next decade, the model would therefore likely ______</p>",
        "question": "<p>Which choice most logically completes the text?</p>",
        "choices": [
          "overestimate the basin’s actual summer streamflow.",
          "underestimate the basin’s actual spring streamflow.",
          "exaggerate the effect of growing water demand on rainfall-fed tributaries.",
          "account for factors affecting streamflow other than growing water demand."
        ],
        "correctIndex": 1,
        "skill": "Inference"
      },
      {
        "id": "rw-m1-12",
        "passage": "<p>Brittle stars are sea animals that move along the ocean floor using their five arms. Unlike most animals, brittle stars have 70%-80% of their weight in their arms. To better understand the benefits of this unusual distribution, scientists built a soft robot inspired by the brittle star’s body structure. The robot has a middle disk and five arms whose weights can be changed. When the scientists made the arms heavier, the arms pressed down more firmly on the ground. This stronger grip kept the arms from slipping and allowed the robot to move more effectively across the ocean floor. Based on these results, the scientists hypothesize that ______</p>",
        "question": "<p>Which choice most logically completes the text?</p>",
        "choices": [
          "brittle stars have most of the weight in their arms because that is where they store nutrients.",
          "brittle stars have most of their weight in their arms so they can scare off predators.",
          "having most of their weight in their arms allows brittle stars to climb steep underwater cliffs.",
          "having most of their weight in their arms helps brittle stars move across the ocean floor."
        ],
        "correctIndex": 3,
        "skill": "Inference"
      },
      {
        "id": "rw-m1-13",
        "passage": "<p>With an average summer temperature of 67.7 degrees Fahrenheit, Budapest is one European ______ many travelers recommend, especially from June to September.</p>",
        "question": "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        "choices": [
          "city, that",
          "city that",
          "city in which,",
          "city, which"
        ],
        "correctIndex": 1,
        "skill": "Conventions"
      },
      {
        "id": "rw-m1-14",
        "passage": "<p>Rock carvings found on islands around the lower Susquehanna River in Maryland repeatedly feature the same stylized face. Experts are divided on whether the face represents the head of a ______ a human, or a mythical figure.</p>",
        "question": "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        "choices": [
          "fish: a serpent",
          "fish. A serpent,",
          "fish a serpent,",
          "fish, a serpent,"
        ],
        "correctIndex": 3,
        "skill": "Conventions"
      },
      {
        "id": "rw-m1-15",
        "passage": "<p>A multifaceted constellation of environmental factors, including oceanic surface temperatures, tropospheric wind shear, and ambient atmospheric humidity, ______ the developmental trajectory and destructive potential of hurricanes before landfall.</p>",
        "question": "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        "choices": [
          "dictate",
          "dictates",
          "are dictating",
          "have dictated"
        ],
        "correctIndex": 1,
        "skill": "Conventions"
      },
      {
        "id": "rw-m1-16",
        "passage": "<p>In the tapestries <em>Blessing of Rain</em> and <em>Intended Vermillion</em>, Diné textile artist D.Y. Begay uses ______ and yellows extracted from cochineal insects from Peru as well as local hollyhocks, coreopsis, and chamisa plants gathered from her Tsélani homeland in Arizona.</p>",
        "question": "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        "choices": [
          "reds, greens,",
          "reds greens,",
          "reds greens",
          "reds; greens,"
        ],
        "correctIndex": 0,
        "skill": "Conventions"
      },
      {
        "id": "rw-m1-17",
        "passage": "<p>In their 2019 study of butterfly diversity at Rupa Lake in Nepal, researcher Bijaya Neupane and his colleagues counted one bluetail jester ______ to the Nymphalidae family, the bluetail jester (<em>Symbrenthia niphanda</em>) is known to be very rare.</p>",
        "question": "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        "choices": [
          "butterfly. Belonging",
          "butterfly belonging",
          "butterfly, belonging",
          "butterfly and belonging"
        ],
        "correctIndex": 0,
        "skill": "Conventions"
      },
      {
        "id": "rw-m1-18",
        "passage": "<p>Isotopic analysis of tooth enamel from the grave of the Amesbury Archer, a man buried near Stonehenge around 2300 BCE, has revealed striking evidence of long-distance travel in prehistoric Europe, the oxygen isotope ratios ______ that he spent his childhood in a colder region of central Europe, possibly near the Alps.</p>",
        "question": "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        "choices": [
          "suggest",
          "suggesting",
          "which suggest",
          "have suggested"
        ],
        "correctIndex": 1,
        "skill": "Conventions"
      },
      {
        "id": "rw-m1-19",
        "passage": "<p>Extensive radiocarbon dating of reed samples from Caral confirmed Ruth Shady Solis’s hypothesis about the Peruvian site’s ______ nearly 5,000 years ago, the ancient city preceded the Olmec civilization to the north by a full millennium, a revelation that fundamentally altered our understanding of urban development in the Western Hemisphere.</p>",
        "question": "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        "choices": [
          "age, built",
          "age: built",
          "age and built",
          "age built"
        ],
        "correctIndex": 1,
        "skill": "Conventions"
      },
      {
        "id": "rw-m1-20",
        "passage": "<p>Generally, sleek vehicles are more aerodynamic than bulkier ones. ______ the streamlined nose of the Airbus A350 XWB jet helps it glide through wind with relative ease, while a boxy pickup truck encounters more wind resistance, making it less aerodynamic.</p>",
        "question": "<p>Which choice completes the text with the most logical transition?</p>",
        "choices": [
          "additionally,",
          "however,",
          "for example,",
          "meanwhile,"
        ],
        "correctIndex": 2,
        "skill": "Transitions"
      },
      {
        "id": "rw-m1-21",
        "passage": "<p>As a massive ice sheet advances, its enormous weight presses the underlying crust downward, displacing some of the mantle rock beneath it. ______ the crust just beyond the ice sheet’s margins is pushed slightly upward, forming a broad ridge that geologists call a peripheral bulge.</p>",
        "question": "<p>Which choice completes the text with the most logical transition?</p>",
        "choices": [
          "Previously,",
          "Simultaneously,",
          "In summary,",
          "For example,"
        ],
        "correctIndex": 1,
        "skill": "Transitions"
      },
      {
        "id": "rw-m1-22",
        "passage": "<p>The Hornbostel-Sachs system classifies musical instruments by how they produce sound. For example, an instrument that is popular in India called the saraswati veena produces sound primarily through the vibration of its strings. ______ under the Hornbostel-Sachs system, the saraswati veena is a chordophone.</p>",
        "question": "<p>Which choice completes the text with the most logical transition?</p>",
        "choices": [
          "Furthermore,",
          "Thus,",
          "Similarly,",
          "Instead,"
        ],
        "correctIndex": 1,
        "skill": "Transitions"
      },
      {
        "id": "rw-m1-23",
        "passage": "<p>In a 1993 study by Vales and Peek, the researchers used microhistological fecal analysis to determine the ratio of three plant subtypes (graminoids, forbs, and browse) within the diets of North American ungulates. The researchers did not perform this analysis on all such ungulates, ______ they focused exclusively on elk in Wyoming.</p>",
        "question": "<p>Which choice completes the text with the most logical transition?</p>",
        "choices": [
          "in other words;",
          "regardless;",
          "for instance;",
          "however;"
        ],
        "correctIndex": 3,
        "skill": "Transitions"
      },
      {
        "id": "rw-m1-24",
        "passage": "<p>Researchers in France claim that leopards and brown bears are among the twenty most “charismatic” animals (defined as “attractive, fascinating, or appealing”). To create their top-twenty list, researchers used survey data from Western Europe. European attitudes toward leopards and brown bears might not be shared around the world, ______</p>",
        "question": "<p>Which choice completes the text with the most logical transition?</p>",
        "choices": [
          "in other words.",
          "for example.",
          "of course.",
          "in particular."
        ],
        "correctIndex": 2,
        "skill": "Transitions"
      },
      {
        "id": "rw-m1-25",
        "passage": "<p>Scientists studying forest restoration have discovered that trees depend on complex partnerships with microscopic organisms for survival. The researchers found that special fungi called endophytes live inside tree leaves and serve as a defense mechanism. ______ these endophytes help by fighting off diseases and boosting the tree’s immune system.</p>",
        "question": "<p>Which choice completes the text with the most logical transition?</p>",
        "choices": [
          "In conclusion,",
          "Nevertheless,",
          "Alternatively,",
          "Specifically,"
        ],
        "correctIndex": 3,
        "skill": "Transitions"
      },
      {
        "id": "rw-m1-26",
        "passage": "<p>While researching a topic, a student has taken the following notes:</p><p>Elizabeth Catlett (1915-2012) was a celebrated African American artist. She is best known for creating sculptures and prints that explore the Black experience. <em>Standing Mother and Child</em> is a 1980 sculpture by Catlett. <em>New Generation</em> is a 1992 print by Catlett.</p><p>The student wants to provide an example of one of Catlett’s sculptures.</p>",
        "question": "<p>Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>",
        "choices": [
          "The print <em>New Generation</em> was created by celebrated artist Elizabeth Catlett in 1992.",
          "The sculpture <em>Standing Mother and Child</em> was created by celebrated artist Elizabeth Catlett in 1980.",
          "Artist Elizabeth Catlett is best known for creating sculptures and prints that explore the Black experience.",
          "Elizabeth Catlett, a celebrated artist, was born in 1915."
        ],
        "correctIndex": 1,
        "skill": "Synthesis"
      },
      {
        "id": "rw-m1-27",
        "passage": "<p>Cinematographers work with cameras and lighting. They help translate film directors’ ideas into visual images. <em>Passengers</em> (2016) was directed by Morten Tyldum. Rodrigo Prieto was the film’s cinematographer.</p><p>The student wants to provide an example of a film Prieto worked on.</p>",
        "question": "<p>Which choice most effectively uses information from the given sentences to provide an example of a film Prieto worked on?</p>",
        "choices": [
          "One example of Rodrigo Prieto’s work as a cinematographer is the 2016 film <em>Passengers</em>.",
          "As cinematographer, Rodrigo Prieto works with cameras and lighting to translate the film director’s ideas into visual images.",
          "Cinematographer Rodrigo Prieto and director Morten Tyldum have worked together.",
          "In filmmaking, directors work with others to translate their ideas into the visual images that we encounter on the screen."
        ],
        "correctIndex": 0,
        "skill": "Synthesis"
      }
    ],
    "module2": [
      {
        "id": "rw-m2-01",
        "passage": "<p>In 1970, Maggie Kuhn had to retire from her job as a secretary because the organization she worked for had a mandatory retirement age of sixty-five. Kuhn noted that since her capabilities did not change when she turned sixty-five, such a policy was entirely ______. This observation prompted her to become an advocate for the rights of older people in the United States.</p>",
        "question": "<p>Which choice completes the text with the most logical and precise word or phrase?</p>",
        "choices": [
          "convoluted",
          "arbitrary",
          "inadvertent",
          "derivative"
        ],
        "correctIndex": 1,
        "skill": "Vocabulary"
      },
      {
        "id": "rw-m2-02",
        "passage": "<p>Marine ecologist Priya Natarajan and colleagues sterilized aquarium tanks ______ with communities of burrowing invertebrates collected from four estuaries along the Gulf of Maine, including sites dominated by mudflats and by salt marsh. The team then planted eelgrass seedlings in the tanks to determine whether the different invertebrate communities affected the seedlings’ root growth.</p>",
        "question": "<p>Which choice completes the text with the most logical and precise word or phrase?</p>",
        "choices": [
          "decontaminated",
          "calibrated",
          "stocked",
          "supplanted"
        ],
        "correctIndex": 2,
        "skill": "Vocabulary"
      },
      {
        "id": "rw-m2-03",
        "passage": "<p>Single-celled foraminifera inhabiting coastal waters experience significant environmental salinity changes during tidal cycles. How, then, do they ______ internal salt levels? Some organisms maintain high concentrations of phosphates that allow them to affect the concentration of internal electrolytes—including salt—in response to external changes. It may be that coastal foraminifera do the same.</p>",
        "question": "<p>Which choice completes the text with the most logical and precise word or phrase?</p>",
        "choices": [
          "counteract",
          "elude",
          "tolerate",
          "regulate"
        ],
        "correctIndex": 3,
        "skill": "Vocabulary"
      },
      {
        "id": "rw-m2-04",
        "passage": "<p>Sperm whales communicate using rapid sequences of sharp, broadband clicks called codas, which differ markedly from the long, low-frequency moans typical of baleen whales. Because these clicks can be readily ______ the calls of other whale species sharing the same waters, researchers using relatively simple underwater microphones have been able to monitor sperm whale groups even in areas where many whale species congregate.</p>",
        "question": "<p>Which choice completes the text with the most logical and precise word or phrase?</p>",
        "choices": [
          "discerned from",
          "masked by",
          "amplified by",
          "imitated by"
        ],
        "correctIndex": 0,
        "skill": "Vocabulary"
      },
      {
        "id": "rw-m2-05",
        "passage": "<p>Recent performances reconstructing the music of ancient Greece, such as those organized by classicist Armand D’Angour, are notable for the ______ of the scholarship behind them: the researchers consulted surviving fragments of musical notation, ancient treatises on rhythm and tuning, and replicas of excavated instruments such as the aulos to make the performances as historically accurate as possible.</p>",
        "question": "<p>Which choice completes the text with the most logical and precise word or phrase?</p>",
        "choices": [
          "perfunctoriness",
          "opacity",
          "idiosyncrasy",
          "exhaustiveness"
        ],
        "correctIndex": 3,
        "skill": "Vocabulary"
      },
      {
        "id": "rw-m2-06",
        "passage": "<p>Microwave heating, a thermal technology used to preserve food on an industrial scale, is generally considered to be an improvement over more conventional thermal preservation methods. Scientists in Latin America have contributed to a better understanding of this technology, with researchers from Brazil demonstrating its effectiveness in preserving mango peels. As research continues, scientists hope to make advancements in hybrid systems combining multiple food preservation technologies, which would be advantageous over using microwave heating alone, <u>given that it often heats food unevenly</u>.</p>",
        "question": "<p>Which choice best describes the function of the underlined portion in the text as a whole?</p>",
        "choices": [
          "It explains why conventional thermal processing methods are popular in commercial applications.",
          "It identifies a flaw of microwave heating technologies.",
          "It introduces microwave heating as a food processing technology.",
          "It suggests an advantage that microwave heating has over conventional thermal processing methods."
        ],
        "correctIndex": 1,
        "skill": "Purpose/Structure"
      },
      {
        "id": "rw-m2-07",
        "passage": "<p>With examples ranging from Dean’s Blue Hole in the Bahamas to Watling’s Blue Hole near San Salvador Island, blue holes are large underwater sinkholes: pits filled with dark blue water that contrasts with lighter blue shallower waters surrounding them. The formation of blue holes typically involves several natural processes, including the dissolution of limestone or other soluble rocks. Currently, the deepest blue hole on record is the Taam Ja’ Blue Hole in Chetumal Bay, Mexico, which is reported by Laura Carrillo and colleagues as extending at least 420 meters below sea level.</p>",
        "question": "<p>Which choice best describes the overall structure of the text?</p>",
        "choices": [
          "It describes the appearance of a particular type of sinkhole, compares the formations of two sinkholes of that type, and then names the researchers who discovered the deepest known sinkhole of that type.",
          "It compares a deep sinkhole to a shallower one, details the processes by which both sinkholes formed, and emphasizes the remarkable depth of the deeper sinkhole.",
          "It explains how a particular sinkhole formed, evaluates that sinkhole’s unusual appearance, and names a research team that is studying the sinkhole.",
          "It defines a kind of sinkhole, describes its typical appearance and formation, and provides information about the deepest known sinkhole."
        ],
        "correctIndex": 3,
        "skill": "Purpose/Structure"
      },
      {
        "id": "rw-m2-08",
        "passage": "<p>The following text is adapted from the 1940 novel <em>The Hamlet</em> by William Faulkner. In rural Mississippi, a man is riding a horse toward the residence of a man he intends to meet with about a business matter.</p><p>He was breathing hard but not because he had been galloping. On the contrary, since he had approached near enough to his destination to believe he could have seen smoke if there had been smoke, he had ridden slower and slower. Nevertheless he now sat the horse before the gap in the fence, breathing hard enough through his nose and even sweating a little, looking at the sagging broken-backed cabin set in its inevitable treeless and grassless plot and weathered to the color of an old bee-hive, with that expression of tense and rapid speculation of a man approaching a dud howitzer [artillery] shell.</p><p><small>©1967 by Estelle Faulkner and Jill Faulkner Summers</small></p>",
        "question": "<p>Which choice best states the main purpose of the text?</p>",
        "choices": [
          "To contrast the man’s desire to attend the meeting with his awareness of the risk involved in attending it",
          "To compare the upcoming meeting to a far more serious experience from earlier in the man’s life",
          "To depict the man’s insistence on meeting despite the inconvenience of traveling on horseback",
          "To portray the man’s anxiety about the meeting as reflected by his physical state and demeanor"
        ],
        "correctIndex": 3,
        "skill": "Purpose/Structure"
      },
      {
        "id": "rw-m2-09",
        "passage": "<p><strong>Text 1</strong></p><p>The novels of Henry James changed stylistically starting in 1902, becoming more demanding and featuring a much more measured pace than his earlier works. This places a burden on readers that they may not be prepared for: <u>James’s late novels are some of the best he wrote, but they are not for everyone.</u></p><p><strong>Text 2</strong></p><p>The films of Martin Scorsese released starting in 2016 have the same place in his filmography that the late novels of Henry James have in his bibliography. Both are works by proven masters—James had published <em>The American</em> (1877); Scorsese had directed <em>Mean Streets</em> (1973)—who began to make demanding works, such as James’s <em>The Wings of the Dove</em> (1902) and Scorsese’s <em>Silence</em> (2016), that ask more of their audiences than their earlier works do but give more in return.</p>",
        "question": "<p>Based on the texts, how would the author of Text 2 most likely respond to the underlined claim in Text 1?</p>",
        "choices": [
          "By arguing that James’s novels cannot be fully understood without also considering Scorsese’s films",
          "By conceding that James’s <em>The American</em> is a superior novel to <em>The Wings of the Dove</em>",
          "By asserting that both James and Scorsese ought to be considered masters of their chosen art forms",
          "By agreeing that James’s late novels are excellent but can be challenging for their readers"
        ],
        "correctIndex": 3,
        "skill": "Cross-text"
      },
      {
        "id": "rw-m2-10",
        "passage": "<p>Primarily encountered by modern readers as inert written texts, the vernacular riddles of early medieval England contain “implicit vestiges” of an interactive performance context, scholar Jill Frederick argues. Locative phrases (e.g., “here” and “now”) scattered throughout the riddles indicate the space shared by their speakers and audiences; the common refrain “say what I am called” invites a verbalized response; and the conflation of many of the riddles’ speakers with their solutions (typically animals, objects, or natural phenomena) suggests a form of dramatic impersonation perhaps meant to entertain during public gatherings.</p>",
        "question": "<p>Which choice best states the main idea of the text?</p>",
        "choices": [
          "It is reasonable to conclude based on textual evidence from the vernacular riddles of early medieval England that they were mainly performed at large public gatherings, though documentation of the locations in which they were performed is unlikely to exist.",
          "Linguistic evidence found within the vernacular riddles of early medieval England suggests that they may have been intended to be performed in communal settings, though this isn’t how they are generally experienced by readers today.",
          "People of early medieval England likely found that era’s vernacular riddles to be more amusing than modern readers do, given that there is substantial evidence to indicate that they are best experienced in the context of an interactive performance rather than exclusively as written texts.",
          "Scholars once assumed that the vernacular riddles of early medieval England were originally intended to be read silently, but newly uncovered historical documents corroborate Jill Frederick’s assertion that they may in fact have been intended primarily for oral performance."
        ],
        "correctIndex": 1,
        "skill": "Central ideas"
      },
      {
        "id": "rw-m2-11",
        "passage": "<p><em>Philoctetes</em> is a play by Sophocles that was first performed in 409 BCE. In the play, Odysseus and Neoptolemus must retrieve Philoctetes—a master archer who is believed necessary for the Greeks to win the Trojan War—from a cave on a deserted island where Odysseus and others had abandoned him with a debilitating injury earlier in the war. Odysseus suggests that the plan for returning with Philoctetes rests on Neoptolemus not having been part of the group that abandoned him:</p>",
        "question": "<p>Which quotation from <em>Philoctetes</em> most effectively illustrates the claim?</p>",
        "choices": [
          "“Since the prize of victory is so dear, / Endure it [acting deceitfully]—We’ll be just another day / But now, for one brief hour, devote thyself / To serve me without shame.”",
          "“No moment for this talk, / Lest he discern my coming, and I lose / The scheme, wherewith I think to catch him soon.”",
          "“Go near now silently, and make me know / If still he persevere, and hold this spot, / Or have roamed elsewhere, that informed of this / I may proceed with what remains to say, / And we may act in concert.”",
          "“Now let me show, why thine approach to him / Is safe and trustful as mine cannot be / Thou didst sail forth, not to redeem thine oath, / Nor by constraint, nor with the foremost band. / All which reproaches I must bear.”"
        ],
        "correctIndex": 3,
        "skill": "Evidence"
      },
      {
        "id": "rw-m2-12",
        "passage": "<p>Cover crops, such as teff, are planted by many farmers between main growing seasons. While these crops are known for increasing biodiversity, Axel Don and his coauthor argued in a 2015 study that cover crops’ role in supporting soil carbon sequestration deserves more attention. Cover crops remove carbon dioxide (CO<sub>2</sub>) from the air and convert it to organic compounds; some of these compounds are stored in the soil as soil organic carbon (SOC), which contributes to the buildup of SOC stocks over time. Based on data from numerous farm fields, Don and his coauthor concluded that cover crops contribute meaningfully to soil carbon sequestration and, if widely adopted, could help offset agricultural emissions of atmospheric CO<sub>2</sub> and other greenhouse gases.</p>",
        "question": "<p>Which finding, if true, would be most consistent with Don and his coauthor’s conclusion?</p>",
        "choices": [
          "Teff captures considerably more CO<sub>2</sub> in fields where it is the sole cover crop compared with fields where it is grown alongside other species of cover crops.",
          "Cover crops generally exhibit reduced carbon sequestration rates in fields exposed to high levels of greenhouse gas emissions compared with fields exposed to low levels of those emissions.",
          "SOC stocks vary more in fields where cover crops have been grown for decades compared with fields where cover crops have only recently been introduced.",
          "SOC stocks tend to be significantly lower in fields without cover crops compared with fields where cover crops have been grown for several years."
        ],
        "correctIndex": 3,
        "skill": "Evidence"
      },
      {
        "id": "rw-m2-13",
        "passage": "<p><strong>Average Annual Growth in Transit Ridership, Five Years Before and After Bus Fare Elimination</strong></p><table style=\"border-collapse:collapse;margin:0 0 16px;font-size:16px\"><tr><th style=\"border:1px solid #bbb;padding:6px 12px;text-align:left\">City</th><th style=\"border:1px solid #bbb;padding:6px 12px\">Before fare elimination (growth rate, %)</th><th style=\"border:1px solid #bbb;padding:6px 12px\">After fare elimination (growth rate, %)</th></tr><tr><td style=\"border:1px solid #bbb;padding:6px 12px\">Arlen</td><td style=\"border:1px solid #bbb;padding:6px 12px;text-align:center\">2.1</td><td style=\"border:1px solid #bbb;padding:6px 12px;text-align:center\">6.8</td></tr><tr><td style=\"border:1px solid #bbb;padding:6px 12px\">Brayton</td><td style=\"border:1px solid #bbb;padding:6px 12px;text-align:center\">−0.8</td><td style=\"border:1px solid #bbb;padding:6px 12px;text-align:center\">3.4</td></tr><tr><td style=\"border:1px solid #bbb;padding:6px 12px\">Corvale</td><td style=\"border:1px solid #bbb;padding:6px 12px;text-align:center\">7.5</td><td style=\"border:1px solid #bbb;padding:6px 12px;text-align:center\">4.2</td></tr><tr><td style=\"border:1px solid #bbb;padding:6px 12px\">Dunmore</td><td style=\"border:1px solid #bbb;padding:6px 12px;text-align:center\">1.6</td><td style=\"border:1px solid #bbb;padding:6px 12px;text-align:center\">1.9</td></tr></table><p>To determine whether eliminating fares affects public transit use, urban economist Rosa Delgado and colleagues calculated the average annual growth rate in transit ridership for several cities over the five years before and the five years after each city eliminated fares on its bus system. The table shows results for four of the cities in the study. Consulting the data, a student claims that eliminating bus fares increases the rate at which a city’s transit ridership grows.</p>",
        "question": "<p>Which choice best describes data from the graph that weaken the student’s claim?</p>",
        "choices": [
          "Ridership in Brayton declined over the five years before fares were eliminated but grew over the five years after.",
          "Ridership in Dunmore grew only slightly faster over the five years after fares were eliminated than over the five years before.",
          "Although ridership in Corvale grew over the five years after fares were eliminated, it had grown at an even higher rate over the five years before.",
          "All four cities had positive ridership growth over the five years after eliminating fares, though their growth rates differed considerably."
        ],
        "correctIndex": 2,
        "skill": "Evidence"
      },
      {
        "id": "rw-m2-14",
        "passage": "<p>Lakota painter Dyani White Hawk largely eschews the European tradition of figurative painting, with its proportionality of human form and depth between foreground and background; instead, she assembles compositions out of abstract motifs common in the beadwork and other traditional arts of her own tribe, thus ensuring cultural continuity. Maidu painter Judith Lowry, on the other hand, works in the European figurative mode; however, she draws her subject matter from cultural traditions that predate the European colonization of the lands of her own tribe, thereby ______</p>",
        "question": "<p>Which choice most logically completes the text?</p>",
        "choices": [
          "casting doubt on the feasibility of developing a new style of painting grounded in traditionally figurative art forms.",
          "implying her belief that both figurative and abstract art can portray the complexity of tribal identity.",
          "suggesting that even when practiced by Indigenous artists, abstract forms of art are ill-suited to portraying tribally specific content.",
          "transmitting her culture through particularities of content rather than through a tribally specific painting technique."
        ],
        "correctIndex": 3,
        "skill": "Inference"
      },
      {
        "id": "rw-m2-15",
        "passage": "<p>Louis-Ferdinand Céline’s 1932 novel <em>Journey to the End of the Night</em> is regularly described as autobiographical. That characterization is apt—there are many parallels between the experiences of the novel’s protagonist, Ferdinand Bardamu, and those of Céline—but it should not be taken to mean that every person or event depicted in <em>Journey to the End of the Night</em> has a real-life analogue. Much of the novel is pure invention, and readers who overlook this fact and instead focus excessively on correspondences between the novel and Céline’s life can thus ______</p>",
        "question": "<p>Which choice most logically completes the text?</p>",
        "choices": [
          "fail to appreciate how much creativity Céline shows in the book.",
          "overemphasize the extent to which Céline took inspiration from earlier writers.",
          "refuse to acknowledge that Céline drew on real-world material when writing <em>Journey to the End of the Night</em>.",
          "misrepresent <em>Journey to the End of the Night</em> as being more widely read than it actually is."
        ],
        "correctIndex": 0,
        "skill": "Inference"
      },
      {
        "id": "rw-m2-16",
        "passage": "<p>Last-mile delivery, the final stage in the delivery of products to customers, is subject to increasing pressure as consumers place greater emphasis on convenience and immediacy, often expecting next-day delivery. In response to this challenge and others, such as the increasing volume of parcels to be delivered, delivery companies are continually looking for ways to make last-mile delivery more efficient. One advance in last-mile delivery is the use of self-service lockers (containers where consumers can pick up their parcels using a unique code). This approach, while promising, also introduces new obstacles (e.g., convenient placement of self-service lockers is challenging). It is therefore likely that ______</p>",
        "question": "<p>Which choice most logically completes the text?</p>",
        "choices": [
          "delivery companies will need to keep experimenting with new ideas for last-mile delivery if they hope to keep pace with consumers’ expectations.",
          "delivery companies will continue promising next-day delivery out of a desire to meet consumers’ expectations.",
          "advances in last-mile technologies will slow as delivery companies focus more on meeting customer expectations for increased convenience.",
          "innovations in the use of self-service lockers for last-mile delivery will stall unless delivery companies shift their focus to methods with fewer complications."
        ],
        "correctIndex": 0,
        "skill": "Inference"
      },
      {
        "id": "rw-m2-17",
        "passage": "<p>Rare species advantage (RSA) describes the situation in which there are few conspecifics (other members of the same species) in an organism’s immediate surroundings, enabling the organism to avoid competition with conspecifics for the same resources; RSA is widely believed to play a crucial role in maintaining ecological stability. Among tree species in the Barro Colorado Island plot (latitude 9.15° N) and other tropical forest sites, there is little correlation between conspecific aggregation and the abundance of a given species in the wider local area, so RSA is expected, but in the Fenglin Nature Reserve (latitude 48.08° N) and other temperate forest sites, the aggregation-abundance correlation for tree species is strongly negative. Mathematical modeling suggests, however, that ecological niche distinction may mitigate the apparent risk to temperate ecological stability engendered by this pattern: ______</p>",
        "question": "<p>Which choice most logically completes the text?</p>",
        "choices": [
          "as a tree species in temperate forests becomes more abundant, individuals of that species are more likely to be found near conspecifics, enabling abundant species to exploit localized resources to a greater extent than rare species can.",
          "even though rare tree species in temperate forests tend to cluster with conspecifics more than rare tree species in tropical forests do, they are sufficiently rare locally that they benefit from RSA more than rare tropical species do.",
          "although rare tree species in temperate forests encounter relatively high local competition from conspecifics, they can thrive by exploiting resources that are underexploited by other local species.",
          "while an increase in abundance in one tree species often leads to a reduction in abundance of nearby species, temperate tree species tend to play different roles in the same ecosystem, reducing the expected effect of abundance on aggregation."
        ],
        "correctIndex": 2,
        "skill": "Inference"
      },
      {
        "id": "rw-m2-18",
        "passage": "<p>During a recent investigation, archaeologists ______ an explanation for the consistent and seemingly deliberate placement of petroglyphs (rock carvings) near water analyzed several sites on Caribbean islands. They discovered that many of the pools near petroglyphs had consistent water levels year-round, creating perfect reflecting surfaces for the carved symbols on the rocks.</p>",
        "question": "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        "choices": [
          "had sought",
          "sought",
          "seeking",
          "were seeking"
        ],
        "correctIndex": 2,
        "skill": "Conventions"
      },
      {
        "id": "rw-m2-19",
        "passage": "<p>Theoretical physicists have begun to develop novel methods for detecting dark matter. Certain approaches ______ on quantum collective phenomena, like phonons in crystals or excitations in superfluid helium, are likely to face significant challenges, acknowledges physicist Kathryn Zurek, unless researchers can reduce background processes that might mimic the signals they’re attempting to detect.</p>",
        "question": "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        "choices": [
          "focusing",
          "focus",
          "have focused",
          "are focused"
        ],
        "correctIndex": 0,
        "skill": "Conventions"
      },
      {
        "id": "rw-m2-20",
        "passage": "<p>As one of aviation’s earliest female stunt performers, Gladys Ingle developed a versatile repertoire of acrobatic feats. Her specialized skills included standing on the wing of a flying aircraft and shooting a bow and arrow at a ______ perfect balance during aerial maneuvers, such as vertical loops; and even walking across the wing as an aircraft flew at full speed beneath a bridge.</p>",
        "question": "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        "choices": [
          "target; maintaining",
          "target maintaining",
          "target. Maintaining",
          "target, maintaining"
        ],
        "correctIndex": 0,
        "skill": "Conventions"
      },
      {
        "id": "rw-m2-21",
        "passage": "<p>For his mash-up “Smells Like Rockin’ Robin,” DJ Mark Vidler layered Kurt Cobain’s minor-key vocals from “Smells Like Teen Spirit” over the Jackson 5’s major-key blues progression from “Rockin’ ______ by inserting the grunge singer’s vocal melody as pitch-shifted “blue notes” within the pop-soul group’s harmonic framework, creates an intensified “bluesy” effect and subverts the expectations of listeners familiar with either musical source.</p>",
        "question": "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        "choices": [
          "Robin,” a technique that",
          "Robin.” A technique that",
          "Robin”; a technique that,",
          "Robin”—a technique that,"
        ],
        "correctIndex": 3,
        "skill": "Conventions"
      },
      {
        "id": "rw-m2-22",
        "passage": "<p>For her 2019 installation <em>Tidelines</em>, Portuguese artist Marta Lobo gathered 1,200 sentences describing the sea from Herman Melville’s novel ______ fragile paper boats and setting them afloat on the Tagus River, she drew a connection between the novel’s restless ocean imagery and the river’s centuries-old role as Lisbon’s gateway to the Atlantic.</p>",
        "question": "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        "choices": [
          "<em>Moby-Dick</em>, printing each sentence on a strip of rice paper. That she folded into",
          "<em>Moby-Dick</em> by printing each sentence on a strip of rice paper that she folded into",
          "<em>Moby-Dick</em>, printing each sentence on a strip of rice paper that she folded into",
          "<em>Moby-Dick</em>. Printing each sentence on a strip of rice paper that she folded into"
        ],
        "correctIndex": 3,
        "skill": "Conventions"
      },
      {
        "id": "rw-m2-23",
        "passage": "<p>Dmitri Mendeleev’s periodic table arranged the known chemical elements by atomic weight and grouped them by recurring properties, leaving gaps for elements that had yet to be discovered. The table was first published in ______ its publication, chemists had no reliable system for predicting the properties of elements that had not yet been isolated.</p>",
        "question": "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        "choices": [
          "1869, transforming the study of chemistry, before",
          "1869. Transforming the study of chemistry before",
          "1869, transforming the study of chemistry. Before",
          "1869, transforming the study of chemistry before"
        ],
        "correctIndex": 2,
        "skill": "Conventions"
      },
      {
        "id": "rw-m2-24",
        "passage": "<p>Some fungi can break down petroleum pollutants in contaminated soil, a process known as mycoremediation. The oyster mushroom <em>Pleurotus ostreatus</em>, for example, secretes enzymes that degrade hydrocarbons into simpler, less harmful compounds. ______ the fungus grows slowly in cold soils and may take years to clean sites with heavy contamination.</p>",
        "question": "<p>Which choice completes the text with the most logical transition?</p>",
        "choices": [
          "For this reason, the fungus is the preferred choice for cleanups in cold climates;",
          "In fact, the fungus works most quickly at heavily contaminated sites;",
          "Similarly, certain bacteria can also break down petroleum hydrocarbons;",
          "That said, the fungus may not be practical for every cleanup project;"
        ],
        "correctIndex": 3,
        "skill": "Transitions"
      },
      {
        "id": "rw-m2-25",
        "passage": "<p>While researching a topic, a student has taken the following notes:</p><ul><li>NASA mission STS-134 took place from May 16, 2011, to June 1, 2011.</li><li>Astronauts Andrew Feustel and Michael Fincke were crew members of STS-134.</li><li>May 22, 2011: Feustel and Fincke performed an extravehicular activity (EVA) to refill space station radiators with ammonia.</li><li>An EVA (also known as a spacewalk) is an activity done by astronauts outside the spacecraft.</li><li>The duration of their EVA was 8 hours and 7 minutes.</li><li>Theirs is counted among the longest completed spacewalks to date.</li></ul><p>The student wants to emphasize the duration of Feustel and Fincke’s EVA.</p>",
        "question": "<p>Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>",
        "choices": [
          "During their time as crew members of STS-134, Feustel and Fincke completed an EVA.",
          "Lasting 8 hours and 7 minutes, Feustel and Fincke’s EVA is one of the longest spacewalks completed to date.",
          "Feustel and Fincke completed an EVA, also known as a spacewalk, in which they left the spacecraft to refill space station radiators with ammonia.",
          "The EVA completed by STS-134 crewmembers Feustel and Fincke took place from May 16, 2011, to June 1, 2011."
        ],
        "correctIndex": 1,
        "skill": "Synthesis"
      },
      {
        "id": "rw-m2-26",
        "passage": "<p>While researching a topic, a student has taken the following notes:</p><ul><li><em>Waiting</em> is a 1987 black-and-white linocut print by Kuwaiti artist Thuraya Al-Baqsami. It depicts a tranquil, everyday scene (a woman in a headscarf looking out a window). <em>¡Será toda nuestra!</em> (“It will all be ours!”) is a 1977 color linocut print by Mexican American artist Carlos Cortéz. It features a scene with an explicitly political point of view (a group of laborers preparing to go on strike). Relief printing is a technique in which an image is carved onto a printing block, covered in ink or paint, and stamped onto paper.</li><li>Linocut is a type of relief printing that uses linoleum tile as the printing block.</li></ul><p>The student wants to contrast the subject matter of the two prints.</p>",
        "question": "<p>Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>",
        "choices": [
          "Cortéz made <em>¡Será toda nuestra!</em> (“It will all be ours!”) in 1977, while Al-Baqsami made <em>Waiting</em> later, in 1987.",
          "The scenes depicted in both works were first carved onto a printing block, then stamped onto paper; however, one work is a linocut, while the other is a relief print.",
          "Cortéz’s print expresses an explicitly political point of view, while Al-Baqsami’s depicts a tranquil, everyday scene.",
          "The print by Cortéz is a color linocut; by contrast, Al-Baqsami’s is a relief print."
        ],
        "correctIndex": 2,
        "skill": "Synthesis"
      },
      {
        "id": "rw-m2-27",
        "passage": "<p>While researching a topic, a student has taken the following notes:</p><ul><li>Enhanced rock weathering (ERW) is a method of spreading crushed basalt on farmland to capture carbon dioxide (CO<sub>2</sub>) and improve soil health.</li><li>ERW increases crop yields and removes harmful CO<sub>2</sub> from the air.</li><li>ERW offers a low-cost, low-tech alternative to expensive, energy-intensive carbon capture methods.</li><li>The CO<sub>2</sub> captured by ERW becomes stable bicarbonate in soil water, which eventually streams into the ocean to remain safely stored for hundreds of years.</li><li>ERW can improve rural economies by reducing farmers’ need for fertilizers and increasing their earnings from carbon credits.</li></ul><p>The student wants to explain why ERW is a superior method for capturing CO<sub>2</sub>.</p>",
        "question": "<p>Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>",
        "choices": [
          "ERW improves soil health and helps farmers increase their income from selling carbon credits.",
          "ERW is a method of spreading crushed basalt on farmland to capture CO<sub>2</sub>, improving rural economies.",
          "ERW removes CO<sub>2</sub> from the air in a way that is both low-cost and low-tech.",
          "The CO<sub>2</sub> captured by ERW becomes stable bicarbonate, which improves soil health by remaining in the ocean for hundreds of years."
        ],
        "correctIndex": 2,
        "skill": "Synthesis"
      }
    ]
  },
  "math": {
    "module1": [
      {
        "id": "math-m1-01",
        "question": "<p>x + y = 92</p><p>The given equation relates the total number of marble queen pothos stems, <em>x</em>, and the total number of snow queen pothos stems, <em>y</em>, a plant nursery propagates to create pothos plants. If 32 snow queen pothos stems are propagated, how many marble queen pothos stems are propagated?</p>",
        "type": "mcq",
        "choices": [
          "92",
          "60",
          "32",
          "28"
        ],
        "correctIndex": 1,
        "skill": "Algebra"
      },
      {
        "id": "math-m1-02",
        "question": "<p>A shipment consists of 5-pound boxes and 10-pound boxes with a total weight of 330 pounds. There are 15 10-pound boxes in the shipment. How many 5-pound boxes are in the shipment?</p>",
        "type": "mcq",
        "choices": [
          "5",
          "10",
          "15",
          "36"
        ],
        "correctIndex": 3,
        "skill": "Algebra"
      },
      {
        "id": "math-m1-03",
        "question": "<p>y = −<span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">1</span><span style=\"display:block;padding:0 3px\">11</span></span>x<br>y = <span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">1</span><span style=\"display:block;padding:0 3px\">4</span></span>x</p><p>The solution to the given system of equations is (<em>x</em>, <em>y</em>). What is the value of <em>x</em>?</p>",
        "type": "mcq",
        "choices": [
          "−11",
          "−7",
          "0",
          "4"
        ],
        "correctIndex": 2,
        "skill": "Algebra"
      },
      {
        "id": "math-m1-04",
        "question": "<p>A model estimates that a glacier moves between 17 and 24 centimeters per day. Which inequality represents possible values of <em>x</em>, where <em>x</em> is the total distance, in centimeters, the glacier moves in 2 days?</p>",
        "type": "mcq",
        "choices": [
          "0 ≤ x ≤ 2",
          "(17)(0.5) ≤ x ≤ (24)(0.5)",
          "17 ≤ x ≤ 24",
          "(17)(2) ≤ x ≤ (24)(2)"
        ],
        "correctIndex": 3,
        "skill": "Algebra"
      },
      {
        "id": "math-m1-05",
        "question": "<p>y ≥ x + 15<br>y ≤ −5x − 15</p><p>Which point (<em>x</em>, <em>y</em>) is a solution to the given system of inequalities in the <em>xy</em>-plane?</p>",
        "type": "mcq",
        "choices": [
          "(−6, 13)",
          "(−6, 8)",
          "(−4, 13)",
          "(−4, 8)"
        ],
        "correctIndex": 0,
        "skill": "Algebra"
      },
      {
        "id": "math-m1-06",
        "question": "<p>An organization sells tickets to a fundraiser for $50 per person. The organization’s expenses are $600 for a rental space and $18 per person for food. The organization’s goal is to earn at least $1,500 after paying all expenses. What is the minimum number of tickets that must be sold to meet this goal?</p>",
        "type": "mcq",
        "choices": [
          "30",
          "42",
          "47",
          "66"
        ],
        "correctIndex": 3,
        "skill": "Algebra"
      },
      {
        "id": "math-m1-07",
        "question": "<p>For the positive values <em>j</em> and <em>k</em>, the ratio of <em>j</em> to <em>k</em> is 9 to 5. If <em>j</em> is increased by 36, by how much must <em>k</em> be increased so that the ratio of the new values of <em>j</em> to <em>k</em> is still 9 to 5?</p>",
        "type": "grid",
        "acceptableAnswers": [
          "20"
        ],
        "skill": "Algebra"
      },
      {
        "id": "math-m1-08",
        "question": "<p>Which expression is equivalent to 32x<sup>2</sup> + 32?</p>",
        "type": "mcq",
        "choices": [
          "32(x<sup>2</sup> + 1)",
          "32(x<sup>2</sup> + 32)",
          "32(32x<sup>2</sup> + 1)",
          "32(x<sup>2</sup> + <span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">1</span><span style=\"display:block;padding:0 3px\">32</span></span>)"
        ],
        "correctIndex": 0,
        "skill": "Advanced Math"
      },
      {
        "id": "math-m1-09",
        "question": "<p>What is the <em>y</em>-intercept of the graph of <em>y</em> = <span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">2</span><span style=\"display:block;padding:0 3px\">17<sup><em>x</em>+1</sup></span></span> in the <em>xy</em>-plane?</p>",
        "type": "mcq",
        "choices": [
          "(2, 17)",
          "(0, 17)",
          "(0, 2)",
          "(0, <span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">2</span><span style=\"display:block;padding:0 3px\">17</span></span>)"
        ],
        "correctIndex": 3,
        "skill": "Advanced Math"
      },
      {
        "id": "math-m1-10",
        "question": "<p>y = 3,100(<em>a</em>)<sup><em>x</em></sup></p><p>The given equation, where <em>a</em> is a positive constant, gives the predicted number of bacteria, <em>y</em>, in a growth medium <em>x</em> hours after the number of bacteria was initially measured. According to the equation, what was the predicted number of bacteria initially measured in the growth medium?</p>",
        "type": "grid",
        "acceptableAnswers": [
          "3100",
          "3,100"
        ],
        "skill": "Advanced Math"
      },
      {
        "id": "math-m1-11",
        "question": "<p>x<sup>2</sup> = −9</p><p>How many distinct real solutions does the given equation have?</p>",
        "type": "mcq",
        "choices": [
          "Exactly one",
          "Exactly two",
          "Infinitely many",
          "Zero"
        ],
        "correctIndex": 3,
        "skill": "Advanced Math"
      },
      {
        "id": "math-m1-12",
        "question": "<p>The system of two equations, y = <span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">22</span><span style=\"display:block;padding:0 3px\">x</span></span> and y = 22x, is graphed in the <em>xy</em>-plane. Which ordered pair is a solution to this system?</p>",
        "type": "mcq",
        "choices": [
          "(0, 0)",
          "(0, 22)",
          "(1, 22)",
          "(22, 22)"
        ],
        "correctIndex": 2,
        "skill": "Advanced Math"
      },
      {
        "id": "math-m1-13",
        "question": "<p>4|<em>x</em> + 3| − 2 = 22</p><p>What is the sum of the solutions to the given equation?</p>",
        "type": "grid",
        "acceptableAnswers": [
          "-6"
        ],
        "skill": "Advanced Math"
      },
      {
        "id": "math-m1-14",
        "question": "<p>The function <em>h</em> is defined by <em>h</em>(<em>x</em>) = |<em>x</em> − 8| − |6 − <em>x</em>| + <em>a</em>, where <em>a</em> is a constant, and <em>h</em>(−4) = 1. What is the value of <em>a</em>?</p>",
        "type": "grid",
        "acceptableAnswers": [
          "-1"
        ],
        "skill": "Advanced Math"
      },
      {
        "id": "math-m1-15",
        "question": "<p>y = x − 1<br>y = 27(x − 1)<sup>2</sup> − 28</p><p>A solution to the given system of equations is (<em>x</em>, <em>y</em>). What is one possible value of <em>x</em> − 1?</p>",
        "type": "mcq",
        "choices": [
          "−2",
          "−<span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">28</span><span style=\"display:block;padding:0 3px\">27</span></span>",
          "−1",
          "−<span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">1</span><span style=\"display:block;padding:0 3px\">27</span></span>"
        ],
        "correctIndex": 2,
        "skill": "Advanced Math"
      },
      {
        "id": "math-m1-16",
        "question": "<img src=\"img/math-m1-16.jpg\" alt=\"Histogram of the heights of 25 people, 51 to 61 inches\" style=\"max-width:100%;height:auto;margin:8px 0\" onerror=\"this.outerHTML='<p><em>[Figure missing &mdash; add img/math-m1-16.png]</em></p>'\"><p>For a project, Kayla recorded the heights of 25 people in her neighborhood. The histogram summarizes the heights, in inches (in), of these 25 people in Kayla’s neighborhood. The first bar represents people with a height of at least 51 in but less than 53 in. The second bar represents people with a height of at least 53 in but less than 55 in, and so on.</p><p>How many of these 25 people in Kayla’s neighborhood had a height of at least 51 in but less than 55 in?</p>",
        "type": "grid",
        "acceptableAnswers": [
          "10"
        ],
        "skill": "Data Analysis"
      },
      {
        "id": "math-m1-17",
        "question": "<p>A commercial water pump drains water from a reservoir at a constant rate of 180 gallons per minute. At this rate, how many hours will it take to drain 32,400 gallons of water?</p>",
        "type": "mcq",
        "choices": [
          "2.5",
          "3.0",
          "3.5",
          "4.0"
        ],
        "correctIndex": 1,
        "skill": "Data Analysis"
      },
      {
        "id": "math-m1-18",
        "question": "<img src=\"img/math-m1-18.jpg\" alt=\"Graph of the estimated value in dollars of a mountain bike versus months after purchase\" style=\"max-width:100%;height:auto;margin:8px 0\" onerror=\"this.outerHTML='<p><em>[Figure missing &mdash; add img/math-m1-18.png]</em></p>'\"><p>The graph shown gives the estimated value, in dollars, of a mountain bike as a function of the number of months since it was purchased. What is the best interpretation of the <em>y</em>-intercept of the graph in this context?</p>",
        "type": "mcq",
        "choices": [
          "The estimated value of the bike was $275 when it was purchased.",
          "The estimated value of the bike 24 months after it was purchased was $275.",
          "The estimated value of the bike had decreased by $275 in the 24 months after it was purchased.",
          "The estimated value of the bike decreased by approximately 2.75% each year after it was purchased."
        ],
        "correctIndex": 0,
        "skill": "Data Analysis"
      },
      {
        "id": "math-m1-19",
        "question": "<p>At a hotel, guests used the pool for a total of <em>t</em> hours in March. At the same hotel, guests used the pool for 3.41<em>t</em> hours in April. What is the percent increase in the number of hours guests used the pool from March to April?</p>",
        "type": "mcq",
        "choices": [
          "2.41%",
          "3.41%",
          "241%",
          "341%"
        ],
        "correctIndex": 2,
        "skill": "Data Analysis"
      },
      {
        "id": "math-m1-20",
        "question": "<p>Triangle <em>ABC</em> is dilated by a scale factor of 3 to form triangle <em>A′B′C′</em>. If the length of <em>AB</em> is 21, what is the length of <em>A′B′</em>?</p>",
        "type": "mcq",
        "choices": [
          "3",
          "7",
          "24",
          "63"
        ],
        "correctIndex": 3,
        "skill": "Geometry & Trig"
      },
      {
        "id": "math-m1-21",
        "question": "<p>In triangle <em>ABC</em>, the measure of angle <em>A</em> is 36° and the measure of angle <em>B</em> is 90°. What is the measure, in degrees, of angle <em>C</em>?</p>",
        "type": "mcq",
        "choices": [
          "36",
          "54",
          "90",
          "180"
        ],
        "correctIndex": 1,
        "skill": "Geometry & Trig"
      },
      {
        "id": "math-m1-22",
        "question": "<p>A circle in the <em>xy</em>-plane has equation (<em>x</em> − 4)<sup>2</sup> + (<em>y</em> + 1)<sup>2</sup> = 49. What is the radius of the circle?</p>",
        "type": "mcq",
        "choices": [
          "7",
          "14",
          "24.5",
          "49"
        ],
        "correctIndex": 0,
        "skill": "Geometry & Trig"
      }
    ],
    "module2": [
      {
        "id": "math-m2-01",
        "question": "<p>A store sells two different-sized bottles of a certain shampoo. The store’s sales of this shampoo totaled 910.53 dollars last month. The equation 4.59<em>x</em> + 6.09<em>y</em> = 910.53 represents this situation, where <em>x</em> is the number of smaller bottles sold and <em>y</em> is the number of larger bottles sold. According to the equation, what is the price, in dollars, of each smaller bottle?</p>",
        "type": "grid",
        "acceptableAnswers": [
          "4.59"
        ],
        "skill": "Algebra"
      },
      {
        "id": "math-m2-02",
        "question": "<p><table style=\"border-collapse:collapse;margin-bottom:10px\"><tr><th style=\"border:1px solid #bbb;padding:4px 16px\"><em>x</em></th><th style=\"border:1px solid #bbb;padding:4px 16px\"><em>f</em>(<em>x</em>)</th></tr><tr><td style=\"border:1px solid #bbb;padding:4px 16px;text-align:center\">0</td><td style=\"border:1px solid #bbb;padding:4px 16px;text-align:center\">7</td></tr><tr><td style=\"border:1px solid #bbb;padding:4px 16px;text-align:center\">1</td><td style=\"border:1px solid #bbb;padding:4px 16px;text-align:center\">13</td></tr><tr><td style=\"border:1px solid #bbb;padding:4px 16px;text-align:center\">2</td><td style=\"border:1px solid #bbb;padding:4px 16px;text-align:center\">19</td></tr></table></p><p>For a linear function <em>f</em>, the table shows three values of <em>x</em> and their corresponding values of <em>f</em>(<em>x</em>). Which of the following could define <em>f</em>?</p>",
        "type": "mcq",
        "choices": [
          "f(x) = 7x + 6",
          "f(x) = 6x + 7",
          "f(x) = x + 7",
          "f(x) = 6x"
        ],
        "correctIndex": 1,
        "skill": "Algebra"
      },
      {
        "id": "math-m2-03",
        "question": "<p><table style=\"border-collapse:collapse;margin-bottom:10px\"><tr><th style=\"border:1px solid #bbb;padding:4px 16px\">Area (square feet)</th><th style=\"border:1px solid #bbb;padding:4px 16px\">Water (gallons)</th></tr><tr><td style=\"border:1px solid #bbb;padding:4px 16px;text-align:center\">1,040</td><td style=\"border:1px solid #bbb;padding:4px 16px;text-align:center\">2,496</td></tr><tr><td style=\"border:1px solid #bbb;padding:4px 16px;text-align:center\">1,560</td><td style=\"border:1px solid #bbb;padding:4px 16px;text-align:center\">3,744</td></tr><tr><td style=\"border:1px solid #bbb;padding:4px 16px;text-align:center\">2,080</td><td style=\"border:1px solid #bbb;padding:4px 16px;text-align:center\">4,992</td></tr></table></p><p>The roofs on the buildings of a public garden are designed to allow water to drain into the garden. The table shows the relationship between the area <em>x</em>, in square feet, of a roof and the amount of water <em>f</em>(<em>x</em>), in gallons, drained from the roof into the garden over a certain period of time. Which equation could define <em>f</em>?</p>",
        "type": "mcq",
        "choices": [
          "f(x) = 0.6x",
          "f(x) = 2.4x",
          "f(x) = 1,248.0x",
          "f(x) = 2,496.0x"
        ],
        "correctIndex": 1,
        "skill": "Algebra"
      },
      {
        "id": "math-m2-04",
        "question": "<p>13<em>x</em> + 325 = <em>a</em>(<em>x</em> + 25)</p><p>In the given equation, <em>a</em> is a constant. If the equation has infinitely many solutions, what is the value of <em>a</em>?</p>",
        "type": "grid",
        "acceptableAnswers": [
          "13"
        ],
        "skill": "Algebra"
      },
      {
        "id": "math-m2-05",
        "question": "<p>Line <em>p</em> is defined by 2<em>y</em> + 18<em>x</em> = 11. Line <em>r</em> is perpendicular to line <em>p</em> in the <em>xy</em>-plane. What is the slope of line <em>r</em>?</p>",
        "type": "mcq",
        "choices": [
          "9",
          "<span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">1</span><span style=\"display:block;padding:0 3px\">9</span></span>",
          "−<span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">1</span><span style=\"display:block;padding:0 3px\">9</span></span>",
          "−9"
        ],
        "correctIndex": 1,
        "skill": "Algebra"
      },
      {
        "id": "math-m2-06",
        "question": "<img src=\"img/math-m2-06.jpg\" alt=\"Coordinate plane with a shaded region above a line\" style=\"max-width:100%;height:auto;margin:8px 0\" onerror=\"this.outerHTML='<p><em>[Figure missing &mdash; add img/math-m2-06.png]</em></p>'\"><p>The shaded region shown represents the solutions to which inequality?</p>",
        "type": "mcq",
        "choices": [
          "y &lt; 3x + 4",
          "y &lt; 3x − 4",
          "y &gt; 3x + 4",
          "y &gt; 3x − 4"
        ],
        "correctIndex": 2,
        "skill": "Algebra"
      },
      {
        "id": "math-m2-07",
        "question": "<p>Line <em>h</em> is defined by <span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">1</span><span style=\"display:block;padding:0 3px\">3</span></span><em>x</em> + <span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">1</span><span style=\"display:block;padding:0 3px\">2</span></span><em>y</em> − 30 = 0. Line <em>j</em> is perpendicular to line <em>h</em> in the <em>xy</em>-plane. What is the slope of line <em>j</em>?</p>",
        "type": "mcq",
        "choices": [
          "−<span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">2</span><span style=\"display:block;padding:0 3px\">3</span></span>",
          "−<span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">3</span><span style=\"display:block;padding:0 3px\">2</span></span>",
          "<span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">2</span><span style=\"display:block;padding:0 3px\">3</span></span>",
          "<span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">3</span><span style=\"display:block;padding:0 3px\">2</span></span>"
        ],
        "correctIndex": 3,
        "skill": "Algebra"
      },
      {
        "id": "math-m2-08",
        "question": "<p>Line <em>k</em> is defined by 4<em>x</em> − 6<em>y</em> = 17. Line <em>j</em> is perpendicular to line <em>k</em> in the <em>xy</em>-plane. What is the slope of line <em>j</em>?</p>",
        "type": "mcq",
        "choices": [
          "<span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">2</span><span style=\"display:block;padding:0 3px\">3</span></span>",
          "<span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">3</span><span style=\"display:block;padding:0 3px\">2</span></span>",
          "−<span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">3</span><span style=\"display:block;padding:0 3px\">2</span></span>",
          "−<span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">2</span><span style=\"display:block;padding:0 3px\">3</span></span>"
        ],
        "correctIndex": 2,
        "skill": "Algebra"
      },
      {
        "id": "math-m2-09",
        "question": "<p>18<em>x</em> + 6<em>y</em> = 8<em>y</em> + 9<br><em>ty</em> = <span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">1</span><span style=\"display:block;padding:0 3px\">5</span></span> + 9<em>x</em></p><p>In the given system of equations, <em>t</em> is a constant. If the system has no solution, what is the value of <em>t</em>?</p>",
        "type": "grid",
        "acceptableAnswers": [
          "1"
        ],
        "skill": "Algebra"
      },
      {
        "id": "math-m2-10",
        "question": "<p>The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = <em>x</em><sup>2</sup> + <em>x</em> + 53. What is the value of <em>f</em>(2)?</p>",
        "type": "grid",
        "acceptableAnswers": [
          "59"
        ],
        "skill": "Advanced Math"
      },
      {
        "id": "math-m2-11",
        "question": "<p>An exponential function <em>f</em> is defined by <em>f</em>(<em>x</em>) = <em>k</em>(2)<sup><em>x</em></sup>, where <em>k</em> is a positive constant. If <em>f</em>(−1) = 8 and <em>f</em>(2) = 64, what is the value of <em>k</em>?</p>",
        "type": "mcq",
        "choices": [
          "8",
          "9",
          "15",
          "16"
        ],
        "correctIndex": 3,
        "skill": "Advanced Math"
      },
      {
        "id": "math-m2-12",
        "question": "<p>The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = −2(<em>x</em> − 3)<sup>2</sup> + 8. What is the maximum value of <em>f</em>(<em>x</em>)?</p>",
        "type": "mcq",
        "choices": [
          "−2",
          "3",
          "6",
          "8"
        ],
        "correctIndex": 3,
        "skill": "Advanced Math"
      },
      {
        "id": "math-m2-13",
        "question": "<p>What is the <em>y</em>-coordinate of the <em>y</em>-intercept of the graph of <em>y</em> = 5(3)<sup><em>x</em>+2</sup> in the <em>xy</em>-plane?</p>",
        "type": "mcq",
        "choices": [
          "5",
          "15",
          "45",
          "135"
        ],
        "correctIndex": 2,
        "skill": "Advanced Math"
      },
      {
        "id": "math-m2-14",
        "question": "<p>The graph of the polynomial function <em>f</em> in the <em>xy</em>-plane, where <em>y</em> = <em>f</em>(<em>x</em>), passes through the point (6, −5). The function <em>g</em> is defined by <em>g</em>(<em>x</em>) = <em>f</em>(<em>x</em> − 2) + 4. Which of the following points must lie on the graph of <em>y</em> = <em>g</em>(<em>x</em>)?</p>",
        "type": "mcq",
        "choices": [
          "(8, −1)",
          "(4, −1)",
          "(8, −9)",
          "(4, −9)"
        ],
        "correctIndex": 0,
        "skill": "Advanced Math"
      },
      {
        "id": "math-m2-15",
        "question": "<p>What is the <em>x</em>-intercept of the graph of <em>y</em> = <span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">21 − <em>x</em></span><span style=\"display:block;padding:0 3px\"><em>ax</em> + <em>b</em></span></span> in the <em>xy</em>-plane, where <em>a</em> and <em>b</em> are positive constants?</p>",
        "type": "mcq",
        "choices": [
          "(21, 0)",
          "(0, −21)",
          "(0, <span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">21</span><span style=\"display:block;padding:0 3px\">b</span></span>)",
          "(−<span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">b</span><span style=\"display:block;padding:0 3px\">a</span></span>, 0)"
        ],
        "correctIndex": 0,
        "skill": "Advanced Math"
      },
      {
        "id": "math-m2-16",
        "question": "<p>−14(3<em>x</em> − 4)<sup>2</sup> + 6(3<em>x</em> − 2)<sup>2</sup></p><p>The given expression can be rewritten as <span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\"><em>a</em></span><span style=\"display:block;padding:0 3px\">4</span></span><em>x</em><sup>2</sup> + <span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\"><em>b</em></span><span style=\"display:block;padding:0 3px\">4</span></span><em>x</em> + <span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\"><em>c</em></span><span style=\"display:block;padding:0 3px\">4</span></span>, where <em>a</em>, <em>b</em>, <em>c</em> are constants. What is the value of <em>a</em> + <em>b</em> + <em>c</em>?</p>",
        "type": "mcq",
        "choices": [
          "−32",
          "−16",
          "−8",
          "−2"
        ],
        "correctIndex": 0,
        "skill": "Advanced Math"
      },
      {
        "id": "math-m2-17",
        "question": "<p>A laboratory culture of bacteria triples in size every 5 hours. The function <em>P</em>(<em>t</em>) = 150(3)<sup><em>t</em>/5</sup> gives the approximate number of bacteria in the culture <em>t</em> hours after the culture was started. Which statement is the best interpretation of <em>P</em>(3 · 5) = 4,050 in this context?</p>",
        "type": "mcq",
        "choices": [
          "The culture contains approximately 4,050 bacteria 3 hours after it was started.",
          "The culture contains approximately 3 times 4,050 bacteria 15 hours after it was started.",
          "The culture contains approximately 4,050 bacteria 3 five-hour periods after it was started.",
          "The number of bacteria in the culture increases by approximately 4,050 every 5 hours."
        ],
        "correctIndex": 2,
        "skill": "Advanced Math"
      },
      {
        "id": "math-m2-18",
        "question": "<img src=\"img/math-m2-18.jpg\" alt=\"Scatterplot with x from 1 to 10 and y from 5 to 25\" style=\"max-width:100%;height:auto;margin:8px 0\" onerror=\"this.outerHTML='<p><em>[Figure missing &mdash; add img/math-m2-18.png]</em></p>'\"><p>Which of the following equations is the most appropriate linear model for the data shown in the scatterplot?</p>",
        "type": "mcq",
        "choices": [
          "y = 0.2 + 2.28x",
          "y = 0.2 − 2.28x",
          "y = 2.28 + 0.2x",
          "y = 2.28 − 0.2x"
        ],
        "correctIndex": 0,
        "skill": "Advanced Math"
      },
      {
        "id": "math-m2-19",
        "question": "<p>A researcher conducted a study to examine the melatonin levels of gamers and the amount of time the gamers spent playing video games. A total of 127 gamers were selected at random from three countries. The melatonin levels of the gamers and the amount of time they spent playing video games were recorded over a 4-week period. The table gives the number of selected gamers from each country.</p><p><table style=\"border-collapse:collapse;margin-bottom:10px\"><tr><th style=\"border:1px solid #bbb;padding:4px 14px\">Country</th><th style=\"border:1px solid #bbb;padding:4px 14px\">Sweden</th><th style=\"border:1px solid #bbb;padding:4px 14px\">South Korea</th><th style=\"border:1px solid #bbb;padding:4px 14px\">United States</th></tr><tr><td style=\"border:1px solid #bbb;padding:4px 14px\">Number of gamers</td><td style=\"border:1px solid #bbb;padding:4px 14px;text-align:center\">25</td><td style=\"border:1px solid #bbb;padding:4px 14px;text-align:center\">49</td><td style=\"border:1px solid #bbb;padding:4px 14px;text-align:center\">53</td></tr></table></p><p>If the results of this study suggest a relationship between melatonin levels and the amount of time spent playing video games, which of the following aspects of the study will prevent the results from being generalized to all gamers?</p>",
        "type": "mcq",
        "choices": [
          "The melatonin levels of the selected gamers were not measured over a long enough period of time.",
          "The number of selected gamers from each country is different.",
          "The number of selected gamers is too small.",
          "The gamers were not selected at random from all gamers."
        ],
        "correctIndex": 3,
        "skill": "Data Analysis"
      },
      {
        "id": "math-m2-20",
        "question": "<p>Container P holds <em>k</em> liters of water. Container Q holds 72% of the amount of water in container P, and container R holds 150% of the amount of water in container Q. The positive difference between the amount of water in container R and the amount of water in container P is 32.4 liters. What is the value of <em>k</em>?</p>",
        "type": "grid",
        "acceptableAnswers": [
          "405"
        ],
        "skill": "Data Analysis"
      },
      {
        "id": "math-m2-21",
        "question": "<p>An angle has a measure of <span style=\"display:inline-block;text-align:center;vertical-align:middle;line-height:1.25\"><span style=\"display:block;border-bottom:1px solid currentColor;padding:0 3px\">7π</span><span style=\"display:block;padding:0 3px\">12</span></span> radians. What is the measure, in degrees, of an angle that is supplementary to this angle?</p>",
        "type": "grid",
        "acceptableAnswers": [
          "75"
        ],
        "skill": "Geometry & Trig"
      },
      {
        "id": "math-m2-22",
        "question": "<img src=\"img/math-m2-22.jpg\" alt=\"Right triangle with angles r degrees and s degrees\" style=\"max-width:100%;height:auto;margin:8px 0\" onerror=\"this.outerHTML='<p><em>[Figure missing &mdash; add img/math-m2-22.png]</em></p>'\"><p>Note: Figure not drawn to scale.</p><p>In the figure, 3<em>r</em> &gt; 19<em>s</em>. Which of the following values must be the greatest?</p>",
        "type": "mcq",
        "choices": [
          "sin r°",
          "cos r°",
          "sin r° sin s°",
          "sin r° cos s°"
        ],
        "correctIndex": 2,
        "skill": "Geometry & Trig"
      }
    ]
  }
};

/* Directions text shown via the "Directions" button during each module. */
const DIRECTIONS = {
  readingWriting: "<p>This section has two parts. Each part includes reading passages and questions about them. For each question, choose the best answer based on the passage(s) and any introductory material provided, then select the corresponding answer choice. All questions in this section are multiple choice with four possible answers.</p><p>You may use the Highlight tool to mark important text, and the answer elimination tool to cross out choices you've ruled out.</p>",
  math: "<p>This section includes both multiple-choice and student-produced response (fill-in) questions. For multiple-choice questions, select the best answer from the four choices. For fill-in questions, type the exact value requested &mdash; fractions, decimals, and equivalent forms are all accepted.</p><p>A graphing calculator is available for the entire Math section. Click \"Calculator\" in the top right to open it.</p>"
};
