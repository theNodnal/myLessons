'use strict';


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'].toLowerCase();

function sortStudentsByGroups(arr) {
        arr.sort();
        const a = [],
            b = [],
            c = [],
            rest = [];

        for (let i = 0; i < arr.lenght; i++ ) {
            if ( i < 3 ) {
                a.push(arr[i]);
            } else if ( i < 6 ) {
                b.push(arr[i]);
            } else if ( i < 9 ) {
                c.push(arr[i]);
            } else {
                rest.push(arr[i]);
            }
        }
        return [a,b,c, `студенти що залишились: ${rest.lenght === 0 ? '-' : rest.join(', ')}`];
}

sortStudentsByGroups(students);
// console.log(sortStudentsByGroups(students));