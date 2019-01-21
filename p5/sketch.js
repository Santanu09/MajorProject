// Project Title
// Santanu Deb
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//constructor for the bird - ball here
//constructor for the bird - ball here
class Bird {
	//set the initial position, speed and lift of the ball
  constructor(){
    this.y = height / 2;
    this.x = 64;
    this.gravity = 0.6;
    this.lift = -16;
    this.velocity = 0;
  }

	//show the ball on the screen
  show(){
    fill(255)
    ellipse(this.x, this.y, 32, 32 )
  }

	//go up
  goUp(){
    this.velocity += this.lift
    console.log(this.velocity)
  }

	//update the velocity and position of the ball
  update(){
    this.velocity += this.gravity
    this.velocity *= 0.9
    this.y += this.velocity

    if (this.y > height) {
      this.y = height
      this.velocity = 0
    }

    if (this.y < 0) {
      this.y = 0
      this.velocity = 0
    }
  }
}

//Obstacle - the bars here
class Obstacle {
	//initial height, width, gap
  constructor(){
    this.x = width
    this.w = 30
    this.topMin = 50
    this.botMin = height - 50
    this.gapStart = random(this.topMin, this.botMin)
    this.gapLength = 70
    this.speed = 3
  }
	//show the bar on the screen
  show(){
    fill(0)
    if (this.highlight){
        fill('#FF0863')
    }
    rect(this.x, 0, this.w, this.gapStart)
    rect(this.x, this.gapStart + this.gapLength, this.w, height)
  }
	//update the speed at which the bars are moving
  update(){
    this.x -= this.speed
  }

	//remove the bars off the screen
  offscreen(){
    return this.x < -this.w
  }

	//check if the bird has hit the bars
  hits(bird){
    if (bird.y < this.gapStart || bird.y > this.gapStart + this.gapLength) {
        if (bird.x > this.x && bird.x < this.x + this.w) {
            this.highlight = true
            return true
        }
    }
    this.highlight = false
    return false
  }
}


let bird
let obstacles = []
let pipesCleared
let obstaclesHit
let playQuality
let gameStatus="off"


function setup(){
  createCanvas(800, 400)
  bird = new Bird()
  pipesCleared = 0
  obstaclesHit = 0
  playQuality = 10
  obstacles.push(new Obstacle())

}


function draw(){

	if(gameStatus === "off"){
		textSize(60)
  		textFont("Helvetica")
  		text("Welcome to Flappy Ball",100,200)
  		textSize(40)
  		text("Press 'Up-Arrow' to start the game", 100,350)
	}

  if (gameStatus === "on"){
  	clear()
  fill(0, 0, 255)
  textSize(20)
  textFont("Helvetica")
  text('Obstacles Cleared: ' + pipesCleared, 20, 20)
  text('Obstacle Damage: ' + obstaclesHit, 20, 40)

  bird.show()
  bird.update()
]

    if (frameCount % 100 == 0) {
        obstacles.push(new Obstacle())
    }

  for (let i = obstacles.length - 1; i >= 0; i--){
      obstacles[i].show()
      obstacles[i].update()

      if (obstacles[i].hits(bird)){
        obstaclesHit++

        if (obstaclesHit > 99){
        	gameStatus="over"
        	pipesCleared = 0
 			 obstaclesHit = 0
 			 playQuality = 10
