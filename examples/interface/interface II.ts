/**
 * 可选属性
 */


interface Square {
    color: string,
    area: number
}

interface SquareConfig {
    color?: string,
    width?: number
}

function createSquare(config: SquareConfig): Square {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "blue"});
console.log(mySquare);


/**
 * 只读属性
 */

interface Point {
    readonly x: number,
    readonly y: number
}


let p1: Point = {x: 10, y: 20};

// p1.x = 33; error // Cannot assign to 'x' because it is a read-only property


let a: number[] = [1, 2, 3, 4];
let arr: ReadonlyArray<number> = a;
// arr[0] = 7; error // index signature in type 'readonly number[]' only permits reading
// arr.push(1); error
// arr.length = 30;

// a = arr; error 类型不匹配
a = arr  as number[];