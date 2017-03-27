var character = $("#character");
var height = 467;
var isJumping = false;
var velY = 0;
var speed = 3;
var y = height - 5;
var keys = [];
var gravity = 0.3;
var jump = new TweenMax(character, 2, {y:0});

function Hero() {
  if (keys[32]) {
      // up space
      console.log("hello");
    if(!isJumping){
     jump = new TweenMax(character, 2, {y:0});
     isJumping = true;
     velY =- speed*2;
    }
  }

  velY += gravity;

  y += velY;

  if(y >=1600 - height){
      y = 1600 - height;
      isJumping = false;
  }
}

document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});
