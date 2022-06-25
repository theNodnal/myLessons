'use strict';


// function firstNameLog(elementParametr) {
//     const firstNameId = 'first-name';
//     const firstNameEl = document.getElementById(firstNameId);
//     console.log(firstNameEl.velues);
// }


// function lastNameLog() {
//     const lastNameId = 'last-name';
//     const lastNameEl = document.getElementById(lastNameId);
//     console.log(lastNameEl.velues);
// }

function logValue(id) {
    const el = document.getElementById(id);
    console.log(el.value);
}

function getValue(id) {
    const el = document.getElementById(id);
   return el.value;
}

const firstNameId = 'first-name';
const lastNameId = 'last-name';

logValue(firstNameId);
logValue(firstNameId);
logValue(firstNameId);

logValue(lastNameId);
logValue(lastNameId);
logValue(lastNameId);

const value = getValue(firstNameId);

window.alert(value);