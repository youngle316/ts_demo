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