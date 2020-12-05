class YellowBunny{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.size = 120;
    this.active = true;     // display Yellow Bunny if true
    this.free = true;       // Yellow Bunny is free, not yet caught by Purple Bunny
    this.stallingTime = 0;  // wait 2 secs beofre disappearing

  }

  move(){
    if(this.free){
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
      }

      this.x += this.vx;
      this.y += this.vy;

      // Constrain Bunny to canvas
      this.x = constrain(this.x, 0, width);
      this.y = constrain(this.y, 0, height);
    }

  withdraw(purpleBunny){
    // Block Yellow Bunny from touching Purple Bunny
    if(this.free){
      let d = dist(this.x, this.y, purpleBunny.x, purpleBunny.y);
      if(d < (this.size/2 + 3*purpleBunny.size/4)){
           this.x -= this.vx;  // hence why "withdraw"
           this.y -= this.vy;
      }

    }
  }

  trapped(purpleBunny){
  // Lead to Purple Bunny's mouth (technically YellowBunny is the one actively going there...semantics XD)
    if(!this.free){
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

      // Disappear once at the center of Purple Bunny's mouth (again, semantics)
      if(this.x === purpleBunny.positionX){
        this.stallingTime++;
      if (this.stallingTime > 0.6*60){
        this.active = false;
       }
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
