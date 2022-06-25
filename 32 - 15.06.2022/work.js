'use strict';


const options = {
    name: 'test',
    with: 1024,
    height: 1024,
    color: {
        border: 'black',
        bd: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};
options.makeTest();

const {border, bg} = options.color;  // деструктиризація

console.log(Object.keys(options).length);

for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(` Властивості ${i} має значення ${options[key][i]} `);
        }
    } else {
        console.log(` Властивості ${key} має значення ${options[key]} `);
    }
}