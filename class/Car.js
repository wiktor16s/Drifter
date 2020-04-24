class Car {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.keys = {};

    this.position = {
      x: x,
      y: y,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.acceleration = 0;
    this.angularAcceleration = 0;

    this.drag = 0.96;
    this.angularDrag = 0.96;
    this.angle = 0;

    this.turnSpeed = 0.01;
    this.power = 0.5;

    this.initControl();
  }

  initControl() {
    const self = this;
    document.addEventListener("keydown", (e) => {
      self.keys[e.keyCode] = true;
    });

    document.addEventListener("keyup", (e) => {
      self.keys[e.keyCode] = false;
    });
  }

  update() {
    this.position.x = this.position.x + this.velocity.x;
    this.position.y = this.position.y + this.velocity.y;
    this.velocity.x = this.velocity.x * this.drag;
    this.velocity.y = this.velocity.y * this.drag;
    this.angle = this.angle + this.angularAcceleration;
    this.angularAcceleration = this.angularAcceleration * this.angularDrag;
  }

  move() {
    if (this.keys[38]) {
      // up
      this.velocity.x += Math.sin(this.angle) * this.power;
      this.velocity.y += Math.cos(this.angle) * this.power;

      console.log(this.velocity);
    }
    if (this.keys[37]) {
      // left
      this.angularAcceleration = this.angularAcceleration + this.turnSpeed;
    }
    if (this.keys[39]) {
      //right
      this.angularAcceleration = this.angularAcceleration - this.turnSpeed;
    }
    if (this.keys[40]) {
      //down
    }
  }

  draw() {
    this.update();
    this.move();

    push();
    translate(this.position.x, this.position.y);
    rotate(this.angle * -1);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(125);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
