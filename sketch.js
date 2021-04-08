const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var ground;
var ball;

function setup()
{
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
 
  var groundoption={isStatic:true};
  var balloption={restitution:1.2}

  ground=Bodies.rectangle(200,400,800,20,groundoption);
  World.add(world,ground);

  ball=Bodies.circle(150,200,30,balloption);
  World.add(world,ball);



}

function draw()
{
  background(0);
  Engine.update(engine);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  fill("skyblue");
  ellipseMode(RADIUS);
  circle(ball.position.x,ball.position.y,30);

}
