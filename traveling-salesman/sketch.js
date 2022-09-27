let cities = [];
let order = [];

let bestDist = Infinity;
let bestOrder = [];

let citiesNum = 20;
let radius = 10;

let currentColor;
let pointsColor;
let bestColor;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Intialize data
  for (let i = 0; i < citiesNum; i++) {
    let x = floor(random(width));
    let y = floor(random(height));
    cities.push(createVector(x, y));
    order.push(i);
  }


  bestOrder = order.slice();
  bestDist = getOrderDistance(cities, order);

  currentColor = color(255);
  pointsColor = color(50);
  bestColor = color(0, 200, 0);

  frameRate(144);
}

function draw() {
  background(200);

  // randomize order and check new distance
  shuffle(order, true);
  let d = getOrderDistance(cities, order);
  if (d < bestDist) {
    bestDist = d;
    bestOrder = order.slice();
    console.log("Record distance", bestDist);
  }

  // Draw points
  noFill();
  stroke(pointsColor);
  strokeWeight(2);
  for (let i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, radius, radius);
  }

  // Draw best order path
  stroke(bestColor);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let i = 0; i < bestOrder.length; i++) {
    let city = cities[bestOrder[i]];
    vertex(city.x, city.y);
  }
  endShape();

  // Draw current order path
  stroke(currentColor);
  strokeWeight(1);
  noFill();
  beginShape();
  for (let i = 0; i < order.length; i++) {
    let city = cities[order[i]];
    vertex(city.x, city.y);
  }
  endShape();
}

function getOrderDistance(cities, order) {
  let d = 0;
  for (let i = 0; i < order.length - 1; i++) {
    let a = cities[order[i]];
    let b = cities[order[i + 1]];
    d += dist(a.x, a.y, b.x, b.y);
  }
  return d;
}
