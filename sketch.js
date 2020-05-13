const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world,ground1;


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  ground1=new Ground(350,100,200,20);
  holder=new Holder(350,180,20,150);
  ball= new Ball(350,250);

  chain= new Chain(ball.body,holder.body);


  
}

function draw() {
  background(0);
text("PRESS SPACE TO START",100,50);
text("PRESS ENTER TO STOP",50,100);
  if(keyCode===32){
    ball.body.position.y=mouseY;
  }

  if(keyCode===32){
    ball.body.position.x=mouseX;
  }
  if(keyCode===ENTER){
    ball.body.position.x=350;
  }

  Engine.update(engine);
  ground1.display();
  holder.display();
  ball.display();
  chain.display();
  
}