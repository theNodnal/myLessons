'use strict';


// Boolean
// 0, '', null, undefined, NaN;   -  це все фолс  fals

let switcher = null;
if (switcher) {
    console.log('Working...');   // так не працює, повертає fals
}

let switcher = null;
switcher = 1;
if (switcher) {
    console.log('Working...');   // так працює, 1 - це true
}


// Number
console.log(typeof(Number('5')));
console.log(typeof(+ '5'));
console.log(typeof(parseInt("15px", 5)));

let answer = +prompt('Hello', '');


// String
console.log(typeof(String(null)));
console.log(typeof(String(5)));
console.log(typeof(5 + ''));
console.log(typeof(null + ''));

const num = 5;
console.log("https://facebook.com/catalog/" + num);

const fontSize = 25 + 'px';
