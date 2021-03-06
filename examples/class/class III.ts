/**
 * 存取器
 */
const password = 'password';

class Employee {
  private _name: string;

  get fullName(): string {
    return this._name
  }

  set fullName(newName: string) {
    if (password && password === 'password') {
      this._name = newName;
    } else {
      console.log('Error!');
    }
  }
}

let employee = new Employee();
employee.fullName = 'le';
if (employee.fullName) {
  console.log(employee.fullName)
}


/**
 * 静态属性
 */
class Grid {
  static origin = {x: 0, y: 0}

  scale: number

  constructor (scale: number) {
    this.scale = scale
  }

  calculateDistanceFromOrigin(point: {x: number; y: number}) {
    let xDist = point.x - Grid.origin.x
    let yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
  }
}

let grid1 = new Grid(1.0)  // 1x scale
let grid2 = new Grid(5.0)  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 3, y: 4}))
console.log(grid2.calculateDistanceFromOrigin({x: 3, y: 4}))