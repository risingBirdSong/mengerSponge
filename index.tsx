import p5 from "p5";

export default new p5((s: p5) => {
  s.setup = function setup() {
    const canvas = s.createCanvas(800, 800);
    canvas.position();
    canvas.position(window.innerWidth / 2 - 400, window.innerHeight / 2 - 400);
  };
  s.draw = function draw() {
    let text = s.createP("hello world").position(250, 100).style("color : red");
    s.background(50);
  };
});
