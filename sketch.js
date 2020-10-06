
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(550, 550, 50);
	bob2 = new Bob(650, 550, 50);
	bob3 = new Bob(750, 550, 50);
	bob4 = new Bob(850, 550, 50);
	bob5 = new Bob(950, 550, 50);

	roof = new Roof(750, 150, 500, 75);

	rope1 = new Rope({x: 550, y: 150}, bob1.body);
	rope2 = new Rope({x: 650, y: 150}, bob2.body);
	rope3 = new Rope({x: 750, y: 150}, bob3.body);
	rope4 = new Rope({x: 850, y: 150}, bob4.body);
	rope5 = new Rope({x: 950, y: 150}, bob5.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-800, y:800});
	}
}


