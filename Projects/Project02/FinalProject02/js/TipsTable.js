class TipsTable{
  constructor(x, y, tips){
  this.x = x;
  this.y = y;
  this.size = 650;
  this.active = false;
  this.keyCode = 32;   // SPACEBAR
  this.tips = tips;
  this.currentIndex = 0;
  }

  keyPressed(){
   // Tips Table appearing/disappearing when User presses SPACEBAR
   if (this.keyCode){
    if(this.active === false){
       this.active = true;
    }
    else {
       this.active = false;
    }
   }
  }

   mousePressed(){
     if(this.active){
       // Display next Cue
      this.currentIndex = this.currentIndex + 1;
      if (this.currentIndex === this.tips.length){
         this.currentIndex = 0;
      }
     }
   }

  display(){

   if(!this.active){
     return;
   }

   push();
   // Display Semi-Transparent Tips Table
   fill(255, 255, 255, 150);
   rect(this.x, this.y, this.size);
   // Display Tips Table White Text
   fill(255);
   textAlign(CENTER, CENTER);
   textSize(20);
   text(this.tips[this.currentIndex], this.x, this.y);  // this.cues[currentIndex];
   textSize(15);
   text(`Click for more tips >>`,this.x - this.size/4, this.y + this.size/3);
   pop();
}
}
