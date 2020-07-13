import p5 from "p5";
import Box from "./box";

let a = 0;

export default new p5((s: p5) => {
  let posistion;
  let box1: Box;
  let box2: Box;
  s.setup = function setup() {
    const canvas = s.createCanvas(800, 800, "webgl");
    posistion = canvas.position(window.innerWidth / 4, window.innerHeight / 4);
    box1 = new Box(s, 100, 100, 100, 100);
    box2 = new Box(s, 50, 50, 50, 50);
  };

  s.draw = function draw() {
    s.background(200);
    s.stroke(100);
    s.noFill();
    s.rotateX(a);
    s.box(200);
    box1.show();
    box2.show();
    // s.box(...box1);
    a += 0.01;
  };
});
