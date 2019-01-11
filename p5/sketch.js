// Car game
// Your Name Santanu
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
  let player = [];
  let sun = [];

let fred;
let level = 1;
let playerLives = 5;
let sunY = 80;
let Img = [3];
let Pic1;
let Pic2;
let reset;
let isTouching;
let checkReset=false;


class Rctangle{




}

function setup() {
  // The background image must be the same size as the parameters


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
        fill(55, 5, 200);
        strokeWeight(5);
        stroke("red");
        textSize(60);


        fill(200,250,55);
        text("race thing!", 130, 150);
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
        text("this ", 50, 550);
        fill(8, 200, 55);
        strokeWeight(5);
        stroke("red");
        textSize(60);


        fill("black");
        text("collection game!", 130, 150);
      }
    }
  }

  function setup() {
    createCanvas(1600,708);
    Img[0] = loadImage("sports-cricket.png");
    Img[1] = loadImage("shakib.png");
    Img[2] = loadImage("cricket-player-0914.png");
    Pic1 = loadImage("tamim.png");
    Pic2 = loadImage("marshife.png");
    imageMode(CENTER);
    fred = new Police();
    reset = new Reset();



  }
  for(let i=0;i<20;i++){
    cars[i] = new player(random(Img));
  }
  for(let i=0;i<8;i++){
    waves[i] = new Wave(fred.x);
  }
}
