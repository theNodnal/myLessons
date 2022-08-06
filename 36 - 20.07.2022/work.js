'use strict';

const solder = {
    helth: 500,
    armor: 150,
    sayH: function() {
        console.log('Hello');
    }
};

const man = Object.create(solder);
// const man = {
//     helth: 50
// };

// Object.setPrototypeOf(man, solder);     не самий старий метод
            // man.__proto__ = solder;     застарілий метод

man.sayH();
console.log(man.armor);
