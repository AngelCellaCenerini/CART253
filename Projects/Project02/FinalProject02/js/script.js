
"use strict";

/**************************************************
'Madeleine' - Project 02: Anything
Angel Cella Cenerini
Template p5 by CART253 Course


- MADELEINE -

A pictorial journey throughout one's unconsciousness.

The program develops into five levels, each guarding hidden enigmas. The User can either
survive the challenge or solve the puzzle and surpass the level, thus achieving a collectable item (either a Voice or a Script Shred).
Depending on how well the User performs, in the end they will be able to play a melody, concluding this experience.

Further technical and conceptual details are provided in the README.md file (information regarding assets included).
**************************************************/
// Fonts
let myFontA;
let myFontB;

// Timers
let timer = 0;
let timerIntro = 10;
let timerLevel = 50;

// Title
// Madeleine Logo/Icon
let madeleine;

// Intro
// Heartbeat
let synthHeartbeat;   // also used in Ending01, Ending02
let notesHeartbeat = [`G4`, `G4`];
// Play current Note
let currentNoteHeartbeat = 0;
// Track progress
let intervalHeartbeat;
let heartrate = 0;
let volume = 0.04;
// Mirror
let mirror;  // also used in Ending01, Ending02
// Fading Effect
let fading;


// Level01
// Winged Creatures
let creatures = [];
let creature;
// Declaring Gravity
let gravityForce = 0.002;
// "POTS" Buttons
let button = {
  x: 0,
  y: 0,
  width: 300,
  height: 150,
  radius: 15
};
// Soundtrack
let synth01;
let notes01 = [`C#1`, `A1`, `Ab4`, `Bb4`, `Db4`];
let interval01;
// Guessing/Typing Word (Level01, Level02, Level05)
let typeWord01;


// Level02
// White Frame
let frame = {
  x: 0,
  y: 0,
  width: 1100,
  height: 700
}
// Projector
let projectors = [];
// Eye
let eye;
//Mic Input
let mic02;
// Soundtracks
let oscillator02;
let oscillator202;
let angle = 0;
let angleIncrease = 0.25;
// Guessing/Typing Word
let typeWord02;


// Level03
// Frog
let frog;
// Compass(es)
let compasses = [];
let numCompasses = 12;
// Mic Input
let mic03;
// Soundtrack
let synth03;
let notes03 = [`D2`, `G4`, `D4`, `D2`, `F4`, `D4`];
// Current played note
let currentNote03 = 0;
// Track interval between note
let interval03;


// Level04
// Moon(s)
let moons = [];
let redMoon;
let blueMoon;
// School of fish
let school = [];
let numberFish = 5;
// Wave(s)
let wave;
// Soundtrack
let synth04;
let notes04 = [`F5`, `G4`, `Ab3`];
let currentNote04 = 0;
let interval04;
// Eating Soundtrack
let oscillator04;


// Level05
// Arrow(s)
let arrows = [];
let numArrows = 9;
// Bunnies
let yellowBunny;
let purpleBunny;
// Soundtracks
let synth05;
let notes05 = [`E5`, `E5`, `F5`, `E#5`, `F5`, `Eb5`];
let currentNote05 = 0;
let interval05;
let oscillator05;
// Guessing/Typing Word
let typeWord05;
// Check User Accomplishments
let incomplete = true;


// All Levels
// Collected Items
let collectedScriptShred01 = false;
let collectedScriptShred02 = false;
let collectedVoice01 = false;
let collectedVoice02 = false;
let collectedVoice03 = false;

// State Status (necessary since same Fail/Pass/Success states are being used for all levels)
let currentState;
let nextState;

//Mic Input
let mic;

// TipsTable(s)
let tipsTable01;
let tipsTable02;
let tipsTable03;
let tipsTable04;
let tipsTable05;
// Tips Arrays
let cues01 = [
  ``,
  `1. What a lovely keyboard you have there,
  lying on your desk.`,
  `2. I am flickering.`,
  `3. Don't read me like that.`,
  `4. Try me backwards.`,
  `5. Did you get it yet? Type me!`
];
let cues02 = [
  ``,
  `1. I see you still have your keyboard with you.
  Good.`,
  `2. I stand to your right
  when you gaze at the rising sun.`,
  `3. Typing me is not enough.`,
  `4. Y o u   n e e d  t o
  s h u t   i t   o f f .`,
  `5. Remember what stands to your right.`,
  `6. You only have one attempt.`
];
let cues03 = [
  ``,
  `1. I see you still have your keyboard with you.
  Good.`,
  `2. Poor frog. If only you could somehow
   distract the needles from attacking it.`,
  `3. What does a compass yearn for?`
];
let cues04 = [
  ``,
  `1. They're hungry.`,
  `2. They're confused;
      they don't really want the moons.`,
  `3. They're  h u n g r y .`,
  `4. If they're not after the moons...`,
  `5. Don't be scared to play with Mother Nature.`,
];
let cues05 = [
  ``,
  `1. I see you still have your keyboard with you.
  Good.`,
  `2. We each have our own.`,
  `3. Our point of origin, where we derive from.`,
  `4. It is neither father nor mother.`,
  `5. Not plural.`
];

// PLay
// Lights
let voice;
let lights = [];
let numLights = 18;
let atmosphericLights = [];
let numAtmosphericLights = 30;
let chimingLights = [];
let numChimingLights = 6;
// Melody
// MP3 Files - Splitted Melody
let melody01SFX;
let melody02SFX;
let melody03SFX;
let melody04SFX;
let melody05SFX;
let melody06SFX;
let melody07SFX;
let melody08SFX;
let melody09SFX;
let melody10SFX;
let melodySFX;
// Script
let script = {
  x: 0,
  y: 0,
  width: 300,
  height: 600
}

// Assembling "Melody" aka a Set Sequence of Keys for User to follow
let correctKeySequence = [87, 68, 65, 83, 88, 67, 70, 86, 69, 81];
let correctKeySequence2 = [87, 68, 65, 83, 88];
let insertedKeys = [];
let insertedKeys2 = [];


// Establish Ending
let won;


// Ending02
// Lights
// States
let state = `title`        // Title, Instructions, Intro, Level01, Level02, Level03, Level04, Level05, PLay (User plays Melody)
                          // Fail (User looses), Pass (User passes level withouth solving puzzle), Success (Achieved Voice or Script),  Ending01, Ending02.

// Load Fonts
function preload(){
  // Fonts
  myFontA = loadFont('assets/AnonymousPro-Regular.otf');
  myFontB = loadFont('assets/BigShouldersStencilDisplay-Regular.otf');

  // MP3 Files - credits in README.md
  melody01SFX = loadSound('assets/sounds/1.mp3');
  melody02SFX = loadSound('assets/sounds/2.mp3');
  melody03SFX = loadSound('assets/sounds/3.mp3');
  melody04SFX = loadSound('assets/sounds/4.mp3');
  melody05SFX = loadSound('assets/sounds/5.mp3');
  melody06SFX = loadSound('assets/sounds/6.mp3');
  melody07SFX = loadSound('assets/sounds/7.mp3');
  melody08SFX = loadSound('assets/sounds/8.mp3');
  melody09SFX = loadSound('assets/sounds/9.mp3');
  melody10SFX = loadSound('assets/sounds/10.mp3');
  melodySFX = loadSound('assets/sounds/melody.mp3');
}


// setup()
//
// Basic Settings, Class(es), p5.sound matters.
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Graphics
  noStroke();
  rectMode(CENTER);
  // Texts
  textFont(myFontA);
  textSize(20);
  textAlign(CENTER, CENTER);
  // Audio
  userStartAudio();


  // Title
  // Madeleine "Logo/Icon" (a bit abstract)
  let x = width/2;
  let y = 3*height/5;
  madeleine = new Madeleine(x, y);

  // Intro
  // Heartbeats
  synthHeartbeat = new p5.PolySynth();
  // Mirror
  x = width/2;
  y = height/2;
  mirror = new Mirror(x, y);   // also used in Ending01, Ending02

  // Fading Effect
  x = width/2;
  y = height/2;
  let widthF = windowWidth;
  let heightF = windowHeight;
  fading = new Fading(x, y, widthF, heightF);


  // Level01
  // Creatures
  // Violet Creature
  x = random(11*width/25, 14*width/25);
  y = random(height/6, height/2);
  creature = new VioletCreature(x, y);
  creatures.push(creature);
  // Blue Creature
  x = random(11*width/25, 14*width/25,);
  y = random(height/6, height/2);
  creature = new BlueCreature(x, y);
  creatures.push(creature);
  // Green Creature
  x = random(11*width/25, 14*width/25,);
  y = random(height/6, height/2);
  creature = new GreenCreature(x, y);
  creatures.push(creature);

  // Soundtrack
  synth01 = new p5.PolySynth();
    for (let i = 0; i < synth01.audiovoices.length; i++) {
      let voice01 = synth01.audiovoices[i];
      voice01.oscillator.setType(`triangle`);
    }
    // Mic Input
    mic = new p5.AudioIn();
    mic.start();


  // Level02
  // Eye
  x = width/2;
  y = height/2;
  let positionX = width/2;
  let positionY = height/2;
  eye = new Eye(x, y, positionX, positionY);

  // Laser Lights Projectors
  // Top Projector
  x = width/2;
  y = height/6;
  let topProjector = new Projector(x, y);
  projectors.push(topProjector);
  // Bottom Projector
  x = width/2;
  y = 5*height/6;
  let bottomProjector = new Projector(x, y);
  projectors.push(bottomProjector);
  // Left Projector
  x = width/4;
  y = height/2;
  let leftProjector = new Projector(x, y);
  projectors.push(leftProjector);
  // Right Projector
  x = 3*width/4;
  y = height/2;
  let rightProjector = new Projector(x, y);
  projectors.push(rightProjector);

  // Soundtrack
  oscillator02 = new p5.Oscillator(0, `tan`);
  oscillator202 = new p5.Oscillator(`triangle`);
  oscillator02.amp(0.02);


  // Level03
  // Frog
  x = width/2;
  y = 3*height/4;
  positionX = width/2;
  positionY = 3*height/4;
  frog = new Frog(x, y, positionX, positionY);

  // Compasses
  for (let i = 0; i < numCompasses; i ++){
   let x = random(0, width);
   let y = random(0, height);
   // Avoid overlapping between Frog and Compass(es)
   while(dist(x, y, frog.x, frog.y) < 3*frog.height/2){
     x = random(0, width);
     y = random(0, height);
   }
   let positionX = x;
   let positionY = y;
   let size = random(70, 160);
   let compass = new Compass(x, y, positionX, positionY, size, frog);
   compasses.push(compass);
  }

  // Soundtrack
  synth03 = new p5.PolySynth();
  for (let i = 0; i < synth03.audiovoices.length; i++) {
    let voice03 = synth03.audiovoices[i];
    voice03.oscillator.setType(`triangle`);
  }


  // level04
  // Moons
  // Create Red Moon
  x = 0;
  y = height/3;
  positionX = 0;
  positionY = height/3;
  let chaseX;
  let chaseY = positionY;
  redMoon = new RedMoon (x, y, positionX, positionY, chaseX, chaseY);
  redMoon.chaseX = redMoon.x + redMoon.size/3;
  moons.push(redMoon);
  // Create Blue Moon
  x = width;
  y = height/3;
  positionX = width;
  positionY = height/3;
  chaseX = undefined;
  chaseY = positionY;
  blueMoon = new BlueMoon (x, y, positionX, positionY, chaseX, chaseY);
  blueMoon.chaseX = blueMoon.x - blueMoon.size/3;
  moons.push(blueMoon);

  // Create Water Waves
  x = mouseX;
  y = mouseY;
  wave = new Wave (x, y);

  // Create School
  for(let i = 0; i < numberFish; i ++){
    x = random(width/4, 9*width/10);
    y = random(height/9, 10*height/11);
    let moon = random(moons);
    let fish = new Fish (x, y, moon);
    school.push(fish);
  }

  // Soundtrack
  synth04 = new p5.PolySynth();
  // Eating Soundtrack
  oscillator04 = new p5.Oscillator(400, `sine`);
  oscillator04.amp(0.05);


  // Level05
  // Purple Bunny
  x = width/2;
  y = height/2;
  positionX = width/2;
  positionY = height/2;
  purpleBunny = new PurpleBunny(x, y, positionX, positionY);

  // Yellow Bunny
  x = width/6;
  y = height/3;
  yellowBunny = new YellowBunny(x, y);

  // Arrow(s)
  for (let i = 0; i < numArrows; i++){
    let x = random(0, width);
    let y = random(3*height/2, height);
    let arrow = new Arrow(x, y);
    arrows.push(arrow);
  }

  // Soundtrack
  synth05 = new p5.PolySynth();
  for (let i = 0; i < synth05.audiovoices.length; i++) {
    let voice05 = synth05.audiovoices[i];
    voice05.oscillator.setType(`triangle`);
  }
  // Ending soundtrack
  oscillator05 = new p5.Oscillator(440, `sawtooth`);
  oscillator05.amp(0.05);


  // All Levels
  // TipsTable
  // TipsTable Lv01
  x = width/2;
  y = height/2;
  tipsTable01 = new TipsTable(x, y, cues01);

  // TipsTable Lv02
  x = width/4;
  y = 2*height/5;
  tipsTable02 = new TipsTable(x, y, cues02);
  // TipsTable Lv03
  x = width/2;
  y = height/2;
  tipsTable03 = new TipsTable(x, y, cues03);
  // TipsTable Lv04
  x = width/2;
  y = height/2;
  tipsTable04 = new TipsTable(x, y, cues04);
  // TipsTable Lv05
  x = width/2;
  y = height/2;
  tipsTable05 = new TipsTable(x, y, cues05);

  // Type Word
  // Level01
  x = width/2;
  y = height/3;
  typeWord01 = new TypeWord01(x, y);
  // Level02
  x = width/2;
  y = height/4;
  typeWord02 = new TypeWord02(x, y);
  // Level05
  x = width/2;
  y = height/5;
  typeWord05 = new TypeWord05(x, y);


  // Play
  // Atmospheric Lights  - ALso in Ending02
  for(let i = 0; i < numLights; i++){
    let x = random(0, width);
    let y = random(0, height);
    let size = random(5, 30);
    let light = new Light(x, y, size);
    lights.push(light);
  }

  // Chiming Lights
  for (let i = 0; i < numChimingLights; i ++){
    let x = random(0, width);
    let y = random(0, height);
    let size = random(30, 60);
    let chimingLight = new ChimingLight(x, y, size, melody01SFX, melody02SFX, melody03SFX, melody04SFX, melody05SFX, melody06SFX, melody07SFX, melody08SFX, melody09SFX, melody10SFX);
    chimingLights.push(chimingLight);
  }

  // Success
  x = width/2;
  y = 2*height/5;
  let size = random(5, 30);
  voice = new Light(x, y, size);

  // Ending02
  // Atmospheric Lights
  for(let i = 0; i < numAtmosphericLights; i++){
    let x =  width/2;
    let y = 2*height/5;
    let size = random(5, 50);
    let atmosphericLight = new Light(x, y, size);
    atmosphericLights.push(atmosphericLight);
  }

}

// draw()
//
// Setting Up States.
function draw() {

  background(0); // black

  // Title
  if ( state === `title`){
    titleText();
    // "Madeleine" Icon (it's very abstract)
    madeleine.display();

  }

  // Instructions
  else if ( state === `instructions`){
    textInstructions();
  }

  // Intro
  else if ( state === `intro`){

    // Countdown - 10 sec
    countdown();

    // Mirror
    mirror.display();
    // Fading Effect
    fading.fade();
    fading.display();

  }

  // Level01
  else if ( state === `level01`){

    currentState = `firstLevel`;
    nextState = `level2`;

    // // Countdown - 45 sec each Level
    countdown();

    // Mic Input Lifts Creatures
    let lv01 = mic.getLevel();
    let liftAmount = map(lv01, 0, 1, - 1, -15);  // creatures initially float; this is intentionl, for different 'liftAmout' values would make it impossible for User to last

    // Winged Creatures
    for(let i = 0; i < creatures.length; i ++){
    let creature = creatures[i];
      if (creature.active){
        creature.move();
        creature.lift(liftAmount);
        creature.constrain();
        creature.gravity(gravityForce);
        creature.display();
        creature.checkImpact();
      }
    }

    orangeLine();
    delimitingWalls(); // White
    crypticButtons();  // Flickering White and Black Buttons

    // TipsTable
    tipsTable01.display();

    // Guess/Type Word
    guessWord();

  }


  // Level02
  else if ( state === `level02`){

    currentState = `secondLevel`;
    nextState = `level3`;

    // Countdown
    countdown();

    // Mic Input Calling Eye back to Focus
    let lv02 = mic.getLevel();

    // Laser Lights
    laserLights();
    // White Frame
    whiteFrame();

    // Eye
    eye.move();
    eye.restrict();
    eye.focus(lv02);
    eye.display();

    // Laser Light Projectors
    for (let i = 0; i < projectors.length; i ++){
      let projector = projectors[i];
      projector.display();
    }

    // TipsTable
    tipsTable02.display();

    // Guess/Type Word
    guessWord();

    // Soundtrack
    angle += angleIncrease;
    let tanAngle = tan(angle);
    let newFreq = map(tanAngle, -1, 1, 420, 680);
    oscillator02.freq(newFreq);

    let randomValue = random(0, 1);
    let newFrequency = map(randomValue, 0, 1, 200, 300);
    oscillator202.freq(newFrequency);


  }

  // Level03
  else if ( state === `level03`){

    currentState = `thirdLevel`;
    nextState = `level4`;

    // Countdown
    countdown();

    // Mic Input pushing away Needles
    let lv03 = mic.getLevel();

    // Frog
    frog.display();
    frog.grow();

    // Compass(es)
    for (let i = 0; i < compasses.length; i++){
      let compass = compasses[i];
      compass.update(frog, lv03);
    }

    // TipsTable
    tipsTable03.display();

  }

  // Level04
  else if ( state === `level04`){

    currentState = `fourthLevel`;
    nextState = `level5`;

    // Countdown
    countdown();

    // Moons
    for(let i = 0; i < moons.length; i++){
      let moon = moons[i];
      moon.display(moon);
      moon.move();
      // Check if both Moons have been "eaten" >> Switching to Fail State
      if(!moon.active){
        for(let j = 0; j < moons.length; j++){
          let otherMoon = moons[j];
          if(otherMoon !== moon && !otherMoon.active){
             state = `fail`;
             if (interval04 !== undefined){
               clearInterval(interval04);
               interval04 = undefined;
             }
             oscillator04.stop();
           }
         }
       }
     }

    // School of fish
    for(let i = 0; i < school.length; i++){
      let fish = school [i];
      fish.rotate();
      fish.chase();
      fish.eat();
      fish.display();
    }

    // Waves
    wave.grow();
    wave.display();

    // TipsTable
    tipsTable04.display();

    // Eating Soundtrack
    let r = random(0, 1);
    let newFreq04 = map(r, 0, 1, 240, 480);
    oscillator04.freq(newFreq04);
  }

  // Level05
  else if ( state === `level05`){

    currentState = `fifthLevel`;
    nextState = `playMelody`;

    // Countdown
    countdown();

    // Random Frequencies Values
    let r05 = random(0, 1);
    let newFreq05 = map(r05, 0, 1, 440, 880);
    oscillator05.freq(newFreq05);

    // Bunnies
    // Purple
    purpleBunny.feelHunger();
    purpleBunny.devour(yellowBunny);
    purpleBunny.close(yellowBunny);
    purpleBunny.display();

    // Yellow
    yellowBunny.move();
    yellowBunny.withdraw(purpleBunny);
    yellowBunny.trapped(purpleBunny);
    yellowBunny.display();

    // Arrows
    for (let i = 0; i < arrows.length; i++){
      let arrow = arrows[i];
      arrow.track(yellowBunny);
    }

    // TipsTable
    tipsTable05.display();

    // Guess/Type Word
    guessWord();

    // Check Collected Items
    checkUserAccomplishments();

    // Establish Ending
    determineEnding();

  }

  // Play
  else if ( state === `play`){

    currentState = `playing`;

    //  Atmospheric Lights
    for (let i = 0; i < lights.length; i ++){
      let light = lights[i];
      light.move();
      light.wrap();
      light.display();
  }
    //  Chiming Lights
    for (let i = 0; i < chimingLights.length; i ++){
      let chimingLight = chimingLights[i];
      chimingLight.move();
      chimingLight.wrap();
      chimingLight.growthDuration();
      chimingLight.display();
    }

    // Display "Script"
    displayScript();

    // Check if User follows script
    adhereToScript();

  }

  // Fail
  else if ( state === `fail`){

    textFail();
  }

  // Pass
  else if ( state === `pass`){
    // Reset Timer
    timer = 0;
    textPass();

    // Make sure sounds (of any kind) are not playing
    if (currentState === `firstLevel`){
      if (interval01 !== undefined){
         clearInterval(interval01);
         interval01 = undefined;
      }
    }
    if (currentState === `secondLevel`){
      oscillator02.stop();
      oscillator202.stop();
    }
    if (currentState === `thirdLevel`){
      if (interval03 !== undefined){
         clearInterval(interval03);
         interval03 = undefined;
      }
    }
    if (currentState === `fourthLevel`){
      if (interval04 !== undefined){
         clearInterval(interval04);
         interval04 = undefined;
      }
    }
    if (currentState === `fifthLevel`){
      if (interval05 !== undefined){
         clearInterval(interval05);
         interval05 = undefined;
      }
    }
  }

  // Success
  // Achieved Voice
  else if ( state === `successV`){
    // Reset Timer
    timer = 0;

    textSuccessVoice();

    voice.move();
    voice.wrap();
    voice.display();

  }
  // Achieved Script Shred
  else if ( state === `successS`){
    // Reset Timer
    timer = 0;

    textSuccessScript();

  }

  // Ending 01
  else if ( state === `ending01`){
    // Mirror
    mirror.active = true;
    mirror.move();
    mirror.tremble();
    mirror.display();
    // Go back to Title Screen
    setTimeout(switchToTitle, 9000);
  }

  // Ending02
  else if ( state === `ending02`){
    // Mirror
    mirror.active = true;
    mirror.broken = false;
    mirror.move();
    mirror.tremble();
    mirror.display();

    // Lights
    for (let i = 0; i < atmosphericLights.length; i++){
      let atmosphericLight = atmosphericLights[i];
      atmosphericLight.move();
      atmosphericLight.wrap();
      atmosphericLight.explode();
      atmosphericLight.display();
    }
  }

}

// Functions
// Timers
function countdown(){
  // Intro Countdown (10 sec)
  if( state === `intro`){
    if ((frameCount % 60 === 0) && (timer > 0)){
      timer--;
    }
    if ( timer === 0 ){
      // Stop "Heartbeats" SFX
      if (intervalHeartbeat !== undefined) {
        clearInterval(intervalHeartbeat);
        intervalHeartbeat = undefined;
      }
      state = `level01`;
      // Soundtrack
      if (interval01 === undefined) {
      interval01 = setInterval(playRandomNote, 500);
      }
      timer = 0;
      timer = timerLevel;
    }
  }

  // Level Countdown (50 sec)
  if( state === `level01` || state === `level02` || state === `level03` || state === `level04` || state === `level05`){
    if ((frameCount % 60 === 0) && (timer > 0)){
      timer--;
    }
    if ( timer === 0 ){
      state = `pass`;
    }
  }

}
//

// Title
function titleText(){
  push();
  fill(255);
  text(`Press ENTER to start.`, width/2, 7*height/8);
  textSize(60);
  text(`MADELEINE`, width/2, height/4);
  pop();
}
//

// Instructions
function textInstructions(){
  push();
    fill(255);
    textAlign(LEFT, RIGHT);
    text(`Welcome to 'Madeleine'.




    Survive the levels to pass on to the next challenge.
    Solve the puzzles to surpass the level and achieve the collectable items.

    When in a level, press SPACEBAR at anytime to open up the Tips Table.
    Certain levels require your microphone input, therefore choose wisely whether
    or not to allow the web page access to your audio :)
    Remember, all levels are timed.

    WARNING: Flashing Lights Warning for Level02.

    For your own safety, please keep the volume on the medium-lower end.
    Or blast the volume bar up and enjoy bleeding ears; it is your choice, after all.

    Press ENTER to continue.`, width/8, height/3);
    pop();
}
//

// Level01
function orangeLine(){
  // Orange Line
  push();
  stroke(255, 151, 46);
  strokeWeight(4);
  line(width/3, 5*height/7, 2*width/3, 5*height/7);
  pop();
}

function delimitingWalls(){
  // White Lines/Walls
  push();
  stroke(255);
  strokeWeight(15);
  line(width/3, 0, width/3, height);
  line(2*width/3, 0, 2*width/3, height);
  strokeWeight(8);
  line(8*width/25, 0, 8*width/25, height);
  line(17*width/25, 0, 17*width/25, height);
  pop();
}

function crypticButtons(){
  // Cryptict Buttons
  // Positive
  button.x = width/6;
  button.y = height/2;

  push();
  noStroke();
  fill(255);
  rect(button.x, button.y, button.width, button.height, button.radius, button.radius, button.radius, button.radius);
  pop();
  // Black Text
  push();
  textSize(70);
  textFont(myFontB);
  fill(random(0, 255));
  text(`POTS`, width/6, height/2);
  pop();

  // Negative
  button.x = 5*width/6;
  button.y = height/2;

  push();
  stroke(255);
  strokeWeight(8);
  noFill();
  rect(button.x, button.y, button.width, button.height, button.radius, button.radius, button.radius, button.radius);
  pop();
  // White Text
  push();
  textFont(myFontB);
  textSize(70);
  fill(random(0, 255));
  text(`POTS`, 5*width/6, height/2);
  pop();
}
//

// Level02
function laserLights(){
  // Laser Lights
  for(let i=0; i<12;i++){
    let x1 = random(frame.x - frame.width/2, frame.x + frame.width/2);
    let y1 = random (frame.y - frame.height/2, frame.y + frame.height/2);
    let x2 = random(frame.x - frame.width/2, frame.x + frame.width/2);
    let y2 = random (frame.y - frame.height/2, frame.y + frame.height/2);
    push();
    let r = random(100, 255);
    let g = random(100, 255);
    let b = random(100, 255);
    stroke(r, g, b);
    strokeWeight(4);
    line(x1,y1,x2,y2);
    pop();
  }
}

function whiteFrame(){
  // White Frame
  push();
  noFill();
  stroke(255);
  strokeWeight(3);
  frame.x = width/2;
  frame.y = height/2;
  rect(frame.x, frame.y, frame.width, frame.height);
  pop();
}
//


// PLay
function displayScript(){
  // Display "Script"
  script.x = width/8;
  script.y = height/2;

  push();
  fill(255, 255, 255, 70);
  rect(script.x, script.y, script.width, script.height);
  fill(255);
  text(`Follow the script:

  W
  D
  A
  S
  X`, script.x, script.y - script.height/6);
  if(!incomplete){  // User has collected both Script Shreds
    text(`
    C
    F
    V
    E
    Q`, script.x, script.y + script.height/9);
    pop();
  }
}

function adhereToScript(){
  // Check if User is following Script (Key Sequence stored in Array)
  // Depending on how many items User collected, they will be able to play half or the entire melody.
  if (!incomplete){
    // User collects all items
    if (insertedKeys.length === correctKeySequence.length){
        for(let i = 0; i < correctKeySequence.length; i ++){
          if(insertedKeys[i] !== correctKeySequence[i]){
           state = `fail`;
           insertedKeys.length = 0;
           melodySFX.stop();
          }
          else {
              if(won){
                state = `ending02`;
                melodySFX.play(1);
              }
              else{
                state = `ending01`;
                if (intervalHeartbeat === undefined) {
                 intervalHeartbeat = setInterval(playNextNote, 900);
                }
              }
            }
           }
         }
       }
     // User doesn't collect all Items
     else{
       if (insertedKeys2.length === correctKeySequence2.length){
           for(let i = 0; i < correctKeySequence2.length; i ++){
             if(insertedKeys2[i] !== correctKeySequence2[i]){
              state = `fail`;
              insertedKeys2.length = 0;
              }
              else {
                state = `ending01`;
                if (intervalHeartbeat === undefined) {
                 intervalHeartbeat = setInterval(playNextNote, 900);
                }
                }
             }
      }
     }
}
//


// Fail
function textFail(){
  // White Text
  push();
  fill(255);
  textSize(40);
  text(`Yikes. Try again?`, width/2, height/3);
  textSize(20);
  text(`Press R to reset the level.`, width/2, 2*height/3);
  pop();
}
//

// Pass
function textPass(){
  // White Text
  push();
  fill(255);
  textSize(40);
  text(`You did good.
  Yet, not good enough.`, width/2, height/3);
  textSize(20);
  text(`Press ENTER to proceed to the next level.`, width/2, 2*height/3);
  pop();
}
//

// Success
// Achieved Voice
function textSuccessVoice(){
  // White Text
  push();
  fill(255);
  textSize(40);
  text(`Success! You achieved a Voice.`, width/2, height/2);
  textSize(20);
  text(`Press ENTER to proceed to the next level.`, width/2, 2*height/3);
  pop();
}

function textSuccessScript(){
  // Achieved Script Shred
  // White Text
  push();
  fill(255);
  textSize(40);
  text(`Success! You achieved a Script Shred.`, width/2, height/2);
  textSize(20);
  text(`Press ENTER to proceed to the next level.`, width/2, 2*height/3);
  pop();
}
//

// Switch Between levels
// After failing Level
function resetLevel(){
  // Reset Level
  if(currentState === `firstLevel`){
    state = `level01`;

    // Reset Timer
    timer = timerLevel;

    // Make sure TipsTable is not active before level starts
    tipsTable01.active = false;

    // Restore Creature(s)
    for(let i = 0; i < creatures.length; i++){
      let creature = creatures[i];
      creature.x = random(11*width/25, 14*width/25);
      creature.y = random(height/10, height/5);
      creature.vx = 0;
      creature.vy = 0;
      creature.ax = 0;
      creature.ay = 0;
      creature.active = true;
    }

    // Soundtrack
    if (interval01 === undefined) {
     interval01 = setInterval(playNextNote, 500);
    }

    // Deleting any Typed Input
    typeWord01.currentInput = ``;
  }
  else if(currentState === `secondLevel`){
    state = `level02`;

    // Reset Timer
    timer = timerLevel;

    // Make sure TipsTable is not active
    tipsTable02.active = false;

    // Soundtracks
    oscillator02.start();
    oscillator202.start();

    // Deleting any Typed Input
    typeWord02.currentInput = ``;

  }
  else if(currentState === `thirdLevel`){
    state = `level03`;

    // Reset Timer
    timer = timerLevel;

    // Make sure TipsTable is not active
    tipsTable03.active = false;

    // Soundtrack
    if (interval03 === undefined) {
     interval03 = setInterval(playNextNote, 500);
    }

    // Restore Compass(es)
    for (let i = 0; i < compasses.length; i ++){
     let compass = compasses[i];
     compass.x = random(0, width);
     compass.y = random(0, height);
     // Avoid overlapping between Frog and Compass(es)
     while(dist(compass.x,compass. y, frog.x, frog.y) < 3*frog.height/2){
       compass.x = random(0, width);
       compass.y = random(0, height);
     }
     compass.positionX = compass.x;
     compass.positionY = compass.y;
     compass.vx = 0;
     compass.vy = 0;
     compass.size = random(70, 160);
     compass.stallingTime = 0;
     compass.switchTime = 0;
     compass.delayTime = 0;
   }
   // Restore Frog
   frog.wounded = false;
   frog.size = frog.originalSize;
}
  else if(currentState === `fourthLevel`){
    state = `level04`;

    // Reset Timer
    timer = timerLevel;

    // Make sure TipsTable is not active
    tipsTable04.active = false;

    // Restore Soundtrack
    if (interval04 !== undefined){
     clearInterval(interval04);
     interval04 = undefined;
    }

    // Restore Moons
    for(let i = 0; i < moons.length; i++){
      let moon = moons[i];
      moon.active = true;
    }
    // Restore Fish
    for(let i = 0; i < school.length; i++){
      let fish = school[i];
      fish.x = random(width/4, 9*width/10);
      fish.y = random(height/9, 10*height/11);
      fish.moon = random(moons);
    }
  }
  else if(currentState === `fifthLevel`){
    state = `level05`;

    // Reset Timer
    timer = timerLevel;

    // Make sure TipsTable is not active
    tipsTable05.active = false;

    // Restore Yellow Bunny
    yellowBunny.x = width/6;
    yellowBunny.y= height/3;
    // Restore Arrows
    for(let i = 0; i < arrows.length; i++){
      let arrow = arrows[i];
      arrow.x = random(0, width);
      arrow.y = random(3*height/2, height);
    }

    // Restore Soundtrack
    if (interval05 === undefined) {
      interval05 = setInterval(playNextNote, 500);
    }

    // Deleting any Typed Input
    typeWord05.currentInput = ``;

  }
  else if(currentState === `playing`){
    state = `play`;
    insertedKeys.length = 0;
    insertedKeys2.length = 0;
}
}

// After passing/surpassing Level
// Proceed to Next Level
function nextLevel(){
  if (nextState === `level2`){
    state = `level02`;
    // Start Timer
    timer = timerLevel;
    // Soundtracks
    oscillator02.start();
    oscillator202.start();
  }
  else if (nextState === `level3`){
    state = `level03`;
    // Start Timer
    timer = timerLevel;
    for(let i = 0; i < compasses.length; i++){
      let compass = compasses[i];
      compass.switchTime = 0;
    }

    // Soundtrack
    if (interval03 === undefined) {
     interval03 = setInterval(playNextNote, 500);
    }
  }
  else if (nextState === `level4`){
    state = `level04`;
    // Start Timer
    timer = timerLevel;
    // // Soundtrack
    if (interval04 !== undefined){
     clearInterval(interval04);
     interval04 = undefined;
    }

  }
  else if (nextState === `level5`){
    state = `level05`;
    // Start Timer
    timer = timerLevel;
    // Soundtrack
    if (interval05 === undefined) {
      interval05 = setInterval(playNextNote, 500);
    }
  }
  else if (nextState === `playMelody`){
    state = `play`;
    insertedKeys.length = 0;
    insertedKeys2.length = 0;

  }
}

function checkUserAccomplishments(){
  //Check if User is missing Script Shreds (2 total)
  if((collectedScriptShred01 === true) && (collectedScriptShred02 === true)){
    incomplete = false;
  }
}
//

// Determine Ending
function determineEnding(){
  // Choose Ending (01 or 02) considering items collected by User
   if ((collectedVoice01 === true) && (collectedVoice02 === true) && (collectedVoice03 === true) && (collectedVoice01 === true) && (collectedScriptShred02 === true)){
      won = true;
    }
    else{
    won = false;
  }
}
//

// Switch to Title Screen
function switchToTitle(){
state = `title`;
// Stop "Heartbeat" SFX
if (intervalHeartbeat !== undefined) {
  clearInterval(intervalHeartbeat);
  intervalHeartbeat = undefined;
}
}
//

// Soundstracks
function playRandomNote(){

  // level01
  if (state === `level01`){
    // Play Notes Randomly
    let note01 = random(notes01);
    synth01.play(note01, 1, 1, 1);
  }

}

function playNextNote() {

  // Intro, Ending01, Ending02
  if (state === `intro` || state === `ending01`){
    // Play notes
    let noteHeartbeat = notesHeartbeat[currentNoteHeartbeat];
    heartrate = heartrate + volume;
    synthHeartbeat.play(noteHeartbeat, heartrate, 0, 0.3);
    // Scroll through notes + reset index
    currentNoteHeartbeat = currentNoteHeartbeat + 1;
    if (currentNoteHeartbeat === notesHeartbeat.length) {
      currentNoteHeartbeat = 0;
    }
  }


  // level03
  if (state === `level03`){
    // PLay notes
    let note03 = notes03[currentNote03];
    synth03.play(note03, 0.1, 1, 1);
    currentNote03 = currentNote03 + 1;
    if (currentNote03 === notes03.length) {
      currentNote03 = 0;
    }
  }

  // Level04
  if (state === `level04`){
    let note04 = notes04[currentNote04];
    // Play notes
    synth04.play(note04, 0.1, 0, 0.1);
    currentNote04 = currentNote04 + 1;
    if (currentNote04 === notes04.length) {
      currentNote04 = 0;
    }
  }

  // Level05
  if (state === `level05`){
    // PLay noyes
    let note05 = notes05[currentNote05];
    synth05.play(note05, 0.2, 0.1, 0.1);
    currentNote05 = currentNote05 + 1;
    if (currentNote05 === notes05.length) {
      currentNote05 = 0;
    }
  }
}
//

// Guessing/Typing Word - Level01, Level02, Level05
function guessWord(){
  if (state === `level01`){
    for (let i = 0; i < projectors.length; i ++){
      let projector = projectors[i];
      typeWord01.checkInput();
    }
    typeWord01.checkInputProgress();

  }
  else if (state === `level02`){
    typeWord02.checkInput();
    typeWord02.checkInputProgress();

  }
  else if (state === `level05`){

    typeWord05.checkInput(purpleBunny); // arrows[] dealt with in TypeWord05 class
    typeWord05.checkInputProgress();

  }

}

// p5 Events
function keyPressed(){

  // Type/Guess Word
  if (state === `level01`){
    typeWord01.keyPressed();
  }
  else if (state === `level02`){
    typeWord02.keyPressed();
  }
  else if (state === `level05`){
    typeWord05.keyPressed();
  }

  if (state === `level03`){
    for (let i = 0; i < compasses.length; i++){
      let compass = compasses[i];
      compass.keyPressed();
    }
  }


if (state === `play`){

  // Store User Input
  if (!incomplete){
      insertedKeys.push(keyCode);
  }    else{
      insertedKeys2.push(keyCode);
  }

  // Chiming Lights
  for (let i = 0; i < chimingLights.length; i ++){
    let chimingLight = chimingLights[i];
    chimingLight.keyPressed();
  }
}

// User presses ENTER
if(keyCode === 13){
  if(state === `title`){
    state = `instructions`;
  }
  else if (state === `instructions`){
    state = `intro`;
    timer = timerIntro;
    if (intervalHeartbeat === undefined) {
     intervalHeartbeat = setInterval(playNextNote, 900);
    }
  }
  else if( state === `pass` || state === `successV`|| state === `successS`){
    nextLevel();
  }
}
else if (keyCode === 32){   // User presses SPACEBAR
  // TipsTable(s)
  if (state === `level01`){
    tipsTable01.keyPressed();
  }
  else if(state === `level02`){
    tipsTable02.keyPressed();
  }
  else if (state === `level03`){
    tipsTable03.keyPressed();
  }
  else if (state === `level04`){
    tipsTable04.keyPressed();
  }
  else if (state === `level05`){
    tipsTable05.keyPressed();
  }

}
else if (keyCode === 82){  // User presses R to Reset Level
  if( state === `fail`){
    resetLevel();
  }
}

}

function keyTyped() {
  // Type/diplay pressed key
  if (state === `level01`){
    typeWord01.keyTyped();
  }
  else if(state === `level02`){
    typeWord02.keyTyped();
  }
  else if(state === `level05`){
    typeWord05.keyTyped();
  }

}

function mousePressed() {

  if(state === `level02`){
    // Laser Light Projector
    for (let i = 0; i < projectors.length; i ++){
      let projector = projectors[i];
      projector.mousePressed();
    }
  }

  if(state === `level04`){

    // Soundtrack
    if (interval04 === undefined) {
      interval04 = setInterval(playNextNote, 500);
    }

    // Create Waves
    let createdWave = wave.mousePressed();
    if(createdWave){
      for(let i = 0; i < school.length; i++){
        let fish = school[i];
        fish.target = wave;
      }
    }
    // Make Clicked Fish as the School's target
    for(let i = 0; i < school.length; i++){
      let fish = school[i];
      if(fish.isClicked()){
        wave.active = false;
        for(let j = 0; j < school.length; j++){
          let otherFish = school[j];
          if(otherFish !== fish){
            otherFish.target = fish;
            fish.speed = 0;  // targeted fish frezzes (cretaes better experience this way)
            if (interval04 !== undefined){
              clearInterval(interval04);
              interval04 = undefined;
            }
            oscillator04.start();
          }
        }
        break;
      }
    }
  }

  // TipsTable(s) - all Levels
  if (state === `level01`){
    tipsTable01.mousePressed();
  }
  else if(state === `level02`){
    tipsTable02.mousePressed();
  }
  else if (state === `level03`){
    tipsTable03.mousePressed();
  }
  else if (state === `level04`){
    tipsTable04.mousePressed();
  }
  else if (state === `level05`){
    tipsTable05.mousePressed();
  }

}
//
