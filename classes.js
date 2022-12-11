

class Ball {
  
  constructor(){
     this.x = 50;
     this.r = 50; 
     this.y = height - 26; //so the ball is on the ground
     this.velocityY = 0; //movement of the ball in the Y dimension
     this.gravity = 1.3; //make sure the ball doesn't fly endlessly
  }

  jump() {
    if(this.y == height - 26) { //making sure you can't just fly in the air while spamming the jump key
  this.velocityY = -20;
}

  }

  hits(obstacles) {
    return collideRectCircle(obstacles.x, obstacles.y, obstacles.r, obstacles.r, this.x, this.y, this.r); //implementation of 2d collisions
  }

  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity; //adding gravity for realistic jumping physics
    this.y = constrain(this.y, 0, height - 26); //constraining the variable so the ball is in frame 
  }

  display() {

    ellipse(this.x, this.y, this.r, this.r);

  }
}


class Obstacle {

constructor() {
  this.x = width;
  this.r = 50;
  this.y = height - this.r;

}

move() {
  this.x -= 7; //so the ball looks like it's mocing
}


display() {
  rect(this.x, this.y, this.r, this.r);
}

}
