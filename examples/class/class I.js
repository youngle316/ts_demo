var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 类的基本示例
 */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greeter = function () {
        return "Hello," + this.greeting;
    };
    return Greeter;
}());
var newGreeter = new Greeter('le');
console.log(newGreeter.greeter());
/**
 * 简单的继承
 */
var Animals = /** @class */ (function () {
    function Animals() {
    }
    Animals.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Animal moved " + distance + "m");
    };
    return Animals;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('woof!woof!');
    };
    return Dog;
}(Animals));
var dog = new Dog();
dog.bark();
dog.move(5);
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " moved " + distance + "m");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log('Slithering');
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 45; }
        console.log('Galloping');
        _super.prototype.move.call(this, distance);
    };
    return Horse;
}(Animal));
var snake = new Snake('little snake');
var horse = new Horse('little horse');
var horse2 = new Horse('little horse2');
snake.move();
horse.move(66);
horse2.move(34);
