'use strict';


const family = ['Sergiy', 'Vita', 'Glib', 'Ilya'];

function showFamily(arr) {
    let str = '';
    arr.length === 0 ? str = 'немає сімї' : str = "сімя складається з:";
    arr.forEach(member => {
        str += ` ${member} `;
    });
    return str;
}
showFamily(family);


// second
const favoriteCities = ['liSaBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}
standardizeStrings(favoriteCities);