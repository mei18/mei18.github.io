function Enemy(position, image) {
    if (!(this instanceof Enemy)) {
        return new Enemy(position, image);
    }

    console.log('Enemy');

    this.velocity = Vector(-5, 0);
    this.position = position;
    this.width = 100;
    this.height = 85;

    this.image1 = image;
    this.image1.style.top = this.position.y + 320;
    this.image2 = image;
    this.image2.style.top = this.position.y + 320;
    this.image3 = image;
    this.image3.style.top = this.position.y + 320;
    this.image4 = image;
    this.image4.style.top = this.position.y + 320;
    this.image5 = image;
    this.image5.style.top = this.position.y + 320;
    this.image6 = image;
    this.image6.style.top = this.position.y + 320;
    this.image7 = image;
    this.image7.style.top = this.position.y + 320;
    this.image8 = image;
    this.image8.style.top = this.position.y + 320;
    this.image9 = image;
    this.image9.style.top = this.position.y + 320;
    this.image10 = image;
    this.image10.style.top = this.position.y + 320;
    this.image11 = image;
    this.image11.style.top = this.position.y + 320;

}

Enemy.prototype.update = function () {
    // agregar la velocidad
    this.position.add(this.velocity);
    this.checkBounderies();
    this.render();

}

Enemy.prototype.render = function () {

    this.image1.style.left = this.position.x;
    this.image2.style.left = this.position.x;
    this.image3.style.left = this.position.x;
    this.image4.style.left = this.position.x;
    this.image5.style.left = this.position.x;
    this.image6.style.left = this.position.x;
    this.image7.style.left = this.position.x;
    this.image8.style.left = this.position.x;
    this.image9.style.left = this.position.x;
    this.image10.style.left = this.position.x;
    this.image11.style.left = this.position.x;

    /*

  for(var i = 0; i < this.enemys.length; i++) {
    //sacar la img en random.
    var randomimg = this.enemys[Math.floor(Math.random() * this.enemys.length)];
    //console.log('random',randomimg.src);
  }
  //Display.
  var img = document.getElementById("img-enemy");

    for(var i = 0; i < this.enemys.length;i++){
        if(this.enemys[i].src == img.src)
        {
          console.log('dentro del for');

            if(i === this.enemys.length){
                img.setAttribute("src"," this.enemys[0].src");
                console.log('i es igual!!');
            }
            console.log('i no es igual!!');

            //document.getElementById(element).src = this.enemys[i+1].src;
            //break;
        }
    }
    */
}

Enemy.prototype.onCollisionEnter = function () {
    console.log('onCollisionEnter()');
}

Enemy.prototype.getRect = function () {
    return Rect(this.position.x, this.position.y, this.width, this.height);

}

Enemy.prototype.checkBounderies = function () {
    //toma el ancho de la imagen y lo devuelve
    if (this.position.x < -100) {
        this.position.x  = window.innerWidth;
    }
}
