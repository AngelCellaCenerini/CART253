
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

Further technical and conceptual details are provided in the README.md file.
**************************************************/
// Fonts
let myFontA;
let myFontB;

// Timers
let timer = 0;
let timerIntro = 10;
let timerLevel = 2;

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
// Check User Accomplishments
let incomplete;


// All Levels
// Collected Items
let collectedItems = [];
let collectedScriptShreds = [];
let collectedScriptShred;
let collectedVoices = [];
let collectedVoice;

// State Status (necessary since same Fail/Pass/Success states are being used for all levels)
let currentState;
let nextState;

//Mic Input
let mic;

// TipsTable(s)
let tipsTables = [];  // for "deactivating" TipsTable when not in a level
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
  `4. You only have one attempt.`,
  `5. S h u t   i t   o f f .`
];
let cues03 = [
  ``,
  `1. I see you still have your keyboard with you.
  Good.`,
  `2. Poor frog. If only you could somehow
   distract the needles form attacking it.`,
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
// Guessing/Typing Word (Level01, Level02, Level03)
let typeWord;

// PLay
// Lights
let atmosphericLights = [];
let numAtmosphericLights = 20;
let chimingLights = [];
let numChimingLights = 6;
// Melody
let melody;
let synthM;
let sequences = {
  g: [`D4`, `F4`,`A5`,`G4`],
  f: [`F4`, `E4`,`C4`,`D4`],
  h: [`D4`, `F4`,`A5`,`D5`, `D5`, `Db5`,`D5`,`A6`],
  t: [`A6`,`G#5`,`A6`, `Bb6`,`A6`,`G5`,`E6`, `Db6`, `A5`],
  c: [`A3`,`D2`],  // sx
  b: [`F4`],
  v: [`E4`, `F4`, `G4`, `A5`],
  r: [`E4`, `C4`],
  d: [`D4`]
};
// Assembling "Melody" aka a Set Sequence of Keys for User to follow
let correctKeySequence = [65,65, 87, 83, 68, 68, 87, 83, 68, 68, 65, 83, 87];
let insertedKeys = [];


// Establish Ending
let won = false;



// Ending02
// Lights
// States
let state = `play`        // Title, Instructions, Intro, Level01, Level02, Level03, Level04, Level05, PLay (User plays Melody)
                             // Fail (User looses), Pass (User passes level withouth solving it), Success (Achieved Voice or Script),  Ending01, Ending02.

// Load Fonts
function preload(){
  myFontA = loadFont('assets/AnonymousPro-Regular.otf');
  myFontB = loadFont('assets/BigShouldersStencilDisplay-Regular.otf');
}


// setup()
//
// Description o3 setup() goes here.
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
  fading = new Fading(x, y, width, height);


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
  tipsTables.push(tipsTable01);
  // TipsTable Lv02
  x = width/4;
  y = 2*height/5;
  tipsTable02 = new TipsTable(x, y, cues02);
  tipsTables.push(tipsTable02);
  // TipsTable Lv03
  x = width/2;
  y = height/2;
  tipsTable03 = new TipsTable(x, y, cues03);
  tipsTables.push(tipsTable03);
  // TipsTable Lv04
  x = width/2;
  y = height/2;
  tipsTable04 = new TipsTable(x, y, cues04);
  tipsTables.push(tipsTable04);
  // TipsTable Lv05
  x = width/2;
  y = height/2;
  tipsTable05 = new TipsTable(x, y, cues05);
  tipsTables.push(tipsTable05);

  // Type Word
  x = width/2;
  y = height/4;
  typeWord = new TypeWord(x, y);


  // Play
  // Atmospheric Lights  - ALso in Ending02
  for(let i = 0; i < numAtmosphericLights; i++){
    let x =  width/2;
    let y = 2*height/5;
    // let x = random(0, width);
    // let y = random(0, height);
    let size = random(5, 35);
    let atmosphericLight = new Light(x, y, size);
    atmosphericLights.push(atmosphericLight);
  }

  // Chiming Lights
  for (let i = 0; i < numChimingLights; i ++){
    let x = random(0, width);
    let y = random(0, height);
    let size = random(30, 60);
    let chimingLight = new ChimingLight(x, y, size);
    chimingLights.push(chimingLight);
  }

  // Melody (Script + Playing)
  x = width/8;
  y = height/2;
  // let notes = //defined in class
  melody = new Melody(x, y, sequences, insertedKeys, correctKeySequence, incomplete);

  // Melody
  synthM = new p5.PolySynth();


  // Ending02
  // Atmospheric Lights  - ALso in Ending02
  // for(let i = 0; i < numAtmosphericLights; i++){
  //
  //   let size = random(5, 50);
  //   let atmosphericLight = new AtmosphericLight(x, y, size);
  //   atmosphericLights.push(atmosphericLight);
  // }

}

// draw()
//
// Description of draw() goes here.
function draw() {

  background(0); // black

  // Title
  if ( state === `title`){
    titleText();
    madeleine.display();

    // Make sure User cannot trigger TipsTable outside Levels
    for(let i = 0; i < tipsTables.length; i ++){
      let tipsTable = tipsTables[i];
      tipsTable.active = false;
    }

  }

  // Instructions
  else if ( state === `instructions`){
    textInstructions();

    // Make sure User cannot trigger TipsTable outside Levels
    for(let i = 0; i < tipsTables.length; i ++){
      let tipsTable = tipsTables[i];
      tipsTable.active = false;
    }
  }

  // Intro
  else if ( state === `intro`){

    // Countdown
    countdown();

    // Mirror
    mirror.display();
    // Fading Effect
    fading.fade();
    fading.display();

    // Make sure User cannot trigger TipsTable outside Levels
    for(let i = 0; i < tipsTables.length; i ++){
      let tipsTable = tipsTables[i];
      tipsTable.active = false;
    }

  }

  // Level01
  else if ( state === `level01`){

    currentState = `firstLevel`;
    nextState = `level2`;

    // // Countdown
    //countdown();

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
    //countdown();

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
    //countdown();

    // Mic Input pushing away Needles
    let lv03 = mic.getLevel();

    // Frog
    frog.display();
    frog.grow();

    // Compass(es)
    for (let i = 0; i < compasses.length; i++){
      let compass = compasses[i];
      compass.update(frog, lv03);
      compass.switchToEnding();
    }

    // TipsTable
    tipsTable03.display();

  }

  // Level04
  else if ( state === `level04`){

    currentState = `fourthLevel`;
    nextState = `level5`;

    // Countdown
    //countdown();

    // Moons
    for(let i = 0; i < moons.length; i++){
      let moon = moons[i];
      moon.display(moon);
      moon.move();
      // Check if both Moons have been "eaten" >> Switching State
      if(!moon.active){
        for(let j = 0; j < moons.length; j++){
          let otherMoon = moons[j];
          if(otherMoon !== moon && !otherMoon.active){
             state = `fail`;
               clearInterval(interval04);
               interval04 = undefined;
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
    //countdown();

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

  }

  // Play
  else if ( state === `play`){

  currentState = `playing`;

  //  Atmospheric Lights
  for (let i = 0; i < atmosphericLights.length; i ++){
    let atmosphericLight = atmosphericLights[i];
    let x = random(0, width);
    let y = random(0, height);
    let size = random(5, 30);
    atmosphericLight.move();
    atmosphericLight.wrap();
    atmosphericLight.display();
  }
  //  Chiming Lights
  for (let i = 0; i < chimingLights.length; i ++){
    let chimingLight = chimingLights[i];
    chimingLight.move();
    chimingLight.wrap();
    chimingLight.grow();
    chimingLight.returnOriginalSize();
    chimingLight.display();
  }

  // Display "Script"
  melody.display();

  // Establish Ending
  determineEnding();

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
  }

  // Success
  // Achieved Voice
  else if ( state === `successV`){
    // Reset Timer
    timer = 0;

    textSuccessVoice();

    // Display Single Light
    atmosphericLights.length = 1;
    // atmosphericLights.x = width/2;
    // atmosphericLights.y = 2*height/5;
    for (let i = 0; i < atmosphericLights.length; i++){
      let atmosphericLight = atmosphericLights[i];
      atmosphericLight.move();
      atmosphericLight.display();
    }

    // Store Voice
    collectedVoices.push(collectedVoice);
    collectedItems.push(collectedVoice);

  }
  // Achieved Script Shred
  else if ( state === `successS`){
    // Reset Timer
    timer = 0;

    textSuccessScript();

    // Store Voice
    collectedScriptShreds.push(collectedScriptShred);
    collectedItems.push(collectedVoice);

  }

  // Ending 01
  else if ( state === `ending01`){
    // Mirror
    mirror.active = true;
    mirror.move();
    mirror.tremble();
    mirror.display();
    // Go back to Title Screen
    setTimeout(switchToTitle, 8000);
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

// Fail
function textFail(){
  // White Text
  push();
  fill(255);
  textSize(40);
  text(`Yikes. Try again?`, width/2, height/3);
  textSize(20);
  text(`Press R to retry.`, width/2, 2*height/3);
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
  // Achieved Script
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
    // Deleting any Typed Input
    typeWord.currentInput = ``;
  }
  else if(currentState === `secondLevel`){
    state = `level02`;
    // Soundtracks
    oscillator02.start();
    oscillator202.start();
    // Restore Creature(s)
    for(let i = 0; i < creatures.length; i++){
      let creature = creatures[i];
      creature.x = random(11*width/25, 14*width/25);
      creature.y = random(height/10, height/5);
      creature.active = true;
      creature.ay = 0;
      // // Reset Mic Input + Gravity Force
      // lv01 = mic.getLevel();
      // liftAmount = map(lv01, 0, 1, - 1, -15);
      // gravityForce = 0.002;

      // Deleting any Typed Input
      typeWord.currentInput = ``;

    }

  }
  else if(currentState === `thirdLevel`){
    state = `level03`;

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
       compass.positionX = compass.x;
       compass.positionY = compass.y;
     }
     compass.size = random(70, 160);
     compass.stallingTime = 0;
   }
   // Restore Frog
   frog.wounded = false;
   frog.size = frog.originalSize;
}
  else if(currentState === `fourthLevel`){
    state = `level04`;

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
    // Restore Yellow Bunny
    yellowBunny.x = width/6;
    yellowBunny.y= height/3;
    // Restore Arrows
    for(let i = 0; i < arrows.length; i++){
      let arrow = arrows[i];
      arrow.x = random(0, width);
      arrow.y = random(3*height/2, height);
    }

    // Deleting any Typed Input
    typeWord.currentInput = ``;

  }
  else if(currentState === `playing`){
    state = `play`;
    insertedKeys = [];
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
    // if (interval04 === undefined) {
    //   interval04 = setInterval(playNextNote, 500);
    // }
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

  }
}

function checkUserAccomplishments(){
  //Check if User is missing pieces
  if(collectedScriptShreds.lenght < 2){
    incomplete = true;
  }
  else{
    incomplete = false;
  }
}
//

// Determine Ending
function determineEnding(){
  // Choose Ending (01 or 02) considering items collected by User
  if (collectedItems.length >= 4){
    won = true;
  }
  else{
    won = false;
  }
}
//


// Ending01
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
  if (state === `intro` || state === `ending01` || state === `ending02`){
    // Play notes
    let noteHeartbeat = notesHeartbeat[currentNoteHeartbeat];
    heartrate = heartrate + volume;
    synthHeartbeat.play(noteHeartbeat, heartrate, 0, 0.3);
    // Scroll through notes + reset index
    currentNoteHeartbeat = currentNoteHeartbeat + 1;
    if (currentNoteHeartbeat === notesHeartbeat.length) {
      currentNoteHeartbeat = 0;
    }

    if (state === `ending01`){
      heartrate = 0.8;
      heartrate = heartrate - volume;
    }

    if (state === `ending02`){
      volume = 0.8;
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
function guessWord(){ // parameters?
  typeWord.checkAnswer();
  for (let i = 0; i < projectors.length; i ++){
    let projector = projectors[i];
    typeWord.checkInput(projector, purpleBunny, arrow);
  }

  typeWord.checkInputProgress();
}

// p5 Events
function keyPressed(){

typeWord.keyPressed();

if (state === `play`){

  // Orange Lights react to Keyboard Input
  for (let i = 0; i < chimingLights.length; i ++){
  let chimingLight = chimingLights[i];
  melody.keyPressed(chimingLight);
  }

  // Store keys pressed by User
  insertedKeys.push(keyCode);

  // Check if User follows Script
  melody.adhereToScript();
}

if(keyCode === 13){
  if(state === `title`){    // User presses ENTER
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
  tipsTable01.keyPressed();
  tipsTable02.keyPressed();
  tipsTable03.keyPressed();
  tipsTable04.keyPressed();
  tipsTable05.keyPressed();
}
else if (keyCode === 82){  // User presses R to Reset Level
  if( state === `fail`){
    resetLevel();
  }
}

if (state === `level03`){
  for (let i = 0; i < compasses.length; i++){
    let compass = compasses[i];
    compass.keyPressed();
    compass.switchToEnding();
  }
}
}

function keyTyped() {
  typeWord.keyTyped();
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
            clearInterval(interval04);
            interval04 = undefined;
            oscillator04.start();
          }
        }
        break;
      }
    }
  }

  // TipsTable(s)
  tipsTable01.mousePressed();
  tipsTable02.mousePressed();
  tipsTable03.mousePressed();
  tipsTable04.mousePressed();
  tipsTable05.mousePressed();

}
//
