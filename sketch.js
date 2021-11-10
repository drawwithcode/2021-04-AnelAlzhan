let icons = [];
let pics = [];
let button;
var myBg;
var myCanvas;
var eyeButton;
var slider;
var textInput;
var textP;
var trialElement;

const urlString = window.location.href;
let url = new URL(urlString);

console.log(url);

function preload() {
  eyeOpen = loadImage("./assets/eye open white.png");
  eyeClosed = loadImage("./assets/eye closed white.png");
  ear = loadImage("./assets/ear white.png");
  earMusic = loadImage("./assets/ear music white.png");
  bookOpen = loadImage("./assets/book open white.png");
  bookClosed = loadImage("./assets/book closed white.png");
}

function setup() {
  createCanvas(windowWidth, 300);
  // electricity = loadSound("./assets/song5.mp3");
  // button = createButton("Try me");
  // button.style("font-size", "36 px");
  // button.style("font-family", "monospace");
  // button.style("border", "0px");
  // button.style("text-align", "center");
  // button.mouseClicked(playE);

  fill(255);
}

function draw() {
  let y = 150;
  let x = windowWidth / 2;
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  if (
    mouseX > x - eyeClosed.width / 10 &&
    mouseX < x + eyeClosed.width / 10 &&
    mouseY > y - eyeClosed.height / 10 &&
    mouseY < y + eyeClosed.height / 10
  ) {
    // clear();
    erase();
    rect(x, y, eyeClosed.width, eyeClosed.height);
    noErase();
    image(eyeOpen, x, y, eyeOpen.width, eyeOpen.height);
    fill(255);
    textSize(16);
    textFont("Monospace");
    text("Click to explore the artworks", x, y + 100);
  } else {
    clear();
    image(eyeClosed, x, y, eyeClosed.width / 10, eyeClosed.height / 10);

    if (
      mouseX > x - 200 - ear.width / 10 &&
      mouseX < x - 200 + ear.width / 10 &&
      mouseY > y - ear.height / 10 &&
      mouseY < y + ear.height / 10
    ) {
      erase();
      rect(x, y, ear.width, ear.height);
      noErase();
      image(earMusic, x - 200, y, earMusic.width / 10, earMusic.height / 10);
      fill(255);
      textSize(16);
      textFont("Monospace");
      text("Click to explore the music", x - 200, y + 100);
    } else {
      image(ear, x - 200, y, ear.width / 10, ear.height / 10);

      if (
        mouseX > x + 200 - bookClosed.width / 10 &&
        mouseX < x + 200 + bookClosed.width / 10 &&
        mouseY > y - bookClosed.height / 10 &&
        mouseY < y + bookClosed.height / 10
      ) {
        erase();
        rect(x, y, bookClosed.width, bookClosed.height);
        noErase();
        image(bookOpen, x + 200, y, bookOpen.width / 10, bookOpen.height / 10);
        fill(255);
        textSize(16);
        textFont("Monospace");
        text("Click to explore the life", x + 200, y + 100);
      } else {
        image(
          bookClosed,
          x + 200,
          y,
          bookClosed.width / 10,
          bookClosed.height / 10
        );
      }
    }
  }
}

// function playE() {
//   console.log("meow");

//   if (!electricity.isPlaying()) {
//     electricity.play();
//     button.html("Pause");
//   } else {
//     electricity.pause();
//     button.html("Play");
//   }
// }

function mouseClicked() {
  let y = 150;
  let x = windowWidth / 2;
  if (
    mouseX > x - eyeClosed.width / 10 &&
    mouseX < x + eyeClosed.width / 10 &&
    mouseY > y - eyeClosed.height / 10 &&
    mouseY < y + eyeClosed.height / 10
  ) {
    console.log("eyeClosed");
    window.open("artworks.html", "_blank");
  }

  if (
    mouseX > x - 200 - ear.width / 10 &&
    mouseX < x - 200 + ear.width / 10 &&
    mouseY > y - ear.height / 10 &&
    mouseY < y + ear.height / 10
  ) {
    console.log("ear");
    window.open("music.html", "_blank");
  }

  if (
    mouseX > x + 200 - bookClosed.width / 10 &&
    mouseX < x + 200 + bookClosed.width / 10 &&
    mouseY > y - bookClosed.height / 10 &&
    mouseY < y + bookClosed.height / 10
  ) {
    console.log("bookClosed");
    window.open("https://en.wikipedia.org/wiki/Captain_Beefheart", "_blank");
  }
}
