function collision(object, x_, y_, width_, height_){
  //left side collision
  //stopping object not to left side then its limits
  if(object.x < x_-width_/2+object.width/2){
    object.x = x_-width_/2+object.width/2;
    object.collide.left = true;
  }else{
    object.collide.left = false;
  }
  
  //right side collision
  //stopping object not to right side then its limits
  if(object.x > x_+width_/2-object.width/2){
    object.x = x_+width_/2-object.width/2;
    object.collide.right = true;
  }else{
    object.collide.right = false;
  }

  //up side collision
  //stopping object not to up side then its limits
  if(object.y < y_-height_/2+object.height/2){
    object.y = y_-height_/2+object.height/2;
    object.collide.up = true;
  }else{
    object.collide.up = false;
  }   

  //down side collision
  //stopping object not to down side then its limits
  if(object.y > y_+height_/2-object.height/2){
    object.y = y_+height_/2-object.height/2;
    object.collide.down = true;
  }else{
    object.collide.down = false;
  }
};