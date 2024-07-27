import Square from "./shapes/square";

const canvas = <HTMLCanvasElement>document.getElementById("canvas");
const ctx = canvas.getContext("2d");

if (ctx === null) {
  throw new Error("Error in getting the context");
}

canvas.width = 0.5 * window.innerWidth;
canvas.height = 0.5 * window.innerHeight;

ctx.fillStyle = "red";
new Square(ctx).draw(10, 10, 100);
