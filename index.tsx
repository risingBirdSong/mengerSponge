import p5 from "p5";
import Box from "./box";

let a = 0;

export default new p5((s: p5) => {
  let posistion;
  let box1;
  s.setup = function setup() {
    const canvas = s.createCanvas(600, 600, "webgl");
    posistion = canvas.position(window.innerWidth / 4, window.innerHeight / 4);
    box1 = new Box(100, 100, 100, 100);
  };

  s.draw = function draw() {
    s.background(200);
    s.stroke(100);
    s.noFill();
    s.rotateX(a);
    s.box(200);
    s.box(...box1);
    a += 0.01;
  };
});
