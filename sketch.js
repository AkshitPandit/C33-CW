const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var plinkos = [];
var divisions = [];

var particle;
var divisionHeight = 300;
var score = 0;
var turn = 0;
var gameState = "play";
var count;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  yellowLine = new Ground(400,450,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }   
}
 
function draw() {
  background("black");
  textSize(20)
  text("Score : " + score,30,30);
  fill(255,255,255);

  Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }*/

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

   if(gameState === "end"){
    textSize(60)
    text("GameOver",200,400);
    fill(255,255,255);
   }

   if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){

       if(particle.body.position.x<300){
        score = score+500;
        particle = null;
        if(count>=5) gameState = "end";
       }

       if(particle.body.position.x>301 && particle.body.position.x<600){
        score = score+100;
        particle = null;
        if(count>=5) gameState = "end";
       }

       if(particle.body.position.x>601 && particle.body.position.x<900){
        score = score+200;
        particle = null;
        if(count>=5) gameState = "end";
       }

    }
   }
  }

  function mousePressed(){
    if(gameState !== "end"){
      count++;
      particle = new Particle(mouseX, 10, 10, 10);
    }
  }
