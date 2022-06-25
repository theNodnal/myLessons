'use strict';


let num = 20;
function showMassage(text) {
    console.log(text);
    const num = 5;    
    console.log(num);
}
showMassage('Hello world');
console.log(num);


function calc(a, b, c) {
    return (a + b );
}

console.log(calc(1, 1, 1));
console.log(calc(2, 2, 2));


function rat() {
    let num = 777;

    return num;
}
let anotherNum = rat();
console.log(anotherNum);