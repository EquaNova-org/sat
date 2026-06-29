/* ====================================================================
   QUESTION BANK — this is the only file you need to edit to load your
   own content. Replace the sample items below with your real questions.
   The test engine reads array lengths dynamically, so each module can
   contain however many questions you want (the real digital SAT uses
   27 per Reading & Writing module and 22 per Math module).

   -----------------------------------------------------------------
   READING & WRITING question shape:
   {
     id: "rw-m1-01",            // must be unique across the whole bank
     passage: "<p>HTML string. One or more &lt;p&gt; paragraphs.</p>",
     question: "<p>The question stem, as HTML.</p>",
     choices: ["Choice A text", "Choice B text", "Choice C text", "Choice D text"],
     correctIndex: 0,           // 0 = A, 1 = B, 2 = C, 3 = D
     skill: "Information and Ideas"   // optional, used in results breakdown
   }

   -----------------------------------------------------------------
   MATH question shape (multiple choice):
   {
     id: "math-m1-01",
     question: "<p>Question stem. Use simple HTML for formatting, e.g. x&sup2; or &frac12;.</p>",
     type: "mcq",
     choices: ["12", "14", "16", "18"],
     correctIndex: 2,
     skill: "Algebra"
   }

   MATH question shape (student-produced response / grid-in):
   {
     id: "math-m1-02",
     question: "<p>Question stem.</p>",
     type: "grid",
     acceptableAnswers: ["3/4", "0.75", ".75"],   // any matching string OR numeric value (within 0.01) is accepted
     skill: "Problem Solving and Data Analysis"
   }

   -----------------------------------------------------------------
   STRUCTURE: each section has a fixed Module 1, and TWO versions of
   Module 2 (easier / harder). After Module 1 the engine scores the
   student and routes them into module2Hard if they answered at or
   above the adaptive threshold (see CONFIG.adaptiveThreshold in
   app.js, default 60%), otherwise module2Easy. This mirrors how the
   real digital SAT adapts difficulty between modules.
   ==================================================================== */

const SAT_CONTENT = {

  readingWriting: {

    module1: [
      {
        id: "rw-m1-01",
        passage: "<p>Artist Marilyn Dingle's intricate, coiled baskets are ______ sweetgrass and palmetto palm. Following a Gullah technique that originated in West Africa, Dingle skillfully winds a thin palm frond around a bunch of sweetgrass with the help of a \"sewing bone\" to create the basket's signature look that no factory can reproduce.</p>",
        question: "<p>Which choice completes the text with the most logical and precise word or phrase?</p>",
        choices: [
          "indicated by",
          "handmade from",
          "represented by",
          "collected with"
        ],
        correctIndex: 1,
        skill: "Craft and Structure"
      },
      {
        id: "rw-m1-02",
        passage: "<p>The invention in 1958 of the integrated circuit (or microchip) radically altered the semiconductor industry. In fact, some historians argue that it fundamentally ______ the industry by enabling it to take advantage of mass production methods for the first time.</p>",
        question: "<p>Which choice completes the text with the most logical and precise word or phrase?</p>",
        choices: [
          "overwhelmed",
          "bypassed",
          "obstructed",
          "transformed"
        ],
        correctIndex: 3,
        skill: "Craft and Structure"
      },
      {
        id: "rw-m1-03",
        passage: "<p>Botanist Al Kovaleski has pointed out that maple trees already thrive in a wide variety of climates and thus may ______ changes in climate better than some other tree species do. The alterations maples may undergo in response to a changing climate are likely to be relatively small and easily achieved.</p>",
        question: "<p>Which choice completes the text with the most logical and precise word or phrase?</p>",
        choices: [
          "relocate from",
          "refer to",
          "originate from",
          "adapt to"
        ],
        correctIndex: 3,
        skill: "Craft and Structure"
      },
      {
        id: "rw-m1-04",
        passage: "<p>The following text is adapted from Nathaniel Hawthorne's 1837 story \"Dr. Heidegger's Experiment.\" The main character, a physician, is experimenting with rehydrating a dried flower.</p><p>At first [the rose] lay lightly on the surface of the fluid, appearing to imbibe none of its moisture. Soon, however, a singular change began to be visible. The crushed and dried petals stirred and assumed a deepening tinge of crimson, as if the flower were reviving from a deathlike slumber.</p>",
        question: "<p>As used in the text, what does the phrase \"a singular\" most nearly mean?</p>",
        choices: [
          "A lonely",
          "A disagreeable",
          "An acceptable",
          "An extraordinary"
        ],
        correctIndex: 3,
        skill: "Craft and Structure"
      },
      {
        id: "rw-m1-05",
        passage: "<p>Rejecting the premise that the literary magazine Ebony and Topaz (1927) should present a unified vision of Black American identity, editor Charles S. Johnson fostered his contributors' diverse perspectives by promoting their authorial autonomy. Johnson's self-effacement diverged from the editorial stances of W.E.B. Du Bois and Alain Locke, whose decisions for their publications were more ______.</p>",
        question: "<p>Which choice completes the text with the most logical and precise word or phrase?</p>",
        choices: [
          "proficient",
          "dogmatic",
          "ambiguous",
          "unpretentious"
        ],
        correctIndex: 1,
        skill: "Craft and Structure"
      },
      {
        id: "rw-m1-06",
        passage: "<p>\"How lifelike are they?\" Many computer animators prioritize this question as they strive to create ever more realistic environments and lighting. Generally, while characters in computer-animated films appear highly exaggerated, environments and lighting are carefully engineered to mimic reality. But some animators, such as Pixar's Sanjay Patel, are focused on a different question. Rather than asking first whether the environments and lighting they're creating are convincingly lifelike, Patel and others are asking whether these elements reflect their films' unique stories.</p>",
        question: "<p>Which choice best describes the function of the underlined question in the text as a whole?</p>",
        choices: [
          "It reflects a primary goal that many computer animators have for certain components of the animations they produce.",
          "It represents a concern of computer animators who are more interested in creating unique backgrounds and lighting effects than realistic ones.",
          "It conveys the uncertainty among many computer animators about how to create realistic animations using current technology.",
          "It illustrates a reaction that audiences typically have to the appearance of characters created by computer animators."
        ],
        correctIndex: 0,
        skill: "Craft and Structure"
      },
      {
        id: "rw-m1-07",
        passage: "<p>The field of study called affective neuroscience seeks instinctive, physiological causes for feelings such as pleasure or displeasure. Because these sensations are linked to a chemical component (for example, the release of the neurotransmitter dopamine in the brain when one receives or expects a reward), they can be said to have a partly physiological basis. These processes have been described in mammals, but Jingnan Huang and his colleagues have recently observed that some behaviors of honeybees (such as foraging) are also motivated by a dopamine-based signaling process.</p>",
        question: "<p>What choice best describes the main purpose of the text?</p>",
        choices: [
          "It describes an experimental method of measuring the strength of physiological responses in humans.",
          "It illustrates processes by which certain insects can express how they are feeling.",
          "It summarizes a finding suggesting that some mechanisms in the brains of certain insects resemble mechanisms in mammalian brains.",
          "It presents research showing that certain insects and mammals behave similarly when there is a possibility of a reward for their actions."
        ],
        correctIndex: 2,
        skill: "Craft and Structure"
      },
      {
        id: "rw-m1-08",
        passage: "<p>The following text is from Srimati Svarna Kumari Devi's 1894 novel The Fatal Garland (translated by A. Christina Albers in 1910). Shakti is walking near a riverbank that she visited frequently during her childhood.</p><p>She crossed the woods she knew so well. The trees seemed to extend their branches like welcoming arms. They greeted her as an old friend. Soon she reached the river-side.</p>",
        question: "<p>Which choice best describes the function of the underlined portion in the text as a whole?</p>",
        choices: [
          "It suggests that Shakti feels uncomfortable near the river.",
          "It indicates that Shakti has lost her sense of direction in the woods.",
          "It emphasizes Shakti's sense of belonging in the landscape.",
          "It conveys Shakti's appreciation for her long-term friendships."
        ],
        correctIndex: 2,
        skill: "Craft and Structure"
      },
      {
        id: "rw-m1-09",
        passage: "<p>To understand how temperature change affects microorganism-mediated cycling of soil nutrients in alpine ecosystems, Eva Ka&scaron;tovsk&aacute; et al. collected plant-soil cores in the Tatra Mountains at elevations around 2,100 meters and transplanted them to elevations of 1,700&ndash;1,800 meters, where the mean air temperature was warmer by 2&deg;C. Microorganism-mediated nutrient cycling was accelerated in the transplanted cores; crucially, microorganism community composition was unchanged, allowing Ka&scaron;tovsk&aacute; et al. to attribute the acceleration to temperature-induced increases in microorganism activity.</p>",
        question: "<p>It can most reasonably be inferred from the text that the finding about the microorganism community composition was important for which reason?</p>",
        choices: [
          "It provided preliminary evidence that microorganism-mediated nutrient cycling was accelerated in the transplanted cores.",
          "It suggested that temperature-induced changes in microorganism activity may be occurring at increasingly high elevations.",
          "It ruled out a potential alternative explanation for the acceleration in microorganism-mediated nutrient cycling.",
          "It clarified that microorganism activity levels in the plant-soil cores varied depending on which microorganisms comprised the community."
        ],
        correctIndex: 2,
        skill: "Information and Ideas"
      },
      {
        id: "rw-m1-10",
        passage: "<p>The following text is from Jane Austen's 1811 novel Sense and Sensibility. Elinor lives with her younger sisters and her mother, Mrs. Dashwood.</p><p>Elinor, this eldest daughter, whose advice was so effectual, possessed a strength of understanding, and coolness of judgment, which qualified her, though only nineteen, to be the counsellor of her mother, and enabled her frequently to counteract, to the advantage of them all, that eagerness of mind in Mrs. Dashwood which must generally have led to imprudence. She had an excellent heart;&mdash;her disposition was affectionate, and her feelings were strong; but she knew how to govern them: it was a knowledge which her mother had yet to learn; and which one of her sisters had resolved never to be taught.</p>",
        question: "<p>According to the text, what is true about Elinor?</p>",
        choices: [
          "Elinor often argues with her mother but fails to change her mind.",
          "Elinor can be overly sensitive with regard to family matters.",
          "Elinor thinks her mother is a bad role model.",
          "Elinor is remarkably mature for her age."
        ],
        correctIndex: 3,
        skill: "Information and Ideas"
      },
      {
        id: "rw-m1-11",
        passage: "<p>Jean-Bernard Caron and colleagues recently discovered a cache of jellyfish fossils in the Burgess Shale, a site in the Canadian Rockies that is rich in fossils from the Cambrian period (over 500 million years ago). Caron and colleagues claim that these are the oldest jellyfish fossils ever discovered. In the past twenty years, two sites in China and the United States have yielded fossils of a similar age that some experts believe are most likely jellyfish due to their shapes and the appearance of projecting tentacles. But Caron and colleagues argue that the apparent tentacles are in fact the comb rows of ctenophores, gelatinous animals that are only distantly related to jellyfish.</p>",
        question: "<p>Which statement, if true, would most directly weaken the claim by Caron and colleagues about the fossils found in China and the United States?</p>",
        choices: [
          "Sites in the Canadian Rockies from later periods than the Cambrian period have yielded fossils that have been conclusively identified as ctenophore fossils.",
          "The fossils found in China and the United States are so poorly preserved that though they cannot be conclusively identified as jellyfish, they cannot be conclusively identified as ctenophores either.",
          "While ctenophore fossils have been discovered in China and the United States, they have never been discovered in the Burgess Shale.",
          "The fossils discovered by Caron and colleagues in the Burgess Shale were better preserved than the fossils discovered by other researchers in China and the United States."
        ],
        correctIndex: 1,
        skill: "Information and Ideas"
      },
      {
        id: "rw-m1-12",
        passage: "<p>Fish whose DNA has been modified to include genetic material from other species are known as transgenic. Some transgenic fish have genes from jellyfish that result in fluorescence (that is, they glow in the dark). Although these fish were initially engineered for research purposes in the 1990s, they were sold as pets in the 2000s and can now be found in the wild in creeks in Brazil. A student in a biology seminar who is writing a paper on these fish asserts that their escape from Brazilian fish farms into the wild may have significant negative long-term ecological effects.</p>",
        question: "<p>Which quotation from a researcher would best support the student's assertion?</p>",
        choices: [
          "\"In one site in the wild where transgenic fish were observed, females outnumbered males, while in another the numbers of females and males were equivalent.\"",
          "\"Though some presence of transgenic fish in the wild has been recorded, there are insufficient studies of the impact of those fish on the ecosystems into which they are introduced.\"",
          "\"The ecosystems into which transgenic fish are known to have been introduced may represent a subset of the ecosystems into which the fish have actually been introduced.\"",
          "\"Through interbreeding, transgenic fish might introduce the trait of fluorescence into wild fish populations, making those populations more vulnerable to predators.\""
        ],
        correctIndex: 3,
        skill: "Information and Ideas"
      },
      {
        id: "rw-m1-13",
        passage: "<p>In her 2021 article \"Throwaway History: Towards a Historiography of Ephemera,\" scholar Anne Garner discusses John Johnson (1882&ndash;1956), a devoted collector of items intended to be discarded, including bus tickets and campaign pamphlets. Johnson recognized that scholarly institutions considered his expansive collection of ephemera to be worthless&mdash;indeed, it wasn't until 1968, after Johnson's death, that Oxford University's Bodleian Library acquired the collection, having grasped the items' potential value to historians and other researchers. Hence, the example of Johnson serves to ______</p>",
        question: "<p>Which choice most logically completes the text?</p>",
        choices: [
          "demonstrate the difficulties faced by contemporary historians in conducting research at the Bodleian Library without access to ephemera.",
          "represent the challenge of incorporating examples of ephemera into the collections of libraries and other scholarly institutions.",
          "lend support to arguments by historians and other researchers who continue to assert that ephemera holds no value for scholars.",
          "illustrate both the relatively low scholarly regard in which ephemera was once held and the later recognition of ephemera's possible utility."
        ],
        correctIndex: 3,
        skill: "Information and Ideas"
      },
      {
        id: "rw-m1-14",
        passage: "<p>One recognized social norm of gift giving is that the time spent obtaining a gift will be viewed as a reflection of the gift's thoughtfulness. Marketing experts Farnoush Reshadi, Julian Givi, and Gopal Das addressed this view in their studies of norms specifically surrounding the giving of gift cards, noting that while recipients tend to view digital gift cards (which can be purchased online from anywhere and often can be redeemed online as well) as superior to physical gift cards (which sometimes must be purchased in person and may only be redeemable in person) in terms of usage, 94.8 percent of participants surveyed indicated that it is more socially acceptable to give a physical gift card to a recipient. This finding suggests that ______</p>",
        question: "<p>Which choice most logically completes the text?</p>",
        choices: [
          "gift givers likely overestimate the amount of effort required to use digital gift cards and thus mistakenly assume gift recipients will view them as less desirable than physical gift cards.",
          "physical gift cards are likely preferred by gift recipients because the tangible nature of those cards offers a greater psychological sense of ownership than digital gift cards do.",
          "physical gift cards are likely less desirable to gift recipients than digital gift cards are because of the perception that physical gift cards require unnecessary effort to obtain.",
          "gift givers likely perceive digital gift cards as requiring relatively low effort to obtain and thus wrongly assume gift recipients will appreciate them less than they do physical gift cards."
        ],
        correctIndex: 3,
        skill: "Information and Ideas"
      },
      {
        id: "rw-m1-15",
        passage: "<p>Generations of mystery and horror ______ have been influenced by the dark, gothic stories of celebrated American author Edgar Allan Poe (1809&ndash;1849).</p>",
        question: "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        choices: [
          "writers",
          "writers,",
          "writers&mdash;",
          "writers;"
        ],
        correctIndex: 0,
        skill: "Standard English Conventions"
      },
      {
        id: "rw-m1-16",
        passage: "<p>The radiation that ______ during the decay of radioactive atomic nuclei is known as gamma radiation.</p>",
        question: "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        choices: [
          "occurs",
          "have occurred",
          "occur",
          "are occurring"
        ],
        correctIndex: 0,
        skill: "Standard English Conventions"
      },
      {
        id: "rw-m1-17",
        passage: "<p>The Mission 66 initiative, which was approved by Congress in 1956, represented a major investment in the infrastructure of overburdened national ______ it prioritized physical improvements to the parks' roads, utilities, employee housing, and visitor facilities while also establishing educational programming for the public.</p>",
        question: "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        choices: [
          "parks and",
          "parks",
          "parks;",
          "parks,"
        ],
        correctIndex: 2,
        skill: "Standard English Conventions"
      },
      {
        id: "rw-m1-18",
        passage: "<p>A recent study tracked the number of bee species present in twenty-seven New York apple orchards over a ten-year period. ______ found that when wild growth near an orchard was cleared, the number of different bee species visiting the orchard decreased.</p>",
        question: "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        choices: [
          "Entomologist Heather Grab:",
          "Entomologist, Heather Grab,",
          "Entomologist Heather Grab",
          "Entomologist Heather Grab,"
        ],
        correctIndex: 2,
        skill: "Standard English Conventions"
      },
      {
        id: "rw-m1-19",
        passage: "<p>Despite being cheap, versatile, and easy to produce, ______ they are made from nonrenewable petroleum, and most do not biodegrade in landfills.</p>",
        question: "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        choices: [
          "there are two problems associated with commercial plastics:",
          "two problems are associated with commercial plastics:",
          "commercial plastics' two associated problems are that",
          "commercial plastics have two associated problems:"
        ],
        correctIndex: 3,
        skill: "Standard English Conventions"
      },
      {
        id: "rw-m1-20",
        passage: "<p>The algaita is a double reed wind instrument from West Africa. The reed of a wind instrument is the mouthpiece ______ A double reed contains two pieces of cane that vibrate and produce sound as air passes between them.</p>",
        question: "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        choices: [
          "where sound is made?",
          "where is sound made.",
          "where sound is made.",
          "where is sound made?"
        ],
        correctIndex: 2,
        skill: "Standard English Conventions"
      },
      {
        id: "rw-m1-21",
        passage: "<p>In 1942, the 1,500-mile Alaska Highway was constructed in under nine months, largely due to the skilled work of nearly 4,000 African American soldiers from US Army engineering regiments. The soldiers' contribution was overlooked for decades. ______ in 2017, lawmakers declared October 25 a day of recognition&mdash;\"Alaska Highway Day\"&mdash;for the troops who helped build this critical roadway.</p>",
        question: "<p>Which choice completes the text with the most logical transition?</p>",
        choices: [
          "Lastly,",
          "Then,",
          "Similarly,",
          "For example,"
        ],
        correctIndex: 1,
        skill: "Expression of Ideas"
      },
      {
        id: "rw-m1-22",
        passage: "<p>Samuel Coleridge-Taylor was a prominent classical music composer from England who toured the US three times in the early 1900s. The child of a West African father and an English mother, Coleridge-Taylor emphasized his mixed-race ancestry. For example, he referred to himself as Anglo-African. ______ he incorporated the sounds of traditional African music into his classical music compositions.</p>",
        question: "<p>Which choice completes the text with the most logical transition?</p>",
        choices: [
          "In addition,",
          "Actually,",
          "However,",
          "Regardless,"
        ],
        correctIndex: 0,
        skill: "Expression of Ideas"
      },
      {
        id: "rw-m1-23",
        passage: "<p>In her poetry collection Thomas and Beulah, Rita Dove interweaves the titular characters' personal stories with broader historical narratives. She places Thomas's journey from the American South to the Midwest in the early 1900s within the larger context of the Great Migration. ______ Dove sets events from Beulah's personal life against the backdrop of the US Civil Rights Movement.</p>",
        question: "<p>Which choice completes the text with the most logical transition?</p>",
        choices: [
          "Specifically,",
          "Thus,",
          "Regardless,",
          "Similarly,"
        ],
        correctIndex: 3,
        skill: "Expression of Ideas"
      },
      {
        id: "rw-m1-24",
        passage: "<p>While researching a topic, a student has taken the following notes:</p><p>Sue is the nickname of a dinosaur fossil specimen housed at the Field Museum of Natural History. The Field Museum of Natural History is located in Chicago, Illinois. Sue is a member of the genus Tyrannosaurus. Big Mike is the nickname of a dinosaur fossil specimen housed at the Museum of the Rockies. The Museum of the Rockies is located in Bozeman, Montana. Big Mike is a member of the genus Tyrannosaurus.</p><p>The student wants to emphasize a similarity between the two specimens.</p>",
        question: "<p>Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>",
        choices: [
          "The Field Museum of Natural History, where Sue is housed, is located in Chicago, Illinois.",
          "Big Mike is the nickname of a Tyrannosaurus fossil specimen housed at the Museum of the Rockies in Bozeman, Montana.",
          "The dinosaur fossil specimens Sue and Big Mike are both members of the genus Tyrannosaurus.",
          "While Sue is housed at the Field Museum of Natural History, Big Mike is housed at the Museum of the Rockies."
        ],
        correctIndex: 2,
        skill: "Expression of Ideas"
      },
      {
        id: "rw-m1-25",
        passage: "<p>While researching a topic, a student has taken the following notes:</p><p>The Haber-Bosch process is an industrial process used to manufacture ammonia (NH3). It was invented by chemists Fritz Haber and Carl Bosch in 1910. The process's primary reaction combines nitrogen (N2) from the air with hydrogen (H2). It requires an iron catalyst and high temperatures and pressures. Most of the ammonia produced by this process is used in fertilizers.</p><p>The student wants to provide an overview of the Haber-Bosch process.</p>",
        question: "<p>Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>",
        choices: [
          "The Haber-Bosch process needs nitrogen, hydrogen, and an iron catalyst.",
          "The Haber-Bosch process uses an iron catalyst along with high temperatures and pressures to manufacture ammonia from nitrogen and hydrogen.",
          "Chemists Fritz Haber and Carl Bosch invented an industrial process to manufacture ammonia to be used in fertilizers.",
          "In 1910, chemists Fritz Haber and Carl Bosch invented the Haber-Bosch process, which requires high temperatures and pressures."
        ],
        correctIndex: 1,
        skill: "Expression of Ideas"
      },
      {
        id: "rw-m1-26",
        passage: "<p>While researching a topic, a student has taken the following notes:</p><p>Organisms release cellular material into their environment by shedding substances such as hair or skin. The DNA in these substances is known as environmental DNA, or eDNA. Researchers collect and analyze eDNA to detect the presence of species that are difficult to observe. Geneticist Sara Oyler-McCance's research team analyzed eDNA in water samples from the Florida Everglades to detect invasive constrictor snake species in the area. The study determined a 91% probability of detecting Burmese python eDNA in a given location.</p><p>The student wants to present the study to an audience already familiar with environmental DNA.</p>",
        question: "<p>Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>",
        choices: [
          "Sara Oyler-McCance's researchers analyzed eDNA in water samples from the Florida Everglades for evidence of invasive constrictor snakes, which are difficult to observe.",
          "An analysis of eDNA can detect the presence of invasive species that are difficult to observe, such as constrictor snakes.",
          "Researchers found Burmese python eDNA, or environmental DNA, in water samples; eDNA is the DNA in released cellular materials, such as shed skin cells.",
          "Sara Oyler-McCance's researchers analyzed environmental DNA (eDNA)&mdash;that is, DNA from cellular materials released by organisms&mdash;in water samples from the Florida Everglades."
        ],
        correctIndex: 0,
        skill: "Expression of Ideas"
      },
      {
        id: "rw-m1-27",
        passage: "<p>While researching a topic, a student has taken the following notes:</p><p>Sam Maloof (1916&ndash;2009) was an American woodworker and furniture designer. He was the son of Lebanese immigrants. He received a \"genius grant\" from the John D. and Catherine T. MacArthur Foundation in 1985. The Museum of Fine Arts in Boston, Massachusetts, owns a rocking chair that Maloof made from walnut wood. The armrests and the seat of the chair are sleek and contoured, and the back consists of seven spindle-like slats.</p><p>The student wants to describe the rocking chair to an audience unfamiliar with Sam Maloof.</p>",
        question: "<p>Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>",
        choices: [
          "With its sleek, contoured armrests and seat, the walnut rocking chair in Boston's Museum of Fine Arts is just one piece of furniture created by American woodworker Sam Maloof.",
          "Sam Maloof was born in 1916 and died in 2009, and during his life, he made a chair that you can see if you visit the Museum of Fine Arts in Boston.",
          "Furniture designer Sam Maloof was a recipient of one of the John D. and Catherine T. MacArthur Foundation's \"genius grants.\"",
          "The rocking chair is made from walnut, and it has been shaped such that its armrests and seat are sleek and contoured."
        ],
        correctIndex: 0,
        skill: "Expression of Ideas"
      }
    ],

    module2: [
      {
        id: "rw-m2-01",
        passage: "<p>To demonstrate that the integrity of underground metal pipes can be assessed without unearthing the pipes, engineer Aroba Saleem and colleagues ______ the tendency of some metals' internal magnetic fields to alter under stress: the team showed that such alterations can be measured from a distance and can reveal concentrations of stress in the pipes.</p>",
        question: "<p>Which choice completes the text with the most logical and precise word or phrase?</p>",
        choices: [
          "hypothesized",
          "discounted",
          "redefined",
          "exploited"
        ],
        correctIndex: 3,
        skill: "Craft and Structure"
      },
      {
        id: "rw-m2-02",
        passage: "<p>In 2016, Gabriela Gonz&aacute;lez and team announced that a chirping sound captured by Laser Interferometer Gravitational-Wave Observatory antennas was direct evidence of gravitational waves, which skeptics had argued would be too faint for detection. Detailed statistical analysis helped preclude claims of the event's ______, confirming the signal at a confidence level of over 99%.</p>",
        question: "<p>Which choice completes the text with the most logical and precise word or phrase?</p>",
        choices: [
          "inconspicuousness",
          "discretion",
          "ambiguity",
          "probability"
        ],
        correctIndex: 2,
        skill: "Craft and Structure"
      },
      {
        id: "rw-m2-03",
        passage: "<p>The author's claim about the relationship between Neanderthals and Homo sapiens is ______, as it fails to account for several recent archaeological discoveries. To be convincing, his argument would need to address recent finds of additional hominid fossils, such as the latest Denisovan specimens and Homo longi.</p>",
        question: "<p>Which choice completes the text with the most logical and precise word or phrase?</p>",
        choices: [
          "disorienting",
          "tenuous",
          "nuanced",
          "unoriginal"
        ],
        correctIndex: 1,
        skill: "Craft and Structure"
      },
      {
        id: "rw-m2-04",
        passage: "<p>Within baleen whale species, some individuals develop an accessory spleen&mdash;a seemingly functionless formation of splenetic tissue outside the normal spleen. Given the formation's greater prevalence among whales known to make deeper dives, some researchers hypothesize that its role isn't ______; rather, the accessory spleen may actively support diving mechanisms.</p>",
        question: "<p>Which choice completes the text with the most logical and precise word or phrase?</p>",
        choices: [
          "replicable",
          "predetermined",
          "operative",
          "latent"
        ],
        correctIndex: 3,
        skill: "Craft and Structure"
      },
      {
        id: "rw-m2-05",
        passage: "<p>The province of Xoconochco was situated on the Pacific coast, hundreds of kilometers southeast of Tenochtitlan, the capital of the Aztec Empire. Because Xoconochco's location within the empire was so ______, cacao and other trade goods produced there could reach the capital only after a long overland journey.</p>",
        question: "<p>Which choice completes the text with the most logical and precise word or phrase?</p>",
        choices: [
          "unobtrusive",
          "concealed",
          "approximate",
          "peripheral"
        ],
        correctIndex: 3,
        skill: "Craft and Structure"
      },
      {
        id: "rw-m2-06",
        passage: "<p>The following text is from John Dryden's 1697 translation of Virgil's poem the Aeneid, written in the first century BCE. Queen Dido has just heard the Trojan hero Aeneas recount a sad tale.</p><p>But anxious cares already seiz'd the queen:<br>She fed within her veins a flame unseen;<br>The hero's valor, acts, and birth inspire<br>Her soul with love, and fan the secret fire.<br>His words, his looks, imprinted in her heart,<br>Improve the passion, and increase the smart.</p>",
        question: "<p>Which choice best states the main purpose of the text?</p>",
        choices: [
          "To indicate that Dido is hiding her skepticism of Aeneas's account",
          "To emphasize that Dido has been deeply affected by Aeneas's story",
          "To imply that Dido engages both emotionally and intellectually with Aeneas",
          "To suggest that Dido is worried that Aeneas might discover a secret she is keeping from him"
        ],
        correctIndex: 1,
        skill: "Craft and Structure"
      },
      {
        id: "rw-m2-07",
        passage: "<p>The 1967 release of Harold Cruse's book The Crisis of the Negro Intellectual isolated him from almost all other scholars and activists of the American Civil Rights Movement&mdash;though many of those thinkers disagreed with each other, he nonetheless found ways to disagree with them all. He thought that activists who believed that Black people such as himself should culturally assimilate were na&iuml;ve. But he also sharply criticized Black nationalists such as Marcus Garvey who wanted to establish independent, self-contained Black economies and societies, even though Cruse himself identified as a Black nationalist.</p>",
        question: "<p>Which choice best describes the function of the underlined sentence in the text as a whole?</p>",
        choices: [
          "It describes a direction that Cruse felt the Civil Rights Movement ought to take.",
          "It indicates that Cruse's reputation as a persistent antagonist of other scholars is undeserved.",
          "It describes a controversy that Cruse's work caused within the Black nationalist movement.",
          "It helps explain Cruse's position with respect to the community of civil rights thinkers."
        ],
        correctIndex: 3,
        skill: "Craft and Structure"
      },
      {
        id: "rw-m2-08",
        passage: "<p><strong>Text 1</strong></p><p>Dominique Potvin and colleagues captured five Australian magpies (Gymnorhina tibicen) to test a new design for attaching tracking devices to birds. As the researchers fitted each magpie with a tracker attached by a small harness, they noticed some magpies without trackers pecking at another magpie's tracker until it broke off. The researchers suggest that this behavior could be evidence of magpies attempting to help another magpie without benefiting themselves.</p><p><strong>Text 2</strong></p><p>It can be tempting to think that animals are deliberately providing help when we see them removing trackers and other equipment from one another, especially when a species is known to exhibit other cooperative behaviors. At the same time, it can be difficult to exclude the possibility that individuals are simply interested in the equipment because of its novelty, curiously pawing or pecking at it until it detaches.</p>",
        question: "<p>Based on the texts, how would the author of Text 2 most likely respond to the researchers' perspective in Text 1 on the behavior of the magpies without trackers?</p>",
        choices: [
          "That behavior might have been due to the novelty of the magpies' captive setting rather than to the novelty of the tracker.",
          "That behavior likely indicates that the magpies were deliberately attempting to benefit themselves by obtaining the tracker.",
          "That behavior may not be evidence of selflessness in Gymnorhina tibicen because not all the captured magpies demonstrated it.",
          "That behavior might be adequately explained without suggesting that the magpies were attempting to assist the other magpie."
        ],
        correctIndex: 3,
        skill: "Craft and Structure"
      },
      {
        id: "rw-m2-09",
        passage: "<p><strong>Text 1</strong></p><p>Ecologists have long wondered how thousands of microscopic phytoplankton species can live together near ocean surfaces competing for the same resources. According to conventional wisdom, one species should emerge after outcompeting the rest. So why do so many species remain? Ecologists' many efforts to explain this phenomenon still haven't uncovered a satisfactory explanation.</p><p><strong>Text 2</strong></p><p>Ecologist Michael Behrenfeld and colleagues have connected phytoplankton's diversity to their microscopic size. Because these organisms are so tiny, they are spaced relatively far apart from each other in ocean water and, moreover, experience that water as a relatively dense substance. This in turn makes it hard for them to move around and interact with one another. Therefore, says Behrenfeld's team, direct competition among phytoplankton probably happens much less than previously thought.</p>",
        question: "<p>Based on the texts, how would Behrenfeld and colleagues (Text 2) most likely respond to the \"conventional wisdom\" discussed in Text 1?</p>",
        choices: [
          "By arguing that it is based on a misconception about phytoplankton species competing with one another",
          "By asserting that it fails to recognize that routine replenishment of ocean nutrients prevents competition between phytoplankton species",
          "By suggesting that their own findings help clarify how phytoplankton species are able to compete with larger organisms",
          "By recommending that more ecologists focus their research on how competition among phytoplankton species is increased with water density"
        ],
        correctIndex: 0,
        skill: "Craft and Structure"
      },
      {
        id: "rw-m2-10",
        passage: "<p>Many archaeologists will tell you that categorizing excavated fragments of pottery by style, period, and what objects they belong to relies not only on standard criteria, but also on instinct developed over years of practice. In a recent study, however, researchers trained a deep-learning computer model on thousands of images of pottery fragments and found that it could categorize them as accurately as a team of expert archaeologists. Some archaeologists have expressed concern that they might be replaced by such computer models, but the researchers claim that outcome is highly unlikely.</p>",
        question: "<p>Which finding, if true, would most directly support the researchers' claim?</p>",
        choices: [
          "In the researchers' study, the model was able to categorize the pottery fragments much more quickly than the archaeologists could.",
          "In the researchers' study, neither the model nor the archeologists were able to accurately categorize all the pottery fragments that were presented.",
          "A survey of archaeologists showed that categorizing pottery fragments limits the amount of time they can dedicate to other important tasks that only human experts can do.",
          "A survey of archaeologists showed that few of them received dedicated training in how to properly categorize pottery fragments."
        ],
        correctIndex: 2,
        skill: "Information and Ideas"
      },
      {
        id: "rw-m2-11",
        passage: "<p>Given that stars and planets initially form from the same gas and dust in space, some astronomers have posited that host stars (such as the Sun) and their planets (such as those in our solar system) are composed of the same materials, with the planets containing equal or smaller quantities of the materials that make up the host star. This idea is also supported by evidence that rocky planets in our solar system are composed of some of the same materials as the Sun.</p>",
        question: "<p>Which finding, if true, would most directly weaken the astronomers' claim?</p>",
        choices: [
          "Most stars are made of hydrogen and helium, but when cooled they are revealed to contain small amounts of iron and silicate.",
          "A nearby host star is observed to contain the same proportion of hydrogen and helium as that of the Sun.",
          "Evidence emerges that the amount of iron in some rocky planets is considerably higher than the amount in their host star.",
          "The method for determining the composition of rocky planets is discovered to be less effective when used to analyze other kinds of planets."
        ],
        correctIndex: 2,
        skill: "Information and Ideas"
      },
      {
        id: "rw-m2-12",
        passage: "<p>In a series of experiments, Julio Sevilla and Claudia Townsend showed that manipulating the space between products in store displays can influence consumers' views of those products. Participants in several of the experiments regarded the same products in the same (generic) retail settings as significantly more valuable when the product-to-space ratio was low than when it was high. But in one of the experiments, Sevilla and Townsend arranged the same jewelry with different levels of intervening space at an upscale retailer (Tiffany &amp; Co.) and a relatively inexpensive retailer (Forever 21). The result of this experiment suggests that a store context associated with inexpensive products may moderate the effect Sevilla and Townsend observed in their other experiments.</p>",
        question: "<p>Which finding from the experiment with Tiffany &amp; Co. and Forever 21, if true, would most directly support the conclusion presented in the text?</p>",
        choices: [
          "At Tiffany &amp; Co., participants judged jewelry spaced far apart to be substantially more valuable than jewelry spaced close together, but at Forever 21, participants judged jewelry spaced far apart to be only slightly more valuable than jewelry spaced close together.",
          "At both Tiffany &amp; Co. and Forever 21, participants judged jewelry spaced far apart to be less valuable than jewelry spaced close together, but the difference in perceived value was significantly greater at Tiffany &amp; Co. than at Forever 21.",
          "Participants judged jewelry spaced far apart at Tiffany &amp; Co. to be similar in value to jewelry spaced far apart at Forever 21, but participants judged jewelry spaced close together at Tiffany &amp; Co. to be more valuable than jewelry spaced close together at Forever 21.",
          "When jewelry was spaced far apart, participants judged the jewelry at Tiffany &amp; Co. to be more valuable than the jewelry at Forever 21, but when jewelry was spaced close together, participants judged the jewelry at Tiffany &amp; Co. to be less valuable than the jewelry at Forever 21."
        ],
        correctIndex: 0,
        skill: "Information and Ideas"
      },
      {
        id: "rw-m2-13",
        passage: "<p>Some animal-behavior studies involve observing wild animals in their natural habitat, and some involve capturing wild animals and observing them in a laboratory. Each approach has advantages over the other. In wild studies, researchers can more easily presume that the animals are behaving normally, and in lab studies, researchers can more easily control factors that might affect the results. But if, for example, the results from a wild study and a lab study of Western scrub-jays (Aphelocoma californica) contradict each other, one or both of the studies must have failed to account for some factor that was relevant to the birds' behavior.</p>",
        question: "<p>Which choice best states the main idea of the text?</p>",
        choices: [
          "When the results of a natural-habitat study and those from a lab study of a wild animal such as the Western scrub-jay conflict, the study in the natural habitat is more likely than the lab study to have accurate results.",
          "Studying wild animals such as the Western scrub-jay in both their natural habitat and lab settings is likely to yield conflicting results that researchers cannot fully resolve.",
          "Wild animals such as the Western scrub-jay can be effectively studied in their natural habitat and in the lab, but each approach has drawbacks that could affect the accuracy of the findings.",
          "Differing results between natural-habitat and lab studies of wild animals such as the Western scrub-jay are a strong indication that both of the studies had design flaws that affected the accuracy of their results."
        ],
        correctIndex: 2,
        skill: "Information and Ideas"
      },
      {
        id: "rw-m2-14",
        passage: "<p>Compiled in the late 1500s largely through the efforts of Indigenous scribes, Cantares Mexicanos is the most important collection of poetry in Classical Nahuatl, the principal language of the Aztec Empire. The poems portray Aztec society before the occupation of the empire by the army of Spain, and marginal notes in Cantares Mexicanos indicate that much of the collection's content predates the initial invasion. Nonetheless, some of the poems contain inarguable references to beliefs and customs common in Spain during this era. Thus, some scholars have concluded that ______</p>",
        question: "<p>Which choice most logically completes the text?</p>",
        choices: [
          "while its content largely predates the invasion, Cantares Mexicanos also contains additions made after the invasion.",
          "although those who compiled Cantares Mexicanos were fluent in Nahuatl, they had limited knowledge of the Spanish language.",
          "before the invasion by Spain, the poets of the Aztec Empire borrowed from the literary traditions of other societies.",
          "the references to beliefs and customs in Spain should be attributed to a coincidental resemblance between the societies of Spain and the Aztec Empire."
        ],
        correctIndex: 0,
        skill: "Information and Ideas"
      },
      {
        id: "rw-m2-15",
        passage: "<p>Aptamers&mdash;synthetic DNA or RNA molecules that bind to target molecules&mdash;can be used to test for foodborne bacterial pathogens, though their specificity (the probability of returning a negative result in the absence of the focal pathogen) in real-world foods has been unclear. Sandeep Somvanshi et al. fabricated test paper incorporating aptamers targeting strain O157:H7 of the bacteria Escherichia coli; the paper shifts from pink to purple as the aptamers bind to target molecules. Somvanshi et al. tested the paper in store-bought pear juice they treated with E. coli O157:H7, other strains of E. coli, or other bacteria species. Following exposure, the paper from the O157:H7 test was purple while papers from the other tests were pink, suggesting that ______</p>",
        question: "<p>Which choice most logically completes the text?</p>",
        choices: [
          "aptamer-based tests in real-world foods are more likely to show a high degree of specificity if the focal pathogen is E. coli O157:H7 than if the focal pathogen is another strain of E. coli or another species.",
          "uncertainty about the specificity of aptamer-based tests for pathogens in real-world foods may be due to the similarity between E. coli O157:H7 and other E. coli strains.",
          "the specificity of the tests in a real-world food was unaffected by the aptamers' tendency to bind to different strains of E. coli.",
          "the aptamers successfully bound to E. coli O157:H7 and the tests displayed a high degree of specificity in a real-world food."
        ],
        correctIndex: 3,
        skill: "Information and Ideas"
      },
      {
        id: "rw-m2-16",
        passage: "<p>\"Gestures\" in painting are typically thought of as bold, expressive brushstrokes. In the 1970s, American painter Jack Whitten built a 12-foot (3.7-meter) tool he named the \"developer\" to apply paint to an entire canvas in one motion, resulting in his series of \"slab\" paintings from that decade. Whitten described this process as making an entire painting in \"one gesture,\" signaling a clear departure from the prevalence of gestures in his work from the 1960s. Some art historians claim this shift represents \"removing gesture\" from the process. Therefore, regardless of whether using the developer constitutes a gesture, both Whitten and these art historians likely agree that ______</p>",
        question: "<p>Which choice most logically completes the text?</p>",
        choices: [
          "any tool that a painter uses to create an artwork is capable of creating gestures.",
          "Whitten's work from the 1960s exhibits many more gestures than his work from the 1970s does.",
          "Whitten became less interested in exploring the role of gesture in his work as his career progressed.",
          "Whitten's work from the 1960s is much more realistic than his work from the 1970s is."
        ],
        correctIndex: 1,
        skill: "Information and Ideas"
      },
      {
        id: "rw-m2-17",
        passage: "<p>Studies conducted in individual Western societies have demonstrated associations between personality traits and five musical factors (mellowness, unpretentiousness, sophistication, intensity, and contemporariness) underlying individual preferences for styles of Western music. To investigate these associations across cultures, David M. Greenberg et al. collected music-preference assessments for Western genres and self-reported personality traits from participants in fifty-three countries across six continents. The study confirmed that the five-factor framework accurately captured participants' tastes in Western music, and, moreover, the study found similar correlations between patterns of these factors and of personality traits, suggesting that ______</p>",
        question: "<p>Which choice most logically completes the text?</p>",
        choices: [
          "across cultural contexts, people who share similar profiles of personality traits tend to prefer listening to similar types of Western music.",
          "the five-factor framework can likely be used to predict preferences for non-Western music styles based on personality traits even if the characteristics of those styles substantially differ from characteristics of Western music styles.",
          "the strength of the relationship between personality traits and musical preferences varies less across cultures than researchers had previously assumed.",
          "people with a relatively high degree of familiarity with Western music styles are likely to express stronger preferences for those styles than people with a relatively low degree of familiarity with those styles are."
        ],
        correctIndex: 0,
        skill: "Information and Ideas"
      },
      {
        id: "rw-m2-18",
        passage: "<p>Joshua Hinson, director of the language revitalization program of the Chickasaw Nation in Oklahoma, helped produce the world's first Indigenous-language instructional app, Chickasaw ______ Chickasaw TV, in 2010; and a Rosetta Stone language course in Chickasaw, in 2015.</p>",
        question: "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        choices: [
          "Basic; in 2009, an online television network;",
          "Basic; in 2009, an online television network,",
          "Basic, in 2009; an online television network,",
          "Basic, in 2009, an online television network,"
        ],
        correctIndex: 2,
        skill: "Standard English Conventions"
      },
      {
        id: "rw-m2-19",
        passage: "<p>Researchers studying magnetosensation have determined why some soil-dwelling roundworms in the Southern Hemisphere move in the opposite direction of Earth's magnetic field when searching for ______ in the Northern Hemisphere, the magnetic field points down, into the ground, but in the Southern Hemisphere, it points up, toward the surface and away from worms' food sources.</p>",
        question: "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        choices: [
          "food:",
          "food,",
          "food while",
          "food"
        ],
        correctIndex: 0,
        skill: "Standard English Conventions"
      },
      {
        id: "rw-m2-20",
        passage: "<p>Helical ______ widely understood to confer stability and efficiency in the locomotion of a variety of microscopic organisms&mdash;including bacteria, eukaryotic algae, and ciliates&mdash;bestows similar advantages, albeit via different propulsive modes, to larger oceanic macroplanktons, such as salps.</p>",
        question: "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        choices: [
          "swimming, is",
          "swimming is",
          "swimming has been",
          "swimming,"
        ],
        correctIndex: 3,
        skill: "Standard English Conventions"
      },
      {
        id: "rw-m2-21",
        passage: "<p>A species of Byropsis algae produces toxins to avoid being eaten by predators. However, in some cases, the toxins the organism uses to protect itself from predation actually ______ its attractiveness to predators. The Hawaiian sea slug, for example, not only tolerates Byropsis toxins but actually uses them for protection in the same way the algae does.</p>",
        question: "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        choices: [
          "is increasing",
          "increase",
          "increases",
          "has increased"
        ],
        correctIndex: 1,
        skill: "Standard English Conventions"
      },
      {
        id: "rw-m2-22",
        passage: "<p>With a blend of traditional design elements, such as arched Gothic ceilings, and modern ones, such as floor-to-ceiling ______ design splits the difference between old and new, a mixture that is increasingly seen in home interiors in the US.</p>",
        question: "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        choices: [
          "windows; transitional",
          "windows&mdash;transitional",
          "windows. Transitional",
          "windows, transitional"
        ],
        correctIndex: 3,
        skill: "Standard English Conventions"
      },
      {
        id: "rw-m2-23",
        passage: "<p>Instead of sleeping on soft pillows, ancient Egyptians slept on hard, elevated headrests, their design ______ airflow, protection from insects, and hairstyle maintenance over comfort.</p>",
        question: "<p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
        choices: [
          "had prioritized",
          "was prioritizing",
          "prioritized",
          "prioritizing"
        ],
        correctIndex: 3,
        skill: "Standard English Conventions"
      },
      {
        id: "rw-m2-24",
        passage: "<p>When designing costumes for film, American artist Suttirat Larlarb typically custom fits the garments to each actor. ______ for the film Sunshine, in which astronauts must reignite a dying Sun, she designed a golden spacesuit and had a factory reproduce it in a few standard sizes; lacking a tailor-made quality, the final creations reflected the ungainliness of actual spacesuits.</p>",
        question: "<p>Which choice completes the text with the most logical transition?</p>",
        choices: [
          "Nevertheless,",
          "Thus,",
          "Likewise,",
          "Moreover,"
        ],
        correctIndex: 0,
        skill: "Expression of Ideas"
      },
      {
        id: "rw-m2-25",
        passage: "<p>Upon first approaching artist Kurt Wenner's Dies Irae, a colorful scene painted on the surface of a cobblestone street in Mantua, Italy, one might assume a deep hole filled with life-sized, classically styled sculptures had opened up in the street. ______ by expertly applying the principles of perspective, Wenner created merely the illusion of depth.</p>",
        question: "<p>Which choice completes the text with the most logical transition?</p>",
        choices: [
          "Additionally,",
          "On the contrary,",
          "As a result,",
          "Next,"
        ],
        correctIndex: 1,
        skill: "Expression of Ideas"
      },
      {
        id: "rw-m2-26",
        passage: "<p>While researching a topic, a student has taken the following notes:</p><p>Political scientist Graham Allison is known for his Thucydides trap theory. Allison's theory states that whenever \"a rising power is threatening to displace a ruling power,\" conflict is likely. The theory is based on Thucydides's explanation of the conflict between Athens and Sparta. Thucydides wrote that \"the rise of Athens and the fear this instilled in Sparta\" made conflict \"inevitable.\" History professor Edmund Stewart recently challenged the historical basis of the theory. Stewart claimed that Athens was not a rising power and that the rivals experienced a \"clash of cultures\" instead.</p><p>The student wants to use a quotation to challenge Thucydides's explanation of the conflict between Athens and Sparta.</p>",
        question: "<p>Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>",
        choices: [
          "According to Allison's Thucydides trap theory, whenever \"a rising power is threatening to displace a ruling power,\" conflict is likely.",
          "Thucydides wrote that conflict between the two powers was \"inevitable,\" although Stewart later challenged the historical basis of this claim.",
          "According to Stewart, a \"clash of cultures\" between Athens and Sparta caused the conflict, not Athens's rise.",
          "Thucydides explained that conflict was caused by \"the rise of Athens and the fear this instilled in Sparta,\" but Allison disagreed, seeing the conflict as an example of the Thucydides trap."
        ],
        correctIndex: 2,
        skill: "Expression of Ideas"
      },
      {
        id: "rw-m2-27",
        passage: "<p>While researching a topic, a student has taken the following notes:</p><p>The factors that affect clutch size (the number of eggs laid at one time) have been well studied in birds but not in lizards. A team led by Shai Meiri of Tel Aviv University investigated which factors influence lizard clutch size. Meiri's team obtained clutch-size and habitat data for over 3,900 lizard species and analyzed the data with statistical models. Larger clutch size was associated with environments in higher latitudes that have more seasonal change. Lizards in higher-latitude environments may lay larger clutches to take advantage of shorter windows of favorable conditions.</p><p>The student wants to emphasize the aim of the research study.</p>",
        question: "<p>Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>",
        choices: [
          "Researchers wanted to know which factors influence lizard egg clutch size because such factors have been well studied in birds but not in lizards.",
          "After they obtained data for over 3,900 lizard species, researchers determined that larger clutch size was associated with environments in higher latitudes that have more seasonal change.",
          "We now know that lizards in higher-latitude environments may lay larger clutches to take advantage of shorter windows of favorable conditions.",
          "Researchers obtained clutch-size and habitat data for over 3,900 lizard species and analyzed the data with statistical models."
        ],
        correctIndex: 0,
        skill: "Expression of Ideas"
      }
    ]
  },

  math: {

    module1: [
      {
        id: "math-m1-01",
        question: "<p>In triangle <em>EFG</em>, the sum of the measures of angles <em>E</em> and <em>F</em> is 36°. What is the measure of angle <em>G</em>?</p>",
        type: "mcq",
        choices: ["36°", "54°", "108°", "144°"],
        correctIndex: 3,
        skill: "Geometry and Trigonometry"
      },
      {
        id: "math-m1-02",
        question: "<p>A local gym is offering a 25% discount on an annual membership. The regular cost of an annual membership is $288. How much less is the discounted cost of the membership than the regular cost of the membership?</p>",
        type: "mcq",
        choices: ["$25", "$72", "$216", "$288"],
        correctIndex: 1,
        skill: "Problem Solving and Data Analysis"
      },
      {
        id: "math-m1-03",
        question: "<p>The table shows three values of <em>x</em> and their corresponding values of <em>y</em>. There is a linear relationship between <em>x</em> and <em>y</em>.</p><table><tr><th>x</th><th>y</th></tr><tr><td>0</td><td>22</td></tr><tr><td>1</td><td>23</td></tr><tr><td>2</td><td>24</td></tr></table><p>Which of the following equations represents this relationship?</p>",
        type: "mcq",
        choices: ["y = x + 22", "y = 24x", "y = 24x + 2", "y = 22x"],
        correctIndex: 0,
        skill: "Algebra"
      },
      {
        id: "math-m1-04",
        question: "<p>The function <em>f</em> is defined by the equation <em>f</em>(<em>x</em>) = 380<em>x</em>. What is the value of <em>f</em>(10)?</p>",
        type: "grid",
        acceptableAnswers: ["3800"],
        skill: "Algebra"
      },
      {
        id: "math-m1-05",
        question: "<p>Which of the following equations has solutions 13 and &minus;24?</p>",
        type: "mcq",
        choices: ["(x &minus; 24)(x + 13) = 0", "(x &minus; 13)(x + 24) = 0", "(x + 13)(x + 24) = 0", "(x &minus; 24)(x &minus; 13) = 0"],
        correctIndex: 1,
        skill: "Advanced Math"
      },
      {
        id: "math-m1-06",
        question: "<p><em>y</em> = 0<br><em>y</em> = 8(<em>x</em>&sup2; &minus; 36)</p><p>Which ordered pair (<em>x</em>, <em>y</em>) is a solution to the given system of equations?</p>",
        type: "mcq",
        choices: ["(0, 6)", "(0, 36)", "(6, 0)", "(36, 0)"],
        correctIndex: 2,
        skill: "Advanced Math"
      },
      {
        id: "math-m1-07",
        question: "<p>When a scientist began observing a sample of an isotope, the mass of the sample was 530,000 milligrams. The mass of the sample decreases by half approximately every 5 days. Which of the following is closest to the mass, in milligrams, of the sample 35 days after the scientist began observing the sample?</p>",
        type: "mcq",
        choices: ["4,141", "15,143", "16,563", "75,714"],
        correctIndex: 0,
        skill: "Advanced Math"
      },
      {
        id: "math-m1-08",
        question: "<p>The height of a right circular cylinder is 31 inches, and the circumference of its base is 310 inches. Which expression represents the total surface area, in square inches, of the cylinder?</p>",
        type: "mcq",
        choices: ["(31)(310)", "&pi;(155/&pi;)&sup2;(31)", "(31)(310) + &pi;(155/&pi;)&sup2;", "(31)(310) + 2&pi;(155/&pi;)&sup2;"],
        correctIndex: 3,
        skill: "Geometry and Trigonometry"
      },
      {
        id: "math-m1-09",
        question: "<p>The function <em>f</em>(<em>w</em>) = 6<em>w</em>&sup2; gives the area of a rectangle, in square feet (ft&sup2;), if its width is <em>w</em> ft and its length is 6 times its width. Which of the following is the best interpretation of <em>f</em>(14) = 1,176?</p>",
        type: "mcq",
        choices: ["If the width of the rectangle is 14 ft, then the area of the rectangle is 1,176 ft&sup2;.", "If the width of the rectangle is 14 ft, then the length of the rectangle is 1,176 ft.", "If the width of the rectangle is 1,176 ft, then the length of the rectangle is 14 ft.", "If the width of the rectangle is 1,176 ft, then the area of the rectangle is 14 ft&sup2;."],
        correctIndex: 0,
        skill: "Algebra"
      },
      {
        id: "math-m1-10",
        question: "<p>The expression (2<em>x</em> + 5)(7<em>x</em> &minus; 10) can be written in the form <em>ax</em>&sup2; + <em>bx</em> + <em>c</em>, where <em>a</em>, <em>b</em>, and <em>c</em> are constants. What is the value of <em>a</em> + <em>b</em>?</p>",
        type: "grid",
        acceptableAnswers: ["29"],
        skill: "Advanced Math"
      },
      {
        id: "math-m1-11",
        question: "<p>The ratio <em>a</em> to <em>b</em> is equivalent to the ratio 49 to 26. What is the value of <em>a</em> when <em>b</em> = 182?</p>",
        type: "grid",
        acceptableAnswers: ["343"],
        skill: "Problem Solving and Data Analysis"
      },
      {
        id: "math-m1-12",
        question: "<p>At the beginning of the year, Imani has $170 in her account. Each month this year, she will deposit between $30 and $60 into the account. Which inequality represents all possibilities for the total amount of money <em>x</em>, in dollars, in Imani&apos;s account after 10 months of deposits this year?</p>",
        type: "mcq",
        choices: ["x &le; 300", "x &ge; 600", "170 &le; x &le; 620", "470 &le; x &le; 770"],
        correctIndex: 3,
        skill: "Algebra"
      },
      {
        id: "math-m1-13",
        question: "<p>The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = (<em>x</em> &minus; 2)(<em>x</em> &minus; 8)(<em>x</em> + 3). In the <em>xy</em>-plane, the graph of <em>y</em> = <em>h</em>(<em>x</em>) is the result of translating the graph of <em>y</em> = <em>f</em>(<em>x</em>) up 6 units. What is the <em>y</em>-coordinate of the <em>y</em>-intercept of the graph of <em>y</em> = <em>h</em>(<em>x</em>)?</p>",
        type: "mcq",
        choices: ["54", "48", "6", "0"],
        correctIndex: 0,
        skill: "Advanced Math"
      },
      {
        id: "math-m1-14",
        question: "<p>A circle has a circumference of 42&pi; centimeters. What is the diameter, in centimeters, of the circle?</p>",
        type: "grid",
        acceptableAnswers: ["42"],
        skill: "Geometry and Trigonometry"
      },
      {
        id: "math-m1-15",
        question: "<p>How many solutions does the equation 35<em>x</em> &minus; 25 = 5(7<em>x</em> &minus; 5) have?</p>",
        type: "mcq",
        choices: ["Exactly one", "Exactly two", "Infinitely many", "Zero"],
        correctIndex: 2,
        skill: "Algebra"
      },
      {
        id: "math-m1-16",
        question: "<p>On January 1, 2000, the population of a town was 26,255 and on January 1, 2010, the population was 26,956. The equation 10<em>x</em> + 26,255 = 26,956 describes this situation. Which of the following is the best interpretation of <em>x</em> in this context?</p>",
        type: "mcq",
        choices: ["The total increase in population between 2000 and 2010", "The average increase per year of the population between 2000 and 2010", "The percentage by which the population of the town increased each year between 2000 and 2010", "The projected population of the town 10 years after 2010"],
        correctIndex: 1,
        skill: "Algebra"
      },
      {
        id: "math-m1-17",
        question: "<p>For the linear function <em>f</em>, <em>f</em>(&minus;2) = &minus;9, and the slope of the graph of <em>y</em> = <em>f</em>(<em>x</em>) in the <em>xy</em>-plane is 8. Which equation defines <em>f</em>?</p>",
        type: "mcq",
        choices: ["f(x) = 8x &minus; 11", "f(x) = 8x &minus; 9", "f(x) = 8x &minus; 2", "f(x) = 8x + 7"],
        correctIndex: 3,
        skill: "Algebra"
      },
      {
        id: "math-m1-18",
        question: "<p>In the <em>xy</em>-plane, an equation of circle A is (<em>x</em> &minus; 2)&sup2; + (<em>y</em> &minus; 3)&sup2; = 9. Circle B has the same center as circle A but has a radius that is twice the radius of circle A. Which equation represents circle B?</p>",
        type: "mcq",
        choices: ["(x &minus; 2)&sup2; + (y &minus; 3)&sup2; = 18", "(x &minus; 2)&sup2; + (y &minus; 3)&sup2; = 36", "(x &minus; 2)&sup2; + (y &minus; 3)&sup2; = 54", "(x &minus; 2)&sup2; + (y &minus; 3)&sup2; = 81"],
        correctIndex: 1,
        skill: "Geometry and Trigonometry"
      },
      {
        id: "math-m1-19",
        question: "<p>Line <em>k</em> contains the points (&minus;3, &minus;60), (<em>v</em>, 0), and (5, 76). What is the value of <em>v</em>?</p>",
        type: "grid",
        acceptableAnswers: ["9/17", "0.529", ".529"],
        skill: "Algebra"
      },
      {
        id: "math-m1-20",
        question: "<p>In right triangle <em>FGH</em>, angle <em>H</em> is a right angle, angle <em>G</em> = 60°, and the hypotenuse <em>FG</em> = 68. What is the value of cos <em>F</em>?</p>",
        type: "mcq",
        choices: ["&radic;3 / 68", "1/2", "&radic;3 / 2", "34&radic;3"],
        correctIndex: 2,
        skill: "Geometry and Trigonometry"
      },
      {
        id: "math-m1-21",
        question: "<p>Based on a model, on day 1 of an 8-day experiment, a lima bean plant had an estimated mass of 253 grams, and each day after day 1 of the experiment, the estimated mass of the plant decreased by 4 grams. Which equation represents this model, where <em>m</em> is the estimated mass, in grams, of the plant on day <em>x</em> of the experiment and 1 &le; <em>x</em> &le; 8?</p>",
        type: "mcq",
        choices: ["m = &minus;4x + 245", "m = &minus;4x + 249", "m = &minus;4x + 253", "m = &minus;4x + 257"],
        correctIndex: 3,
        skill: "Algebra"
      },
      {
        id: "math-m1-22",
        question: "<p>A right triangle has legs of lengths 5 and 12. What is the length of the hypotenuse?</p>",
        type: "grid",
        acceptableAnswers: ["13"],
        skill: "Geometry and Trigonometry"
      }
    ],

    module2: [
      {
        id: "math-m2-01",
        question: "<p>A cable company charges new customers a one-time installation fee and a monthly service fee for cable service. The equation <em>y</em> = 50<em>x</em> + 120 gives the total amount <em>y</em>, in dollars, the cable company charges new customers for <em>x</em> months of cable service. What is the amount, in dollars, of the one-time installation fee the cable company charges new customers?</p>",
        type: "mcq",
        choices: ["170", "120", "70", "0"],
        correctIndex: 1,
        skill: "Algebra"
      },
      {
        id: "math-m2-02",
        question: "<p>Data set X: 13, 16, 19, 21, 24, 25, 25, 26, 38<br>Data set Y: 13, 16, 19, 21, 24, 25, 25, 26, 33</p><p>Data set Y is created by replacing the number 38 in data set X with the number 33. Which of the following statements is true about the means and medians of data set X and data set Y?</p>",
        type: "mcq",
        choices: ["The mean of data set X is greater than the mean of data set Y, and the median of data set X equals the median of data set Y.", "The mean of data set X is greater than the mean of data set Y, and the median of data set X is greater than the median of data set Y.", "The mean of data set X equals the mean of data set Y, and the median of data set X equals the median of data set Y.", "The mean of data set X is less than the mean of data set Y, and the median of data set X is greater than the median of data set Y."],
        correctIndex: 0,
        skill: "Problem Solving and Data Analysis"
      },
      {
        id: "math-m2-03",
        question: "<p><em>y</em> = 4<em>x</em> + 36</p><p>One of the two equations in a system of linear equations is given. The system has infinitely many solutions. Which equation could be the second equation in this system?</p>",
        type: "mcq",
        choices: ["y &minus; 4x = &minus;36", "y &minus; 4x = 36", "y &minus; 9x = 18", "y &minus; 9x = 0"],
        correctIndex: 1,
        skill: "Algebra"
      },
      {
        id: "math-m2-04",
        question: "<p>If <em>x</em> + 4<em>y</em> = 41 and 7<em>x</em> &minus; 20<em>y</em> = &minus;97, what is the value of <em>y</em>?</p>",
        type: "grid",
        acceptableAnswers: ["8"],
        skill: "Algebra"
      },
      {
        id: "math-m2-05",
        question: "<p><em>R</em> = 0.48<em>l</em> / <em>A</em></p><p>The given equation relates the resistance <em>R</em>, in ohms, of a wire to its length <em>l</em>, in meters, and its cross-sectional area <em>A</em>, in square meters. Which equation correctly expresses the length, in meters, of the wire in terms of its resistance, in ohms, and its cross-sectional area, in square meters?</p>",
        type: "mcq",
        choices: ["l = AR / 0.48", "l = 0.48R / A", "l = (R + A) / 0.48", "l = (R &minus; A) / 0.48"],
        correctIndex: 0,
        skill: "Algebra"
      },
      {
        id: "math-m2-06",
        question: "<p>For the polynomial function <em>f</em>, the graph of <em>y</em> = <em>f</em>(<em>x</em>) in the <em>xy</em>-plane passes through the points (&minus;5, 0), (3, 0), and (8, 0). Which of the following must be a factor of <em>f</em>(<em>x</em>)?</p>",
        type: "mcq",
        choices: ["x + 3", "x + 8", "x &minus; 3", "x &minus; 5"],
        correctIndex: 2,
        skill: "Advanced Math"
      },
      {
        id: "math-m2-07",
        question: "<p>Which of the following inequalities is equivalent to 4<em>x</em> + 5<em>y</em> &lt; 9 when solved for <em>y</em>?</p>",
        type: "mcq",
        choices: ["y &lt; (9 &minus; 4x) / 5", "y &gt; (9 &minus; 4x) / 5", "y &lt; (9 + 4x) / 5", "y &gt; (9 + 4x) / 5"],
        correctIndex: 2,
        skill: "Algebra"
      },
      {
        id: "math-m2-08",
        question: "<p>In the <em>xy</em>-plane, line <em>k</em> has a slope of 6/13, an <em>x</em>-intercept of (&minus;6, 0), and a <em>y</em>-intercept of (0, <em>p</em>). What is the value of <em>p</em>?</p>",
        type: "grid",
        acceptableAnswers: ["36/13", "2.769", "2.77"],
        skill: "Algebra"
      },
      {
        id: "math-m2-09",
        question: "<p>The measure of angle <em>S</em> is 8&pi;/13 radians. The measure of angle <em>T</em> is 3 times the measure of angle <em>S</em>. Which expression represents the measure, in degrees, of angle <em>T</em>?</p>",
        type: "mcq",
        choices: ["(8/13)(90)(3)", "(8/13)(180)(3)", "(8/13&pi;)(90)(3)", "(8&pi;/13)(180)(3)"],
        correctIndex: 1,
        skill: "Geometry and Trigonometry"
      },
      {
        id: "math-m2-10",
        question: "<p>What is the <em>x</em>-intercept of the graph of <em>y</em> = (33 &minus; <em>x</em>) / (<em>ax</em> + <em>b</em>) in the <em>xy</em>-plane, where <em>a</em> and <em>b</em> are positive constants?</p>",
        type: "mcq",
        choices: ["(&minus;b/a, 0)", "(0, 33/b)", "(0, &minus;33)", "(33, 0)"],
        correctIndex: 3,
        skill: "Advanced Math"
      },
      {
        id: "math-m2-11",
        question: "<p>The ratio <em>x</em> to <em>y</em> is equivalent to the ratio 7 to 9. If <em>x</em> = 10<em>t</em>, what is the value of <em>y</em> in terms of <em>t</em>?</p>",
        type: "mcq",
        choices: ["(7/90)t", "(9/70)t", "(70/9)t", "(90/7)t"],
        correctIndex: 3,
        skill: "Problem Solving and Data Analysis"
      },
      {
        id: "math-m2-12",
        question: "<p>A research manager selected 2 random samples of ovens of a certain type to estimate the average amount of time this type of oven takes to preheat to 325°F. Based on the first sample, the research manager estimated an average of 15.2 minutes with a margin of error of 1 minute. Based on the second sample, the estimated average was 15.4 minutes with a margin of error of 2.2 minutes. Assuming the margins of error were calculated the same way, which of the following best explains why the first sample obtained a smaller margin of error than the second sample?</p>",
        type: "mcq",
        choices: ["The first sample contained more ovens than the second sample.", "The first sample contained fewer ovens than the second sample.", "The first sample took more time on average to preheat to 325°F than the second sample.", "The first sample took less time on average to preheat to 325°F than the second sample."],
        correctIndex: 0,
        skill: "Problem Solving and Data Analysis"
      },
      {
        id: "math-m2-13",
        question: "<p><em>f</em>(<em>x</em>) = 25(1.40)<sup><em>x</em>/3</sup></p><p>For the given function <em>f</em>, the value of <em>f</em>(<em>x</em>) increases by <em>p</em>% for every increase of <em>x</em> by 6. What is the value of <em>p</em>?</p>",
        type: "mcq",
        choices: ["40", "49", "80", "96"],
        correctIndex: 3,
        skill: "Advanced Math"
      },
      {
        id: "math-m2-14",
        question: "<p>A model estimates that in a particular forest, the number of trees with any given diameter measured at shoulder height is 21% less for each 1-inch increase in tree diameter measured at shoulder height. The model can be written in the form <em>f</em>(<em>x</em>) = <em>ab</em><sup><em>x</em></sup>, where <em>a</em> and <em>b</em> are constants and <em>x</em> is the tree&apos;s diameter, in inches, measured at shoulder height, and <em>x</em> &ge; 5. The model estimates that 3,100 trees in this forest have a diameter of 13 inches measured at shoulder height. Which function best represents this model?</p>",
        type: "mcq",
        choices: ["f(x) = 3,100(0.21)<sup>x</sup>", "f(x) = 3,100(0.79)<sup>x</sup>", "f(x) = 66,000(0.21)<sup>x</sup>", "f(x) = 66,000(0.79)<sup>x</sup>"],
        correctIndex: 3,
        skill: "Advanced Math"
      },
      {
        id: "math-m2-15",
        question: "<p>The scatterplot shows a positive linear relationship between variables <em>t</em> and <em>d</em>, with data points clustered between t = 230 and t = 270, and d values ranging from approximately 420 to 490. Which of the following equations is the most appropriate linear model for the data shown?</p>",
        type: "mcq",
        choices: ["d = &minus;65.1 + 2.02t", "d = 165.1 + 2.02t", "d = 354.8 + 2.02t", "d = 389.8 + 2.02t"],
        correctIndex: 0,
        skill: "Problem Solving and Data Analysis"
      },
      {
        id: "math-m2-16",
        question: "<p>The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = <em>a</em><sup><em>x</em></sup> &minus; <em>b</em>, where <em>a</em> and <em>b</em> are constants. In the <em>xy</em>-plane, the graph of <em>y</em> = <em>f</em>(<em>x</em>) passes through the points (<em>c</em>, 7) and (2<em>c</em>, 117), where <em>c</em> is a constant. Which of the following could be the value of <em>b</em>?</p>",
        type: "mcq",
        choices: ["4", "17", "110", "124"],
        correctIndex: 0,
        skill: "Advanced Math"
      },
      {
        id: "math-m2-17",
        question: "<p>The price of an item increased by <em>p</em>% from $64 to $68. What is the value of <em>p</em>?</p>",
        type: "grid",
        acceptableAnswers: ["6.25"],
        skill: "Problem Solving and Data Analysis"
      },
      {
        id: "math-m2-18",
        question: "<p>In triangle <em>ABC</em>, the measure of angle <em>A</em> is 52° and <em>AC</em> = 35. In triangle <em>PQR</em>, the measure of angle <em>P</em> is 52° and <em>PR</em> = 105. Which additional piece of information is sufficient to prove that triangle <em>ABC</em> is similar to triangle <em>PQR</em>?</p>",
        type: "mcq",
        choices: ["AB = 30 and PQ = 30.", "AB = 30 and QR = 90.", "The measures of angle B and angle R are 34° and 94°, respectively.", "The measures of angle B and angle Q are 52° and 34°, respectively."],
        correctIndex: 2,
        skill: "Geometry and Trigonometry"
      },
      {
        id: "math-m2-19",
        question: "<p>(4/9)(4<em>x</em> + 9)(<em>x</em> + &radic;(4<em>k</em> + 9))(<em>x</em> &minus; &radic;(4<em>k</em> + 9)) = 0</p><p>In the given equation, <em>k</em> is a positive constant. The product of the solutions to the equation is 81. What is the value of <em>k</em>?</p>",
        type: "grid",
        acceptableAnswers: ["27/4", "6.75"],
        skill: "Advanced Math"
      },
      {
        id: "math-m2-20",
        question: "<p>4<em>x</em>&sup2; &minus; <em>px</em> + <em>w</em> = &minus;86</p><p>In the given equation, <em>p</em> and <em>w</em> are integer constants. The equation has exactly one real solution. Which is NOT a possible value of <em>w</em>?</p>",
        type: "mcq",
        choices: ["&minus;22", "14", "25", "314"],
        correctIndex: 2,
        skill: "Advanced Math"
      },
      {
        id: "math-m2-21",
        question: "<p>If (<em>x</em> &minus; 5) / 4 = (<em>x</em> &minus; 5) / 11, the value of <em>x</em> &minus; 5 is between which of the following pairs of values?</p>",
        type: "mcq",
        choices: ["&minus;11 and &minus;7", "&minus;6 and &minus;3", "&minus;3 and 3", "4 and 6"],
        correctIndex: 2,
        skill: "Algebra"
      },
      {
        id: "math-m2-22",
        question: "<p>The expression 6<em>x</em><sup>4</sup> + 17<em>x</em>&sup2; + 7 can be rewritten as (3<em>x</em>&sup2; + <em>a</em>)(2<em>x</em>&sup2; + <em>b</em>), where <em>a</em> and <em>b</em> are positive integers, or as (3<em>x</em>&sup2; + <em>c</em>)(2<em>x</em>&sup2; + <em>d</em>), where <em>c</em> and <em>d</em> are positive nonintegers. What is the value of <em>a</em> + <em>c</em>?</p>",
        type: "grid",
        acceptableAnswers: ["17/2", "8.5"],
        skill: "Advanced Math"
      }
    ]
  }
};

/* Directions text shown via the "Directions" button during each module. */
const DIRECTIONS = {
  readingWriting: "<p>This section has two parts. Each part includes reading passages and questions about them. For each question, choose the best answer based on the passage(s) and any introductory material provided, then select the corresponding answer choice. All questions in this section are multiple choice with four possible answers.</p><p>You may use the Highlight tool to mark important text, and the answer elimination tool to cross out choices you've ruled out.</p>",
  math: "<p>This section includes both multiple-choice and student-produced response (fill-in) questions. For multiple-choice questions, select the best answer from the four choices. For fill-in questions, type the exact value requested &mdash; fractions, decimals, and equivalent forms are all accepted.</p><p>A graphing calculator is available for the entire Math section. Click \"Calculator\" in the top right to open it.</p>"
};
