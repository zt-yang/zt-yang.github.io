# Welcome to Genesis Project

In this documentation, we describe the Genesis Story Understanding System. Genesis reads short stories expressed in English, then it answers questions, interprets with controllable allegiances and cultural biases, notes personality traits, anticipates trouble, measures conceptual similarity, aligns stories, reasons analogically...

The stories Genesis read include summaries of plays, fairy tales, international conflicts, and Native American creation myths.

Genesis

Let's see a simplified example of how Genesis


Here we show a road map to help you make sense and make use of the Genesis system.

You can see our approach to different aspects of cognitive modeling:

* Natural language processing - MIT InfoLab's START parser and a frame-based representation called [Innerese](innerese.md).

English  |  START Parse &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|  Innerese
--|---|--
John killed Peter with a knife  | [john kill+1 peter]<br />[kill+1 with+1 knife+15830]<br />[john has_number singular]<br />[john is_proper yes]<br />[john has_det null]<br />[peter has_number singular]<br />[peter is_proper yes]<br />[peter has_det null]<br />[knife+15830 has_number singular]<br />[knife+15830 has_det indefinite]<br />[with+1 has_position trailing]<br />[kill+1 has_person 3]<br />[kill+1 has_tense past]<br />[kill+1 is_main yes]  |  ![innerese-kill](imgs/innerese-kill.png)

* Reasoning - Match the frames of events and rules, which are used for deductions, explanations, predictions, abductions,

You can dive into the ideas with which we model different aspects of human's story understanding and story telling capacities:

* [Hypothetical reasoning](hypothetical-reasoner.md)
* [Story alignment](story-aligner.md)
* [Story telling](story-teller.md)
* [Story retelling](story-reteller.md)
* [Story summarizing](story-summarizer.md)


## Systems

To download the Genesis System source code, follow [installation instructions](genesis-installation.md).

You can try out a series of [demonstrations](genesis-demonstrations.md).

You can also dive into tutorials into the fundamentals of

Genesis

To try out Genesis's semantic representation


The Genesis project was lead by [Patrick Henry Winston](https://people.csail.mit.edu/phw/) (1943 – 2019), former director of the MIT Artificial Intelligence Laboratory and Ford Professor of Artificial Intelligence and Computer Science Laboratory at MIT.
