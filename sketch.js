
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var left, base, right;
var ball;
//var xyz;
var hello;
var anim;

function preload(){

	hello  = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	anim = createSprite(670,530,2,2);
	anim.addImage(hello);
	anim.scale = 0.6;
	

	ground = new Ground(400,650,800,20);
	base = new Collector(670,620,150,20);
	left = new Collector(565,570,20,100);
	right = new Collector(785,570,20,100);
	ball = new Ball(100,430,100);

	//xyz = Bodies.rectangle(650,530,250,200, {isStatic : true});
	//World.add(world,xyz);
  
	
}


function draw() {
  rectMode(CENTER);
  background("white");
  
   // text(mouseX + ";" + mouseY,200,20);
	Engine.update(engine);

	
	
	
	ground.display();
	base.display();
	left.display();
	right.display();
  ball.display();

 // image(hello,xyz.position.x,xyz.position.y,250,200);
  
 drawSprites();
 
  
 
}


function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position,{ x : 130, y : - 130});
	
	
}}