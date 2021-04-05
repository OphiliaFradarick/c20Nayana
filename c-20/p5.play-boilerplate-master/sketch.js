var movingRect, fixedRect;

function setup(){
  createCanvas(1400, 800);

  fixedRect = createSprite(200, 200, 50, 100);
  fixedRect.shapeColor = "lightblue";
  fixedRect.debug = true;

  movingRect = createSprite(200, 200, 100, 30);
  movingRect.shapeColor = "lightblue";
  movingRect.debug = true;

}

function draw(){
  background(255);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2  
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2  ){

    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "purple";

  }

  else{
    movingRect.shapeColor = "lightblue";
    fixedRect.shapeColor = "lightblue";
  }

  drawSprites();

}