class Projector{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 80;
    this.radius = 5
    this.active = false;
  }

  mousePressed(){
    if (this.active){
      // Bottom Projector is the correct item User has to click to surpass level
      let d = dist(mouseX, mouseY, this.x, this.y);
      if ( (d < this.height/2 || d < this.width/2) ){
        if ((this.x > width/3 ) && (this.y > 4*height/6 )){
          state = `success`;
          soundtrack.stop();
          soundtrack2.stop();
        }
        else {
          state = `intro`;
          soundtrack.stop();
          soundtrack2.stop();
        }
      }
    }

  }

  display(){
    push();
    fill(220);
    rect(this.x, this.y, this.height, this.width, this.radius, this.radius, this.radius, this.radius);
    fill(255);
    rect(this.x, this.y, this.height, this.width, this.radius, this.radius, this.radius, this.radius);
    pop();
  }

}
