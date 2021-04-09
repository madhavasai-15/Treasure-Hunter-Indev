class Bullet{
    constructor(object){
        this.x = object.x;
        this.y = object.y;
        this.width = object.width/3;
        this.height = object.height/3;
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        this.visible = 255;
    };

    

    update(){
        let dx = this.x - this.mouseX;
        this.x -= dx * 0.03;
        let dy = this.y - this.mouseY;
        this.y -= dy * 0.03;

        if(this.visible <= 0){
            bullets.splice(0, 1);
        }       

        this.visible -= 4;
    };

    show(){
        fill(211, this.visible);
        rect(this.x, this.y, this.width, this.height);  
    };
}