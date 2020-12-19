const Engine=Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var engine, world, ground,ball;

function setup() {
  engine=Engine.create();
 world=engine.world
  createCanvas(400,400);
var option={isStatic: true}

  ground=Bodies.rectangle(200,390,400,10,option);
World.add(world,ground);
ball=Bodies.circle(200,100,30,{restitution: 1});
World.add(world,ball)

console.log(ground);
console.log(ground.position.x)
console.log(ground.position.y)
  
}

function draw() {
  Engine.update(engine);
  background(0);  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10)
  ellipse(ball.position.x,ball.position.y,30,30)
}