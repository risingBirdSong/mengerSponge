import p5 from "p5";
import Box from "./box";

let a = 0;

export default new p5((s: p5) => {
  let posistion;
  let boxes: Box[] = [];
  // boxes[0]
  let mainBoxSize = 300;
  s.setup = function setup() {
    const canvas = s.createCanvas(800, 800, "webgl");
    posistion = canvas.position(window.innerWidth / 4, window.innerHeight / 4);
    generate();
  };

  let generate = () => {
    let newX = 0;
    for (let a = 0; a < 3; a++) {
      boxes.push(new Box(s, a * 50, 100, 100, 100));
      console.log("a", a);
    }
  };
  s.draw = function draw() {
    s.background(200);
    s.stroke(100);
    s.noFill();
    s.rotateX(a);
    s.box(mainBoxSize);
    boxes.forEach((b) => b.show());
    // s.box(...box1);
    a += 0.01;
  };
});
