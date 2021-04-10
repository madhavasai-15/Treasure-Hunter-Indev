var room;

var player;
var bullets = [];
var bulletsGroup;

var zombie1;
var skeleton1;
var arrowsGroup;

var allMobsDead = {
  one: false,
  two: false,
  three: false,
  four: false,
  five: false,
};

var titleImg;

const MAINMENU = 0;
const PLAY = 1;
const END = 2;
var gameState = PLAY;
var gameLevel = 2.5;

function preload(){
  titleImg = loadImage('Images/Title.png');
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //creating bullets group
  //for detecting collision between bullets and mobs
  bulletsGroup = new Group();

  arrowsGroup = new Group();  

  //player - the main character
  player = new Player();
  
};

function draw() {
  background(33, 26, 42); 
  rectMode(CENTER);
  imageMode(CENTER);
  noStroke(); 
  
  //gamestate mainmenu
  if(gameState === MAINMENU){
    image(titleImg, width/2, height/6, width/1.9, height/4);

    //brower tab name
    document.title = 'Treasure Hunter - Indev';
  }else 
  //gamestate play
  //here is the gameplay script
  if(gameState === PLAY){
    switch(gameLevel){
      case 0.5:
        zombie1 = new Zombie(width/2, height/1.2, 1);
        gameLevel += 0.5;
        break;
      case 1: level1(); //function is being used for simple understand, script is in levels/1.js 
        break;
      case 1.5: 
          zombie1 = new Zombie(width/1.3, height/6, 2); //loading of level2 making already used variables to new variables
          skeleton1 = new Skeleton(width/1.8, height/1.3, 2);
          player.x = width/7;
          gameLevel += 0.5;
        break;  
      case 2: level2(); //function is being used for simple understand, script is in levels/2.js
        break;  
      case 2.5:  
          zombie1 = new Zombie(width/1.8, height/2.6, 3); //loading of level2 making already used variables to new variables
          skeleton1 = new Skeleton(width/1.4, height/4.7, 3);
          player.x = width/7;
          gameLevel += 0.5;
        break;  
      case 3:  level3(); //function is being used for simple understand, script is in levels/3.js 
        break;
      case 3.5: 
          zombie1 = new Zombie(width/1.3, height/2.6,3); //loading of level2 making already used variables to new variables
          skeleton1 = new Skeleton(width/1.9, height/5.6, 3);
          player.x = width/7;
          gameLevel += 0.5; 
        break;
      case 4: level4();
        break;  

      default:
        break;
    }
    for(var i = 0; i < bullets.length; i++){
      bullets[i].update();
    }
    document.title = 'Treasure Hunter - ' + gameLevel;
    drawSprites();
  }else 
  //gamestate end
  if(gameState === END){
    
  }
};

var state_ = 0;
function mouseReleased(){
  //new bullets is generated
  //player is the where the bullet's position at the start of the creation
  if(state_ === 0){
    if(player.bullets > 0){
      bullets.push(new Bullet(player, 'shoot'));
      player.bullets--;
    }
  }
};

function VictoryAlert(){
  
};

var left_collide = false;
var right_collide = false;
var up_collide = false;
var down_collide = false;
function collision(object, x_, y_, width_, height_){
  //left side collision
  //stopping object not to left side then its limits
  if(object.x < x_-width_/2+object.width/2){
    object.x = x_-width_/2+object.width/2;
    object.collide = true;
    left_collide = true;
  }else{
    object.collide = false;
    left_collide = false;
  }
  
  //right side collision
  //stopping object not to right side then its limits
  if(object.x > x_+width_/2-object.width/2){
    object.x = x_+width_/2-object.width/2;
    object.collide = true;
    right_collide = true;
  }else{
    object.collide = false;
    right_collide = false;
  }

  //up side collision
  //stopping object not to up side then its limits
  if(object.y < y_-height_/2+object.height/2){
    object.y = y_-height_/2+object.height/2;
    object.collide = true;
    up_collide = true;
  }else{
    object.collide = false;
    up_collide = false;
  }   

  //down side collision
  //stopping object not to down side then its limits
  if(object.y > y_+height_/2-object.height/2){
    object.y = y_+height_/2-object.height/2;
    object.collide = true;
    down_collide = true;
  }else{
    object.collide = false;
    down_collide = false;
  }

};