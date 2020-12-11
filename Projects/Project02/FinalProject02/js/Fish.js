class Fish{
  constructor(x, y, moon, wave){
    this.x = x;
    this.y = y;
    this.chaseX = x;
    this.chaseY = y;
    this.moon = moon;
    this.wave = wave;
    this.target = moon;
    this.width = 60;
    this.height = 110;
    this.vx = 3;
    this.vy = 3;
    this.speed = 3;
    this.eatingTime = 0;  // how long fish takes to "eat" (aka change to inactive) target
    this.angle = 0;
    this.active = true;
  }

  rotate(){
    this.angle = this.angle + 0.01;
  }


  chase(){

   if(!this.target.active){
     this.target = this.moon;
   }

   let dx = this.x - (this.target.chaseX);
   let dy = this.y - (this.target.chaseY);

   if (dx < 0){
     this.vx = this.speed;
   }
   else if(dx > 0){
     this.vx = -this.speed;
   }

   if (dy < 0){
     this.vy = this.speed;
   }
   else if(dy > 0){
     this.vy = -this.speed;
   }

   this.x = this.x + this.vx;
   this.y = this.y + this.vy;

   this.chaseX = this.x;
   this.chaseY = this.y;
 }

 eat(){

   let d = dist(this.x,this.y, this.target.chaseX, this.target.chaseY);

   if ((this.target.active) && (d < this.width/2 + 50)){
       this.eatingTime++;
   }
   else{
     this.eatingTime = 0;
   }

   if (this.eatingTime > 3*60){
       this.target.active = false;
       if(this.target !== this.moon && this.target !== this.wave){
         state = `successS`;
         collectedScriptShred02 = true;
         oscillator04.stop();
       }
       this.eatingTime = 0;
   }

 }

 isClicked(){
   let d = dist(this.x, this.y, mouseX, mouseY);
   if(d < this.width){
      return true;
   }
   else{
     return false;
   }
 }

 display(){

  if(this.active){
    // Fish Fins and Tail
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(246, 73, 76);
    triangle(0 - this.width, 0 + this.height/11, 0 + this.width, 0 + this.width/11, 0, 0 + 4*this.height/11);
    fill(2, 179, 237);
    triangle(0 - this.width/2, 0 - 12*this.height/11, 0 + this.width/2, 0 - 12*this.height/11, 0, 0 - 8*this.height/11);
    fill(0);
    stroke(0);
    triangle(0 - 7*this.width/15, 0 - 12*this.height/11, 0 + 7*this.width/15, 0 - 12*this.height/11, 0, 0 - 10*this.height/11);
    pop();

    // Fish Body
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(255);
    ellipse(0, 0, this.width, this.height);
    fill(0);
    rect(0, 0, this.width/4, 13*this.height/12);
    pop();

    // Fish Spine
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(255);
    rect(0, 0, this.width/30, 5*this.height/4);
    pop();

    // Fish Head
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    stroke(255);
    strokeWeight(2);
    fill(0);
    arc(0, 0 + 6*this.height/11, 2*this.width/3,  6*this.height/11, 0, PI , CHORD);
    pop();

  }
  }
}
