const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var ground
var thor,thorImage
var bolt, boltImage, hammer, elastic

function preload(){
  ground=loadImage("images/grass.jpeg")
  boltImage=loadImage("images/bolt.png")
  thorImage = loadImage("images/thor.png");
  
}

function setup() {

  createCanvas(1000,1000);
  engine = Engine.create();
	world = engine.world;
 
  hammer=new Hammer(300,600,50)
  elastic=new Elastic(hammer.body,{x:300, y:600})

  thor=createSprite(500,600,50,50)
  thor.addImage(thorImage);
  thor.scale=0.25

  

  Engine.run(engine);
}

function draw() {
  background("red");
  //image(ground,0,displayHeight*5,displayWidth,displayHeight*5)  

 
  hammer.display()
  
 elastic.display()
  

  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(hammer.body,{x:mouseX,y:mouseY})
 }

 function mouseReleased(){
  elastic.fly()
}


	

