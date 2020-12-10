class Melody{
  constructor(x, y, sequences){
    this.x = x;
    this.y = y;
    this.width = 300;
    this.height = 600;
    this.durationTime = 0;
    this.sequences = sequences;
    this.notes = undefined;  //?
    this.note = undefined;
    this.command = undefined;
    this.keyCode = undefined;
    this.currentNote = 0;


  }


  keyPressed(chimingLight){

    let notes = this.sequences[key];
    chimingLight.active = true;
    if (notes !== undefined) {
      this.notes = notes;
      this.currentNote = 0;
      this.playNextNote();
    }
  }

  playNextNote(chimingLight) {
    // Chose Note
    this.note = this.notes[this.currentNote];
    // Play Note
    synth.play(this.note,  0.6, 0, 0.5);
    // Next Note
    this.currentNote = this.currentNote + 1;
    if (this.currentNote === this.notes.length) {
      this.currentNote = 0;
      if(!chimingLight.active){
        chimingLight.active = true;
      }
    }
    else{
      setTimeout(this.playNextNote.bind(this), 500);
    }

  }

  display(){
    // Display Script
    push();
    fill(255, 255, 255, 50);
    rect(this.x, this.y, this.width, this.height);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(`Follow the script:

    G
    F
    H
    T
    B
    V
    R
    D`, this.x, this.y);
    pop();
  }
}
