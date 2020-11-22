var fixedRect, movingRect;
var one, two, three, four;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  one = createSprite(700, 400, 50, 50);
  one.shapeColor = "blue";
  
  two = createSprite(600, 200, 50, 50);
  two.shapeColor = "blue";
  
  three = createSprite(300, 400, 50, 50);
  three.shapeColor = "blue";
  
  four = createSprite(900, 400, 50, 50);
  four.shapeColor = "blue";
  two.velocityY = +5;
  fixedRect.velocityY = -5;
}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, one)) {
    one.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  } else {
    one.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  
  bounceOff(fixedRect, two);
  drawSprites();
}
