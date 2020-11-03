var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particleOb;

var gameState = "start";

var turn = 0;

var divisionHeight=300;
var score = 0;


function setup() {
  createCanvas(700, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     fill(173, 20, 87);
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 70; j <=width-50; j=j+80) 
    {
    
       plinkos.push(new Plinko(j,70));
    }

    for (var j = 30; j <=width-10; j=j+80) 
    {
    
       plinkos.push(new Plinko(j,160));
    }

     for (var j = 70; j <=width-50; j=j+80) 
    {
    
       plinkos.push(new Plinko(j,260));
    }

     for (var j = 30; j <=width-10; j=j+80) 
    {
    
       plinkos.push(new Plinko(j,360));
    }

    

    
}
 


function draw() {
  background("#D81B60");

  Engine.update(engine);

  fill("#F8BBD0");
  textSize(20)
  text("Score : "+score,20,30);
  text("500", 20,550);
  text("500",100,550);
  text("500",180,550);
  text("500",260,550);
  text("100",340,550);
  text("100",420,550);
  text("100",500,550);
  text("200",580,550);
  text("200",660,550);
  text("200",740,550);
  text("Turns: "+turn,200,30);


  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }


   if(turn>=5) {
    gameState = "end";
 }

  if(particleOb!=null){
    particleOb.display();
    if(particleOb.body.position.y>760 && particleOb.body.position.x>0 && particleOb.body.position.x<80){
     score = score+500;
     particleOb=null;
     if(turn>=5) {
      gameState = "end";
   }
    }
  }

  if(particleOb!=null){
    particleOb.display();
    if(particleOb.body.position.y>760 && particleOb.body.position.x>80 && particleOb.body.position.x<160){
     score = score+500;
     particleOb=null;
     if(turn>=5) {
      gameState = "end";
   }
    }
  }

  if(particleOb!=null){
    particleOb.display();
    if(particleOb.body.position.y > height-divisionHeight/2 && particleOb.body.position.x < 300){
     score = score+500;
     particleOb=null;
     if(turn>=5) {
      gameState = "end";
   }
  }
}

if(particleOb!=null){
  particleOb.display();
  if(particleOb.body.position.y > height-divisionHeight/2 && particleOb.body.position.x > 301 && particleOb.body.position.x < 600){
   score = score+100;
   particleOb=null;
   if(turn>=5) {
    gameState = "end";
 }
}
}

if(particleOb!=null){
  particleOb.display();
  if(particleOb.body.position.y > height-divisionHeight/2 && particleOb.body.position.x > 601 && particleOb.body.position.x < 900){
   score = score+200;
   particleOb=null;
   if(turn>=5) {
    gameState = "end";
 }
}
}
 
  if(gameState === "end"){
    fill("#FCE4EC");
    textSize(45);
    text("Game Over!", 220, 320);
  }

}
function mousePressed(){
  if(gameState!=="end"){

    turn++;
    particleOb=new Particle(mouseX,10,10);
    
  }
  
 
}
