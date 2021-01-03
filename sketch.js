var cat, catImg,catInitialImg,mouseInitialImg, mouse, mouseImg, garden, gardenImg, mouseChgImg, catChgImg;
function preload() {
//load the images here

catImg = loadAnimation("tomTwo.png","tomThree.png");
catInitialImg = loadImage("tomOne.png");
mouseInitialImg = loadImage("jerryOne.png");
mouseImg = loadAnimation("jerryTwo.png","jerryThree.png");
gardenImg = loadImage("garden.png");
catChgImg = loadAnimation("tomFour.png");
mouseChgImg = loadAnimation("jerryFour.png");

}

function setup(){
createCanvas(1000,800);
//create tom and jerry sprites here

garden = createSprite(0,0,1000,800);
garden.addImage(gardenImg);
garden.scale = 1.5;

mouse = createSprite(50,450,20,20);
mouse.addImage(mouseInitialImg);
mouse.addAnimation("running",mouseImg);
mouse.addAnimation("change",mouseChgImg);
mouse.scale = 0.05;

cat = createSprite(480,450,20,20);
cat.addImage(catInitialImg);
cat.addAnimation("running",catImg);
cat.addAnimation("change",catChgImg);
cat.scale = 0.05;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    console.log(cat.x);

    if (keyDown("left")){
        runningImg()
        cat.x = cat.x-10;
    }

    if (keyDown("right")){
        runningImg()
        cat.x = cat.x+10;
    }

    if (cat.x - mouse.x<50){  
        keyPressed();
    }

    drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here
    mouse.changeAnimation("change",mouseChgImg);
    cat.changeAnimation("change",catChgImg);
}

function runningImg(){
    cat.changeAnimation("running",catImg);
    mouse.changeAnimation("running",mouseImg);
}
