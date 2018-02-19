var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];
var colors = [];
var size = [];

function setup() {
  createCanvas(400, 400);

  for (var index = 0; index < 70; index = index + 1) {
    x[index] = width / 2;
    y[index] = height / 2;
    xSpeed[index] = random(-5, 5);
    ySpeed[index] = random(-5, 5);
    colors[index] = color(random(255), random(255), random(255))
		size[index] = random(10,40)
  }
}

function draw() {
  background(0);
  noStroke();

  for (var index = 0; index < 50; index = index + 1) {
    fill(colors[index]);
    ellipse(x[index], y[index], size[index]);
    x[index] = x[index] + xSpeed[index];
    y[index] = y[index] + ySpeed[index];

    if (x[index] > width - 5) {
      xSpeed[index] = -xSpeed[index];
    }

    if (y[index] > height - 5) {
      ySpeed[index] = -ySpeed[index];
    }

    if (x[index] < 5) {
      xSpeed[index] = -xSpeed[index];
    }

    if (y[index] < 5) {
      ySpeed[index] = -ySpeed[index];
    }
  }
}
