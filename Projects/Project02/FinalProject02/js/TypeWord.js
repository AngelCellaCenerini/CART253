class TypeWord{
  constructor(x, y){

    this.x = x;
    this.y = y;
    this.currentIndex = 0;
    this.answer = undefined;    // Word User has to type in order to surpass level
    this.currentInput = ``;     // Keeping Track of User's Input
    this.lowerCaseInput = undefined;
    this.correct = undefined;

  }

  checkAnswer(){
    if(state === `level01`){
      this.answer = `stop`;
    }
    else if (state === `level02`){
      this.answer = `south`;
    }
    else if (state === `level05`){
      this.answer = `parent`;
    }
  }

  checkInput(projector, purpleBunny, arrow){
   // Converting Input to Lower Case
   this.lowerCaseInput = this.currentInput.toLowerCase();
   // Check if Converted Input corrisponds to Answer
   if (this.lowerCaseInput === this.answer) {

     // Restore Input for next Levels
     this.currentInput = ``;

     if (state === `level01`){
        state = `successV`;
     }
     else if(state === `level02`){
         projector.active = true;
     }
     else if(state === `level05`){
         purpleBunny.hungry = true;
         arrow.active = false;
         oscillator05.start();
     }
   }
   else {
     return false;
    }
  }

  checkInputProgress(){
  // Input Settings
  push();
  fill(255);
  textSize(28);
  // Check if Word Inserted is Correct
  this.correct = this.checkInput();
  // Display Current Input from User
  text(this.currentInput, this.x, this.y);
  pop();
}

keyPressed(){
  if (keyCode === 8) {
    if( state === `level01` || state === `level02` || state === `level05` ){
      // User Resets Inserted Input
      this.currentInput = ``;
    }
  }
}

keyTyped(){
  if (keyCode !== 13 && keyCode !== 32){
      if( state === `level01` || state === `level02` || state === `level05` ){
          this.currentInput += key;
      }
  }
}

}
