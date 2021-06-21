function setup(){
  createCanvas(window.innerWidth, window.innerHeight);

}
function draw(){
   background("#00000055");
   fill(random(200,255),random(200,255),random(200,255),5);
  stroke(255,255,random(0,255),30);
 circle(mouseX,mouseY,random(20,100));
 fill(random(0,255),random(0,255),random(0,255),255);
 ellipse(random(0,width),random(0,width),random(0,10),random(0,10));
 rect(random(0,width),random(0,width),random(0,10),random(0,10));
 ellipse(random(0,width),random(0,width),random(0,10),random(0,20));
 rect(random(0,width),random(0,width),random(0,10),random(0,20));
}
