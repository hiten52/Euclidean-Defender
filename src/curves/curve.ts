interface CurveStrategy {
  plot(x: number): number;
}

class CurveContext {
  private curveStrategy: CurveStrategy | null;

  constructor() {
    this.curveStrategy = null;
  }

  setStrategy(strategy: CurveStrategy) {
    this.curveStrategy = strategy;
  }

  executeStrategy(x: number): number {
    if (this.curveStrategy == null) {
      throw new Error("No curve strategy selected.");
    }

    return this.curveStrategy.plot(x);
  }
}

export { CurveStrategy, CurveContext };
