import p5 from "p5";

class Box {
  private sketch: p5;
  public pos: p5.Vector;
  public r: number;
  //@ts-ignore
  constructor(sketch: p5, x: number, y: number, z: number, r_: number) {
    //@ts-ignore
    this.sketch = sketch;
    //@ts-ignore
    this.pos = sketch.createVector(x, y, z);
    //@ts-ignore
    this.r = r_;
  }
  show() {
    this.sketch.translate(this.pos.x, this.pos.y, this.pos.z);
    this.sketch.box(this.r)
  }
}

export default Box;