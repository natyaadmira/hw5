var x=[]
var y=[]
var d=[]
var hue=[]
var saturation=[]

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	
	for(var i=0; i<=50; i=i+1){
		x[i]=random(0,400)
		y[i]=random(0,400)
		d[i]=random(20,130)
		hue[i]=random(0,300)
		saturation[i]=random(40,80)
	}
}
  
function draw() {
  background(255);
  noStroke();

	for (i=0;i<=50;i=i+1){
		  fill(hue[i], saturation[i], 100);
  	ellipse(x[i], y[i], d[i]);
		  if (random() < 0.01) {
			d[i] = random(20, 130);
		  }
	}
}
