function Enemy(position) {
    if (!(this instanceof Enemy)) {
        return new Enemy(position);
    }

    this.velocity = Vector(-0.9, 0);
    this.position = position;
    this.img = new Image();
    this.enemys = ['../img/EBlue.png', '../img/ERed.png','../img/EBrown.png','../img/EYellow.png', '../img/icicle.png','../img/lava.png','../img/stoneShard.png', '../img/WBlue.png','../img/WBrown.png','../img/WRed.png','../img/WYellow.png'];

}

Enemy.prototype.update = function () {
    // agregar la velocidad
    this.position.add(this.velocity);
    this.checkBounderies();
    this.render();
}

Enemy.prototype.render = function () {
  let counter = 2
  for (var e = 0; e <= counter; e++) {
    for(i=0; i<= this.enemys.length; i++) {
        this.enemys[i];
    }
  }
}

Enemy.prototype.checkBounderies = function () {
    //toma el ancho de la imagen y lo devuelve
    if (this.position.x < -200) {
        this.position.x = window.innerWidth;
    }
}
