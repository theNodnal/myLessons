'use strict';


const usdKurs = 28;
const eurKurs = 32;
const discount = 0.9;

function convert(amount, kurs) {
    // console.log(kurs * amount);
    return kurs * amount;
}

function promotion(result) {
    console.log(result * discount);
}

// convert(10, usdKurs);
// convert(10, eurKurs);


const res = convert(1000, usdKurs);
promotion(res);


function test () {
    for (let i=0; i<6; i++) {
        console.log(i);
        if (i===5) return
    }
    console.log('Hife');
}
test();