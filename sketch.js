 const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];

var ground,world,engine;

var chance=0
var gameState,particlen;

var divisionHeight=300;
var score =0;
var a,b,c,d,e,f,g,h,l,m;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  gameState="play";

  a=50*round(random(1,5));
  b=50*round(random(1,5));
  c=50*round(random(1,5));
  d=50*round(random(1,5));
  e=50*round(random(1,5));
  f=50*round(random(1,5));
  g=50*round(random(1,5));
  h=50*round(random(1,5));
  l=50*round(random(1,5));
  m=50*round(random(1,5));

  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
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
 fill("white");
 text("Score : "+score,20,30);
 text("*only 5 Chance",640,30);
 text(a,20,550);
 text(b,100,550);
 text(c,180,550);
 text(d,260,550);
 text(e,340,550);
 text(f,420,550);
 text(g,500,550);
 text(h,580,550);
 text(l,660,550);
 text(m,740,550);

  Engine.update(engine);

  ground.display();

  if(particlen!=null){ 

    particlen.display();

       if(particlen.body.position.y>760){

        if(particlen.body.position.x<80){
          score=score+ a;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }else if(particlen.body.position.x>80 && particlen.body.position.x<160){
          score=score+b;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }else if(particlen.body.position.x>160 && particlen.body.position.x<240){
          score=score+c;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }else if(particlen.body.position.x>240 && particlen.body.position.x<320){
          score=score+d;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }else if(particlen.body.position.x>320 && particlen.body.position.x<400){
          score=score+e;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }else if(particlen.body.position.x>400 && particlen.body.position.x<480){
          score=score+f;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }else if(particlen.body.position.x>480 && particlen.body.position.x<560){
          score=score+g;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }else if(particlen.body.position.x>560 && particlen.body.position.x<640){
          score=score+h;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }else if(particlen.body.position.x>640 && particlen.body.position.x<720){
          score=score+l;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }else if(particlen.body.position.x>720 && particlen.body.position.x<800){
          score=score+m;
          particlen=null;
          if(chance>=5){
            gameState="end";
          }
        }
       }
       
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(gameState==="end"){
     textSize(50);
     text("GAME OVER",300,400);
   }

}


function mousePressed(){
  
  if(gameState==="play"){
  chance ++;
  particlen=new Particle(mouseX,10,10);
  }

}