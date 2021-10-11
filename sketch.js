var dog
var happyDog
var database
var foodS
var foodStock
var database

function preload()
{
happyDog = loadImage("images/dogImg1.png")
sadDog = loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250)
  dog.addImage(sadDog)
  dog.scale = .5
  database = firebase.database(foodStock)
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  textSize(15)
  fill("blue")
  stroke(2)
  text("Food Left: "+foodS,200,50)
}
function readStock(data){
  foodS = data.val()
}
function writeStock(x){
if(x<=0)
x=0
else(x=x-1)
database.ref("/").update({
  food:x
})
}



