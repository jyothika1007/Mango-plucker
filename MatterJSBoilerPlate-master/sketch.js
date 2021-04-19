
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground;
var world,boy;
var tree;

function preload()
{
	boy = loadImage("images/boy.png");
	
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(675,590,1350,15);
    
	tree= new Tree(1200,400);

	mango1 = new Mango(1230,250,25);
	mango2 = new Mango(1300,330,25);
	mango3 = new Mango(1100,350,25);
	mango4 = new Mango(1200,330,25);
	mango5 = new Mango(1150,280,25);

	stone = new Stone(190,430,10,10);
	slingshot = new SlingShot(stone.body,{x:190,y:430});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(boy ,150,350,200,300);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  slingshot.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);

  drawSprites();
 
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});   
    }

    function mouseReleased(){
    
        slingshot.fly();
    }
    
    function keyPressed(){
        if(keyCode === 32){
			Matter.Body.setPosition(stone.body,{x:235, y:420})
           slingshot.attach(stone.body);
        }
    }

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}