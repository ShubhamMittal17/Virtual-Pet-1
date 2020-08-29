//Create variables here
var dogImg,dog,database,foodS,foodStock,dogHappy;
function preload()
{
  //load images here
  dogImg=loadImage("Dog.png");
  dogHappy=loadImage("happydog.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,30,30);
  dog.addImage(dogImg);
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  //foodS=foodS-1;
  dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here
textSize(20);
fill("white");
text("Note: Press UP ARROW to feed Drago Milk",75,70);
text("Stock:"+foodS,50,125);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x-1
  })
};


