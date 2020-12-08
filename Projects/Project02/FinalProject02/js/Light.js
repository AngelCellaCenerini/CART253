class Light {
  constructor(x, y, size){
    this.x = x;
    this.y = y;
    this.size = size;
    this.maxSize = 2000;
    this.growth = 5;
    this.vx = 0;
    this.vy = 0;
    this.speed = 2;
    this.explosionTime = 0;  // I know, such a charming name
    // this.chime = chime;
  }

  move(){
    // Lights gently floating around screen
    this.y = this.y + this.vy;
    this.x = this.x + this.vx;
    let change = random(0, 1);
    if (change < 0.02){
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }
    this.x = constrain( this.x, 0, width);
    this.y = constrain( this.y, 0, height);


  }

  explode(){

    this.explosionTime++;

    if(this.explosionTime > 12*60){
    this.size = this.size + this.growth;
    }
    if(this.size > this.maxSize){
      this.growth = 0;
      state = `title`;
    }
  }



  display(){
    push();
    fill(250);
    ellipse(this.x, this.y, this.size)
    fill(250, 250, 250, 100);
    ellipse(this.x, this.y, 2*this.size);
    pop();
  }
}
