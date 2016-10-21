function particle(x, y) {
  this.acc = p5.Vector.random2D();
  this.acc.setMag(random(0.3));
  this.vel = createVector(0, 0);
  this.pos = createVector(x, y);
  this.radius = random(2, 10);
  
  this.show = function() {
    fill(255, 0, 0, 30);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.radius);
  }
  
  this.walls = function(){
    if(this.pos.x < 0 || this.pos.y < 0 || this.pos.x > width || this.pos.y > height){
      return true;
    }else{
      return false;
    }
  }
  
  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(5)
    this.pos.add(this.vel);
  }
}