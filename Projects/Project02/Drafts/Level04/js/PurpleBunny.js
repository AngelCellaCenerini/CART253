class PurpleBunny{
  constructor(x, y, positionX, positionY){
    this.x = x;
    this.y = y;
    this.positionX = positionX;
    this.positionY = positionY;
    this.vx = 0;
    this.vy = 0;
    this.speed = 1.4;
    this.size = 250;         // body
    this.maxSize = 420;
    this.growth = 3;
    this.mouthSize = 10;     // mouth
    this.maxMouthSize = 250;
    this.height = 125;       // face (starts as circle, develops into ellipse)
    this.width = 125;        // face
    this.widening = 3;
    this.active = false;      // display face/ears
    this.hungry = false;      // start devouring
    this.stallingTime = 0;

  }

  hunger(){
    if(this.active){
      // Start tracking Time
     this.stallingTime++;
     // Wait 2 secs before letting "Devouring" process start
     if (this.stallingTime > 2*60){
       this.hungry = true;
    }
  }
  }

  devour(){
    // Purple Bunny devours Yellow Bunny >:)
    if(this.hungry){
      this.move();
      this.grow();  // Entire body grows
      this.face();  // The face grows differently from rest of the body to accomdate mouth's growth
      this.open();  // The mouth opens; again, differnt growth from rest of the body
    }
  }

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

  open(){
    // Mouth opening/widening
    this.mouthSize = this.mouthSize + this.widening;
    if(this.mouthSize > this.maxMouthSize){
      this.widening = 0;
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
