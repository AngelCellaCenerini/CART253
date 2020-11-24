class Fish{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 110;
    this.vx = 3;
    this.vy = 3;
    this.speed = 3;
  }

  rotate(){
    let angle = 0;
    rotate(angle);
    angle = angle + 0.05;
  }

  // move(){
  //   // Choose whether to change direction
  //   let change = random(0, 1);
  //   if (change < 0.02) {
  //    this.vx = random(-this.speed, this.speed);
  //    this.vy = random(-this.speed, this.speed);
  //   }
  //
  //   // Move the fish
  //   this.x = this.x + this.vx;
  //   this.y = this.y + this.vy;
  // }

  hunt(){

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    let dx = this.x - (redMoon.x + redMoon.size/2);
    let dy = this.y - (redMoon.y + redMoon.size/2);

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
  }

  react(){
    if (mouseIsPressed){

      let distX = this.x - mouseX;
      let distY = this.y - mouseY;

      if (distX < 0){
        this.vx = this.speed;
      }
      else if(distX > 0){
        this.vx = -this.speed;
      }

      if (distY < 0){
        this.vy = this.speed;
      }
      else if(distY > 0){
        this.vy = -this.speed;
      }
      setTimeout(this.hunt, 6000);
    }
    }

  display(){
    // Fish Fins and Tail
    push();
    fill(246, 73, 76);
    triangle(this.x - this.width, this.y + this.height/11, this.x + this.width, this.y + this.width/11, this.x, this.y + 4*this.height/11);
    fill(2, 179, 237);
    triangle(this.x - this.width/2, this.y - 12*this.height/11, this.x + this.width/2, this.y - 12*this.height/11, this.x, this.y - 8*this.height/11);
    fill(0);
    stroke(0);
    triangle(this.x - 7*this.width/15, this.y - 12*this.height/11, this.x + 7*this.width/15, this.y - 12*this.height/11, this.x, this.y - 10*this.height/11);
    pop();

    // Fish Body
    push();
    fill(255);
    ellipse(this.x, this.y, this.width, this.height);
    fill(0);
    rect(this.x, this.y, this.width/4, 13*this.height/12);
    pop();

    // Fish Spine
    push();
    fill(255);
    rect(this.x, this.y, this.width/30, 5*this.height/4);
    pop();

    // Fish Head
    push();
    stroke(255);
    strokeWeight(2);
    fill(0);
    arc(this.x, this.y + 6*this.height/11, 2*this.width/3,  6*this.height/11, 0, PI , CHORD);
    pop();
  }
}
