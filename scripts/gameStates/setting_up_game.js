function SettingUpGame(){
  if (stateOfGame === "Continue") {
    //getting the cookie 
    var gameCookie = getCookie('game');
    //checking if the cookie exist or not
    if(gameCookie !== null && gameCookie !== undefined){
      gameCookieJSON = JSON.parse(gameCookie);
      //asigning the values to variables if cookie exists
      gameLevel = gameCookieJSON.level;
      
      player = new Player(gameCookieJSON.player.x, gameCookieJSON.player.y, gameCookieJSON.player.health, gameCookieJSON.player.bullets);
      
      //checking if value is a whole number or decimal number
      //value should be decimal number cuz of setting up function
      var gameLevelPoint = Number.isInteger(gameLevel);
      if(gameLevelPoint){
        //if it is subtracting 0.5
        gameLevel -= 0.5;
      }
      //if cookie does not exist
    }else if(gameCookie === undefined){
      //starting the game from start
      gameLevel = 0.5;
      player = new Player(width/7, height/2, 10, 10);
    }
  }else {
    //starting the game from start
    gameLevel = 0.5;
    player = new Player(width/7, height/2, 10, 10);
  }

  //going to play state
  gameState = PLAY;
};