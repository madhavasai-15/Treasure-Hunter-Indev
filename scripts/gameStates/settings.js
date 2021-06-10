function Settings(){
    const size = width/50;

    push();
    translate(width/3, height/6);
    rotate(180);
    if(gameDifficulty == 1){
        image(silder, 0, 0, size*3, height/20, 480, 0, 240, 108);
    }else if(gameDifficulty == 2){
        image(silder, 0, 0, size*3, height/20, 240, 0, 240, 108);
    }else {
        image(silder, 0, 0, size*3, height/20, 0, 0, 240, 108);
    }
    pop();

    if(MouseIsOver(width/1.1, height/1.2, width/20, height/20)){
        image(button, width/1.1, height/1.2, width/20, height/20, 0, 720, 192, 108);
    }else {
        image(button, width/1.1, height/1.2, width/20, height/20, 0+192, 720, 192, 108);
    }
};  