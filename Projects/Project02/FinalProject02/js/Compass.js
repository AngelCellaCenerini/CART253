class Compass{
  constructor(x, y, positionX, positionY, size){
    this.x = x;
    this.y = y;
    this.positionX = positionX;
    this.positionY = positionY;
    this.size = size;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.stallingTime = 0;
    this.delayTime = 0;
    this.switchTime = 0;
    this.angle = 0;
    this.chasing = true;  // Compass's Needle is chasing Frog's Cheek (its center)
  }

  update(frog,lv03){
    // Keeping track of all Needle's methods
    if(this.chasing){
      this.chase(frog);
      this.impact(frog);
      this.withdraw(frog, lv03);

    }
    else{
      this.delayTime ++;
      if (this.delayTime > 4*60){
        state = `successV`;
        collectedVoice02 = true;
        if (interval03 !== undefined){
          clearInterval(interval03);
          interval03 = undefined;
        }
      }
    }

    this.move();
    this.rotate();

    this.display();

  }

  move(){
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  chase(frog){
    // Start tracking Time
    this.stallingTime++;
    // Wait 2 secs before letting Needles chase the Frog's Cheek
    if (this.stallingTime > 3*60){

      let dx = this.x - (frog.x);
      let dy = this.y - (frog.y);

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
      // this.stallingTime = 0;
    }
  }

  rotate(){
    this.angle = this.angle + 0.03;
  }

  impact(frog){
    // Needle reaches Frog's Cheek center; level may end depending on Cheek's current size
    if(dist(this.x, this.y, frog.x, frog.y) < frog.size/2){
      if(frog.size > 3*frog.maxSize/5){
        frog.wounded = true;
        this.switchTime++;;
      }
    }
    if (frog.wounded){
      if(this.switchTime > 3*60){
        state = `fail`;
        if (interval03 !== undefined){
          clearInterval(interval03);
          interval03 = undefined;
        }
          // this.switchTime = 0;
      }
    }

  }

  withdraw(frog, lv03){
  // Start tracking Time
   this.stallingTime++;
  // Wait 4 secs before "ativating"
  if (this.stallingTime > 4*60){
   // Psuh away Needles from Frog's Cheek through Mic Input
   if (lv03 > 0.05){

     let dx = this.x - (7*frog.x);
     let dy = this.y - (7*frog.y);

     if (dx < 0){
     this.vx = -this.speed;
     }
     else if(dx > 0){
       this.vx = this.speed;
     }

     if (dy < 0){
       this.vy = -this.speed;
     }
     else if(dy > 0){
       this.vy = this.speed;
     }
     this.stallingTime = 0;
   }
  }
}


  keyPressed(){
  this.delayTime = 0;
  // Change Needle tendency to Upwards-movement
    if(keyCode === UP_ARROW){
      this.chasing = false;
      this.vx = 0;
      this.vy = -this.speed;
      // // this.delayTime ++;
      // if (this.delayTime > 3*60){
      //   state = `successV`;
      //   clearInterval(interval03);
      //   interval03 = undefined;
      // }
    }
    // this.delayTime ++;

  }



  display(){
    // Compass
    push();
    noFill();
    stroke(255);
    strokeWeight(6);
    ellipse(this.positionX, this.positionY, this.size);
    pop();

    // Cardinal Directions
    push();
    fill(255);
    ellipse(this.positionX, this.positionY - this.size/3, this.size/24);
    ellipse(this.positionX, this.positionY + this.size/3, this.size/24);
    ellipse(this.positionX - this.size/3, this.positionY, this.size/24);
    ellipse(this.positionX + this.size/3, this.positionY, this.size/24);
    pop();

    // Hook
    push();
    noFill();
    stroke(255);
    strokeWeight(4);
    ellipse(this.positionX, this.positionY - this.size/2, this.size/5);
    pop();

    //Needle
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(255, 52, 150);
    triangle(0, 0 - this.size/4, 0 + this.size/24, 0 - this.size/20, 0, 0 + this.size/4);
    fill(255, 52, 150);
    triangle(0, 0 - this.size/4, 0 - this.size/24, 0 - this.size/20, 0, 0 + this.size/4);
    pop();
  }
}
