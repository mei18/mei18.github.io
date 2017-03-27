var character = $("#character");
var height = 400;
character = {
   isJumping : false,
   velY : 0,
   speed : 3,
   y : height - 5
}
var keys = [];
var gravity = 0.3;


function update(){
  console.log("hi");
  // check keys
    if (keys[32]) {
        // up arrow or space
        console.log("hello");
      if(!character.isJumping){
       character.isJumping = true;
       character.velY = -character.speed*2;
      }
    }
    character.velY += gravity;

    character.y += character.velY;

    if(character.y >= height-character.height){
        character.y = height - character.height;
        character.isJumping = false;
    }

  requestAnimationFrame(update);
}
document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});

window.addEventListener("load",function(){
    update();
});
