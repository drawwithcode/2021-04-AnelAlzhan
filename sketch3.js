var myBg;
var myCanvas;
var eyeButton;
var slider;
var textInput;
var textP;
var trialElement;
let albums;
const urlString = window.location.href;
let url = new URL(urlString);

console.log(urlString);

function preload() {
  for (let i = 0; i < 12; i++) {
    albums[i] = loadImage("./assets/album" + i + ".jpg");
  }
}

function setup() {
  myCanvas = createCanvas(400, 400);
  myBg = color(0);
  myCanvas.mouseOver(overTextP);
  myCanvas.mouseOut(outTextP);
  textP = createP("Your text");
  // trialElement = createElement("h1", "My personal favorite");

  textP.mouseOver(overTextP);
  textP.mouseOut(outTextP);

  eyeButton = createButton("Try me");
  eyeButton.mousePressed(changeColor);

  slider = createSlider(0.2, 3, 1, 0.01);
  textInput = createInput("type your name");

  textInput.input(updateText);
  slider.input(updateSize);
}

function updateText() {
  textP.html(textInput.value());
}

function updateSize() {
  textP.style("font-size", slider.value() * 20 + "pt");
}

function changeColor() {
  myBg = color(random(255));
}

function overTextP() {
  textP.html("Your mouse is over");
  textP.style("background-color", "pink");
}

function outTextP() {
  textP.html("Your mouse is out");
  textP.style("background-color", "purple");
}

function draw() {
  background(myBg);
  fill(255);
  // text(textInput.value(), 10, 20);

  // textP.html(textInput.value());
}
