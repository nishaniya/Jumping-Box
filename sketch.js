var canvas;
var music;
var surface1,surface2,surface3,surface4;
var jumpingBox;
var edges;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    
    surface1 = createSprite(100,500,200,20);
    surface1.shapeColor = "pink";

    surface2 = createSprite(300,500,200,20);
    surface2.shapeColor = "green";
    
    surface3 = createSprite(500,500,200,20);
    surface3.shapeColor = "yellow";

    surface4 = createSprite(700,500,200,20);
    surface4.shapeColor = "blue";

    jumpingBox = createSprite(400,100,30,30);
    jumpingBox.shapeColor = "lightGreen";

    jumpingBox.velocityX = 5;
    jumpingBox.velocityY = 5;


}

function draw() {
    background("grey");
    
    edges = createEdgeSprites();
    jumpingBox.bounceOff(edges);
    
    if(surface1.isTouching(jumpingBox)){
        jumpingBox.bounceOff(surface1);
        jumpingBox.shapeColor = "pink";
        music.play();
    }

    if(surface2.isTouching(jumpingBox)){
        jumpingBox.velocityX = 0;
        jumpingBox.velocityY = 0;
        jumpingBox.shapeColor = "green";
        music.stop();
    }


    if(surface3.isTouching(jumpingBox)){
        jumpingBox.bounceOff(surface3);
        jumpingBox.shapeColor = "yellow";
    }


    if(surface4.isTouching(jumpingBox)){
        jumpingBox.bounceOff(surface4);
        jumpingBox.shapeColor = "blue";
    }


    drawSprites();
}

