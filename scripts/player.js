class Player{
    constructor(){
        //cordinates
        this.x = width/7;
        this.y = height/2;
        this.width = width/30;
        this.height = width/30;
        this.object = createSprite(this.x, this.y, this.width, this.height);
        this.object.shapeColor = 55;
        this.speed = width/300;
        this.collide = false;
        this.bullets = 10;
        this.health = 10;
    };

    control(){
        //controls
        if(!this.collide){
            if(keyDown(65)){
                this.x -= this.speed;
            }else if(keyDown(68)){
                this.x += this.speed;
            }

            if(keyDown(87)){
                this.y -= this.speed;
            }else if(keyDown(83)){
                this.y += this.speed;
            }
        }

        this.object.x = this.x;
        this.object.y = this.y;

        if(this.health <= 0){
            this.object.destroy();
        }
    };
};