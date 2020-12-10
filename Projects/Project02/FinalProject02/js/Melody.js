class Melody{
  constructor(x, y, sequences, insertedKeys, correctKeySequence,  correctKeySequence2){ //, incomplete
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
    this.insertedKey = insertedKeys;
    this.correctKeySequence = correctKeySequence;
    this.correctKeySequence2 = correctKeySequence2;
    // this.incomplete = incomplete;

  }


  keyPressed(chimingLight){

    let notes = this.sequences[key];
    if (notes !== undefined) {
      chimingLight.active = true;
      this.notes = notes;
      this.currentNote = 0;
      this.playNextNote();
    }
  }

  playNextNote(chimingLight) {
    // Chose Note
    this.note = this.notes[this.currentNote];
    // Play Note
    synthM.play(this.note,  0.6, 0, 0.5);
    // Next Note
    this.currentNote = this.currentNote + 1;
    if (this.currentNote === this.notes.length) {
      this.currentNote = 0;
    }
    else{
      setTimeout(this.playNextNote.bind(this), 500);
    }
  }

  adhereToScript(incomplete){
    if (!incomplete){
      // Check if User is following Script (Key Sequence stored in Array)
      if (this.insertedKey.length === this.correctKeySequence.length){
          for(let i = 0; i < this.correctKeySequence.length; i ++){
            if(this.insertedKey[i] !== this.correctKeySequence[i]){
            state = `fail`;
            }
            else{
              if(won){
                state = `ending02`;
              }
              else{
                state = `ending01`;
              }
            }
          }
       }
    }
    else {
     if (this.insertedKey.length === this.correctKeySequence2.length){
         for(let i = 0; i < this.correctKeySequence2.length; i ++){
           if(this.insertedKey[i] !== this.correctKeySequence2[i]){
           state = `fail`;
           }
           else{
             if(won){
               state = `ending02`;
             }
             else{
               state = `ending01`;
             }
           }
         }
      }
    }

  }

  display(incomplete){
    // Display Script
    push();
    fill(255, 255, 255, 70);
    rect(this.x, this.y, this.width, this.height);
    fill(255);
    text(`Follow the script:


    G
    F
    H
    T`, this.x, this.y - this.height/6);
    if(!incomplete){
      text(`
      B
      V
      R
      D`, this.x, this.y + this.height/9);
      pop();
    }
  }
}
