class TipsTable{
  constructor(x, y, positionX, positionY, tips){
  this.x = x;
  this.y = y;
  this.positionX = positionX;
  this.positionY = positionY;
  this.size = 600;
  this.active = false;
  this.keyCode = undefined;   // SPACEBAR
  this.tips = cues;  //this.cues = [];
   // Guessing Answer
   this.currentIndex = 0;
   this.answer = `stop`;    // Word User has to type in order to surpass level
   this.currentInput = ``;  // Keeping Track of User's Input
   this.state = undefined;
   }

   keyPressed(){
     // Tips Table appearing/disappearing when User presses SPACEBAR
     if (this.keyCode === 32){
     if(tipsTable.active === false){
        tipsTable.active = true;
     }
     else {
        tipsTable.active = false;
     }
    }

    else if (this.keyCode === 8 ) { //&& state === `level`
    // User Resets Inserted Input
    this.currentInput = ``;
  }
   }

   mousePressed(){
   // if (state === `level`){
   // Display next Cue
     this.currentIndex = this.currentIndex + 1;
     if (this.currentIndex === this.tips.length){
         this.currentIndex = 0;
     }
   }

   keyTyped() {
     // Type Input
     if (this.keyCode !== 13){  // && state === `level`
     this.currentInput += key;
     }
   }

  display(){
   // Tips Table to guess mystery word
   if(!this.active){
     return;
   }

   push();
   // Display Semi-Transparent Tips Table
   fill(255, 255, 255, 150);
   rect(this.x, this.y, this.size);
   // Display Tips Table White Text
   fill(0);
   textAlign(CENTER, CENTER);
   textSize(20);
   text(this.tips, this.x, this.y);  // this.cues[currentIndex];
   fill(255);
   textSize(15);
   text(`Click for more tips >>`,this.positionX, this.positionY);
   pop();
}
}
