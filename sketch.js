
var ship;
var sea;
var shipImg;
function preload(){
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea = loadImage("sea.png");
  
  }

function setup(){
  ship = createSprite (200,200,200,200);
  ship.shapecolor="white";
  ship.addAnimation(ship);
}

  

function draw() {
 
  background(220);
  drawSprites();
  if (KeyDown("up")){
    ship.VelocityY=ship.VelocityY=2;
  }

}