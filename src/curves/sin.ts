import { CurveStrategy } from "./curve";

class SinCurve implements CurveStrategy {
  private scale: number;

  constructor(scale: number) {
    this.scale = scale;
  }

  plot(x: number): number {
    return Math.sin((x * Math.PI) / 180) * this.scale;
  }
}

export { SinCurve };
