

function Hero(position) {
  if (!(this instanceof Hero)) {
        return new Hero(position);
    }
   this.character = $("#character");
   this.height = 467;
   this.isJumping = false;
   this.velY = 0;
   this.speed = 3;
   this.y = this.height - 5;
   this.keys = [];
   this.gravity = 0.3;
   this.position = position;
   this.jump = new TweenMax(this.character, 2, {y:0});
}
Hero.prototype.update = function () {
    //add velocity
    this.position.add(this.speed);
    this.render();
}

Hero.prototype.render = function () {
  if (this.keys[32]) {
      // up space
      console.log("hello");
    if(!this.isJumping){
     this.jump = new TweenMax(character, 2, {y:0});
     this.isJumping = true;
     this.velY =- this.speed*2;
    }
  }

  this.velY += this.gravity;

  this.y += this.velY;

  if(this.y >=1600 - this.height){
      this.y = 1600 - this.height;
      this.isJumping = false;
  }

  document.body.addEventListener("keydown", function(e) {
      this.keys[e.keyCode] = true;
  });

  document.body.addEventListener("keyup", function(e) {
      this.keys[e.keyCode] = false;
  });
}
