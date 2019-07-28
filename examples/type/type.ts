/**
 * 布尔值
 */

let isDone: boolean = true;

/**
 * 数字
 */

// 十进制
let DecimalLiteral: number = 16;
// 十六进制
let hexadecimalLiteral: number = 0x14;
// 二进制
let binaryLiteral: number = 0b10100;
// 八进制
let octalLiteral: number = 0o24;

/**
 * 字符串
 */

let firstName: string = 'yang';
let lastName: string = 'le';
let sentence: string = `Hello, my name is ${firstName} ${lastName}`;

/**
 * 数组
 */

// 元素类型后面接上 []，表示由此类型元素组成的一个数组
let list: number[] = [1, 2, 3];
// 使用数组泛型,Array<元素类型>
let list2: Array<number> = [1, 2, 3];

/**
 * 元祖tuple
 */

// 定义一个元祖类型
let x: [string, number];
// 初始化
x = ['1', 2];

// 当访问一个已知索引的元素，会得到正确的类型
x[0].substr(1);
// x[1].substr(1);    错误，数组没有substr方法

// 当访问一个越界的元素，会使用联合类型替代

/**
 * 枚举
 */

// 默认从0开始编号
enum Color {
  blue,
  red,
  yellow
}

let color: Color = Color.blue;

// 也可以手动编号，如下面从2开始进行编号，依次是3，4

enum Fruit {
  orange = 2,
  peach,
  banana
}

let fruit: Fruit = Fruit.banana;

// 也可以进行全部手动编号，如下面全部进行编号，且不按照顺序

enum People {
  child = 1,
  adult = 2,
  old = 4
}

let people: People = People.adult;

// 可以有枚举的数值找到它的名字

enum Color2 {
  green,
  pink,
  black
}

let colorName: string = Color2[2];
console.log(colorName);

/**
 * any
 */

// 直接通过编译阶段的类型检查
let notSure: any = 1;
notSure = "2";
notSure = [1, 2, 3];

// 不确定数组元素的类型
let list3: any[] = [1, true, 'free'];
list3[1] = 100;

/**
 * void
 */

// 表示没有任何类型
function warnUser(): void {
  console.log('This is my warning message')
}

// 声明一个 void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null：
let unusable: void = undefined;

/**
 * null 和 undefined
 */

let u: undefined = undefined;
let n: null = null;

// 指定了 --strictNullChecks标记，null和undefined只能赋给它们各自
let num: number = 3;
// num = null; // 报错  Type 'null' is not assignable to type 'number'.

// 使用联合类型可以解决这个问题
let num1: number | null = 4;
num1 = null;

/**
 * never
 */

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed")
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}


/**
 * object
 */
declare function create(o: object | null): void

create({prop: 0}); // OK
create(null); // OK

// create(42); // Error
// create('string'); // Error
// create(false); // Error
// create(undefined); // Error

/**
 * 断言类型
 */

// “尖括号”语法
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;

// as语法
let someValue1: any = 'this is a string';
let strLength2: number = (someValue as string).length;