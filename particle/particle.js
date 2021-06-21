var particlesQuantity = 40;

var positionX = new Array(particlesQuantity);
var positionY = new Array(particlesQuantity);
var velocityX = new Array(particlesQuantity).fill(0);
var velocityY = new Array(particlesQuantity).fill(0);
function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  
  noStroke();
	
	for (var particle = 1; particle < particlesQuantity; particle++) {
		positionX[particle] = random(0, width);
		positionY[particle] = random(0, height);
	}
	
	positionX[0] = 0;
	positionY[0] = 0;
}
function draw(){
  background(0);	
	velocityX[0] = velocityX[0] * 0.5 + (mouseX - positionX[0]) * 0.1;
	velocityY[0] = velocityY[0] * 0.5 + (mouseY - positionY[0]) * 0.1;
	
	positionX[0] += velocityX[0];
	positionY[0] += velocityY[0];
	
	for (var particle = 1; particle < particlesQuantity; particle++) {
		var whatever = 1024 / (sq(positionX[0] - positionX[particle]) + sq(positionY[0] - positionY[particle]));
		
		velocityX[particle] = velocityX[particle] * 0.95 + (velocityX[0] - velocityX[particle]) * whatever;
		velocityY[particle] = velocityY[particle] * 0.95 + (velocityY[0] - velocityY[particle]) * whatever;
		
		positionX[particle] += velocityX[particle];
		positionY[particle] += velocityY[particle];
		
		if ((positionX[particle] < 0 && velocityX[particle] < 0) || (positionX[particle] > width && velocityX[particle] > 0)) {
			velocityX[particle] = -velocityX[particle];
		}
		
		if ((positionY[particle] < 0 && velocityY[particle] < 0) || (positionY[particle] > height && velocityY[particle] > 0)) {
			velocityY[particle] = -velocityY[particle];
		}
		//ellipse(positionX[particle]-5, positionY[particle]-3,5,5);
		fill(255,255,255,random(0,255));
		star(positionX[particle], positionY[particle],2,1,random(4,6));

	}
}
function mousePressed() {
	for (var particle = 1; particle < particlesQuantity; particle++) {
		positionX[particle] = random(0, width);
		positionY[particle] = random(0, height);
	}
}
function star(x, y,radius1, radius2, npoints) {
	angle = TWO_PI / npoints;
	halfAngle = angle/2.0;
	beginShape();
	for ( a = 0; a < TWO_PI; a += angle) {
	   sx = x + cos(a) * radius2;
	   sy = y + sin(a) * radius2;
	  vertex(sx, sy);
	  sx = x + cos(a+halfAngle) * radius1;
	  sy = y + sin(a+halfAngle) * radius1;
	  vertex(sx, sy);
	}
	endShape(CLOSE);
  }
