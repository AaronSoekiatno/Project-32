const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//row #1
var box1,box2,box3;

//row #2
var box4,box5;

//row #3
var box6;

var grnd,grnd2,sling,polygon,polygonImg;
var score = 0;
var gameState = "onSling";

function preload(){
  polygonImg = loadImage("hex.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.rectangle(100,350,50,50);
  World.add(world,polygon);
  
  grnd = new ground(400,390,800,20);
  grnd2 = new ground(500,250,150,10);
  sling = new slingshot(polygon,{x:100,y:250});

  //row #1
  box1 = new box(475,230,25,30);
  box2 = new box(500,230,25,30);
  box3 = new box(525,230,25,30);

  //row #2
  box4 = new box(488,198,25,30);
  box5 = new box(513,198,25,30);

  //row #3
  box6 = new box(501,166,25,30);

  Engine.run(engine);
}

function draw() {
  background(150);  

  fill("red");
  textSize(18);
  text("Score:"+score,700,35);
  
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,30,30);
  
  grnd.display();
  grnd2.display();
  sling.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
}

function mouseDragged(){
  if(gameState!=="launched"){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  sling.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY})
      sling.attach(polygon);
      gameState = "onSling";
  }
  }