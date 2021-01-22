
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

        ground=new ground(600,600,1200,20)
        dustbin=new dustbin(500,320,70,70)
		paper=new paper(20,20,10,10)
		

		
    


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
 

  background("black")
  Engine.update(engine)
  ground.display();
  dustbin.display();
  paper.display();

 
}



