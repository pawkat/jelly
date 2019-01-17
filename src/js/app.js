import Jelly from './jelly';
import Thing from './thing';

new Jelly();



class Cloud {
  constructor() {
    // create canvas

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.width = 600;
    this.height = 600;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    document.querySelector('.out').appendChild(this.canvas);

    this.time = 0;
    this.numberofparticles = 20;
    this.ctx.strokeStyle = 'rgba(255,255,255,0.8)';
    this.particles = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.createparticles();

    // this.ConnectDots1(this.particles);
    this.update();
    this.bindmouse();
  }


  createparticles() {
    let self = this;
    for (var i = 0; i < this.numberofparticles; i++) {
      let radius = 150;
      let angle = 2*Math.PI*Math.random();

      let centerX = 300;
      let centerY = 300;


      let x = centerX + radius*Math.cos(i *  2 * Math.PI / this.numberofparticles)
      let y = centerY + radius*Math.sin(i *  2 * Math.PI / this.numberofparticles)
      // let x = this.width/2 + radius*Math.sin(angle);
      // let y = this.height/2 + radius*Math.cos(angle);
      this.particles.push(
        new Thing(self.ctx,x,y)
      );
    }
  }
  ConnectDots(balls) {
    this.ctx.beginPath();
    this.ctx.moveTo(balls[0].pos[0], balls[0].pos[1]);
    balls.forEach(ball => {
      this.ctx.lineTo(ball.pos[0], ball.pos[1]);
    });
    this.ctx.closePath();
    this.ctx.fillStyle = '#ff0000';
    this.ctx.strokeStyleke = '#ff0000';
    this.ctx.fill();
    this.ctx.stroke();
  }
  ConnectDots1(dots) {
    this.ctx.beginPath();

    for (var i = 0, jlen = dots.length; i <= jlen; ++i) {
      // console.log(dots[i].pos);
      var p0 = dots[i + 0 >= jlen ? i + 0 - jlen : i + 0];
      var p1 = dots[i + 1 >= jlen ? i + 1 - jlen : i + 1];
      this.ctx.quadraticCurveTo(p0.pos[0], p0.pos[1], (p0.pos[0] + p1.pos[0]) * 0.5, (p0.pos[1] + p1.pos[1]) * 0.5);
    }

    this.ctx.closePath();

    this.ctx.fillStyle = '#ff0000';
    this.ctx.fill();
  }

  update() {
    let self = this;
    this.time++;
    this.ctx.clearRect(0,0,this.width,this.height);
    this.particles.forEach((p) => {
      p.calculateForces(self.mouseX,self.mouseY);
      p.update(self.time);
      // p.draw();
    });
    this.ConnectDots1(this.particles);
    window.requestAnimationFrame(this.update.bind(this));
  }
  getMousePos(evt) {
    var rect = this.canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  bindmouse() {
    let self = this;
    this.canvas.addEventListener('mousemove',function(e) {
      const pos = self.getMousePos(e);
      self.mouseX = pos.x;
      self.mouseY = pos.y;
    });
  }
}

let cloud = new Cloud();
