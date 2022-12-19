let ball;
let obstacles = []; //array of obstacles so I can add to screen randomly later
let screen = 0;
let cloud1;
let cloud2;
let posX = 950;
let posX2 = 500;
let posY = 0;
let score = 0;
let flakes = [];
let tree;
let plane;
//let canJump = true;

function preload(){
  cloud1 = loadImage('cloud.png');
  cloud2 = loadImage('clouds2.png');
  BG = loadImage('background.jpeg');
  tree = loadImage('tree.png');
  plane = loadImage('plane.png');
}

function setup() {
  createCanvas(1300, 700);
  ball = new Ball();
  

}

function keyPressed () {
  if (key == ' ') { //using space bar to jump
    ball.jump();
  } if (key == 'j') {   //using space bar to jump
    ball.jump1();
   //canJump = false; 
  }
}

/*
function mousePressed (){

if(screen == 3) {
  reset();
}

}
*/
function draw() {


  if(screen == 0) {
    instructions();
  }

  if(screen == 1) {
    game();
    ALLBG();
  }

if(screen == 2) {
  winScreen();
}

if(screen == 3) {
  loseScreen();
}

  if(mouseIsPressed == true && screen == 0){
    screen = 1;
  }
/*
if(keyIsPressed == true && screen == 3){
    screen = 0;
  }
*/
}



function instructions (){

  background(255);
  fill(0);
  textSize(50);
  text('HOW TO PLAY', width/2 - 160, height/2 - 65);
  textSize(30);
  text('Press Space Bar to Jump', width/2 - 160, height/2 - 30);
  text('Press J to Mega Jump', width/2 - 160, height/2);
  textSize(15);
  text('Click to continue', width/2 - 50, height/2 + 25);

}

function ALLBG (){

 image(cloud1, posX, 100, 100, 100);
 image(cloud1, posX2 + 2000, 150, 100, 100);
image(cloud1, posX2 + 1500, 150, 100, 100);
 image(cloud1, posX2 + 50, 200, 200, 100);
 image(cloud1, posX2 + 1000, 300, 200, 100);
 image(cloud2, posX2 + 600, 50, 250, 100);
 image(plane, posX2 + 1200, 25, 100, 100, 100);
  posX-=1;
  posX2-=.5;
}

function game(){


  background(BG);
  ball.display();
  ball.move();


if (random(1)< 0.01) { //creates a random iteration of an obstacle
  obstacles.push(new Obstacle()); //reffering back to array
}

 
fill(255);
stroke(0);
textSize(30);
text('SCORE:', 575, 50);
text(score, 700, 50);

score += 1; 


  for(let o of obstacles) { //to show obstacles and make it so the ball is moving accross the screen
    o.move();
  o.display();
  if(ball.hits(o)) { //2D collision implementation using external library
    screen = 3;
    console.log('game over');
    //noLoop(); //end the game

  }
  }
 
if(score == 2500) {
screen = 2;

}

}


function winScreen (){

background(245, 222, 26);
textSize(80);
fill(255);
  text('YOU WIN!', width/2 - 220, height/2);
  textSize(50);
  text('refresh to play again', width/2 - 250, height/2 + 50);

  //play at the same time as win screen

let t = frameCount / 60; // update time

  // create a random number of flakes each frame
  for (let i = 0; i < random(5); i++) {
    flakes.push(new Flake()); 
  }

 
  for (let flake of flakes) {
    flake.update(t); 
    flake.display();
}
  
}





function loseScreen (){


textSize(50);
  text('YOU LOSE', width/2 - 160, height/2);
  textSize(15);
  text('Refresh to Restart', width/2 - 80, height/2 + 20);


}
