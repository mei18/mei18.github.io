window.addEventListener("load", init, false);

function init() {
  let width = window.innerWidth,
      height = window.innerHeight,
      enemiesPool = [],
      animation;
      modal = document.getElementsByClassName('modal');


  console.log("init");
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);

  let hero = Hero(Vector(width / 2, height / 1.7));
  console.log("heroe", hero);


  let image1 = new Image();
  image1.src = "../img/EBlue.png";
  image1.id = 'enemy1';
  image1.style.position = 'absolute';
  image1.style.width = 100;

  image1.onload = function () {
    console.log('Load image');
    document.body.appendChild(image1);

  };

  let enemy1 = Enemy(Vector(width, height / 3.7), image1);
  enemiesPool.push(enemy1);


  let image2 = new Image();
  image2.src = "../img/ERed.png";
  image2.id = 'enemy2';
  image2.style.position = 'absolute';
  image2.style.width = 100;

  image2.onload = function () {
    console.log('Load image');
    document.body.appendChild(image2);

  };

  let enemy2 = Enemy(Vector(width + 350, height / 3.7), image2);
  enemiesPool.push(enemy2);

  let image3 = new Image();
  image3.src = "../img/EBrown.png";
  image3.id = 'enemy3';
  image3.style.position = 'absolute';
  image3.style.width = 100;

  image3.onload = function () {
    console.log('Load image');
    document.body.appendChild(image3);

  };

  let enemy3 = Enemy(Vector(width + 700, height / 3.7), image3);
  enemiesPool.push(enemy3);

  let image4 = new Image();
  image4.src = "../img/EYellow.png";
  image4.id = 'enemy4';
  image4.style.position = 'absolute';
  image4.style.width = 100;

  image4.onload = function () {
    console.log('Load image');
    document.body.appendChild(image4);

  };

  let enemy4 = Enemy(Vector(width + 1000, height / 3.7), image4);
  enemiesPool.push(enemy4);

  let image5 = new Image();
  image5.src = "../img/icicle.png";
  image5.id = 'enemy5';
  image5.style.position = 'absolute';
  image5.style.width = 200;

  image5.onload = function () {
    console.log('Load image');
    document.body.appendChild(image5);

  };

  let enemy5 = Enemy(Vector(width + 1280, height / 2.5), image5);
  enemiesPool.push(enemy5);

  let image6 = new Image();
  image6.src = "../img/stoneShard.png";
  image6.id = 'enemy6';
  image6.style.position = 'absolute';
  image6.style.width = 200;

  image6.onload = function () {
    console.log('Load image');
    document.body.appendChild(image6);

  };

  let enemy6 = Enemy(Vector(width + 1580, height / 2.5), image6);
  enemiesPool.push(enemy6);

  function update() {
    //2. Recuerda que para animar los objectos hay que llamar a sus
    // update() como se hace en el for loop
    hero.update();
    animation = requestAnimationFrame(update);

    enemiesPool.forEach(function (enemy) {
      enemy.update();

      if (hitRectOnRect(hero.getRect(), enemy.getRect())) {
        enemy.onCollisionEnter();
        $('#gOver').modal('show');
        console.log(enemy);
        console.log("hero rect", hero.getRect());
        console.log("enemy rect", enemy.getRect());
        console.log("HIT rect", hitRectOnRect(hero.getRect(), enemy.getRect()));
        console.log("Game Over!", modal);
        cancelAnimationFrame(animation);
      }
    }, this);

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
