class Arrow{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 3;
    this.height = 150;
    this.active = true;
    this.vx = 0;
    this.vy = -5;
  }

  track(){
    // Track Arrow status/methods
    if(this.active){
      this.move();
      this.respawn();
      // this.hit(bunny);
    }
    this.display();
  }

  move(){
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  respawn(){
    // Reset Arrow at bottom of screen once off-screen
    if(this.y + height/2 < 0){
      this.x = random(0, width);
      this.y = random(3*height/2, height);
    }
  }

  hit(bunny){
    // let d = dist(this.x, this.y, bunny.x, bunny.y);        // ???
    // if(bunny.mobile && d < this.width/2 + bunny.size/2){
    //   console.log(`fail`);
    // }
  }

  display(){

      // Arrow
      // Body
      push();
      fill(255);
      rect(this.x, this.y, this.width, this.height);
      pop();

      // Tip
      push();
      stroke(255);
      strokeWeight(3);
      line(this.x - 5*this.width, this.y - this.height/3, this.x, this.y - this.height/2);
      line(this.x + 5*this.width, this.y - this.height/3, this.x, this.y - this.height/2);
      line(this.x - 5*this.width, this.y - this.height/3, this.x, this.y + this.height/6);
      line(this.x + 5*this.width, this.y - this.height/3, this.x, this.y + this.height/6);
      pop();

      // Tail
      push();
      stroke(255);
      strokeWeight(3);
      line(this.x - 5*this.width, this.y + 19*this.height/30, this.x, this.y + 7*this.height/15);
      line(this.x + 5*this.width, this.y + 19*this.height/30, this.x, this.y + 7*this.height/15);
      line(this.x - 5*this.width, this.y + 4*this.height/5, this.x, this.y + 19*this.height/30);
      line(this.x + 5*this.width, this.y + 4*this.height/5, this.x, this.y + 19*this.height/30);
      pop();

  }
}
