// 1. Create a `Point` class, which creates 2 dimensional point with coordinates. It
//    should contain:
//     - two instance variables `x` and `y`;
//     - default constructor which creates a point at the location of (0, 0);
//     - overloaded constructor (use multiple constructors declaration for Typescript)
//       which creates a point by `x` and `y` coordinates;
//     - `toString()` method should return a `Point` class stringified representation in
//       format: `"(x, y)"`;
//     - `distance()` method should be overloaded (use multiple methods declaration for
//       Typescript) with next implementations:
//       - no args: distance from this point to (0, 0);
//       - `distance(other: Point)` - distance from this point to a given instance of
//         `Point`;
//       - `distance(x, y)` - distance from this point to a given point (x, y).

export class Point {
  private readonly x: number;
  private readonly y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(x: number = 0, y: number = 0) {
      this.x = x;
      this.y = y;
  }

  public distance();
  public distance(otherPoint: Point);
  public distance(x, y);
  public distance(x: Point | number = 0, y: number = 0): number {
      let x2: number;
      let y2: number;

      if (x instanceof Point) {
          x2 = x.x;
          y2 = x.y;
      } else {
          x2 = x;
          y2 = y;
      }

      return Math.sqrt(Math.pow((x2 - this.x), 2) + Math.pow((y2 - this.y), 2));
  }

  public toString(): string {
      return `(${this.x}, ${this.y})`;
  }
}
