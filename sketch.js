const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box;
var box2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic : true
  }
  box = Bodies.rectangle(200,380,400,20,option);
  World.add(world,box)



  
}

function draw() {
  background(0);  
 Engine.update(engine);

  

  rectMode(CENTER);
  rect(box.position.x,box.position.y,400,20)

  
  
}