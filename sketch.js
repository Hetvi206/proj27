
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload(){}
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
   //Create the Bodies Here.
   bob1=new Bob(350,350,40);
   bob2=new Bob(390,350,40);
   bob3=new Bob(430,350,40);
   bob4=new Bob(470,350,40);
   bob5=new Bob(510,350,40);

 	 roof = new Roof(425,150,200,20);

  rope1 = new Rope(bob1.body,roof.body,-80,0);
	rope2 = new Rope(bob2.body,roof.body,-40,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,40,0);
	rope5 = new Rope(bob5.body,roof.body,80,0);
fill("yellow");
 text("Press UP arrow to move left ball and DOWN arrow to move right arrow",300,400);
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background("lightgray");
  
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
function keyPressed (){
 
if (keyCode===UP_ARROW){

	Body.applyForce(bob1.body,bob1.body.position, {x:-30 , y: -30} );
	
}
	}
