/**
 * 类的基本示例
 */
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message
  }

  greeter() {
    return `Hello,${this.greeting}`
  }
}

let newGreeter = new Greeter('le');
console.log(newGreeter.greeter());


/**
 * 简单的继承
 */
class Animals {
  move(distance: number = 0) {
    console.log(`Animal moved ${distance}m`)
  }
}

class Dog extends Animals {
  bark() {
    console.log('woof!woof!')
  }
}

let dog = new Dog();
dog.bark();
dog.move(5);


class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`)
  }
}

/**
 * 较复杂的继承
 */
class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distance: number = 5) {
    console.log('Slithering');
    super.move(distance);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distance: number = 45) {
    console.log('Galloping');
    super.move(distance);
  }
}

const snake = new Snake('little snake');
const horse = new Horse('little horse');
const horse2: Animal = new Horse('little horse2');

snake.move();
horse.move(66);
horse2.move(34);
