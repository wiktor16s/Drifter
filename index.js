const car = new Car(100, 100, 20, 50);

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(51);
  car.draw();
  noStroke(255);
  fill(170);
  rectMode(CENTER);
}
