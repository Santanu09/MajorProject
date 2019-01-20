// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bird
let obstacles = []
let pipesCleared
let obstaclesHit
let playQuality
let gameStatus="off"

class Bird {

  constructor(){
    this.y = height / 2;
    this.x = 64;
    this.gravity = 0.6;
    this.lift = -16;
    this.velocity = 0;
  }


  show(){
    fill(255);
    ellipse(this.x, this.y, 32, 32 );
  }


  goUp(){
    this.velocity += this.lift;
    console.log(this.velocity);
  }


  update(){
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}


class Obstacle {

  constructor(){
    this.x = width
    this.w = 30
    this.topMin = 50
    this.botMin = height - 50
    this.gapStart = random(this.topMin, this.botMin)
    this.gapLength = 70
    this.speed = 3
  }
