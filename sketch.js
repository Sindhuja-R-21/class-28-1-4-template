const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas, angle, tower, cannon;
var angle;



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle=PI/4;

  tower = new Tower(150, 350, 160, 310);
  cannon=new Cannon(180, 110, 110, 50,angle);

}

function draw() {
  background(189);

  Engine.update(engine);

  image(backgroundImg, 0, 0, width, height);

  tower.display();
  cannon.show()
  
 
}



