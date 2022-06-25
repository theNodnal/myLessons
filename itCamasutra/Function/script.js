'use strict';


function alertValues(elementParametr) {
    console.log(elementParametr.velues);
    console.log(elementParametr.className);
}



const firstNameId = 'first-name';
const firstNameEl = document.getElementById(firstNameId);
alertValues(firstNameEl);

const lastNameId = 'last-name';
const lastNameEl = document.getElementById(lastNameId);
alertValues(lastNameEl);

const addressId = 'address';
const addressEl = document.getElementById(addressId);
alertValues(addressEl);

const citiesId = 'cities';
const citiesEl = document.getElementById(citiesId);
alertValues(citiesEl);

const hobbiesId = 'hobies';
const hobbiesEl = document.getElementById(hobbiesId);
alertValues(hobbiesEl);
