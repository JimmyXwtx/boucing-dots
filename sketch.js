/*Reference
https://openprocessing.org/sketch/422446/
particleFLOW by yasai
*/
/*
function preload(){
sound = loadSound('PartyAnimal.mp3');
}
*/
function setup() {
  createCanvas(600, 600);
  B1 = new Ball(200, 5);
  B2 = new Ball(100, 2);
  /*
fft = new p5.FFT();
sound.amp(0.2);
sound.loop();
*/
//tt=0
}

function draw() {
  background(17);
  translate(300, 300);
  /*
let spectrum = fft.analyze();
tt = map(spectrum,-0.01,0.02,400,500)
for (let i = 0; i < spectrum.length; i++){
let tt = map(i, 0, spectrum.length, 0, width);
tt++
B1.display(200, 4, 500,tt);
 }
print(spectrum.length)
*/
  ellipseMode(RADIUS);
B1.display(200, 4, 500);
B2.display(100, 1.5, 500);
 
}
