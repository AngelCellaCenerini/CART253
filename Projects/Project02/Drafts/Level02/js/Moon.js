class Moon{
  constructor(x, y, positionX, positionY){

    this.x = x;
    this.y = y;
    this.size = 450;
    this.positionX = positionX;   // seperate coordinates: moons remain still, only reflections move
    this.positionY = positionY;   // seperate coordinates: moons remain still, only reflections move
    this.radius = 5;
    this.red = undefined;
    this.green = undefined;
    this.blue = undefined;
    this.r = undefined;
    this.g = undefined;
    this.b = undefined;

  }


  display(){

    // Moon
    push();
    fill(this.red, this.green, this.blue);
    ellipse(this.x, this.y, this.size);
    pop();

    // Moon Spots
    push();
    fill(this.r, this.g, this.b);
    ellipse(this.x + this.size/4, this.y, this.size/9);
    ellipse(this.x + this.size/8, this.y, this.size/18);
    ellipse(this.x + this.size/5, this.y - this.size/4, this.size/30);
    ellipse(this.x + this.size/9, this.y + this.size/4, this.size/6, 2*this.size/15);
    pop();

    // Water Reflection
    push();
    fill(255, 253, 243);
    rect(this.positionX, this.positionY + 7*this.size/9, 2*this.size/3, this.size/30, this.radius, this.radius, this.radius, this.radius);
    rect(this.positionX + this.size/8, this.positionY + 8*this.size/9, 2*this.size/9, this.size/30, this.radius, this.radius, this.radius, this.radius);
    rect(this.positionX, this.positionY + 19*this.size/18, this.size/3, this.size/30, this.radius, this.radius, this.radius, this.radius);
    pop();

  }
}
