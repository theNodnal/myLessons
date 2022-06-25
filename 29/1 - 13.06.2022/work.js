// 'use strict';

// // Место для первой задачи
// function getTimeFromMinutes(hourMinutes) {
//     // hourMinutes = +prompt('введіть хвилини, а ми перетворимо їх у години', '');
//     while (typeof (hourMinutes) !== 'number' || hourMinutes <= 0 || !Number.isInteger(hourMinutes) || hourMinutes > 721) {
//         hourMinutes = +prompt('введіть хвилини, а ми перетворимо їх у години', '');
//     }

//     const hours = Math.floor(hourMinutes / 60);
//     const minutes = hourMinutes % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 1:
//             hoursStr = 'година';
//             break;
//         case 2, 3, 4:
//             hoursStr = 'години';
//             break;
//         default:
//             hoursStr = 'годин';

//     }

//     return ` це ${hours} ${hoursStr} і ${minutes} хвилин `;

// }
// getTimeFromMinutes(240);
// document.writeln(getTimeFromMinutes());






// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    a = +prompt('введіть число ще 4 рази');
    b = +prompt('введіть число ще 3 рази');
    c = +prompt('введіть число ще 2 рази');
    d = +prompt('введіть число ще 1 рази');
    if (typeof (a) !== 'number' ||
        typeof (b) !== 'number' ||
        typeof (c) !== 'number' ||
        typeof (d) !== 'number') {
        return 0;
    }
    else {
        return Math.max(a, b, c, d);
    }
}

// findMaxNumber(1, 5, 6.6, 10.5);
document.writeln(findMaxNumber());