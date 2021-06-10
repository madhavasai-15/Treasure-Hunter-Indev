class Player{
    constructor(x, y, health, bullets){
        //cordinates
        this.x = x;
        this.y = y;
        this.width = width/30;
        this.height = width/30;
        this.coinsImg = loadImage('Images/player_icons.png');
        this.object = createSprite(this.x, this.y, this.width, this.height);
        this.object.shapeColor = 55;
        this.speed = width/300;
        this.collide = {
            left: false,
            right: false,
            up: false,
            down: false,
        };
        this.bullets = bullets;
        this.health = health;
    };

    update(){
        this.object.x = this.x;
        this.object.y = this.y;

        if(this.health <= 0){
            this.object.destroy();
        }

        const size = width/50;
        const limit = this.health+1;
        const heartImg = this.coinsImg.get(0, 0, 72, 73);
        for(var x = width/30; x <= size*limit; x+=size){
            image(heartImg, x, height/28, size, size);
        }

        const BulletImg = this.coinsImg.get(96, 0, 33, 72);
        //preventation of a line of bullet images a cross the screen
        if(this.bullets <= 10){
            const size = width/50;
            const limit = this.bullets+1;
            for(var x = width/30; x <= size*limit; x+=size){
            image(BulletImg, x, height/12, size/2, size);
            }
        }else {
            const size = width/50;
            for(var x = width/30; x <= size*11; x+=size){
            image(BulletImg, x, height/12, size/2, size);
            }
            fill(242, 166, 82);
            textSize(width/70);
            const extra = this.bullets-10;
            text(`+ ${extra}`, size*11.4, height/10.5);
        }
    };

    control(){
        //controls
        if(keyDown(65)){
            if(!this.collide.left){
                this.x -= this.speed;
            }
        }else if(keyDown(68)){
            if(!this.collide.right){
                this.x += this.speed;
            }
        }

        if(keyDown(87)){
            if(!this.collide.up){
                this.y -= this.speed;
            }
        }else if(keyDown(83)){
            if(!this.collide.down){
                this.y += this.speed;
            }
        }
    };
};