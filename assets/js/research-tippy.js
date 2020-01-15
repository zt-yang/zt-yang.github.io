$(document).ready(function() {

		// Story Understanding
		tippy('#trait-learner', {
			interactive: true,
			placement: "left",
			theme: "light",
			animation: "shift-away-extreme",
			content: "Matthew Paul Fay (<a href='http://groups.csail.mit.edu/genesis/papers/fay%202014.pdf'>2014, PhD</a>) developed methods for automaticly learning character traits in both an unsupervised way using topic modeling (Latent Semantic Analysis) and a semi-supervised way using a new method of alignment-based trait learning. The model unexpectedly discovered the trait of doomed royalty, with which a character is both to be king and to be killed",
		});
		tippy('#mental-model', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: "Jessica Noss (<a href='https://groups.csail.mit.edu/genesis/papers/2017%20Jessica%20Noss.pdf'>2017, MEng</a>) developed Perspectives Expert, a program that forms detailed mental models of characters in a story, thus able to retell the stories from different character's perspectives, answer reading-comprehension questions to demonstrate understanding, and explaining opposing viewpoints to reconciliate conflict. The program retells the stories of Inspector Javert and Jean Valjean in Les Miserables, along with their goals and interpretation of events that they observe, showing the reader why they think and act differently."
		});
		tippy('#action-predictor', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: "Dylan Holmes (<a href='http://groups.csail.mit.edu/genesis/papers/2017%20Dylan%20Holmes.pdf'>2017, MS</a>) developed PERSONATE, a program that predicts what a character would do in a novel situation based on his methods, motives, and moral constraints inferred from previous actions."
		});


		tippy('#reader-emotion-predictor', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: "Ryan Alexander (<a href='http://groups.csail.mit.edu/genesis/papers/2016%20Ryan%20Alexander.pdf'>2016, MEng</a>) developed Isabella, a program that determines the emotions evoked by individual words, a sentence, or a story. (1) it has a vector space model trained on multiple corpus that assigns each word a six-dimensional vector, representing Ekman’s six basic emotions: anger, sadness, joy, surprise, disgust, and fear. (2) To infer the emotions of multiple characters in the story, Isabella aligns the story to story patterns in a memory bank that label the typical emotions of those characters."
		});
		tippy('#author-intention-detector', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: "Suri Bandler (<a href='http://groups.csail.mit.edu/genesis/papers/2019%20Suri%20Bandler.pdf'>2018, MEng</a>) developed RASHI, a program that reads short news-like stories and identifies rhetorical indicators using a system of 'experts', such as <code>The Passive Voice Expert</code> and <code>The Repetition Expert</code>. The program explains author's intentions along three dimensions--sympathy, agency, and doubt, after reading story <i>Regime slaughters freedom fighter</i>"
		});
		tippy('#story-comparer', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: "Caryn Krakauer (<a href='http://groups.csail.mit.edu/genesis/papers/krakauer%202012.pdf'>2012, MS</a>) developed The Similarity Module, a program that retrives and compares stories. It uses two methods to measure similarity: (1) Vector Angle, which calculates the similarity between vectors of concept patterns (order doesn't matter); (2) In-Order comparison, which is the ratio of the aligned patterns to the total number of patterns. Given 15 conflict stories to compare, when the program uses Genesis discovered concept patterns and vector matching, its result best predicts human results."
		});
		tippy('#question-answerer', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: "Jessica Noss (<a href='https://groups.csail.mit.edu/genesis/papers/2017%20Jessica%20Noss.pdf'>2017, MEng</a>) developed Perspectives Expert, answer 'Does' and 'Why does' questions from the perspectives of different characters.<br><br> Dylan Holmes (<a href='http://groups.csail.mit.edu/genesis/papers/2017%20Dylan%20Holmes.pdf'>2017, MS</a>) developed PERSONATE, a program that predicts what a character would do in a novel situation based on his methods, motives, and moral constraints inferred from previous actions. Hypothetical expert, a program that answers What-If questions about alternative stories. It discovers the pattern of spiteful violence instead of self-defense when asked 'what would happen if Alex doesn't brandish a knife?' It discovers Teaching a lesson instead of aggression of a bully when asked 'what would happen if I am not from Estonia?'   <br><br>Hiba Awad (<a href='http://groups.csail.mit.edu/genesis/papers/awad%202013.pdf'>2013, MEng</a>) developed a program that answers 'Did Lu kill Shan because America is individualistic' by inserting the prior belief of 'I believe America is individualistic' into the story and finding the causal chains."
		});


		tippy('#rule-learner', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: "Michael Klein (<a href='http://groups.csail.mit.edu/genesis/papers/Klein%202008.pdf'>2008, MEng</a>) designed Lattice-Learning, a concept-learning algorithm that can learn Thread descriptions and rules from very few examples. For example, 'Robins, bees and helicopters can fly, but cats, worms and boats cannot,' is enough for Understand to narrow in on our concept of flying things: birds, insects and aircraft. <br><br> Michael also developed Understand, a program that learns to transform parsed English into semantic frames using Lattice-Learning. It takes only 8 positive and 4 negative examples to teach Understand how to interpret sentences as complicated as 'The cat ran from the yard because a dog appeared.'"
		});
		tippy('#HTN-learner', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: "Zhutian Yang (<a href='https://dspace.mit.edu/bitstream/handle/1721.1/119668/CMHI-Report-3.pdf?sequence=1&isAllowed=y'>2018</a>) developed Genesis Novice Learners that acquire hierarchical procedural knowledge by asking questions and by aligning successful problem-solving stories. One learner learns the steps to make a real-world fruit salad by conversing with a human. Another learner learns to replace a phone battery from two 80-word stories that have much irrelevant detail and nothing expressed in exactly the same way."
		});
		tippy('#story-pattern-learner', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: "Zhaozheng Alice Jin (<a href='http://groups.csail.mit.edu/genesis/papers/2019%20Alice%20Jin.pdf'>2019, MEng</a>) developed MAXIM, a program that aligns two stories by the emotional states of characters and explains the moral using the common causes of the emotions. The program learns 'It’s ok if you are different because Valuable Rudolph is different' after reading <i>Rudolph the Red-Nosed Reindeer</i> and <i>The Math Aficionado</i>.<br><br> Mark Finlayson (<a href='http://groups.csail.mit.edu/genesis/papers/Finlayson%202011.pdf'>2011, PhD</a>) developed Analogical Story Merging, a new machine learning algorithm that can extract culturally-relevant plot patterns from sets of annotated folktales."
		});


		// Problem solving

		tippy('#', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: ""
		});
		tippy('#', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: ""
		});
		tippy('#', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: ""
		});


		tippy('#', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: ""
		});
		tippy('#', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: ""
		});


		tippy('#', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: ""
		});
		tippy('#', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: "Tristan Thrush (<a href=''>2018</a>)Partial Mental State Inducer (PMSI), which models how humans canlearn intuition for problem solving.   We believe that this is the first model that unifies theoriesof  K-lines,  human  inner  language,  human  problem  solving,  and  neural  reinforcement  learning.The result is human-like learning in a training environment that is too data-starved for traditionalreinforcement learning to be successful. We present experiments in three distinct problem domains(natural language queries, equation solving, and robot planning) with only 20 training problems ineach domain."
		});

		// Story telling

		tippy('#', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: ""
		});
		tippy('#', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: ""
		});
		tippy('#', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: ""
		});
		tippy('#', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: ""
		});


		tippy('#viewpoint-explainer', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "right",
			content: "Jessica Noss (<a href='https://groups.csail.mit.edu/genesis/papers/2017%20Jessica%20Noss.pdf'>2017, MEng</a>) developed Perspectives Expert, a program that forms detailed mental models of characters in a story, thus able to retell the stories from different character's perspectives, answer reading-comprehension questions to demonstrate understanding, and explaining opposing viewpoints to reconciliate conflict. The program retells the stories of Inspector Javert and Jean Valjean in Les Miserables, along with their goals and interpretation of events that they observe, showing the reader why they think and act differently."
		});
		tippy('#', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: ""
		});
		tippy('#', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: ""
		});
		tippy('#', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: ""
		});


		tippy('#interactive-task-learner', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: "Zhutian Yang (<a href='https://dspace.mit.edu/bitstream/handle/1721.1/119668/CMHI-Report-3.pdf?sequence=1&isAllowed=y'>2018</a>) developed Genesis Novice Learners that acquire hierarchical procedural knowledge by asking questions. The program learns the steps to make a real-world fruit salad, make a breakfast cereals, and season a plate of pasta by conversing with humans."
		});
		tippy('#interactive-concept-learner', {
			interactive: true,
			theme: "light",
			animation: "shift-away-extreme",
			placement: "left",
			content: "Jake Barnwell (<a href='https://groups.csail.mit.edu/genesis/papers/2018%20Jake%20Barnwell.pdf'>2018, MEng</a>) developed STUDENT, an interactive learning system that takes in a small series of positive and negative examples of concepts and builds an internal model for these concepts, including the elements that is required, forbidden, and optional."
		});

});
