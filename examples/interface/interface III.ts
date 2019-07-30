/**
 * 额外的属性检查
 */

interface Square {
    color: string,
    area: number
}

interface SquareConfig {
    color?: string,
    width?: number,
    // 修改方式二
    // [propName: string]: any
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

// error: Argument of type '{colour: string}' is not assignable to parameter of type 'SquareConfig'
// let mySquare = createSquare({colour: "blue"});

// 修改方式一
let mySquare = createSquare({colour: "blue"} as SquareConfig);

// 修改方式三
let squareOptions = {colour: "blue", width: 100};
let mySquare1 = createSquare(squareOptions);


/**
 * 函数类型
 */

interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > 1;
};