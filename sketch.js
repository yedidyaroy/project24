
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer;
var stone;
var rubber;
var sand1;
var sand2;
var sand3;
var sand4;
var iron;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	ground = new Ground(300,695,1000,10);
	hammer = new Hammer(200,200,100,30);
	stone = new Stone(200,600,100,100);
	rubber = new Rubber(360,600,20);
	sand1 = new Sand(400,600,5);
  sand2 = new Sand(100,600,5);
  sand3 = new Sand(200,600,5);
  sand4 = new Sand(300,600,5);
  iron = new Iron(500,600,100,50);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background("lightblue");
  drawSprites();
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  iron.display();
}