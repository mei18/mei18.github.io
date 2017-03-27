window.addEventListener("load", init, false);

function init() {
  console.log("init");
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);

  let pool = [];
  let hero = Hero(Vector(635, 476));

  //1. Recuerda agregar todos los elementos del juego que necesitan animacion
  //al pool de objecto.
  pool.push(hero);

  function update() {
    //2. Recuerda que para animar los objectos hay que llamar a sus
    // update() como se hace en el for loop
    pool.forEach(function (gameObject) {
      gameObject.update();
    }, this);

    requestAnimationFrame(update);
  }

  update();

  function onKeyDown(e) {
    switch (e.keyCode) {
      case 32:
        hero.canJump = true;
        break;
      default:
        break;
    }
    //3. Para que no se mueva el scroll en la pagina
    e.preventDefault();
  }

  function onKeyUp(e) {
    switch (e.keyCode) {
      case 32:
        hero.canJump = false;
        break;
      default:
        break;
    }
    //3. Para que no se mueva el scroll en la pagina
    e.preventDefault();
  }
}
