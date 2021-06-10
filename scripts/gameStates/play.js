function GamePlay(){
    //setting up level 1 
  if (gameLevel == 0.5) {
      //json format is being used for easy understanding of which mob we are giving cordinates
      levelSetup(1,{ name: 'zombie1', x: width / 1.5, y: height / 2 }, { name: 'zombie2', x: -width, y: -height }, { name: 'skeleton1', x: -width*1.5, y: -height });
    }else if(gameLevel == 1){
      //level mechanisms
      level();
      MobGotKilled(zombie1);
    }else if(gameLevel == 1.5){
      levelSetup(2,{ name: 'zombie1', x: width / 1.5, y: height / 2 }, { name: 'zombie2', x: -width, y: -height }, { name: 'skeleton1', x: width / 3, y: height / 4 });
    }else if(gameLevel == 2){
      level();
      MobGotKilled(zombie1);
      MobGotKilled(skeleton1);
    }else if(gameLevel == 2.5){
      levelSetup(3, { name: 'zombie1', x: width / 1.67, y: height / 2.3 }, { name: 'zombie2', x: width / 4, y: height / 4 }, { name: 'skeleton1', x: width / 4.578, y: height / 3.65});
    }else if(gameLevel == 3){
      level();
      zombie2.update();
      MobGotKilled(zombie1);
      MobGotKilled(zombie2);
      MobGotKilled(skeleton1);
    }else if(gameLevel == 3.5){
      levelSetup(3, { name: 'zombie1', x: width / 1.67, y: height / 2.3 }, { name: 'zombie2', x: width / 4, y: height / 4 }, { name: 'skeleton1', x: width / 4.578, y: height / 3.65});
    }else if(gameLevel == 4){
      level();
      zombie2.update();
      MobGotKilled(zombie1);
      MobGotKilled(zombie2);
      MobGotKilled(skeleton1);
    }else if(gameLevel == 4.5){
      levelSetup(3, { name: 'zombie1', x: width / 1.67, y: height / 2.3 }, { name: 'zombie2', x: width / 4, y: height / 4 }, { name: 'skeleton1', x: width / 4.578, y: height / 3.65});
    }else if(gameLevel == 5){
      level();
      zombie2.update();
      MobGotKilled(zombie1);
      MobGotKilled(zombie2);
      MobGotKilled(skeleton1);
    }

  //updates the game json variable to store if the player wants to store their game
  Game();
  
  //save button function
  saveButton();
  
  for (var i = 0; i < bulletsGroup.length; i++){
    var Mob_Hitting = (object, mob) => {
      if (mob) {
        if(object.isTouching(mob.object)){
          if (frameCount % 5 === 0) {
            object.visible = 0;
            mob.health -= 1;
          }
        }
      }
    }
    Mob_Hitting(bulletsGroup.get(i), zombie1);
    Mob_Hitting(bulletsGroup.get(i), zombie2);
    Mob_Hitting(bulletsGroup.get(i), skeleton1);
  }
       
  player.control();
  player.update();
  for(var i = 0; i < bullets.length; i++){
    bullets[i].update();
  }
  document.title = `Treasure Hunter Indev - Level ${gameLevel}`;
  drawSprites();
};
function loadingLevel(one, two, three){
    //deleting all sprites of bullets
    for(var i = 0; i < bulletsGroup.length; i++){
      bulletsGroup.get(i).visible = 0;
    }
    //new mobs
    zombie1 = new Zombie(one.x, one.y, gameLevel+0.5); 
    zombie2 = new Zombie(two.y, two.y, gameLevel+0.5); 
    skeleton1 = new Skeleton(three.x, three.y, gameLevel+0.5);
    //level start
    gameLevel += 0.5;
};
  
function levelSetup(mobs, x , y, x_, y_){
    //checking if the game is already reloaded or not
    if(!reloadedSavedOne){
      //if not setting up the game with the cookie
      if(gameCookieJSON !== undefined){
        loadingLevel(gameCookieJSON.zombie1.x, gameCookieJSON.zombie1.y, gameCookieJSON.skeleton1.x, gameCookieJSON.skeleton1.y, gameLevel+0.5);
        totalMobs = mobs;
        reloadedSavedOne = true;
      }else {
        //if cookie does not exist 
        //default positions
        loadingLevel(x, y, x_, y_, gameLevel+0.5);
        totalMobs = mobs;
      }
    }else {
      //if reloaded default setting up
      loadingLevel(x, y, x_, y_, gameLevel+0.5);
      totalMobs = mobs;
    }
};
  
var mouseIsOverSave = false;
function saveButton() {
  //checking if the mouse is over the button or not
  const checking = (MouseIsOver(width / 1.1, height / 16, width / 20, height / 20)) ? true : false;
  mouseIsOverSave = checking;
  //changing image of button based of checking variable
  if (!mouseIsOverSave) {
    image(button, width/1.1, height/16, width/20, height/20, 0, 720, 192, 108);
  }else {
    image(button, width/1.1, height/16, width/20, height/20, 0+192, 720, 192, 108);
  }
};