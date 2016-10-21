var par = [];

function setup() {
  createCanvas(400, 300);
  background(255);
  frameRate(60);
}

function draw() {
  clear(255);
  for (var i = 0; i < par.length; i++) {
    par[i].update();
    par[i].show();
  }
  for(var i = par.length -1; i >= 0; i--){
    if(par[i].walls()){
      par.splice(i, 1);
    }
  }
}

function mousePressed() {
  if (mouseButton == LEFT) {
    for (var i = 0; i < 50; i++) {
      par.push(new particle(mouseX, mouseY));
    }
  }
}