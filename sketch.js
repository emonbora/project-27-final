
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Constraint =Matter.Constraint
var bob1,bob2,bob3,bob4,bob5
var roof1
var rope1,rope2,rope3,rope4,rope5


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobDiameter = 50
	bob1 = new bob(340,400,50)
	bob2 = new bob(390,400,50)
	bob3 = new bob(440,400,50)
	bob4 = new bob(490,400,50)
	bob5 = new bob(540,400,50)
	roof1 = new roof(425,250,400,10)
	rope1 = new rope(bob1.body,roof1.body,-bobDiameter*2,0)
	rope2 = new rope(bob2.body,roof1.body,-bobDiameter,0)
	rope3 = new rope(bob3.body,roof1.body,0,0)
	rope4 = new rope(bob4.body,roof1.body,bobDiameter,0)
	rope5 = new rope(bob5.body,roof1.body,bobDiameter*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display()
  bob2.display();
  bob3.display()
  bob4.display()
  roof1.display();
  rope1.display();
  rope2.display()
  rope3.display()
  rope4.display()
  bob5.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}

