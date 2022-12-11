let ball;
let obstacles = []; //array of obstacles so I can add to screen randomly later



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

if (random(1)< 0.009) { //creates a random iteation of an obstacle
  obstacles.push(new Obstacle()); //reffering back to array
}





  background(220);
  ball.display();
  ball.move();

  for(let o of obstacles) { //to show obstacles and make it so the ball is moving accross the screen
    o.move();
  o.display();
  if(ball.hits(o)) { //2D collision implementation using external library
    console.log('game over');
    noLoop(); //end the game

  }
  }
 

}

