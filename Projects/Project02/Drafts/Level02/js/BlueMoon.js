class BlueMoon extends Moon{
  constructor(x, y, positionX, positionY, chaseX, chaseY){

    super(x, y, positionX, positionY, chaseX, chaseY);
    this.red = 2;
    this.green = 179;
    this.blue = 237;
    this.r = 1;
    this.g = 159;
    this.b = 217;

  }

  display(moon){

    super.display();
    if(moon.active){
    // Mirroring Moon Details
    // Moon Spots
    push();
    fill(this.r, this.g, this.b);
    ellipse(this.x - this.size/4, this.y, this.size/9);
    ellipse(this.x - this.size/8, this.y, this.size/18);
    ellipse(this.x - this.size/5, this.y - this.size/4, this.size/30);
    ellipse(this.x - this.size/9, this.y + this.size/4, this.size/6, 2*this.size/15);
    pop();

    // Water Reflection
    push();
    fill(255, 253, 243);
    rect(this.positionX - this.size/8, this.positionY + 8*this.size/9, 2*this.size/9, this.size/30, this.radius, this.radius, this.radius, this.radius);
    pop();
  }
  }
}
