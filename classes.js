

class Ball {
  
  constructor(){
     this.x = 50;
     this.r = 50; 
     this.y = height - 26; //so the ball is on the ground
     this.velocityY = 0; //movement of the ball in the Y dimension
     this.gravity = 1.3; //make sure the ball doesn't fly endlessly
  }

  jump() {
    //let canJump = true; 

    if(this.y == height - 26) { //making sure you can't just fly in the air while spamming the jump key
  this.velocityY = - 20;
}

  //if(this.y <= 500 ) { // tried to experiment with multiple jumps and limiting the timing, but could not get it to work
    //canJump = false;
    //setTimeout(function() {
      //canJump = true; 
    //}, 1000);
  //}

  }


  jump1() {
    //let canJump = true; 

    if(this.y == height - 26) { //making sure you can't just fly in the air while spamming the jump key
  this.velocityY = - 30;
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
    fill(255, 0 ,0 );
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
  this.x -= 7; //so the ball looks like it's moving
}


display() {
  image(tree, this.x, this.y, this.r, this.r);
}

}


class Flake {
  
  constructor(){
    // initialize coordinates
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(2, 10);

    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(width / 2, 2)));
    this.color = color(random(255), random(255), random(255));
  }

  update(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size flakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete flake if past end of screen
    if (this.posY > height) {
      let index = flakes.indexOf(this);
      flakes.splice(index, 1);
    }
  };

  display() {
    fill(this.color);
    ellipse(this.posX, this.posY, this.size);
  };
}
