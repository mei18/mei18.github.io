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
