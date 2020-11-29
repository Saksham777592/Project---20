var car, wall;

var speed, weight;

function setup() {
  createCanvas(1350,400);

  speed = random(55,90);
  weight = random(200,1500);

  car = createSprite(50,200,50,50);
  car.shapeColor = "white";
  car.velocityX = speed;

  wall = createSprite(1250,200,60,height/2);

}

function draw() { 
  background(0);  

  if(wall.x - car.x < (car.width + wall.width)/2) {
    
    car.velocityX = 0;
    
    var deformation = 0.5*weight*speed*speed/22500;

    if(deformation > 180) {
      car.shapeColor = "red";
    }
    
    if(deformation > 100 && deformation < 180) {
      car.shapeColor = "yellow";
    }

    if(deformation < 100) {
      car.shapeColor = "green";
    }

  }


  drawSprites();
}