'use strict';


// const someString = prompt('This is some strange string', );

// function reverse(str) {
//     if (typeof (str) != 'string') {
//         return 'помилка';
//     }

//     let newStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;
// }
// let a = reverse(someString);
// document.writeln(a);



// second
const currency = prompt('Введіть вотрібну валюту', '');
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'CNY', 'ZLT'];

function availableCurr(arr, missigCurr, avalibleCurrency) {
            
        if (arr.length === 0) {
            return 'немає доступної валюти';
        }
     
        let index = arr.findIndex(elemen => elemen === missigCurr);
        if (index > -1) {
            arr.splice(index, 1);
        }
               
        index = arr.findIndex(elemen => elemen === avalibleCurrency);
        return index > -1 ? 'так валюта є в наявності' : 'такої валюти немає';
}

const result = availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY', currency);


document.writeln(result);
console.log(result);

