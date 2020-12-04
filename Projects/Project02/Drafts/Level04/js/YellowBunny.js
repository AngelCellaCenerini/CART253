class YellowBunny{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.size = 120;
    this.active = true;
    this.restarined = false;
    this.stallingTime = 0;

  }

  move(){
    this.x += this.vx;
    this.y += this.vy;
  }

  guide(){
    if(!this.restarined){
      // Move Yellow Bunny with arrow keys
        if(keyIsDown(LEFT_ARROW)){
          this.vx = -this.speed;
        }
        else if(keyIsDown(RIGHT_ARROW)){
          this.vx = this.speed;
        }
        else{
          this.vx = 0;
        }

        if(keyIsDown(UP_ARROW)){
          this.vy = -this.speed;
        }
        else if(keyIsDown(DOWN_ARROW)){
          this.vy = this.speed;
        }
        else{
          this.vy = 0;
        }

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
      }
    }

  withdraw(purpleBunny){
    if(this.restarined){
      let d = dist(this.x, this.y, purpleBunny.x, purpleBunny.y);
      if(d < this.size/2 + purpleBunny.size){
           this.x -= this.vx;  // hence why "withdraw"
           this.y -= this.vy;
      }
    }
  }

  trapped(purpleBunny){
    if(purpleBunny.widening === 0){

      this.restarined = false;

      let dx = this.x - (purpleBunny.positionX);
      let dy = this.y - (purpleBunny.positionY + purpleBunny.size/7);

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

    if(this.x === purpleBunny.positionX){
      this.stallingTime++;
      if (this.stallingTime > 0.6*60){
        this.active = false;
     }
    }
    }

  display(){
    if(this.active){
      // Bunny
      //Body
      push();
      fill(242, 229, 46);
      ellipse(this.x, this.y, 13*this.size/12, this.size);
      pop();

      // Ears
      push();
      fill(242, 229, 46);
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
