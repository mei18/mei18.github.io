//3. Recuerda meter todo dentro del evento load.
var character = $("#character");
var height = 400;

//1. El characte es mejor moverlo a un obejcto en su 
//propio script como vimos en clase y seguir 
//las reglas codificación de igual manera con los enemigos.
//2. La logica del comportamiento de hero y los enemigos debe 
//estar en su propio update como vimos en clase, recuerda el ejemplo del carrito de comida.

character = {
    isJumping: false,
    velY: 0,
    speed: 3,
    y: height - 5
}

var keys = [];
var gravity = 0.3;

//4. En el update del app.js llamas al update de cada uno de los
//objectos que estan en el juego.

function update() {
    console.log("hi");
    // check keys
    if (keys[32]) {
        // up arrow or space
        console.log("hello");
        if (!character.isJumping) {
            character.isJumping = true;
            character.velY = -character.speed * 2;
        }
    }
    character.velY += gravity;

    character.y += character.velY;

    if (character.y >= height - character.height) {
        character.y = height - character.height;
        character.isJumping = false;
    }

    requestAnimationFrame(update);
}
document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});

window.addEventListener("load", function () {
    update();
});
