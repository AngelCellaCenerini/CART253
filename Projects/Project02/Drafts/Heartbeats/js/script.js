/**************************************************
Template p5 by CART253 Course
Angel Cella Cenerini

Project02 Drafts - Heartbeats (Sound effects intended for Final Project)
**************************************************/
// Heartbeats
let synth;
// The scale for F minor ("b" means "flat" if you haven't seen it before)
let notes = [`G4`, `G4`];
// The current note to play, start at the beginning
let currentNote = 0;
// To track the interval that plays note
let interval;
let heartrate = 0;
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  userStartAudio();

  // Heartbeats
  synth = new p5.PolySynth();

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  // Heartbeats


}

function mousePressed() {
  // First check that the piano isn't already playing
  // The interval will be undefined if it hasn't started
  if (interval === undefined) {
    // Start our interval, calling playNextNote every 500 milliseconds
    // Assign the result to interval to remember the interval
    // interval = setInterval(playNextNote, 900); // Standard
    // interval = setInterval(playNextNote, 2000); //slowed
    interval = setInterval(playNextNote, 450); // fast
  }
  else {
    // If they click when it's playing, clear the interval and set interval
    // back to undefined to stop play
    clearInterval(interval);
    interval = undefined;
  }
}

// playNextNote() plays the next note in our array
function playNextNote() {
  // Chose the note at the current position
  let note = notes[currentNote];
  heartrate = heartrate + 0.08;
  // Play it
  // synth.play(note, 0, 0.4, 0.7); // Standard
  // synth.play(note, 0, 1, 0.7); // Slow
  synth.play(note, heartrate, 0, 0.1); // Fast
  // Increase the current position and go back to 0 when we reach the end
  currentNote = currentNote + 1;
  if (currentNote === notes.length) {
    currentNote = 0;
  }
}
