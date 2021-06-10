var room;
var roomSizeDecider;

var player;
var bullets = [];
var bulletsGroup;

var zombie1, zombie2;
var skeleton1;
var arrowsGroup;

var titleImg;

const COOKIE_ACCEPT = 0;
const MAINMENU = 1;
const SETTING_UP_GAME = 1.5;
const SETTINGS = 2;
const PLAY = 3;
const END = 4;
//game variables
var gameState = COOKIE_ACCEPT;
var gameLevel = 0.5;
var gameFont;
var gameCookieJSON;
var gameCookieRequest;
var gameSwal = false;
var gameDifficulty = 2;
var gameSaved = false;
var reloadedSavedOne = false;

var button;
var silder;

function preload(){
  gameFont = loadFont('Font.ttf');
  titleImg = loadImage('Images/Title.png');

  button = loadImage('Images/button.png');
  silder = loadImage('Images/silder.png');
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  mainmenuButtons = {
    play: {
      
    }
  };
  //creating bullets group
  //for detecting collision between bullets and mobs
  bulletsGroup = new Group();
  //creating arrows group
  //for detecting collision between bullets and player
  arrowsGroup = new Group();  
};

//variable if statement  (2 == 2) ? "hot" : "cool";
function draw() {
  background(33, 26, 42); 
  rectMode(CENTER);
  imageMode(CENTER);
  textFont(gameFont);
  noStroke();

  room = {
    x: width / 2,
    y: height / 2,
    width: width / 1.3,
    height: height / 1.3,
    mobs: totalMobs,
  }

  Shake();

  settingsJSON = {
    "gameDifficulty": gameDifficulty,
  }

  if(gameState === COOKIE_ACCEPT){
    Cookie_Accept();
  }else if(gameState === MAINMENU){
    MainMenu();
  }else if(gameState === SETTINGS){
    Settings();
  }else if(gameState === SETTING_UP_GAME){
    SettingUpGame();
  }else if(gameState === PLAY){
    GamePlay()
  }else if(gameState === END){
    
  }
};

var state_ = 0;
function mouseReleased() {
  if (mouseButton === LEFT) {
    if (gameState === MAINMENU) {
      mouseReleased_MainMenu();
    } else if (gameState === SETTINGS) {
      const size = width / 50;
      if (MouseIsOver(width / 3, height / 6, size * 3, height / 20)) {
        gameDifficulty++;
        if (gameDifficulty > 3) {
          gameDifficulty = 1;
        }
      }
      if (MouseIsOver(width / 1.1, height / 1.2, width / 20, height / 20)) {
        if (gameCookieRequest === "true") {
          setCookie("Settings", `${JSON.stringify(settingsJSON)}`, 30);
        }
        gameState = MAINMENU;
      }
    } else if (gameState === PLAY) {
      //checking if player is alive or dead
      if (player.health > 0) {
        //checking if mouse is over buttons
        if (!mouseIsOverSave) {
          //checking if player is holding a gun 
          if (state_ === 0) {
            //new bullets is generated
            //player is the where the bullet's position at the start of the creation
            if (player.bullets > 0) {
              shake = 4;
              //new bullet being shooted
              bullets.push(new Bullet(player, 'shoot'));
              player.bullets--;
            }
          }
        } else { //if mouse is over button and pressed
          if (gameCookieRequest == 1) {
            gameSaved = 1;
            if (game.saved == 1) {
              setCookie("game", `${JSON.stringify(game)}`, 30);
              alert("Game Saved!");
            } else {
              alert("Please Click again the save button to save the game");
            }
          } else {
            alert("Sorry! Game can't be saved because cookies are declined.");
          }
        }
      }
    }
  }
};

function MouseIsOver(x, y, width, height){
  if(mouseX > x-width/2 && mouseX < x+width/2 && mouseY > y-height/2 && mouseY < y+height/2){
    return true;
  }else {
    return false;
  }
};

var shake = 0;
function Shake(){
  if(shake !== 0){
    translate(random(-5, 5), random(-5, 5));
    if(frameCount % shake == 0){
      shake = 0;
    }
  }
};