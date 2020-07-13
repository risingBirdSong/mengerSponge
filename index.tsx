import p5 from "p5";
import Box from "./box";

//angle
let a = 0;

export default new p5((s: p5) => {
  let posistion: p5.Element;
  let mainPos: { x: number; y: number; z: number };
  let mainVector: p5.Vector;
  let mainR: number;
  let boxes: Box[] = [];
  let testBox: Box;
  // boxes[0]
  let mainBoxSize = 300;
  s.setup = function setup() {
    const canvas = s.createCanvas(800, 800, "webgl");
    testBox = new Box(s, 0, 0, 0, 200);
    let length = 800;
    mainPos = { x: length / 4, y: length / 4, z: length / 4 };
    mainVector = s.createVector(length / 4, length / 4, length / 4);
    mainR = length / 4;
    posistion = canvas.position(mainVector.x, mainVector.y);
    console.log("position", posistion.position());
    generate();
  };

  let generate = () => {
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        for (let k = -1; k < 2; k++) {
          let newR = mainR / 3;
          boxes.push(
            new Box(
              s,
              mainVector.x + i * newR,
              mainVector.y + j * newR,
              mainVector.z + k * newR,
              newR
            )
          );
        }
      }
    }
  };
  s.draw = function draw() {
    s.background(200);
    s.stroke(100);
    s.noFill();
    s.rotateX(a);
    s.box(mainBoxSize);
    testBox.show();
    boxes.forEach((b) => b.show());
    // s.box(...box1);
    a += 0.01;
  };
});
