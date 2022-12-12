let ball;
let obstacles = []; //array of obstacles so I can add to screen randomly later
let score = 0;
let screen = 0;


function setup() {
  createCanvas(600, 450);
  ball = new Ball();

}

function keyPressed () {
  if (key == ' ') { //using space bar to jump
    ball.jump(); 
  }
}



function draw() {


  if(screen == 0) {
    instructions();
  }

  if(screen == 1) {
    game();
  }

if(screen == 2) {
  winScreen();
}

  if(mouseIsPressed == true){
    screen = 1;
  }

}



function instructions (){

  textSize(50);
  text('HOW TO PLAY', width/2 - 160, height/2 - 30);
  textSize(30);
  text('Use Space Bar to Jump', width/2 - 160, height/2);
  textSize(15);
  text('Click to continue', width/2 - 50, height/2 + 20);

}


function game(){

  background(220);
  ball.display();
  ball.move();


if (random(1)< 0.009) { //creates a random iteation of an obstacle
  obstacles.push(new Obstacle()); //reffering back to array
}





 
fill(255);
stroke(0);
textSize(30);
text('SCORE:', 375, 50);
text(score, 500, 50);

score += 1; 


  for(let o of obstacles) { //to show obstacles and make it so the ball is moving accross the screen
    o.move();
  o.display();
  if(ball.hits(o)) { //2D collision implementation using external library
    console.log('game over');
    noLoop(); //end the game

  }
  }
 
if(score == 2500) {
screen = 2;

}


}


function winScreen (){

textSize(50);
  text('YOU WIN', width/2 - 160, height/2);

}

