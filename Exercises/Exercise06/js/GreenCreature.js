class GreenCreature extends Creature{
  constructor(x, y){
    super(x, y);
    this.speed = 1;
  }

  display(){

    // Winged Creature
    // Wings
    // Left Wing
    push();
    noStroke();
    fill(255, 188, 177);
    triangle(this.x - this.size, this.y + this.size/6, this.x - 7*this.size/12, this.y - this.size/2, this.x, this.y);
    pop();

    push();
    noStroke();
    fill(234, 255, 193);
    triangle(this.x - 3*this.size/2, this.y - this.size/6, this.x - 7*this.size/12, this.y - this.size/2, this.x, this.y);
    pop();

    push();
    noStroke();
    fill(255);
    triangle(this.x - 9*this.size/5, this.y - this.size/2, this.x - 7*this.size/12, this.y - this.size/2, this.x, this.y);
    pop();

    // Right Wing
    push();
    noStroke();
    fill(255, 188, 177);
    triangle(this.x + this.size, this.y + this.size/6, this.x + 7*this.size/12, this.y - this.size/2, this.x, this.y);
    pop();

    push();
    noStroke();
    fill(234, 255, 193);
    triangle(this.x + 3*this.size/2, this.y - this.size/6, this.x + 7*this.size/12, this.y - this.size/2, this.x, this.y);
    pop();

    push();
    noStroke();
    fill(255);
    triangle(this.x + 9*this.size/5, this.y - this.size/2, this.x + 7*this.size/12, this.y - this.size/2, this.x, this.y);
    pop();

    // Deer Horns
    push();
    stroke(255);
    strokeWeight(3);
    // Left Horn (Thicker)
    line(this.x - this.size/4, this.y, this.x - this.size/4, this.y - 2*this.size/3);
    line(this.x - this.size/2, this.y - 2*this.size/3, this.x, this.y - 2*this.size/3);
    line(this.x - this.size/2, this.y - 2*this.size/3, this.x - this.size/2, this.y - this.size);

    // Right Horn (Thicker)
    line(this.x + this.size/4, this.y, this.x + this.size/4, this.y - 5*this.size/6);
    line(this.x + this.size/4, this.y - 5*this.size/6, this.x + this.size/2, this.y - 5*this.size/6);
    line(this.x + this.size/2, this.y - 5*this.size/6, this.x + this.size/2, this.y - this.size);

    strokeWeight(1.5);
    // Left Horn (Thinner)
    line(this.x + this.size/60, this.y - 2*this.size/3, this.x + 1, this.y - 5*this.size/6);
    line(this.x - this.size/2, this.y - 5*this.size/6, this.x - this.size/3, this.y - 5*this.size/6);

    // Right Horn (Thinner)
    line(this.x + this.size/3, this.y - 5*this.size/6, this.x + this.size/3, this.y - this.size);
    pop();

    // Body
    push();
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.size);
    fill(0);
    ellipse(this.x, this.y - this.size/4, this.size/4, this.size/6);
    ellipse(this.x, this.y, this.size/3, this.size/6);
    fill(255);
    ellipse(this.x, this.y + this.size/15, this.size/3, this.size/6);
    fill(0);
    ellipse(this.x, this.y, this.size/10);
    pop();

  }
}
