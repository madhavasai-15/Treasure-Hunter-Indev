var mainMenuArrangementGet, mainMenuArrangement;
var stateOfGame;
function MainMenu(){
    mainMenuArrangementGet = getCookie("game");
    if (mainMenuArrangementGet) {
      mainMenuArrangement = JSON.parse(mainMenuArrangementGet);
    }
  
    //cookie is presented which means the play has saved their game
    //to continue playing "continue" button is generated 
    //for the button the arrangement of the mainmenu will be changed
  if (mainMenuArrangement !== undefined) {
    if (mainMenuArrangement.saved) {
        image(titleImg, width/2, height/6, width/1.9, height/4);

        fill(255);
        rect(width/2, height/2.5, width/6, height/9);

        //Play Button
        MainMenu_Button(button, width/2, height/1.8, width/6, height/9, 0, 0, 640, 240, 640, 0, 640, 240);

        //Settings Button
        MainMenu_Button(button, width/2, height/1.4, width/6, height/9, 0, 240, 640, 240, 640, 240, 640, 240);

        //Quit Button
        MainMenu_Button(button, width/2, height/1.14, width/6, height/9,  0, 480, 640, 240, 640, 480, 640, 240);
      }else {
        image(titleImg, width/2, height/6, width/2.2, height/4.5);

        //Play Button
        MainMenu_Button(button, width/2, height/2.5, width/6, height/9, 0, 0, 640, 240, 640, 0, 640, 240);

        //Settings Button
        MainMenu_Button(button, width/2, height/1.8, width/6, height/9, 0, 240, 640, 240, 640, 240, 640, 240);

        //Quit Button
        MainMenu_Button(button, width/2, height/1.4, width/6, height/9,  0, 480, 640, 240, 640, 480, 640, 240);
      }
    }else {
      image(titleImg, width/2, height/6, width/2.2, height/4.5);

      //Play Button
      MainMenu_Button(button, width/2, height/2.5, width/6, height/9, 0, 0, 640, 240, 640, 0, 640, 240);

      //Settings Button
      MainMenu_Button(button, width/2, height/1.8, width/6, height/9, 0, 240, 640, 240, 640, 240, 640, 240);

      //Quit Button
      MainMenu_Button(button, width/2, height/1.4, width/6, height/9,  0, 480, 640, 240, 640, 480, 640, 240);
    }
    //brower tab name
    document.title = 'Treasure Hunter Indev';
};

function MainMenu_Button(Img, sx, sy, sWidth, sHeight, dx1, dy1, dWidth1, dHeight1,  dx2, dy2, dWidth2, dHeight2){
  if (MouseIsOver(sx, sy, sWidth, sHeight)) {
    image(Img, sx, sy, sWidth, sHeight, dx2, dy2, dWidth2, dHeight2);
  }else {
    image(Img, sx, sy, sWidth, sHeight, dx1, dy1, dWidth1, dHeight1);
  }
};

function mouseReleased_MainMenu(){
    if(mainMenuArrangement !== undefined){
      if(mainMenuArrangement.saved){
        if(MouseIsOver(width/2, height/2.5, width/6, height/9)){
          gameSaved = 1;
          stateOfGame = "Continue";
          gameState = SETTING_UP_GAME;
        }else if(MouseIsOver(width/2, height/1.8, width/6, height/9)){
          gameSaved = 0;
          stateOfGame = "NewGame";
          gameState = SETTING_UP_GAME;
        }else if(MouseIsOver(width/2, height/1.4, width/6, height/9)){
          var settingsGet = getCookie("Settings");
          var SettingsJSON_ = JSON.parse(settingsGet);
          if(SettingsJSON_ !== undefined){
            gameDifficulty = SettingsJSON_.gameDifficulty;
            gameState = SETTINGS;
          }else {
            gameState = SETTINGS;
          }
        }else if(MouseIsOver(width/2, height/1.14, width/6, height/9)){
          window.close();
        }
      }else {
        if(MouseIsOver(width/2, height/2.5, width/6, height/9)){
          gameSaved = 0;
          stateOfGame = "NewGame";
          gameState = SETTING_UP_GAME;
        }else if(MouseIsOver(width/2, height/1.8, width/6, height/9)){
          var settingsGet = getCookie("Settings");
          var SettingsJSON_ = JSON.parse(settingsGet);
          if(SettingsJSON_ !== undefined){
            gameDifficulty = SettingsJSON_.gameDifficulty;
            gameState = SETTINGS;
          }else {
            gameState = SETTINGS;
          }
        }else if(MouseIsOver(width/2, height/1.4, width/6, height/9)){
          window.close();
        }
      }
    }else {
      if(MouseIsOver(width/2, height/2.5, width/6, height/9)){
        stateOfGame = "NewGame";
        gameState = SETTING_UP_GAME;
      }else if(MouseIsOver(width/2, height/1.8, width/6, height/9)){
        var settingsGet = getCookie("Settings");
        if (settingsGet) {
          var SettingsJSON_ = JSON.parse(settingsGet);
        }
        
        if(SettingsJSON_ !== undefined){
          gameDifficulty = SettingsJSON_.gameDifficulty;
          gameState = SETTINGS;
        }else {
          gameState = SETTINGS;
        }
      }else if(MouseIsOver(width/2, height/1.4, width/6, height/9)){
        window.close();
      }
    }
};