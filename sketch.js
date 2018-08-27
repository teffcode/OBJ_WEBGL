let angle = 0;
let donut;

function preload() {
	donut = loadModel('model.obj', true);
}

function setup() {
	createCanvas(500, 500, WEBGL);
}

function draw() {
	background(159, 159, 159);
	ambientLight(100);
	directionalLight(255, 255, 255, 0, 0, 1);
	rotateX(angle);
	rotateY(angle * 1.3);
	rotateZ(angle * 0.7);
	fill(237, 244, 132);
	noStroke();
	model(donut);

	angle += 0.03;
}