class Zombie{
    constructor(x, y, level){
        //cordinates for easy used
        this.x = x;
        this.y = y;
        this.width = width/30;
        this.height = width/30;
        //sprite
        this.object = createSprite(this.x, this.y, this.width, this.height);
        this.object.shapeColor = color(0, 255, 0);
        //speed for movement
        this.speed = width/300;
        //health / level of the zombies
        this.health = level;
        this.times = Math.round(random(0, level*2));
    };

    update(){
        //object position is based on cordinates for easy use 
        this.object.x = this.x;
        this.object.y = this.y;

        if(this.health >= 1){
            if(player.x > this.x-this.width*4 && player.x < this.x+this.width*4 && player.y > this.y-this.height*4 && player.y < this.y+this.height*4){
                let dx = this.x - player.x;
                this.x -= dx * 0.03;
    
                let dy = this.y - player.y;
                this.y -= dy * 0.03;
            }

            //hurting the player
            if(frameCount % 20 == 0){
                if(this.object.isTouching(player.object)){
                                        
                }
            }
        }

        if(this.health <= 0){
            this.object.destroy();
        }
    };
};