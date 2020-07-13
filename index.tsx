import p5 from "p5";

let a = 0;

export default new p5((s: p5) => {
  s.setup = function setup() {
    const canvas = s.createCanvas(800, 800, "webgl");
    canvas.position();
    canvas.position(window.innerWidth / 2 - 400, window.innerHeight / 2 - 400);
  };
  s.draw = function draw() {
    s.background(200);
    s.stroke(100);
    s.noFill();
    s.rotate(a);
    s.box(200);
    a += 0.01;
  };
});
