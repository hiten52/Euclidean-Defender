import { CurveContext } from "./curves/curve";
import { SinCurve } from "./curves/sin";

class Renderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private curveContext: CurveContext;
  private sinStrategy: SinCurve;
  private offset: number = 0;
  private lastX: number = 0;
  private lastY: number;
  private isInitialDraw: boolean = true;
  private FPS: number = 125;

  constructor(canvasId: string) {
    this.canvas = <HTMLCanvasElement>document.getElementById(canvasId);
    if (!this.canvas) throw new Error("Canvas element not found.");
    this.ctx = this.canvas.getContext("2d")!;
    this.lastY = this.canvas.height / 2;

    this.curveContext = new CurveContext();
    this.sinStrategy = new SinCurve(100);
    this.curveContext.setStrategy(this.sinStrategy);
  }

  private draw() {
    const currX = this.offset;
    const currY =
      this.canvas.height / 2 - this.curveContext.executeStrategy(currX);

    if (!this.isInitialDraw) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.lastX, this.lastY);
      this.ctx.lineTo(currX, currY);
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 3;
      this.ctx.stroke();
    } else {
      this.isInitialDraw = false;
    }

    this.lastX = currX;
    this.lastY = currY;
    this.offset += 20;

    if (this.offset <= 720) {
      setTimeout(
        () => window.requestAnimationFrame(() => this.draw()),
        1000 / this.FPS
      );
    }
  }

  public start() {
    this.draw();
  }
}

export { Renderer };
