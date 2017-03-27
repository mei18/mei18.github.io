window.addEventListener("load",init,false);

function init() {
  var pool = [];

  let hero = Hero(Vector(635, 476));
    pool.push(hero);

  function update(){
    console.log("hi");

    requestAnimationFrame(update);
  }
  update();
}
