var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100,100,50,20);
  movingRect = createSprite(100,50,50,20);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  rect1 = createSprite (300,10,50,20);
  rect2 = createSprite (300,390,50,20);

  rect1.velocityY = 5;
  rect2.velocityY = -5;
}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && 
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
    }else{
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
    }

  if(rect1.x - rect2.x < rect1.width/2 + rect2.width/2 &&
    rect2.x - rect1.x < rect1.width/2 + rect2.width/2){
      rect1.velocityX = rect1.velocityX*(-1);
      rect2.velocityX = rect2.velocityX*(-1);
    }

  if(rect1.y - rect2.y < rect1.height/2 + rect2.height/2 &&
    rect2.y - rect1.y < rect1.height/2 + rect2.height/2){
      rect1.velocityY = rect1.velocityY*(-1);
      rect2.velocityY = rect2.velocityY*(-1);
   }
  
  drawSprites();
}