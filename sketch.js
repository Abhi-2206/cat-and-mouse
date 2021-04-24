var tomImage1 
var jerryImage1 , jerryImage2;
var garden;
function preload() {
    gardenImage = loadImage("images/garden.png");

    tomImage1 = loadAnimation("images/cat2.png" , "images/cat3.png" );
    tomImage2 = loadImage("images/cat1.png");

    jerryImage1 = loadImage("images/mouse1.png ");

    jerryImage2 = loadAnimation("images/mouse2.png"); 

    jerryImage3 = loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(900,700,50,50);
    tom.addAnimation("tomImage1",tomImage1);
    tom.scale = 0.1;
    tom.velocityX = -2

    jerry = createSprite(120,700,50,50)
    jerry.addAnimation("jerryImage1",jerryImage1);
    jerry.scale = 0.1;
    
}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
     
    if(tom.collide(jerry)){
        jerry.addAnimation("jerryImage3" , jerryImage3);
        jerry.changeAnimation("jerryImage3");

        tom.addAnimation("tomImage2" , tomImage2);
        tom.changeAnimation("tomImage2");
    } 
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        jerry.addAnimation("jerryImage2" , jerryImage2);
        jerry.changeAnimation("jerryImage2");
        jerry.frameDelay = 25;
    }

    if(keyCode === RIGHT_ARROW){
        jerry.addAnimation("jerryImage2" , jerryImage2);
        jerry.changeAnimation("jerryImage2" , jerryImage2);
        jerry.frameDelay = 25;
    }
}
