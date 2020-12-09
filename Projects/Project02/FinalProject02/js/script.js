
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
let timerLevel = 5;

// Title
// Madeleine Logo/Icon
let madeleine;

// Intro
// Mirror
let mirror;  // also used in Ending01, Ending02
// Fading Effect
let fading;


// Level01
// Winged Creatures
let creatures = [];
let violetCreature;
let blueCreature;
let greenCreature;
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
//Mic Input
let mic01;
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


// Ending02
// Lights
let lights = [];
let numLights = 20;

// States
let state = `level05`        // Title, Instructions, Intro, Level01, Level02, Level03, Level04, Level05, PLay (User plays Melody)
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
  x = random(11*width/25, 14*width/25,);
  y = random(height/6, height/2);
  violetCreature = new VioletCreature(x, y);
  creatures.push(violetCreature);
  // Blue Creature
  x = random(11*width/25, 14*width/25,);
  y = random(height/6, height/2);
  blueCreature = new BlueCreature(x, y);
  creatures.push(blueCreature);
  // Green Creature
  x = random(11*width/25, 14*width/25,);
  y = random(height/6, height/2);
  greenCreature = new GreenCreature(x, y);
  creatures.push(greenCreature);

  // Soundtrack
  synth01 = new p5.PolySynth();
    for (let i = 0; i < synth01.audiovoices.length; i++) {
      let voice01 = synth01.audiovoices[i];
      voice01.oscillator.setType(`triangle`);
    }


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

  // Mic Input
  mic02 = new p5.AudioIn();
  mic02.start();
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
   while(dist(x, y, frog.x, frog.y) < frog.height){
     x = random(0, width);
     y = random(0, height);
   }
   let positionX = x;
   let positionY = y;
   let size = random(70, 160);
   let compass = new Compass(x, y, positionX, positionY, size, frog);
   compasses.push(compass);
  }
  // Mic Input
  mic03 = new p5.AudioIn();
  mic03.start();
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
    let fish = new Fish (x, y, moon); //, wave?
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
  x = width/3;
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


  // Ending02
  // Lights
  for(let i = 0; i < numLights; i++){
    let x = width/2;
    let y = 2*height/5;
    let size = random(5, 50);
    let light = new Light(x, y, size);
    lights.push(light);
  }



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
  }

  // Instructions
  else if ( state === `instructions`){
    textInstructions();
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

  }

  // Level01
  else if ( state === `level01`){

    // // Countdown
    // countdown();

    // Mic Input Lifts Creatures
    let level01 = mic01.getLevel();
    let liftAmount = map(level01, 0, 1, - 1, -15);  // creatures initially float; this is intentionl, for different 'liftAmout' values would make it impossible for User to last

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

    // Soundtrack
    if (interval01 === undefined) {
    interval01 = setInterval(playRandomNote, 500);
    }

  }


  // Level02
  else if ( state === `level02`){

    // Countdown
    timer = timerLevel;
    countdown();

    // Mic Input Calling Eye back to Focus
    let level02 = mic02.getLevel();

    // Laser Lights
    laserLights();
    // White Frame
    whiteFrame();

    // Eye
    eye.move();
    eye.restrict();
    eye.focus(level02);
    eye.display();

    // Laser Light Projectors
    for (let i = 0; i < projectors.length; i ++){
      let projector = projectors[i];
      projector.display();
    }

    // Soundtrack
    angle += angleIncrease;
    let tanAngle = tan(angle);
    let newFreq = map(tanAngle, -1, 1, 420, 680);
    oscillator02.freq(newFreq);
    oscillator02.start();

    let randomValue = random(0, 1);
    let newFrequency = map(randomValue, 0, 1, 200, 300);
    oscillator202.freq(newFrequency);
    oscillator202.start();

  }

  // Level03
  else if ( state === `level03`){

    // Countdown
    timer = timerLevel;
    countdown();

    // Mic Input pushing away Needles
    let level03 = mic03.getLevel();

    // Frog
    frog.display();
    frog.grow();

    // Compass(es)
    for (let i = 0; i < compasses.length; i++){
      let compass = compasses[i];
      compass.update(frog, level03);
      compass.switchToEnding();
    }

    // Soundtrack
    if (interval03 === undefined) {
     interval03 = setInterval(playNextNote, 500);
    }
  }

  // Level04
  else if ( state === `level04`){

    // Countdown
    timer = timerLevel;
    countdown();

    // Moons
    for(let i = 0; i < moons.length; i++){
      let moon = moons[i];
      moon.display(moon);
      moon.move();
      // Check if both Moons are active >> Switching State
      if(!moon.active){
        for(let j = 0; j < moons.length; j++){
          let otherMoon = moons[j];
          if(otherMoon !== moon && !otherMoon.active){
             state = `fail`;
             clearInterval(interval04);
             interval04 = undefined;           }
         }
       }
     }

    // School of fish
    for(let i = 0; i < school.length; i++){
      let fish = school
      fish.rotate();
      fish.chase();
      fish.eat();
      fish.display();
    }

    // Waves
    wave.grow();
    wave.display();

    // Eating Soundtrack
    let r = random(0, 1);
    let newFreq04 = map(r, 0, 1, 240, 480);
    oscillator04.freq(newFreq04);
  }

  // Level05
  else if ( state === `level05`){

    // Countdown
    timer = timerLevel;
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

    // Soundtrack
    if (interval05 === undefined) {
      interval05 = setInterval(playNextNote, 500);
    }
  }

  // Play
  else if ( state === `play`){

  }

  // Fail
  else if ( state === `fail`){
    textFail();
  }

  // Pass
  else if ( state === `pass`){
    textPass();
  }

  // Success
  // Achieved Voice
  else if ( state === `successV`){
    textSuccessVoice();

    // Display Single Light
    lights.length = 1;
    for (let i = 0; i < lights.length; i++){
      let light = lights[i];
      light.move();
      light.display();
    }
  }
  // Achieved Script Shred
  else if ( state === `successS`){
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
    for (let i = 0; i < lights.length; i++){
      let light = lights[i];
      light.move();
      light.explode();
      light.display();
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
      state = `level01`;
      timer = 0;
      timer = timerLevel;
    }
  }

  // // Level Countdown (50 sec)
  // if( state === `level01` || state === `level02` || state === `level03` || state === `level04` || state === `level05` ){
  //   if ((frameCount % 60 === 0) && (timer > 0)){
  //     timer--;
  //   }
  //   if ( timer === 0 ){
  //     state = `pass`;
  //     timer = 0;
  //   }
  // }

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
  text(`Press SHIFT to retry.`, width/2, 2*height/3);
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


// Ending01
// Switch to Title Screen
function switchToTitle(){
state = `title`;
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

  // level03
  if (state === `level03`){
    // PLay noyes
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

// p5 Events
function keyPressed(){
if(keyCode === 13){
  if(state === `title`){
    state = `instructions`;
  }
  else if (state === `instructions`){
    state = `intro`;
    timer = timerIntro;
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

function mousePressed() {

  if(state === `level02`){
    // Laser Light Projector
    for (let i = 0; i < projectors.length; i ++){
      let projector = projectors[i];
      projector.mousePressed();
    }
  }

  if(state === `level04`){

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
}
//
