const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.body;
var ground;
var edge1, edge2;

var particles = [];
var plinkos = [];
var divisions =[];



var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 780, 480, 10);
  for(var k = 0; k <=480; k = k + 80){

    divisions.push(new Divider(k, 800-divisionHeight/2,10, divisionHeight));

  } 
  for(var j = 40; j <=480; j = j + 50){

    plinkos.push(new Plinko(j, 75,10, 10));

  } 
  for(var j = 15; j <=480; j = j + 50){

    plinkos.push(new Plinko(j, 175,10, 10));

  }
  
  for(var j = 40; j <=480; j = j + 50){

    plinkos.push(new Plinko(j, 275,10, 10));

  }
  
  for(var j = 15; j <=480; j = j + 50){

    plinkos.push(new Plinko(j, 375,10, 10));

  }


 
  
}

function draw() {
  Engine.update(engine);
  background(0);  


  ground.display();
  for (var i=0; i<divisions.length;i=i+1){
    divisions[i].display();
  }

  for (var i=0; i<plinkos.length;i=i+1){
    plinkos[i].display();
  }

  if(frameCount % 60 === 0){


    particles.push(new Particle(random(230, 250), 10, 10, 10));
  
  }

  for (var i=0; i<particles.length;i=i+1){
    particles[i].display();
  }


}






