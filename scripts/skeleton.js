class Skeleton{
    constructor(x, y, level){
        //sprite
        this.object = createSprite(x, y, width/30, width/30);
        this.object.shapeColor = color(211, 211, 211);
        //speed for movement
        this.speed = width/300;
        //health / level of the zombies
        this.health = level;
        this.times = Math.round(random(0, 10));
        this.arrows = [];
    };

    ai(level){
        if(frameCount % 30 == 0){
            arrows.push(createSprite(this.object.x, this.object.y, this.width/3, this.width/3));
        }
    };

    update(){
        //object position is based on cordinates for easy use 
        
        if(this.health > 1){
            if(player.x > this.object.x-this.width*4 && player.x < this.object.x+this.width*4 && player.y > this.object.y-this.height*4 && player.y < this.object.y+this.height*4){
                let dx = this.object.x - player.x;
                this.object.x += dx * 0.03;
    
                let dy = this.object.y - player.y;
                this.object.y += dy * 0.03;
            }
        }
        
        if(this.health <= 0){
            this.object.destroy();
        }
    };
};