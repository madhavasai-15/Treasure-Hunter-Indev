var totalMobs;
function level(){
    fill(255);
    rect(width/2, height/2, width/1.3, height/1.3);
    
    collision(player, width/2, height/2, width/1.3, height/1.3);  

    if (totalMobs == 0) {
        fill(255);
        rect(width/2+width/1.31, height/2, width/1.3, height/1.3);

        if (player.collide.right) {
            player.x = width/7;
            gameLevel += 0.5;
        }
    }

    zombie1.update();
    skeleton1.update();
};

//function for what happens when a mob dies
function MobGotKilled(mob) {
    if (mob.object.removed) {
        if (mob.times > 0) {
            bullets.push(new Bullet(mob.object, 'pickup'));
            mob.times--;
        }

        if (mob.times == 0) {
            totalMobs--;
            mob.times--;
        }
    }
}