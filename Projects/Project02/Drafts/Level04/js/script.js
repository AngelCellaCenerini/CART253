/**************************************************
Project02 - Drafts: Level04
Angel Cella Cenerini

Template by CART253 course
Level04
**************************************************/
// Background Music
let synth;
let notes = [`E5`, `E5`, `F5`, `E#5`, `F5`, `Eb5`];
// Current played note
let currentNote = 0;
// Track interval between note
let interval;


// Arrow(s)
let arrows = [];
let numArrows = 9;

// Bunnies
let yellowBunny;
let purpleBunny;

// Word User has to type in order to surpass level
let answer = `parent`;
// Keeping Track of User's Input
let currentInput = ``;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);
  userStartAudio();

  // Background Music
  // General Soundtrack
  synth = new p5.PolySynth();
  for (let i = 0; i < synth.audiovoices.length; i++) {
    let voice = synth.audiovoices[i];
    voice.oscillator.setType(`triangle`);
  }
  // Ending soundtrack
  oscillator = new p5.Oscillator(440, `sawtooth`);
  oscillator.amp(0.05);


  // Purple Bunny
  let x = width/2;
  let y = height/2;
  let positionX = width/2;
  let positionY = height/2;
  let mouthY = height/2;
  purpleBunny = new PurpleBunny(x, y, positionX, positionY);

  // Yellow Bunny
  x = width/3;
  y = 2*height/3;
  yellowBunny = new YellowBunny(x, y);

  // Arrow(s)
  for (let i = 0; i < numArrows; i++){
    let x = random(0, width);
    let y = random(3*height/2, height);
    let arrow = new Arrow(x, y);
    arrows.push(arrow);
  }


}

// draw()
//
// Description of draw() goes here.
function draw() {
background(0);

// Random Value
let r = random(0, 1);
// Map to Frequency Range
let newFreq = map(r, 0, 1, 440, 880);
oscillator.freq(newFreq);

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

checkInputProgress();

}

// Level
function checkInputProgress(){
  // Current Input Settings
  push();
  fill(255);
  textSize(30);
  // Check if Word Inserted is Correct
  let correct = checkInput();
  // Display Current Input from User
  text(currentInput, width/7, height/2);
  pop();
}

function checkInput() {
  // Converting Input to Lower Case
  let lowerCaseInput = currentInput.toLowerCase();
  // Check if Converted Input corrisponds to Answer
  if (lowerCaseInput === answer) {

    // Freez Arrows
    for (let i = 0; i < arrows.length; i++){
      let arrow = arrows[i];
          arrow.active = false;
    }

    // Display Purple Bunny's face/ears
    purpleBunny.active = true;
    clearInterval(interval);
    interval = undefined;
    oscillator.start();

  }

  else {
    return false;
  }
}


function playNextNote() {
  // PLay noyes
  let note = notes[currentNote];
  synth.play(note, 0.2, 0.1, 0.1);
  currentNote = currentNote + 1;
  if (currentNote === notes.length) {
    currentNote = 0;
  }
}

// p5 Events
function mousePressed() {
  // Check music sin't already playing
  if (interval === undefined) {
    interval = setInterval(playNextNote, 500);
  }
}


function keyPressed(){
  if (keyCode === 8) {
    // User Resets Inserted Input
    currentInput = ``;
  }
}

function keyTyped() {
  if (keyCode !== 13){
    // Type User Input
    currentInput += key;
  }
}
