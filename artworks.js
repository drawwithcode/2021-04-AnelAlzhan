let bubbles = [];
let artworks = [];

function preload() {
  for (let i = 0; i < 10; i++) {
    artworks[i] = loadImage("./assets/" + i + ".png");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // for (let i = 0; i < 4; i++) {
  //   for (let y = 0; y < 800; y = y + 200) {
  //     let x = 0;
  //     let artwork = artworks[i];
  //     let b = new Bubble(x, y, artwork);
  //     bubbles.push(b);
  //   }

  fill(255);
  for (let x = 0; x < 1200; x = x + 200) {
    for (let y = 0; y < 1200; y = y + 200) {
      for (let i = 0; i < 2; i++) {
        let artwork = random(artworks);
        let b = new Bubble(x + artwork.width * i, y, artwork);
        bubbles.push(b);
      }
    }
  }
  // let x = random(width);
  // let y = random(height);

  // let artwork = artworks[i];
  // let b = new Bubble(x, y, artwork);
  // bubbles.push(b);
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.artwork = img;
  }

  clicked(px, py) {
    // let d = dist(px, py, this.x, this.y);
    if (
      px > this.x &&
      px < this.x + this.artwork.width / 5 &&
      py > this.y &&
      py < this.y + this.artwork.height / 5
    ) {
      this.artwork = random(artworks);
    }
  }

  move() {
    frameRate(4);
    this.x = this.x + random(-6, 6);
    this.y = this.y + random(-6, 6);
  }

  show() {
    image(
      this.artwork,
      this.x,
      this.y,
      this.artwork.width / 5,
      this.artwork.height / 5
    );
    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r * 2);
  }
}
