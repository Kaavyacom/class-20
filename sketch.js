var movingRect,fixedRect
function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(200,100, 50, 80);
  fixedRect=createSprite(600,100,80,30);
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
movingRect.velocityX = -5
//fixedRect.velocityX = 5


}

function draw() {
  background(0); 
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  //if movingRect.Y -fixedRect.X;
if(movingRect.x - fixedRect.x < fixedRect.width/2 +movingRect.width/2
&&fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2)
{
  movingRect.velocityX = movingRect.velocityX*(-1)
  fixedRect.velocityX  = fixedRect.velocityX*(-1)
}
 
  drawSprites();
}