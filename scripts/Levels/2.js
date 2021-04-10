function level2(){
    fill(255);
    rect(width/2, height/2, width/1.3, height/1.3);
    
    collision(player, width/2, height/2, width/1.3, height/1.3);
    
    fill(255);
    textSize(width/80);
    var textwidth1 = textWidth('Ammo: ' + player.bullets);
    text('Ammo: ' + player.bullets, 0+textwidth1/2, height/12); 
    var textwidth2 = textWidth('Health: ' + player.health);
    text('Health: ' + player.health, 0+textwidth2/2, height/20); 

    zombie1.update();
    skeleton1.update();
    if(zombie1.object.isTouching(player.object)){
        if(frameCount % 10 == 0){
            player.health--;
        }
    }
    
    for(var i = 0; i < bulletsGroup.length; i++){
        if(bulletsGroup.length > 0){
            if(bulletsGroup.get(i).isTouching(zombie1.object)){
                bulletsGroup.get(i).visible = 0;
                zombie1.health--;
            }
            
            if(bulletsGroup.get(i).isTouching(skeleton1.object)){
                bulletsGroup.get(i).visible = 0;
                skeleton1.health--;
            }
        }
    }

    if(zombie1.object.removed){
        if(zombie1.times > 5){
            bullets.push(new Bullet(zombie1.object, 'pickup'));
            zombie1.times--;
        }
        
    }

    if(skeleton1.object.removed){
        if(skeleton1.times > 5){
            bullets.push(new Bullet(skeleton1.object, 'pickup'));
            skeleton1.times--;
        }
    }

    if(zombie1.object.removed && skeleton1.object.removed){
        fill(255);
        rect(width/2+width/1.31, height/2, width/1.3, height/1.3);
    
        if(right_collide){
            gameLevel += 0.5;
        }
    }
    
    player.control();
};