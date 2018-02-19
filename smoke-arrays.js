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
		rspeed[i] = random(0.05,0.1)
	}
}
  
function draw() {
  background(0);
  noStroke();

	for(i=0;i<=100;i=i+1){
		
		push()
		fill(y[i]);
		translate(x[i],y[i])
		rotate(r[i])
		rect(0, 0, 20, 20);
		y[i]=y[i]-yspeed[i]
		r[i] = r[i] + rspeed[i]
		pop()
		
			if (y[i] < -100) {
				y[i]= random(20,390);
			}
	}
}
