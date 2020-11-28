const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var block;
var ball;
var slingShot;
var bg = "sprites/day.png";
var backgroundImg;

var score = 0;

function preload()
{

  GetBackgroundImg();
    
}

function setup() {
    createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    ground1 = new Ground(400,height,900,20);

    ground2  =new Ground(300,600,200,10);

    ground3  =new Ground(550,300,170,10);

    block1 = new Block(210,590);
    block2 = new Block(235,590);
    block3 = new Block(260,590);
    block4 = new Block(285,590);
    block5 = new Block(310,590);
    block6 = new Block(335,590);
    block7 = new Block(360,590);
    block8 = new Block(385,590);

    block9 = new Block(220,570);
    block10 = new Block(245,570);
    block11 = new Block(270,570);
    block12 = new Block(295,570);
    block13 = new Block(320,570);
    block14 = new Block(345,570);
    block15 = new Block(370,570);

    block16 = new Block(230,550);
    block17 = new Block(230+25,550);
    block18 = new Block(230+25+25,550);
    block19 = new Block(230+25+25+25,550);
    block20 = new Block(230+25+25+25+25,550);
    block21 = new Block(230+25+25+25+25+25,550);

    block22 = new Block(240,530);
    block23 = new Block(240+25,530);
    block24 = new Block(240+25+25,530);
    block25 = new Block(240+25+25+25,530);
    block26 = new Block(240+25+25+25+25,530);

    block27 = new Block(250,510);
    block28 = new Block(250+25,510);
    block29 = new Block(250+25+25,510);
    block30 = new Block(250+25+25+25,510);

    block31 = new Block(260,490);
    block32 = new Block(260+25,490);
    block33 = new Block(260+25+25,490);

    block34 = new Block(270,470);
    block35 = new Block(270+25,470);

    block36 = new Block(280,450);

    block37 = new Block(480,290);
    block38 = new Block(480+25,290);
    block39 = new Block(480+25+25,290);
    block40 = new Block(480+25+25+25,290);
    block41 = new Block(480+25+25+25+25,290);
    block42 = new Block(480+25+25+25+25+25,290);

    block43 = new Block(490,270);
    block44 = new Block(490+25,270);
    block45 = new Block(490+25+25,270);
    block46 = new Block(490+25+25+25,270);
    block47 = new Block(490+25+25+25+25,270);

    block48 = new Block(500,250);
    block49 = new Block(500+25,250);
    block50 = new Block(500+25+25,250);
    block51 = new Block(500+25+25+25,250);

    block52 = new Block(510,230);
    block53 = new Block(510+25,230);
    block54 = new Block(510+25+25,230);

    block55 = new Block(520,210);
    block56 = new Block(520+25,210);

    block57 = new Block(530,190);

    ball = new Ball(50,200);

    slingShot = new Slingshot(ball.body,{x:150,y:350});
}

function draw() {
   if(backgroundImg)
  background(backgroundImg);

  textSize(12);
  fill("white");
  text("Score: "+ score,width - 250,50);

  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  block27.display();
  block28.display();
  block29.display();
  block30.display();

  block31.display();
  block32.display();
  block33.display();

  block34.display();
  block35.display();

  block36.display();

  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();

  block43.display();
  block44.display();
  block45.display();
  block46.display();
  block47.display();

  block48.display();
  block49.display();
  block50.display();
  block51.display();

  block52.display();
  block53.display();
  block54.display();

  block55.display();
  block56.display();

  block57.display();

  ball.display();

  slingShot.display();
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(ball.body);
  }
}

 async function GetBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON);
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
        bg = "sprites/day.png";
  }

  else{
    bg = "sprites/night.png";
  }

  backgroundImg = loadImage(bg);

}