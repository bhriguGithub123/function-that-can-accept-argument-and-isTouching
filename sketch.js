var fixedRect, moveRect;

var box1,box2,box3,box4;

function setup() {
  createCanvas(windowWidth,windowHeight);

  fixedRect = createSprite(width/2, height/2, 40, 80);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = true;

  moveRect = createSprite(20, 300, 80, 40);
  moveRect.shapeColor = "yellow";
  moveRect.debug = true;

  box1 = createSprite(100, 100, 40, 80);
  box1.shapeColor = "yellow";
  
  box2 = createSprite(200, 100, 40, 80);
  box2.shapeColor = "yellow";

  box3 = createSprite(300, 100, 40, 80);
  box3.shapeColor = "yellow";

  box4 = createSprite(400, 100, 40, 80);
  box4.shapeColor = "yellow";
  
}

function draw() {
  background(0);  

moveRect.x = mouseX;
moveRect.y = mouseY;

if(isTouching(moveRect,box1)){

  moveRect.shapeColor = "green";
    box1.shapeColor = "green";
}
else{
  moveRect.shapeColor = "yellow";
  box1.shapeColor = "yellow";

}

  drawSprites();
}


function isTouching(object1,object2){


  if(object1.x - object2.x < object1.width/2 + object2.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object1.height/2 + object2.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2){
    return true;
  }
  else{
    return false;
   
  }

}
