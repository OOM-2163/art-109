
let canvas;
let xPos = 0;
let yPos = 0;
let easing = .02;
let img;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index", -2);
    img = loadImage("images/blinky.png")
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

 function draw(){
    clear();

    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

    drawThing(mouseX, mouseY);
    drawThing(mouseX - 50, mouseY + 75);
    drawThing2(xPos, yPos);
 }

 function drawThing(_x, _y){
    strokeWeight(0);
    fill(random(200,255), random(200,255), random(200,255));
    ellipse(_x, _y, 30, 30);
 }

 function drawThing2(_x, _y){
    image(img, _x, _y, 60, 60)
 }