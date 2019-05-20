# 基础类型

TypeScript 支持与 JavaScript 几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用。

## 布尔值

最基本的数据类型就是简单的 true/false 值，在JavaScript 和 TypeScript 里叫做 `boolean`（其它语言中也一样）。

```typescript
let isDone: boolean = false
```

## 数字

和 JavaScript 一样，TypeScript 里的所有数字都是浮点数。 这些浮点数的类型是 number。 除了支持十进制和十六进制字面量，TypeScript 还支持 ECMAScript 2015中引入的二进制和八进制字面量。

```typescript
// 十进制
let DecimalLiteral: number = 16;
// 十六进制
let hexadecimalLiteral: number = 0x14;
// 二进制
let binaryLiteral: number = 0b10100;
// 八进制
let octalLiteral: number = 0o24;
```

## 字符串

JavaScript 程序的另一项基本操作是处理网页或服务器端的文本数据。 像其它语言里一样，我们使用 `string` 表示文本数据类型。 和 JavaScript 一样，可以使用双引号（`"`）或单引号（`'`）表示字符串。

```typescript
let name: string = 'yang'
name = 'le'
```

你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（ ```），并且以 `${ expr }` 这种形式嵌入表达式

```typescript
let firstName: string = 'yang';
let lastName: string = 'le';
let sentence: string = `Hello, my name is ${firstName} ${lastName}`;

```

也可以使用拼接字符串的形式。不过相对于模板字符串写法会比较繁琐。

## 数组

TypeScript 像 JavaScript 一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 `[]`，表示由此类型元素组成的一个数组：

```typescript
let list: number[] = [1, 2, 3]
```

第二种方式是使用数组泛型，`Array<元素类型>`：

```typescript
let list: Array<number> = [1, 2, 3]
```

## 元组 Tuple

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 `string` 和 `number` 类型的元组。

```typescript
let x: [string, number]
x = ['hello', 10] // OK
x = [10, 'hello'] // Error
```

当访问一个已知索引的元素，会得到正确的类型：

```typescript
console.log(x[0].substr(1)) // OK
console.log(x[1].substr(1)) // Error, 'number' 不存在 'substr' 方法
```

当访问一个越界的元素，会使用联合类型替代：

```typescript
x[3] = 'world' // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()) // OK, 'string' 和 'number' 都有 toString

x[6] = true // Error, 布尔不是(string | number)类型
```

联合类型是高级主题，我们会在以后的章节里讨论它。

**注意**：自从 TyeScript 3.1 版本之后，访问越界元素会报错，不应该再使用该特性。

