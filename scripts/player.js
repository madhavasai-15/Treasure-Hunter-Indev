class Player{
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.width = width/30;
        this.height = width/30;
        this.speed = width/300;
        this.collide = false;
    };

    control(){
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
        
    };

    show(){
        fill(55);
        rect(this.x, this.y, this.width, this.height);
    };
};