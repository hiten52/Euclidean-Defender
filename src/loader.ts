function initGame() {
  loadCanvas();
  loadDsrs();
}

function loadCanvas() {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  if (ctx === null) {
    throw new Error("Error in getting the context");
  }

  canvas.width = 0.5 * window.innerWidth;
  canvas.height = 0.5 * window.innerHeight;
  canvas.style.border = "2px solid red";
}

enum DIR {
  top = "top",
  bottom = "bottom",
  left = "left",
  right = "right",
}

function loadDsr(dsrSide: DIR, totalDsr: number, dsrId: string) {
  const hitbox = document.getElementById(`${dsrSide}-hitbox`);
  if (hitbox == null) {
    throw Error("Error in getting hitbox.");
  }

  while (totalDsr > 0) {
    const dsr = document.createElement("div");
    dsr.id = dsrId;
    hitbox.append(dsr);

    totalDsr--;
  }
}

const loadDsrs = () => {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas");
  const canvasBorderWidth = 2;
  const canvasFontSize = parseFloat(window.getComputedStyle(canvas).fontSize);

  canvas.width =
    canvas.width +
    (canvasFontSize -
      ((canvas.width + 2 * canvasBorderWidth) % canvasFontSize));

  canvas.height =
    canvas.height +
    (canvasFontSize -
      ((canvas.height + 2 * canvasBorderWidth) % canvasFontSize));

  const totalDsr = (canvas.width + 2 * canvasBorderWidth) / canvasFontSize;
  loadDsr(DIR.top, totalDsr, "dsr");
  loadDsr(DIR.bottom, totalDsr, "dsr");

  const totalSideDsr = (canvas.height + 2 * canvasBorderWidth) / canvasFontSize;
  loadDsr(DIR.left, totalSideDsr, "side-dsr");
  loadDsr(DIR.right, totalSideDsr, "side-dsr");
};

export { initGame };
