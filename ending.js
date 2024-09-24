let fireworks = [];
let gravity;

function setup() {
    let canvas = document.getElementById('fireworksCanvas');
    createCanvas(canvas.width, canvas.height);
    gravity = createVector(0, 0.5);
  }

function draw() {
  background(0);
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}

function mousePressed() {
  fireworks.push(new Firework(mouseX, mouseY));
}

class Firework {
  constructor(sx, sy) {
    this.firework = new Particle(sx, sy, true);
    this.exploded = false;
    this.particles = [];
  }

  update() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

  explode() {
    let numParticles = floor(random(30, 500)); 
    let explosionType = floor(random(4));  

    for (let i = 0; i < numParticles; i++) {
      let p = new Particle(this.firework.pos.x, this.firework.pos.y, false, explosionType);
      this.particles.push(p);
    }
  }

  done() {
    return this.exploded && this.particles.length === 0;
  }

  show() {
    if (!this.exploded) {
      this.firework.show();
    }

    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}

class Particle {
  constructor(x, y, firework, explosionType) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = random(150, 255);  
    this.explosionType = explosionType;
    this.color = color(random(255), random(255), random(255)); 

    if (this.firework) {
      this.vel = createVector(0, random(-12, -8));
    } else {
      if (this.explosionType === 0) {
        // Spherical explosion
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(2, 12));  // Wider velocity range for randomness
      } else if (this.explosionType === 1) {
        // Directional explosion
        this.vel = createVector(random(-1, 1), random(-1, 1));
        this.vel.normalize();
        this.vel.mult(random(6, 14));  
      } else if (this.explosionType === 2) {
        // Starburst explosion
        let angle = random(TWO_PI);
        this.vel = p5.Vector.fromAngle(angle);
        this.vel.mult(random(7, 20)); 
      } else if (this.explosionType === 3) {
        // Spiral explosion
        let angle = random(TWO_PI);
        this.vel = p5.Vector.fromAngle(angle + frameCount * 0.1);
        this.vel.mult(random(4, 10));
      }
    }
    this.acc = createVector(0, 0);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= random(1, 5);  
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  done() {
    return this.lifespan < 0;
  }

  show() {
    colorMode(HSB);
    if (!this.firework) {
      strokeWeight(4);
      stroke(this.color.levels[0], 255, 255, this.lifespan);  
    } else {
        strokeWeight(4);
        let lifespanPct = this.lifespan / 255;
    }
    point(this.pos.x, this.pos.y);
  }
}




// Nếu bạn muốn thêm tương tác, ví dụ như thay đổi màu sắc khi hover, bạn có thể sử dụng JavaScript:
const congratulation = document.querySelector('.congratulation');

congratulation.addEventListener('mouseover', () => {
  congratulation.style.color = 'yellow';
});

congratulation.addEventListener('mouseout', () => {
  congratulation.style.color = 'white';
});
