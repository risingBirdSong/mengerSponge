import p5 from "p5";

class Box extends p5 {
  this: p5;
  public pos: p5.Vector;
  public r: number;
  //@ts-ignore
  constructor(x: number, y: number, z: number, r_: number) {
    //@ts-ignore
    this.pos = this.createVector(x, y, z);
    //@ts-ignore
    this.r = r_;
  }
  show() {
    this.translate(this.pos.x, this.pos.y, this.pos.z);
    this.box(this.r);

  }
}

export default Box;