import p5 from "p5";

class Box {
  private sketch: p5;
  public pos: p5.Vector;
  public r: number;
  constructor(sketch: p5, x: number, y: number, z: number, r_: number) {
    this.sketch = sketch;
    this.pos = sketch.createVector(x, y, z);
    this.r = r_;
  }
  generate() {
    let boxes: Box[] = [];
    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        for (let z = -1; z < 2; z++) {
          //cut out the middle box;
          let newR = this.r / 3;
          let sum = Math.abs(x) + Math.abs(y) + Math.abs(z);
          if (sum > 1) {
            let newB = new Box(this.sketch, this.pos.x + x * newR, this.pos.y + y * newR, this.pos.z + z * newR, newR);
            boxes.push(newB);
          }
        }
      }
    }
    return boxes;
  }
  show() {
    this.sketch.push();
    this.sketch.translate(this.pos.x, this.pos.y, this.pos.z);
    this.sketch.box(this.r)
    this.sketch.pop();
  }
}


export default Box;