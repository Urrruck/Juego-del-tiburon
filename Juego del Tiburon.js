var mar, mar_fondo;
var gameState = PLAY;
var PLAY = 1;
var END = 0;
var score = 0;

function preload(){
  mar_fondo = loadImage("fondomar.png");
  shark_img = loadImage("shark.png");
  burb_img = loadImage("circle.png");

  peces1_img = loadImage("peces1.png");
  peces2_img = loadImage("peces2.png");
  peces3_img = loadImage("peces3.png");

  buzo1_img = loadImage("buzo1.png");
  buzo2_img = loadImage("buzo2.png");
  buzo3_img = loadImage("buzo3.png");

  barco_img = loadImage("barco.png");
}


function setup() {
  createCanvas(1200,700);
  
  mar = createSprite(500, 450, 1000, 750);
  mar.addAnimation("fondomar", mar_fondo);
  mar.scale = 2.9;
  mar.velocityX = 2;


  tiburon = createSprite(550, 350,20,50);
  tiburon.addAnimation("shark", shark_img);
  tiburon.scale = 0.2;
  tiburon.velocityX = -2;
  tiburon.setCollider("rectangle",0,0,50,50)

  burbujas = createSprite(400, 200,20,50);
  burbujas.addAnimation("burb", burb_img);
  burbujas.scale = 0.2;
  burbujas.velocityX = -2;
 
  barco = createSprite(500,48,30,40);
  barco.addAnimation("barco", barco_img);
  barco.scale = 1;
  barco.velocityX = 0;

}

function draw() {
  background("white");  
  text("puntaje", 500, 200);
  textSize = 20;
  

  if(gameState===PLAY){
    distance = distance + Math.round(getFrameRate()/50);
    path.velocityX = -(6 + 2*distance/150);
  }

  if(gameState == END){
    keyDown("left_arrow")
    tiburon.x = tiburon.x -2;
  }else if (keyDown("right_arrow")){
    tiburon.x = tiburon.x +2;
  }
  else if(keyDown("up_arrow")){
    tiburon.y = tiburon.y -2
  }
  else if(keyDown("down_arrow")){
    tiburon.y = tiburon.y +2;
  }

  if(mar.x > 600){
    mar.x = 100;
  }

  drawSprites();
  
  var select_peces = Math.round(random(1,3));

  if(World.frameCount % 150 === 0){
    if(select_peces == 1){
      grupoPeces1();
    } else if (select_peces == 2) {
      grupoPeces2();
    } else {
      grupoPeces3();

    }
    }
    var select_buzo = Math.round(random(1,2));
    if(World.frameCount % 200 === 0){
      if(select_buzo == 1){
        grupoBuzo1();
      } else if (select_buzo == 2) {
        grupoBuzo3();
    }
}
tiburon.setCollider("rectangle", 0, 0, 20, 20);
if(grupoBuzo1.isTouching(tiburon)||grupoBuzo2.isTouching(tiburon)){
  gameState = END;
}
else (gameState === END) 
  gameOver.visible = true;
}
  

  function grupoPeces1(){
    peces1 = createSprite(1200,Math.round(random(450,500)));
    peces1.scale = 0.2;
    peces1.velocityX = -1;
    peces1.addAnimation("peces1", peces1_img);
    peces1.setlifetime = 100;
  }
  function grupoPeces2(){
    peces2 = createSprite(2,Math.round(random(550,650)));
    peces2.scale = 0.2;
    peces2.velocityX = +1;
    peces2.addAnimation("peces1", peces2_img);
    peces2.setlifetime = 100;

  }
  function grupoPeces3(){
    peces3 = createSprite(2,Math.round(random(250,500)));
    peces3.scale = 0.2;
    peces3.velocityX = +1;
    peces3.addAnimation("peces1", peces3_img);
    peces3.setlifetime = 100;

  }
  function grupoBuzo1(){
    buzo1 = createSprite(2,Math.round(random(550,600)));
    buzo1.scale = 0.2;
    buzo1.velocityX = +1;
    buzo1.addAnimation("buzo1", buzo1_img);
    buzo1.setlifetime = 100;
  }

  function grupoBuzo3(){
    buzo3 = createSprite(1200,Math.round(random(250,500)));
    buzo3.scale = 0.2;
    buzo3.velocityX = -1;
    buzo3.addAnimation("buzo3", buzo3_img);
    buzo3.setlifetime = 100;
  }


