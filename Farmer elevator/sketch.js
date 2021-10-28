var canvas;
var backgroundImg;
var farmer,farmerImg;

function preload(){
    backgroundImg=loadImage("qwertyuiop.png");
    farmerImg=loadImage("farmer.png");
}

function setup(){
    createCanvas(1200,800)
   farmer=createSprite(100,600)
   farmer.addImage(farmerImg)
   farmer.scale = 0.5
}

function draw(){
    background(backgroundImg)
    

    if(keyDown(RIGHT_ARROW)){
        farmer.velocityX +=5         
     }
    if(keyDown(LEFT_ARROW)){
        farmer.velocityX -=5;
    }
     drawSprites()
}


