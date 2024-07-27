class Square {
  private ctx: CanvasRenderingContext2D;
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  draw(x: number, y: number, l: number) {
    this.ctx.fillRect(x, y, l, l);
  }
}

export default Square;
