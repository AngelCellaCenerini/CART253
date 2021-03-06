# Template p5 project

NTRO:

This is 'Madeleine'.
The project changed and evolved throughout the process of coding it, therefore the choice in title remains the one presented in the Proposal (les madeleines de Proust as synesthésie), although the concept came out much more abstract than I was expecting.



CONCEPT:

The images and animations are vague in order to leave plenty of room for interpretation.
Personally, I imagined the program to resemble a "journey" through the unconscious (hence why the mirror -which could represent ourselves, or our reality- and the """heartbeat""" synth). The user can decide the circumstances of such condition. Needless to say, the aim was to create a suspended, dream-like atmosphere that could reflect our minds. In theory, I intended the varying states to vaguely recall our senses (sight, touch, taste, hearing - smell excluded).
Either that or lines of broken code.
Really, it could be everything, or nothing at all. It probably makes little sense to explain it in words if the program doesn't speak for itself.
Mostly, I'd say it's my final project for CART253 Fall 2020.



RIDDLE SOLUTIONS:

Level01:

1.This suggests that the level will require some sort of keyboard input form the User (be it typing or simply pressing a specific key).

2.Pay attention to the "POTS" buttons (only flickering element on screen).

3.Instead of reading it from left to right (the way we are probably most familiar with), read the word 'pots' backwards: 'stop'.

4.A more explicit suggestion.

5.Type the word.


solution: typing 'stop'.

Level02:

1.Again, suggests that the level will require some sort of keyboard input form the User (be it typing or simply pressing a specific key).

2.The sun rises at East; when facing it("gaze"), we have the South to our right. User has to type in 'south'.

3.Somthing else is required; by this point, the projectors (white rectangles) have been activated.

4.User needs to switch lights off; the only element other than the eye and the lights are the projectors.

5.Specifically, only the bottom one (at the South) will work.

6.User fails level if they try clicking a different projector from the bottom one.

solution: user types in 'south' and proceeds to click the projector at the bottom of the frame.


Level03:

1.Again, suggests that the level will require some sort of keyboard input form the User (be it typing or simply pressing a specific key).

2.User has to permanently drive away compasses' needles.

3.A compass searches/follows the North. This cue, together with the first one, suggests to convey that via keyboard input. Because the compass points to the North, the correct key to press is UP_ARROW.

solution: pressing UP_ARROW.


Level04:

1.The fish are chasing the moons to "eat" them; they're "hungry", aka, looking for something.

2.Although the fish are chasing the moons, that's not what they're truly after.

3.User needs to find different target for fish.

4.The only other element aside from the moons themselves (and the waves, though they disappear shortly after being generated) are the other fish.
5.Cannibalism is part of the circle of life. User is encouraged to direct school to chase and "eat" selected fish.

solution: clicking on a fish.


Level05:

1.Again, suggests that the level will require some sort of keyboard input form the User (be it typing or simply pressing a specific key).

2/3/4/5. Generally, all cues to make the user guess the word 'parent'.

solution: typing 'parent'.



CODING:

This program is an assembling of all minor programs (mainly concerning different levels), which can be found in the Projects/Project02/Drafts Folder. GitHub here will explicitly indicate which specific folder the lines are being taken from.

I have passive-aggressively tested out the program several times, and I de-bugged all errors I encountered. However, I wouldn't be surprised if I missed some; apologies in advance.


Two quick notes on the program itself:

1.I am aware that some things could be better structured and that perfection is a never-ending process, though I am quite satisfied with the final result.

2.Depending on the screen one is displaying the program on, the dimensions (eg: x, y, size) vary. I really hope it doesn't come out distorted or re-dimensioned!


Notably, I had -embarrassingly- major issues with collectedItems/Voices/ScriptShreds array(GitHub will testify to that) and decided to use variables/if-statements instead. Not ideal, though it does the job?



ASSETS - "A Nostalgic Dream", Peter Gundry:

As promised in the Proposal, all assets, except for the infamous Melody, have been generated through code.

(Hence why the accidental 19*this.width/31.

In my defense, it's math).


The only exception, as mentioned, is the .mp3 file melody, which plays the small masterpiece that is "A Nostalgic Dream", by Peter Gundry.

Although I did slightly modify the original version to make the sound fit better the mood of my program.

Initially, I had planned to experiment around with p5.sound and create my own 'melody', although the results were...questionable. I guarantee I am doing everyone's ears a favor here.



P.S. I feel compelled to stress that I was greatly assisted by the Prof. and TA (would it be so absurd to define it as a group project XD?)
