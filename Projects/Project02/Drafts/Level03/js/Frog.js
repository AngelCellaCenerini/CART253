class Frog{
  constructor(x, y, positionX, positionY){

    this.x = x;
    this.y = y;
    this.positionX = positionX;   // Only orange Cheek will change
    this.positionY = positionY;   // Only orange Cheek will change
    this.radius = 5;
    this.size = 55;
    this.woundSize = 55;
    this.stallingTime = 0;
    this.growth = 0.2;
    this.originalSize = 55;
    this.maxSize = 190;
    // this.transparency = 255;
    this.width = 130;
    this.height = 210;


  }

  grow(){
    this.stallingTime++;
    if (this.stallingTime > 1*60){
    this.size += this.growth;
    if(this.size > this.maxSize){
      this.size = this.originalSize;

      // let t = map(this.transparency, 255, 0, this.originalSize, this.maxSize);

    }
  }
}

display(){
  // Frog Chin
  push();
  fill(254, 254, 191);
  rect(this.positionX + this.width/5, this.positionY + this.height/5, this.width, this.width, this.radius, this.radius, this.radius, this.radius);
  pop();

  // Frog Body
  push();
  translate(this.positionX, this.positionY);
  rotate(PI / 4.0);
  fill(79, 124, 247);
  rect(0, 0, this.width, this.height, this.radius, this.radius, this.radius, this.radius);  // hardcoded values(0, 0) only for rotation
  pop();

  // Frog Leg
  push();
  fill(70, 104, 238);
  triangle(this.positionX - this.width, this.positionY + this.height/2, this.positionX - 8*this.width/7, this.positionY - this.height/10, this.positionX + 2*this.width/13, this.positionY + this.height/2 );
  fill(0);
  rect(this.positionX, this.positionY + 23*this.height/42, 20*this.width/13, 2*this.height/21);
  pop();

  // Frog Eye
  push();
  fill(173, 170, 255);
  ellipse(this.positionX + this.width/4, this.positionY - this.height/4, 4*this.width/13);
  fill(0);
  rect(this.positionX + this.width/4, this.positionY - this.height/4, 5*this.width/26, this.width/26);
  pop();

  // Frog Cheek
  push();
  // let t = map(this.transparency, 255, 100, this.originalSize, this.maxSize);
  // fill(255, 153, 51, t);
  fill(255, 153, 51);
  ellipse(this.x, this.y, this.size);
  pop();

  }

displayWound(){
      // Hole
      push();
      fill(255, 135, 117);
      ellipse(this.positionX + this.width/5, this.positionY + this.height/105, this.woundSize);
      fill(0);
      ellipse(this.positionX + this.width/5, this.positionY, this.woundSize);
      pop();
  }
}
