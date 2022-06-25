'use strict';


const arr = [512, 22, 23, 422, 52];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(` ${i}: ${item} всередині масиву ${arr} `);
// });

// // arr.pop();
// arr.push(10);

// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

const str = prompt('', '');
const products = str.split(", ");
products.sort();
console.log(products.join('; '));