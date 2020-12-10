class TypeWord05{
  constructor(x, y){

    this.x = x;  // where text will appear
    this.y = y;  // where text will appear
    this.currentIndex = 0;
    this.answer = `parent`;    // Word User has to type in order to surpass level
    this.currentInput = ``;     // Keeping Track of User's Input
    this.lowerCaseInput = undefined;
    this.correct = undefined;

  }


  checkInput(purpleBunny){ //arrows
   // Converting Input to Lower Case
   this.lowerCaseInput = this.currentInput.toLowerCase();
   // Check if Converted Input corrisponds to Answer
   if (this.lowerCaseInput === this.answer) {

     // Restore Input for next Levels
     this.currentInput = ``;
     purpleBunny.active = true;
     // Freez Arrows
     for (let i = 0; i < arrows.length; i++){
       let arrow = arrows[i];
           arrow.active = false;   // done here instead of main script because putting both PurpleBunny and Arrow (Array) as parameters was giving me issues
     }
     oscillator05.start();
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
    if (state === `level05`){
      // User Resets Inserted Input
      this.currentInput = ``;
    }
  }
}

keyTyped(){
  if (keyCode !== 13 && keyCode !== 32){
      if (state === `level05`){
          this.currentInput += key;
      }
  }
}

}
