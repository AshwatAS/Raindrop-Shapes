const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine; 
var engine,world,canvas;
var drop=[];
function setup() {
  canvas=createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  rand=Math.round(random(20,380));
  rand2=Math.round(random(-550,-50));
  rand3=Math.round(random(10,80));
  for (i=0;i<=30;i++){
    drop[i]=new Drop(rand,rand2,rand3,rand3);
  }
}

function draw() {
  background(0);  
  Engine.update(engine);
  for (i=1;i<=30;i++){
    drop[i].velocity()
    drop[i].display()
  }
  drawSprites();
}