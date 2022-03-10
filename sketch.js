const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var botao1;
var botao2;
var ball
var ground;
var left;
var right;
var top_wall;
var barreira1;
var barreira2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  botao1 = createImg('right.png');
  botao1.position(300,300);
  botao1.size(50,50);
  botao1.mouseClicked(forcah);
  botao2 = createImg('up.png');
  botao2.position(20,300);
  botao2.size(50,50);
  botao2.mouseClicked(forcav);
  var ball_options = {
    restitution : 0.95,
  }
  ball = Bodies.circle(140,100,20,ball_options);
  World.add(world,ball);
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  barreira1 = new  Ground(260 ,360,15,80);
barreira2 = new Ground(180,360,15,80);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  barreira1.show();
  barreira2.show();
  Engine.update(engine);
}

function forcah(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:0});
}
function forcav(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.03});
}