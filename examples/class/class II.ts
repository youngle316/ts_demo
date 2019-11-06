// 公共，私有与受保护的修饰符
/**
 * 默认为public
 */
class Animals {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`)
  }
}

/**
 * 理解private
 */
class Car {
  private color: string;

  constructor(color: string) {
    this.color = color;
  }
}

const car = new Car('black');
// car.color = 'blue'; // 错误，color是私有的

class Animal {
  private name: string;
  constructor(name: string) {
    this.name = name
  }
}

class Rhino extends Animal {
  constructor() {
    super('Rhino')
  }
}

class Employee {
  private name: string;
  constructor(name: string) {
    this.name = name
  }
}

let animal = new Animal('Goat');
let rhino = new Rhino();
let employee = new Employee('Bob');

animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.