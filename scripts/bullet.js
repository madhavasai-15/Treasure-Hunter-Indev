class Bullet{
    constructor(object, state) {
        this.x = object.x;
        this.y = object.y;
        this.width = object.width/4;
        this.height = object.height / 4;
        this.pickupAnimation = {
            image: loadImage('Images/bullet=pickup.png'),
            index: 0
        };
        this.pickupImage = loadImage('Images/bullet=pickupl/1.png');
        this.object = createSprite(this.x, this.y, this.width, this.height);
        this.object.shapeColor = color(255, 159, 6);
        bulletsGroup.add(this.object);
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        this.visible = 255;
        this.state = state;
    };

    update() {
        this.object.x = this.x;
        this.object.y = this.y;
        //there are two types of bullets
        //shoot: is the where the player can shoot the bullet in a particular direction
        //direction is based on mouse position
        if(this.state == 'shoot'){
            let dx = this.x - this.mouseX;
            this.x -= dx * 0.03;
            let dy = this.y - this.mouseY;
            this.y -= dy * 0.03;

            this.visible -= 2;
        }else if(this.state == 'pickup'){
            //pickup: is the where the player can pickup these bullets to get extra bullets
            if (!this.object.removed) {
                if (frameCount % 4 == 0) {
                    if (this.pickupAnimation.index < Bullet_pickup_frames.length-1){
                        this.pickupAnimation.index++;
                    } else {
                        this.pickupAnimation.index = 0;
                    }
                }
                var pos = Bullet_pickup_frames[this.pickupAnimation.index].position;
                image(this.pickupAnimation.image, this.object.x, this.object.y, 32 / 2, 72 / 2, pos.x, pos.y, pos.w, pos.h);
                this.object.shapeColor = color(255, 159, 6, 0);
            }
            //this.object.addImage(this.pickupImage);
            if(player.object.isTouching(this.object)){
                player.bullets++;
                this.object.destroy();
            }
        }

        //disappearing the bullet for better performance
        if(this.visible <= 0){
            bullets.splice(0, 1);
            this.object.destroy();
        }       
    };
}