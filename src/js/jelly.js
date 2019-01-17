import Ball from './ball';

export default class Jelly {
  constructor() {
    this.canvas = document.getElementById('jelly');
    this.ctx = this.canvas.getContext('2d');




    this.cursorSize = 120;
    this.cursorColor = '#ff0000';
    this.pos = {
      x: 0,
      y: 0,
      radius: this.cursorSize
    };
    this.mouse = new Ball(this.pos.x, this.pos.y, this.cursorSize, this.cursorColor);


    this.balls = [];
    this.ballsQuantity = 10;
    this.ballSize = 2;
    this.ballColor = '#ff6600';


    this.init();
  }

  init() {
    this.mouseMove();
    this.getBalls();
    this.drawBalls();
    this._render();
  }



  getBalls() {
    for (let i = 0; i < this.ballsQuantity; i++) {
      // console.log(this.ballSize);
      this.balls.push(
        // new Ball(
        //   Math.random() * this.canvas.width,
        //   Math.random() * this.canvas.height,
        //   this.ballSize
        // )
        new Ball(
          200 + 100*Math.cos(i *  2 * Math.PI / this.ballsQuantity),
          200 + 100*Math.sin(i *  2 * Math.PI / this.ballsQuantity),
          this.ballSize
        )
      );
    }
  }

  getMousePos(evt) {
    var rect = this.canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  mouseMove() {
    this.canvas.onmousemove = e => {
      const coords = this.getMousePos(e);
      this.pos.x = coords.x;
      this.pos.y = coords.y;
    }

  }

  drawMouse() {
    this.mouse.setPos(this.pos.x, this.pos.y);
    this.mouse.draw(this.ctx);
  }

  drawBalls() {
    this.balls.forEach(el => {
      el.think(this.pos);
      // el.draw(this.ctx);
    })
  }

  connectDots(balls) {
    this.ctx.beginPath();
    this.ctx.moveTo(balls[0].x, balls[0].y);
    balls.forEach(ball => {
      this.ctx.lineTo(ball.x, ball.y);
    });
    this.ctx.closePath();
    this.ctx.fill();
  }

  ConnectDots1(dots) {
    this.ctx.beginPath();

    for (var i = 0, jlen = dots.length; i <= jlen; ++i) {
      var p0 = dots[i + 0 >= jlen ? i + 0 - jlen : i + 0];
      var p1 = dots[i + 1 >= jlen ? i + 1 - jlen : i + 1];
      this.ctx.quadraticCurveTo(p0.x, p0.y, (p0.x + p1.x) * 0.5, (p0.y + p1.y) * 0.5);
    }

    this.ctx.closePath();
    this.ctx.fill();
  }

  _render() {
    let self = this;

    function render() {
      self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);

      self.drawMouse();
      self.drawBalls();
      self.ConnectDots1(self.balls);


      // self.drawBall(self.x, self.y, self.cursorSize, '#000000');
      // self.balls.forEach((el) => self.drawBall(el.x, el.y, el.radius, el.color));
      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }
}
