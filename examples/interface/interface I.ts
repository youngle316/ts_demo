/**
 * 接口初识
 */

// function PrintLabel(labelObj: {label: string}){
//     console.log(labelObj.label)
// }
//
// let obj = {size: 10, label: "hello"};
//
// PrintLabel(obj);



interface PrintLabelValue {
    label: string
}

function PrintLabel(labelObj: PrintLabelValue){
    console.log(labelObj.label)
}

let obj = {size: 10, label: "hello"};

PrintLabel(obj);