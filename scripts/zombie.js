class Zombie{
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.width = width/30;
        this.height = width/30;
        this.speed = width/300;
        this.collide = false;
    };
    show(){
        fill(0, 255, 0);
        rect(this.x, this.y, this.width, this.height);
    };
};