let songs = [];
var x = 400;
var y = 400;
let buttons;

function preload() {
  for (let i = 0; i < 6; i++) {
    songs[i] = loadSound("./assets/song" + i + ".mp3");
  }
}

function setup() {
  noCanvas();
  // buttons = selectAll("button");
  // buttons.forEach((button) => {
  //   button.addClass("musicButton");
  // });

  button0 = createButton("Play a song");
  button0.addClass("musicButton");

  button0.mouseClicked(openButtons);
}

function draw() {
  button0.position(100, 100);
}

function openButtons() {
  button0.style("width", "0px");
  button0.style("height", "0px");
  button0.style("font-size", "0px");

  button1 = createButton("Diddy Wah Diddy");
  button1.addClass("musicButton");
  button1.position(100, 100);
  button1.mouseClicked(playSong0);
  button2 = createButton("Electricity");
  button2.addClass("musicButton");
  button2.position(100, 150);
  button2.mouseClicked(playSong1);
  button3 = createButton("I'm Gonna Booglarize You Baby");
  button3.addClass("musicButton");
  button3.position(100, 180);
  button3.mouseClicked(playSong2);
  button4 = createButton("Space Age Couples");
  button4.addClass("musicButton");
  button4.position(100, 250);
  button4.mouseClicked(playSong3);
  button5 = createButton("The Dust Blows Forward 'N' The Dust Blows Back");
  button5.addClass("musicButton");
  button5.position(100, 300);
  button5.mouseClicked(playSong4);
  button6 = createButton("Party of Special Things To Do");
  button6.addClass("musicButton");
  button6.position(100, 395);
  button6.mouseClicked(playSong5);
}

function playSong0() {
  song = songs[0];
  if (!song.isPlaying()) {
    song.play();
    button1.html("Pause");
  } else {
    song.pause();
    button1.html("Diddy Wah Diddy");
  }
}

function playSong1() {
  song = songs[1];
  if (!song.isPlaying()) {
    song.play();
    button2.html("Pause");
  } else {
    song.pause();
    button2.html("Electricity");
  }
}

function playSong2() {
  song = songs[2];
  if (!song.isPlaying()) {
    song.play();
    button3.html("Pause");
  } else {
    song.pause();
    button3.html("I'm Gonna Booglarize You Baby");
  }
}

function playSong3() {
  song = songs[3];
  if (!song.isPlaying()) {
    song.play();
    button4.html("Pause");
  } else {
    song.pause();
    button4.html("Space Age Couples");
  }
}

function playSong4() {
  song = songs[4];
  if (!song.isPlaying()) {
    song.play();
    button5.html("Pause");
  } else {
    song.pause();
    button5.html("The Dust Blows Forward 'N' The Dust Blows Back");
  }
}

function playSong5() {
  song = songs[5];
  if (!song.isPlaying()) {
    song.play();
    button6.html("Pause");
  } else {
    song.pause();
    button6.html("Party of Special Things To Do");
  }
}
