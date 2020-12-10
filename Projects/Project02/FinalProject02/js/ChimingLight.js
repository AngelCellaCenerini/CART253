class ChimingLight extends Light {
  constructor(x, y, size){
    super(x, y, size);
    this.originalSize = size;
    this.maxSize = 110;
    this.growth = 3;
    this.g = 178;
    this.b = 22;
    this.active = false;
    // this.reset = false;
  }

  grow(){
    if(this.active){
      console.log(`active`);
      this.size = this.size + this.growth;
      if (this.size > this.maxSize){
        this.growth = 0;
        this.returnOriginalSize();
        // this.reset = true;
      }
    }
  }

  returnOriginalSize(){
    // if(this.reset){
      this.size = this.originalSize;
      this.active = false;
      // this.reset = false;
    // }
    }
}
