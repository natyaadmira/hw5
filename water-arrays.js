var x = [];
var y = [];
var accel = []
drips = 6

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	
	for(var i = 1; i < drips; i = i + 1){
		x[i] = (width/drips)*i
		y[i] = 100
		accel[i] = random(4)
	}
}
  
function draw() {
  background(0);
  noStroke();


	
	for (i = 0; i<=drips; i=i+1){
		
	// draw pipe
  rect(x[i]-7, 0, 15, 100);
		
  // draw drip
  ellipse(x[i], y[i], 10);
  
  y[i] = y[i] + (3+accel[i])
	accel[i] = accel[i]+.2
		
		if (y[i]>height){
			y[i] = 100
			accel[i] = random(0,4)
		}
		
	}
}	
