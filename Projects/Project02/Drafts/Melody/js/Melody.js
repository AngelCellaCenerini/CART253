class Meldoy{
  constructor(x, y, positionX, positionY){
    this.x = x;
    this.y = y;
    this.positionX = positionX;
    this.positionY = positionY;
    this.durationTime = 0;
    this.notes = ;
    this.note = undefined;
    this.command = undefined;
    this.keyCode = undefined;
    this.currentNote = 0;
  }

  keyPressed(){
    if(this.keyCode === 71){  // Pressing 'G'
       this.notes = [];
       this.playNextNote();
    }
    else if(this.keyCode === 70){  // Pressing 'F'
       this.notes = [];
       this.playNextNote();
    }
    else if(this.keyCode === 72){  // Pressing 'H'
       this.notes = [];
       this.playNextNote();
    }
    else if(this.keyCode === 84){  // Pressing 'T'
       this.notes = [];
       this.playNextNote();
    }
    else if(this.keyCode === 66){  // Pressing 'B'
       this.notes = [];
       this.playNextNote();
    }
    else if(this.keyCode === 86){  // Pressing 'V'
       this.notes = [];
       this.playNextNote();
    }
    else if(this.keyCode === 82){  // Pressing 'R'
       this.notes = [];
       this.playNextNote();
    }
    else if(this.keyCode === 68){  // Pressing 'D'
       this.notes = [];
       this.playNextNote();
    }
  }

  playNextNote() {
        // Chose the note at the current position
    this.note = this.notes[this.currentNote];
    // Play it
    synth.play(note,  0.6, 0, 0.4);  // SYNTH? diff velocites
    // Increase the current position and go back to 0 when we reach the end
    this.currentNote = this.currentNote + 1;
    if (this.currentNote === this.notes.length) {
      this.currentNote = 0;
    }

  }

  display(){
    // Display Script
    push();
    fill(255, 255, 255, 50);
    rect(this.x, this.y, this.positionX, this.positionY);
    fill(255);
    textSize(20);
    textAlign(RIGHT);
    text(`Script:

    G
    F
    H
    T
    B
    V
    R
    D`, width/10, 2*height/5);
    pop();
  }
}
