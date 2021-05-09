
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball1 = new ball(400,300,20)
	ball2 = new ball(420,290,20)
	ball3 = new ball(430,310,20)
	ball4 = new ball(440,280,20)
	ball5 = new ball(450,320,20)
	ball6 = new ball(460,270,20)
	ball7 = new ball(470,330,20)
  ball8 = new ball(480,260,20)
  ball9 = new ball(210,300,20)
  slingshot1 = new Slingshot(ball9.body,{x:190,y:300})
  border1 =new border (400,5,740,10)
  border2 =new border (400,595,740,10)
  border3 =new border (5,300,10,540)
  border4 =new border (795,300,10,540)
  bBall1 = new ball(15,15,30)
  bBall2 = new ball(785,15,30)
  bBall3 = new ball(15,585,30)
  bBall4 = new ball(785,585,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  fill("green")
  ball1.display();
  fill("red")
  ball2.display();
  fill("yellow")
  ball3.display();
  fill("black")
  ball4.display();
  fill("blue")
  ball5.display();
  fill("grey")
  ball6.display();
  fill("purple")
  ball7.display();
  fill("orange")
  ball8.display();
  fill("white")
  ball9.display();
  slingshot1.display();

  border1.display();
  border2.display();

  border3.display();
  border4.display();
  bBall1.display();
  bBall2.display();
  bBall3.display();
  bBall4.display();
  


  

  drawSprites();
 
}



function mouseDragged(){
  Matter.Body.setPosition(ball9.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot1.fly();
}





























