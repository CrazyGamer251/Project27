
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	
	roofObject = new Roof(150,50,200,20)
	bobObject1 = new Pendulum(200,250,20,30)
	bobObject2 = new Pendulum(230,250,20,30)
	bobObject3 = new Pendulum(170,250,20,30)
	bobObject4 = new Pendulum(260,250,20,30)
	bobObject5 = new Pendulum(140,250,20,30)
	
5
	rope1 = new rope(bobObject1.body,roofObject.body,90,0)
	rope2 = new rope(bobObject2.body,roofObject.body,45,0)
	rope3 = new rope(bobObject3.body,roofObject.body,0,0)
	rope4 = new rope(bobObject4.body,roofObject.body,25,0)
	rope5 = new rope(bobObject5.body,roofObject.body,-90,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  drawSprites();
 
}

function keyPressed() {
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50});
	}
   }


