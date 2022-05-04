var bgimg
var jorge
var jorgeimg
var zezinn
var zezinnimg
var zezinn2
var zezinn3
var zezinn4
var jorge2
var jorge4


function preload() {
    //load the images here
    bgimg = loadImage("images/garden.png");
    jorgeimg = loadImage("images/cat1.png");
    jorge2 = loadAnimation("images/cat2.png","images/cat3.png");

    jorge4 = loadAnimation("images/cat4.png");

    zezinnimg = loadImage("images/mouse1.png");
    zezinn2 = loadAnimation("images/mouse2.png","mouse3.png");

    zezinn4 = loadAnimation("images/mouse4.png");
} 

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jorge = createSprite(870,600);
    jorge.addAnimation("dormindo",jorgeimg);
    zezinn = crateSprite(200,600);
    zezinn = addAnimation("parado",zezinnimg);

}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();

    if(jorge.x-zezinn.x<(jorge.width-zezinn.width)/2){
        jorge.velocityX=0;
        jorge.addAnimation("parado",jorge4);
        jorge.x=300;
        zezinn.addanimation("observando",zezinn4);
    }
}

function keyPressed(){
  //For moving and changing animation write code here
  if(keyCode==LEFT_ARROW){
   jorge.velocityX = -5;
   jorge.addAnimation("trotando",jorge2);
   zezinn.addAnimation("correndo",zezinn2);
}


}