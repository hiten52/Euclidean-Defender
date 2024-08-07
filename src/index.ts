import Square from "./shapes/square";

const canvas = <HTMLCanvasElement>document.getElementById("canvas");
const ctx = canvas.getContext("2d");

if (ctx === null) {
  throw new Error("Error in getting the context");
}

canvas.width = 0.5 * window.innerWidth;
canvas.height = 0.5 * window.innerHeight;
canvas.style.border = "2px solid red";

const canvasFontSize = parseFloat(
  window.getComputedStyle(<HTMLElement>document.getElementById("canvas"))
    .fontSize
);

console.log(canvasFontSize);
canvas.width =
  canvas.width + (canvasFontSize - ((canvas.width + 4) % canvasFontSize));
canvas.height =
  canvas.height + (canvasFontSize - ((canvas.height + 4) % canvasFontSize));
console.log(canvas.width);
console.log(canvas.height);

ctx.fillStyle = "red";
new Square(ctx).draw(10, 10, 100);

let noOfRecs = (canvas.width + 4) / canvasFontSize;
let noOfSideRecs = (canvas.height + 4) / canvasFontSize;
console.log(noOfRecs);

const top_h = document.getElementById("top-hitbox");
const bottom_h = document.getElementById("bottom-hitbox");
const left_h = document.getElementById("left-hitbox");
const right_h = document.getElementById("right-hitbox");
if (top_h == null) console.log("top_h is null");

while (noOfRecs--) {
  const rec = document.createElement("div");
  const bottom_rec = document.createElement("div");
  rec.id = "rec";
  bottom_rec.id = "rec";
  top_h?.append(rec);
  bottom_h?.append(bottom_rec);
}
while (noOfSideRecs--) {
  const rec = document.createElement("div");
  const right_rec = document.createElement("div");
  rec.id = "side-rec";
  right_rec.id = "side-rec";
  left_h?.append(rec);
  right_h?.append(right_rec);
}
