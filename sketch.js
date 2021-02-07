
var balloon, background,database;
var dr=[];
function preload() {
  backgroundImg = loadImage("images/1.png")
  balloonImage = loadAnimation("images/2.png", "images/3.png", "images/4.png");
}

function setup(){
  database=firebase.database
  console.log(database)
    createCanvas(700,500);
balloon = createSprite (100,400, 20, 20)
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.4;
}

function draw(){

    background(backgroundImg);
        if(keyDown(LEFT_ARROW)){
            balloon.x = balloon.x - 10;
        }
        else if(keyDown(RIGHT_ARROW)){
            balloon.x = balloon.x + 10;
        }
        else if(keyDown(UP_ARROW)){
            balloon.y = balloon.y - 10;
        }
        else if(keyDown(DOWN_ARROW)){
             balloon.y = balloon.y + 10;
        }
        if(balloon.x<0){
          balloon.x=700
        }if(balloon.x>700){
          balloon.x=0
        }if(balloon.y<0){
          balloon.y=500
        }if(balloon.y>500){
          balloon.y=0
      } 
        drawSprites();
    }

    

