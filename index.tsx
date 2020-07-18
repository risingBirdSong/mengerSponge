import p5 from "p5";
import Box from "./box";

//angle

export default new p5((s: p5) => {
  let a = 0;
  let sponge: Box[] = [];
  s.setup = function setup() {
    const canvas = s.createCanvas(800, 800, "webgl");
    s.normalMaterial();
    let mainBox = new Box(s, 0, 0, 0, 200);
    sponge.push(mainBox);
  };

  s.mouseClicked = function () {
    let next: Box[] = [];
    for (let i = 0; i < sponge.length; i++) {
      let b = sponge[i];
      let newBoxes = b.generate();
      next = next.concat(newBoxes);
    }
    sponge = next;
  };

  s.draw = function draw() {
    s.background(200);
    s.rotateX(a * 0.1);
    s.rotateY(a * 0.01);
    s.rotateZ(a * 0.02);
    for (let s of sponge) {
      s.show();
    }
    a += 0.05;
  };
});
