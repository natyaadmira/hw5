var x=[]
var y=[]
var r=[]
var yspeed=[]
var rspeed=[]


function setup() {
  createCanvas(400, 400);
	
	for(i=0;i<=100;i=i+1){
		x[i]= random(10,390)
		y[i]= random(20,390)
		r[i] = random(0,0.1)
		yspeed[i] = random (3,5)
		rspeed[i] = random(0, 0.05)
	}
}
  
function draw() {
  background(0);
  noStroke();

	for(i=0;i<=100;i=i+1){
		push()
		fill(y[i]);
		rect(x[i], y[i], 20, 20);
		rotate(rspeed[i])
		y[i]=y[i]-yspeed[i]
		pop()
		
		
			if (y[i] < -100) {
				y[i]= random(20,390);
			}
	}
			
}
