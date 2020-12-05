class PurpleBunny{
  constructor(x, y, positionX, positionY){
    this.x = x;
    this.y = y;
    this.positionX = positionX;
    this.positionY = positionY;
    this.vx = 0;
    this.vy = 0;
    this.speed = 1.4;
    this.size = 250;
    this.maxSize = 420;
    this.growth = 3;
    this.mouthSize = 10;
    this.closedMouthSize = 2;
    this.maxMouthSize = 250;
    this.height = 125;       // face height (starts as circle, develops into ellipse)
    this.width = 125;        // face width
    this.widening = 3;
    this.shrinking = -4;
    this.active = false;          // face/ears are not displaying when false
    this.hungry = false;          // bunny does not make any action if false
    this.stallingTime = 0;        // stalling time between the displayment of the PurpleBunny and its actions
    this.delayedSwitchTime = 0;   // 2 secs delay before ending level; starts when PurpleBunny's mouth "closes"

  }

  feelHunger(){
    // Once "activated", Purple Bunny will wait 2 secs before "devouring" Yellow Bunny
    if(this.active){

     this.stallingTime++;
     if (this.stallingTime > 2*60){
       this.hungry = true;
    }
  }
  }

  devour(yellowBunny){
    // Purple Bunny devours Yellow Bunny >:)
    if(this.hungry){
      this.move();
      this.grow();  // Entire body grows
      this.face();  // The face grows -differently from rest of the body to accomdate mouth's growth
      this.open(yellowBunny);  // The mouth opens; again, differnt growth from rest of the body
    }
  }


  // Devour
  move(){
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  grow(){
    this.size = this.size + this.growth;
    if(this.size > this.maxSize){
      this.growth = 0;
    }
  }

  face(){
    // Eyes "lifting" upwards
    if(this.y < (this.positionY - 6*this.maxSize/25)){
      this.speed = 0;
    }
    this.vy = -this.speed;

    // Face dimensions growing (2 different variables otherwise circle could not transform into ellipse)
    this.height = this.height + this.widening;  // variable used for mouth
    this.width = this.width + this.growth;  // variable used for body

  }

  open(yellowBunny){
    // Mouth opening/widening
    this.mouthSize = this.mouthSize + this.widening;
    if(this.mouthSize > this.maxMouthSize){
      this.widening = 0;
      yellowBunny.free = false;

    }
  }

  close(yellowBunny){
    // "Close" mouth once Yellow Bunny disappears
    if(!yellowBunny.active){
        this.shrink();
    }
  }

  shrink(){
    // Mouth shrinking (aka "closing")
    this.mouthSize = this.mouthSize + this.shrinking;
    if(this.mouthSize < this.closedMouthSize){
      this.shrinking = 0;
      this.delayedSwitchTime ++;
    }

    // Countdown (level ends 2 secs after Purple Bunny's mouth is fully closed)
    if(this.delayedSwitchTime > 2*60){
      console.log(`success`);
    }
  }



  display(){
    // Bunny
    //Body
    push();
    fill(78, 75, 191);
    ellipse(this.positionX, this.positionY, 13*this.size/12, this.size);
    pop();

    if(this.active){
      // Ears
      push();
      fill(78, 75, 191);
      ellipse(this.positionX - this.size/10, this.positionY - this.size/3, this.size/4, this.size);
      ellipse(this.positionX + this.size/10, this.positionY - this.size/3, this.size/4, this.size);
      // Face
      fill(255);
      ellipse(this.positionX, this.positionY, this.width, this.height);
      // Eyes
      fill(0);
      ellipse(this.x - this.size/10, this.y + this.size/40, this.size/20);
      ellipse(this.x + this.size/10, this.y + this.size/40, this.size/20);
      // Pink "Stripes"
      fill(255, 69, 183);
      rect(this.x - this.size/10, this.y + this.size/10, this.size/20);
      rect(this.x + this.size/10, this.y + this.size/10, this.size/20);
      rect(this.x - this.size/10, this.y - this.size/20, this.size/20);
      rect(this.x + this.size/10, this.y - this.size/20, this.size/20);
      pop();
    }

    if(this.hungry){
    // Mouth
    push();
    fill(0);
    ellipse(this.positionX, this.positionY + this.size/10, this.mouthSize);
    pop();
  }
  }

}
