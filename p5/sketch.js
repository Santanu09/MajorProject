// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 0;
let easyMode, onGround, died, deathScreen,changeMode;
let tickSpeed = 8;
let offGround = false;
let poly = [];
let score = 0;
let playerImg;
let font,hardFont;
let easyButtonX = 450;
let easyButtonY = 250;
let hardBassets= 200;
let hardButtonY = 250;
let angle = 0.0;
let jitter = 0.0;
let bg;
let y = 0;




function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.


  bg = loadImage("");
  createCanvas(900, 350);
}

function draw() {
  background(bg);

  stroke(255, 0, 0);
  line(0, y, width, y);

  y++;
  if (y > height) {
    y = 0;






    if (state === 0) {
      let hitbox = collidePointRect(mouseX, mouseY, easyButtonX, easyButtonY, 150, 50);
      if (hitbox) {
        fill("lightgreen");
      }
      else {
        fill(8, 200, 55);
      }
      rectMode(CORNER);
      strokeWeight(5);
      rect(easyButtonX, easyButtonY, 150, 50);
      textSize(25);
      fill("black");
      noStroke();
      text("play",499,289);
      //text on the home screen...
      fill("black");
      textSize(15);
      text("", 50, 550);
      fill(8, 200, 55);
      strokeWeight(5);
      stroke("red");
      textSize(60);


      fill("black");
      text("collection game!", 130, 150);
    }
    if (state === 1) {
      let hitbox = collidePointRect(mouseX, mouseY, easyButtonX, easyButtonY, 150, 50);
      if (hitbox) {
        fill("red");
      }
      else {
        fill(8, 200, 55);
      }
      rectMode(CORNER);
      strokeWeight(5);
      rect(easyButtonX, easyButtonY, 150, 50);
      textSize(25);
      fill("black");
      noStroke();
      text("play",499,289);

      //text on the home screen...
      fill("black");
      textSize(15);
      text("", 50, 550);
      fill(8, 200, 55);
      strokeWeight(5);
      stroke("red");
      textSize(60);


      fill("black");
      text("collection game!", 130, 150);
    }
  }
}
