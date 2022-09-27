let cities = [];
let order = [];

let bestDist = Infinity;
let bestOrder = [];

let citiesNum = 5;
let radius = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Intialize data
  for (let i = 0; i < citiesNum; i++) {
    let x = floor(random(width));
    let y = floor(random(height));
    cities.push(createVector(x, y));
    order.push(i);
  }
}

function draw() {
  background(200);

  // Draw points
  noFill();
  stroke(50);
  strokeWeight(2);
  for (let i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, radius, radius);
  }

  // Draw order path
  beginShape();
  for (let i = 0; i < order.length; i++) {
    let city = cities[order[i]];
    vertex(city.x, city.y);
  }
  endShape();
}
