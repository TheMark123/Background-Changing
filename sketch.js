
function setup() {
  createCanvas(600,500);
  var ball=createSprite(200, 200)
}

function draw() 
{
  background("white");

if (keyDown(RIGHT_ARROW)){
                  background("red")
}

if (keyDown(DOWN_ARROW)){
  background("yellow")
}

if (keyDown(UP_ARROW)){
  background("lime")
}

if (keyDown(LEFT_ARROW)){
  background("blue")
}


  drawSprites()

}




