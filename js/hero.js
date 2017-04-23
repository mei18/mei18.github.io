function Hero(position) {

    if (!(this instanceof Hero)) {
        return new Hero(position);
    }

    this.position = position;
    this.width = 98;
    this.height = 115;

    this.origin = Vector(position.x, position.y);
    console.log("origin", this.origin);
    this.image = document.getElementById("character");
    this.canJump = false;

    //hacer la animacion para arriba
    this.jumpTween = null;
    //organiza la animacion
    this.timeLine = null;

    this.jumpingHeight = 150;
    this.isGoindUp = false;

}

Hero.prototype.update = function () {

    if (this.canJump) {
        if (this.position.y > (this.origin.y - this.jumpingHeight)) {
            this.position.y -= 10;
        }

    }

    if (!this.canJump) {
        if (this.position.y < this.origin.y) {
            this.position.y += 10;
        } else {
            this.position.y = this.origin.y
        }
    }

    this.render();
}

Hero.prototype.render = function () {
    this.image.setAttribute('transform', 'translate(' + this.position.x + ',' + this.position.y + ')')
}

Hero.prototype.jump = function () {
    //Se crean los objecto para hacer la animacion solo una ves, por eso de inician en null cuando se
    //construye el objecto
    if (this.jumpTween == null && this.timeLine == null) {

        this.jumpTween = new TweenLite.to(this.image, 0.25, { y: -100, ease: Linear.easeNone });
        //Se crea el time line  y se pasa el call back y el parametro porque se necesita tener la instancia
        //de este objecto sino se pierde.
        this.timeLine = new TimelineLite({ onComplete: completeHandler, onCompleteParams: [this], onReverseComplete: onReverseComplete, onReverseCompleteParams: [this] });
        this.timeLine.add(this.jumpTween);

        //El callbac resive la instancia del este objecto y le hace reverse al timeLine
        function completeHandler(heroInstance) {
            if (heroInstance) {
                // heroInstance.isJumping = false;
                console.log('completeHandler');
                heroInstance.timeLine.reverse();
            }
        }
        //El callbac resive la instancia del este objecto y
        //setea la variable isJumping a false cuando terminar de brincar
        //para poder brinca nuevamente.
        function onReverseComplete(heroInstance) {
            if (heroInstance) {
                console.log('onReverseComplete');
                heroInstance.isJumping = false;

            }
        }
    } else {
        //Si ya los objecto de tween fueron creados solo decirle a la animacion que reinicie.
        this.timeLine.restart();
    }

    this.isJumping = true;
}

Hero.prototype.onCollisionEnter = function () {
    // console.log('onCollisionEnter()');
}

Hero.prototype.getRect = function () {
    return Rect(this.position.x, this.position.y, this.width, this.height);
}
