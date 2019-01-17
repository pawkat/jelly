export default class Ball {
  constructor(x, y, radius, color) {
    this.x = x || 0;
    this.y = y || 0;
    this.originalX = x || 0;
    this.originalY = y || 0;
    this.vx = 0;
    this.vy = 0;
    this.radius = radius || 2;
    this.color = color || '#ff6600';
    this.friction = 0.9;
    this.springFactor = 0.01;
  }

  setPos(x, y) {
    this.x = x;
    this.y = y;
  }

  think(mouse) {
    let dx = this.x - mouse.x;
    let dy = this.y - mouse.y;
    let dist = Math.sqrt(dx * dx + dy * dy);

    //interaction
    if (dist < mouse.radius) {
      const angle = Math.atan2(dy, dx);
      const tx = mouse.x + Math.cos(angle) * mouse.radius;
      const ty = mouse.y + Math.sin(angle) * mouse.radius;

      this.vx += tx - this.x;
      this.vy += ty - this.y;
    }

    //spring back
    const dx1 = -(this.x - this.originalX);
    const dy1 = -(this.y - this.originalY);

    this.vx += dx1 * this.springFactor;
    this.vy += dy1 * this.springFactor;

    //friction
    this.vx *= this.friction;
    this.vy *= this.friction;

    //actual move
    this.x += this.vx;
    this.y += this.vy;
  }


  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color || '#ff0000';
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}
