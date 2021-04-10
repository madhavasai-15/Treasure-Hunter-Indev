class Bullet{
    constructor(object, state){
        this.x = object.x;
        this.y = object.y;
        this.width = object.width/3;
        this.height = object.height/3;
        this.object = createSprite(this.x, this.y, this.width, this.height);
        this.object.shapeColor = 211;
        bulletsGroup.add(this.object);
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        this.visible = 255;
        this.state = state;
    };

    update(){
        this.object.x = this.x;
        this.object.y = this.y;

        if(this.state == 'shoot'){
            let dx = this.x - this.mouseX;
            this.x -= dx * 0.03;
            let dy = this.y - this.mouseY;
            this.y -= dy * 0.03;

            this.visible -= 2;
        }else if(this.state == 'pickup'){
            if(player.object.isTouching(this.object)){
                player.bullets++;
                this.object.destroy();
            }
        }

        if(this.visible <= 0){
            bullets.splice(0, 1);
            this.object.destroy();
        }       
    };
}