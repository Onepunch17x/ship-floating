var seaImg 
var shipImg
var sea 
var ship

function preload(){
shipImg =  loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea= createSprite(400,400,400,200)
  sea.addImage("seaImg",seaImg);

  ship = createSprite(100,100,200,200)
ship.addAnimation("ship",shipImg)
}

function draw() {
  background("blue");

sea.velocityX = -1
if(sea.x <0){
  sea.x = sea.width/2;
}
 drawSprites
}