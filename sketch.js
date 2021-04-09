var room;

var player;
var bullets = [];

var zombie1;

var titleImg;

const MAINMENU = 0;
const PLAY = 1;
const END = 2;
var gameState = PLAY;
var gameLevel = 1;
var bg = {
  r: 33,
  g: 26,
  b: 42,
};

function preload(){
  titleImg = loadImage('Images/Title.png');
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  player = new Player();

  zombie1 = new Zombie();
};

function draw() {
  background(bg.r, bg.g, bg.b); 
  rectMode(CENTER);
  imageMode(CENTER);
  noStroke(); 

  if(gameState === MAINMENU){
  
    image(titleImg, width/2, height/6, width/1.9, height/4);
  }else if(gameState === PLAY){

    if(gameLevel == 1){
      fill(255);
      rect(width/2, height/2, width/1.3, height/1.3);
    }
    
    for(var i = 0; i < bullets.length; i++){
      bullets[i].show();
      bullets[i].update();
    }

    player.show();
    player.control();

    zombie1.show();
  }

  document.title = 'Treasure Hunter - Indev';
};

function mouseReleased(){
  bullets.push(new Bullet(player));
};