// class Light {
//   constructor(x, y){
//     this.x = x;
//     this.y = y;
//     this.size = undefined;
//     this.vx = 0;
//     this.vy = 0;
//     this.speed = undefined;
//     // this.chime = chime;
//   }
//
//   move(){
//     // Lights gently floating around screen
//     this.y = this.y + this.vy;
//     this.x = this.x + this.vx;
//     let change = random(0, 1);
//     if (change < 0.02){
//       this.vx = random(-this.speed, this.speed);
//       this.vy = random(-this.speed, this.speed);
//     }
//     this.x = constrain( this.x, 0, width);
//     this.y = constrain( this.y, 0, height);
//   }
//
//   wrap(){
//     // Redirecting (almost)offscreen object
//     // Horizontally
//     if ((this.x + this.size/2) > (mirror.x + mirror.width/2)) {
//       this.x + this.size/2 = (this.x + this.size/2) - (mirror.x + mirror.width/2);
//     }
//     else if((this.x - this.size/2) < (mirror.x - mirror.width/2)){
//       this.x - this.size/2 = (this.x - this.size/2) + (mirror.x - mirror.width/20;
//     }
//     // Vertically
//     if ((this.y + this.size/2) > (mirror.y + mirror.height/2)) {
//       this.y + this.size/2 = (this.y + this.size/2) - (mirror.y + mirror.height/2);
//     }
//     else if((this.y - this.size/2) < (mirror.y - mirror.height/2)){
//       this.y - this.size/2 = (this.y - this.size/2) + (mirror.y - mirror.height/2);
//     }
//   }
//
//
//   display(){
//   // Specific features will be inserted in subclasses
//   }
