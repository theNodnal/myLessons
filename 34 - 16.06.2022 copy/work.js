'use strict';


function copy(mainObj) {
    let objCopy = {};
    
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}


const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};


const newNumbers = copy(numbers);

newNumbers.a = 10;

const add = {
    d: 17,
    e: 22
};

const clone = Object.assign({}, add);
clone.d = 20;

// console.log(clone);
// console.log(add);
// console.log(numbers);
const oldArry = ['a', 'b', 'c'];
//const newArry = oldArry;   //   ссилка на масив
const newArry = oldArry.slice();   //   копія масиву
newArry[1] = "bla-bla-bla";
console.log(oldArry);
console.log(newArry);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);          // копія обєкту
}
const num = [2, 5, 8];
log(...num);


