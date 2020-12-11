class ChimingLight extends Light {
  constructor(x, y, size, melody01SFX, melody02SFX, melody03SFX, melody04SFX, melody05SFX, melody06SFX, melody07SFX, melody08SFX, melody09SFX, melody10SFX ){
    super(x, y, size);
    this.originalSize = size;
    this.growth = 30;
    this.g = 178;
    this.b = 22;
    this.timer = undefined;
    this.chime01 = melody01SFX;
    this.chime02 = melody02SFX;
    this.chime03 = melody03SFX;
    this.chime04 = melody04SFX;
    this.chime05 = melody05SFX;
    this.chime06 = melody06SFX;
    this.chime07 = melody07SFX;
    this.chime08 = melody08SFX;
    this.chime09 = melody09SFX;
    this.chime10 = melody10SFX;

  }


  growthDuration(){
  if (frameCount % 60 === 0 && this.timer > 0){
    this.timer --;
  }
  if (this.timer === 0){
    this.returnOriginalSize()
  }
  }

  keyPressed(){
    // Based on pressed key, play set of notes (.mp3 files)
    if(keyCode === 87 || keyCode === 83 || keyCode === 65 || keyCode === 68 || keyCode === 70 || keyCode === 69 || keyCode === 81 || keyCode === 86 || keyCode === 88 || keyCode === 67 ){

      if (keyCode === 87){
          this.chime01.play();
      }
      else if (keyCode === 68){
          this.chime02.play();
      }
      else if (keyCode === 65){
          this.chime03.play();
      }
      else if (keyCode === 83){
          this.chime04.play();
      }
      else if (keyCode === 88){
          this.chime05.play();
      }
      else if (keyCode === 67){
          this.chime06.play();
      }
      else if (keyCode === 70){
          this.chime07.play();
      }
      else if (keyCode === 86){
          this.chime08.play();
      }
      else if (keyCode === 69){
          this.chime09.play();
      }
      else if (keyCode === 81){
          this.chime10.play();
      }

      this.size = this.size + this.growth;
      this.timer = 2;
    }
  }

  returnOriginalSize(){
    this.size = this.originalSize; // after 2 seconds, objects regains it original size
  }
}
