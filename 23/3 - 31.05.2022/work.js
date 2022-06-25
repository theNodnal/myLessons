"use strict";


function firstTask() {
    // Пишем решение вот тут

    let num = 5;

    while (num <= 10) {
        console.log(num);
        num++;
    }
}

function secondTask() {
    // Пишем решение вот тут

    for (let i = 20; i >= 10; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }
}

function thirdTask() {
    // Пишем решение вот тут

    for (let pear = 2; pear <= 10; pear++) {
        if (pear % 2 === 0) {
            console.log(pear);
        }
    }
}

function fourthTask() {
    // Пишем решение вот тут

    let a = 2;
    while (a <= 16) {
        if (a % 2 !== 0) {
            // a++;
            // continue;
      
            console.log(a);
        }
        a++;
    }
}

function fifthTask() {
    const arrayOfNumbers = [];
    // Пишем решение вот тут
    for (let n = 5; n <= 10; n++) {
        arrayOfNumbers[n - 5] = n;
    }

    console.log(arrayOfNumbers);



    // Не трогаем
    return arrayOfNumbers;
}