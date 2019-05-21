/**
 * 布尔值
 */
var isDone = true;
/**
 * 数字
 */
// 十进制
var DecimalLiteral = 16;
// 十六进制
var hexadecimalLiteral = 0x14;
// 二进制
var binaryLiteral = 20;
// 八进制
var octalLiteral = 20;
/**
 * 字符串
 */
var firstName = 'yang';
var lastName = 'le';
var sentence = "Hello, my name is " + firstName + " " + lastName;
/**
 * 数组
 */
// 元素类型后面接上 []，表示由此类型元素组成的一个数组
var list = [1, 2, 3];
// 使用数组泛型,Array<元素类型>
var list2 = [1, 2, 3];
/**
 * 元祖tuple
 */
// 定义一个元祖类型
var x;
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
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1] = "red";
    Color[Color["yellow"] = 2] = "yellow";
})(Color || (Color = {}));
var color = Color.blue;
// 也可以手动编号，如下面从2开始进行编号，依次是3，4
var Fruit;
(function (Fruit) {
    Fruit[Fruit["orange"] = 2] = "orange";
    Fruit[Fruit["peach"] = 3] = "peach";
    Fruit[Fruit["banana"] = 4] = "banana";
})(Fruit || (Fruit = {}));
var fruit = Fruit.banana;
// 也可以进行全部手动编号，如下面全部进行编号，且不按照顺序
var People;
(function (People) {
    People[People["child"] = 1] = "child";
    People[People["adult"] = 2] = "adult";
    People[People["old"] = 4] = "old";
})(People || (People = {}));
var people = People.adult;
// 可以有枚举的数值找到它的名字
var Color2;
(function (Color2) {
    Color2[Color2["green"] = 0] = "green";
    Color2[Color2["pink"] = 1] = "pink";
    Color2[Color2["black"] = 2] = "black";
})(Color2 || (Color2 = {}));
var colorName = Color2[2];
console.log(colorName);
/**
 * any
 */
// 直接通过编译阶段的类型检查
var notSure = 1;
notSure = "2";
notSure = [1, 2, 3];
// 不确定数组元素的类型
var list3 = [1, true, 'free'];
list3[1] = 100;
/**
 * void
 */
// 表示没有任何类型
function warnUser() {
    console.log('This is my warning message');
}
// 声明一个 void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null：
var unusable = undefined;
/**
 * null 和 undefined
 */
var u = undefined;
var n = null;
// 指定了 --strictNullChecks标记，null和undefined只能赋给它们各自
var num = 3;
// num = null; // 报错  Type 'null' is not assignable to type 'number'.
// 使用联合类型可以解决这个问题
var num1 = 4;
num1 = null;
/**
 * never
 */
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create('string'); // Error
// create(false); // Error
// create(undefined); // Error
/**
 * 断言类型
 */
// “尖括号”语法
var someValue = 'this is a string';
var strLength = someValue.length;
// as语法
var someValue1 = 'this is a string';
var strLength2 = someValue.length;
