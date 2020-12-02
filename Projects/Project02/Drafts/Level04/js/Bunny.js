class Bunny{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 120;
    this.r = 242;
    this.g = 229;
    this.b = 46;
    this.active = true;
    this.mobile = true;
    this.vx = 5;
    this.vy = 5;
  }

  move(){
    // Move Yellow Bunny with A, W, S, D keys
    if(this.mobile){
      if(keyIsDown(65)){
        this.x -= this.vx;
      }
      if(keyIsDown(68)){
        this.x += this.vx;
      }
      if(keyIsDown(87)){
        this.y -= this.vy;
      }
      if(keyIsDown(83)){
        this.y += this.vy;
      }

      // let dx = dist();
      // let dy = dist();
      // if(){
      //
      // }

      // Prevent Yellow Bunny from getting near Purple Bunny
      // this.x = constrain(this.x, 0, this.purpleBunny.x - this.purpleBunny.size);    // ????
      // this.x = constrain(this.x, this.purpleBunny.x + this.purpleBunny.size, width);    // ????
      // Constrain Yellow Bunny to Canvas
      this.x = constrain(this.x, 0, width);    // ????
      this.y = constrain(this.y, 0, height);
    }
  }

  display(){
    // Bunny
    //Body
    push();
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, 13*this.size/12, this.size);
    pop();

    if(this.active){
      // Ears
      push();
      fill(this.r, this.g, this.b);
      ellipse(this.x - this.size/20, this.y - this.size/3, this.size/4, this.size);
      ellipse(this.x + this.size/6, this.y - this.size/3, this.size/4, this.size);
      // Face
      fill(255);
      ellipse(this.x + this.size/20, this.y, this.size/2);
      // Eyes
      fill(0);
      ellipse(this.x - this.size/40, this.y + this.size/40, this.size/20);
      ellipse(this.x + 11*this.size/60, this.y + this.size/40, this.size/20);
      // Pink "Stripes"
      fill(255, 69, 183);
      rect(this.x - this.size/40, this.y + this.size/10, this.size/20);
      rect(this.x + 11*this.size/60, this.y + this.size/10, this.size/20);
      rect(this.x - this.size/40, this.y - this.size/20, this.size/20);
      rect(this.x + 11*this.size/60, this.y - this.size/20, this.size/20);
      pop();
    }
  }
}
