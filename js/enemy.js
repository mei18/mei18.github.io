function Enemy(position) {
    if (!(this instanceof Enemy)) {
        return new Enemy(position);
    }

    this.velocity = Vector(-0.9, 0);
    this.position = position;
    this.enemys = ["../img/EBlue.png","../img/ERed.png"];
    // this.enemys[0] = new Image();
    // this.enemys[0].src = ;
     console.log("array" , this.enemys);
    // this.enemys = new Image();
    // this.enemys[1].src = '../img/ERed.png';
    // this.enemys = new Image();
    // this.enemys[2].src = '../img/EBrown.png';
    // this.enemys = new Image();
    // this.enemys[3].src = '../img/EYellow.png';
    // this.enemys = new Image();
    // this.enemys[4].src = '../img/icicle.png';
    // this.enemys = new Image();
    // this.enemys[5].src = '../img/lava.png';
    // this.enemys = new Image();
    // this.enemys[6].src = '../img/stoneShard.png';
    // this.enemys = new Image();
    // this.enemys[7].src = '../img/WBlue.png';
    // this.enemys = new Image();
    // this.enemys[8].src = '../img/WBrown.png';
    // this.enemys = new Image();
    // this.enemys[9].src = '../img/WRed.png';
    // this.enemys = new Image();
    // this.enemys[10].src = '../img/WYellow.png';
}

Enemy.prototype.update = function () {
    // agregar la velocidad
    this.position.add(this.velocity);
    //this.checkBounderies();
    this.render();
}

Enemy.prototype.render = function () {
  //var counter = [1,2];
  // for (var e = 0; e < counter.length; e++) {
  //   //for(i=0; i<= this.enemys.length; i++) {
  //       //this.enemys[i];
  //       console.log("hol");
  //   //}
  // }
  for (var i = 0; i < this.enemys.length; i++) {

  }
}

Enemy.prototype.checkBounderies = function () {
    //toma el ancho de la imagen y lo devuelve
    if (this.position.x < -200) {
        this.position.x = window.innerWidth;
    }
}
