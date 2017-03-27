function Hero(position) {

    if (!(this instanceof Hero)) {
        return new Hero(position);
    }

    this.image = document.getElementById("character");
    this.isJumping = false;
    this.canJump = false;
    this.jumpTween = null;
    this.timeLine = null;

}

Hero.prototype.update = function () {
    if (this.canJump) {
        if (!this.isJumping) {
            this.jump();
        }
    }
}

Hero.prototype.jump = function () {
    //Se crean los objecto para hacer la animacion solo una ves, por eso de inician en null cuando se 
    //construye el objecto
    if (this.jumpTween == null && this.timeLine == null) {

        this.jumpTween = new TweenLite.to(this.image, 0.5, { y: -150, ease: Back.easeIn });
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

Hero.prototype.render = function () {

}
