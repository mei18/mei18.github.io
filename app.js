window.addEventListener("load", init, false);

function init() {
  var width = window.innerWidth,
      height = window.innerHeight,
      enemiesPool = [],
      animation;
      modal = document.getElementsByClassName('modal');


  console.log("init");
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);

  let hero = Hero(Vector(width / 2, height / 1.7));
  console.log("heroe", hero);
  $('#character').css('background', '#2C81B7');


  let image1 = new Image();
  image1.src = "../img/EBlue.png";
  image1.id = 'enemy1';
  image1.style.position = 'absolute';
  image1.style.width = 100;

  image1.onload = function () {
    console.log('Load image');
    document.body.appendChild(image1);

  };

  let enemy1 = Enemy(Vector(width, height / 4), image1);
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

  let enemy2 = Enemy(Vector(width + 300, height / 4), image2);
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

  let enemy3 = Enemy(Vector(width + 600, height / 4), image3);
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

  let enemy4 = Enemy(Vector(width + 900, height / 4), image4);
  enemiesPool.push(enemy4);

  let image8 = new Image();
  image8.src = "../img/WBlue.png";
  image8.id = 'enemy8';
  image8.style.position = 'absolute';
  image8.style.width = 100;

  image8.onload = function () {
    console.log('Load image');
    document.body.appendChild(image8);

  };

  let enemy8 = Enemy(Vector(width + 1200, height /8), image8);
  enemiesPool.push(enemy8);

  let image9 = new Image();
  image9.src = "../img/WRed.png";
  image9.id = 'enemy9';
  image9.style.position = 'absolute';
  image9.style.width = 100;

  image9.onload = function () {
    console.log('Load image');
    document.body.appendChild(image9);

  };

  let enemy9 = Enemy(Vector(width + 1500, height /8), image9);
  enemiesPool.push(enemy9);

  let image10 = new Image();
  image10.src = "../img/WBrown.png";
  image10.id = 'enemy10';
  image10.style.position = 'absolute';
  image10.style.width = 100;

  image10.onload = function () {
    console.log('Load image');
    document.body.appendChild(image10);

  };

  let enemy10 = Enemy(Vector(width + 1800, height /8), image10);
  enemiesPool.push(enemy10);

  let image11 = new Image();
  image11.src = "../img/WYellow.png";
  image11.id = 'enemy11';
  image11.style.position = 'absolute';
  image11.style.width = 100;

  image11.onload = function () {
    console.log('Load image');
    document.body.appendChild(image11);

  };

  let enemy11 = Enemy(Vector(width + 3750, height /8), image11);
  enemiesPool.push(enemy11);

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
