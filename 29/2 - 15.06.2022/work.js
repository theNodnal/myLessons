'use strict';

// // Место для первой задачи
// function calculateVolumeAndArea(length) {
//     length = prompt('Введіль довжину ребра куба', '');
//     length = +length;
//     while ( typeof(length) !== 'number'|| length == ''|| length == null || length < 0 || isNaN(length) ) {
//         length = prompt ( 'виникла помилка, введіть довжину');
//     //     if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//     // return "виникла помилка, введіть довжину";
//     }

//     let volume = 0;
//     let sqeare = 0;

//     volume = length * length * length;
//     sqeare = 6 * (length * length);

//     document.writeln(`Обєм куба: ${volume}, площа всіх поверхностей куба: ${sqeare}` );
//     return `Обєм куба: ${volume}, площа всіх поверхностей куба: ${sqeare}` ;
  
// }
// calculateVolumeAndArea(length);
// calculateVolumeAndArea(5);
// // calculateVolumeAndArea(15);
// // calculateVolumeAndArea(15.5);
// // calculateVolumeAndArea('15');
// // calculateVolumeAndArea(-15);



// Место для второй задачи
function getCoupeNumber() {
    
    const seatNumber = +prompt('введіть номер свого місця', '');
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber) ) {
        return 'помилка, перевірте правильність вводу';
    }
    if (seatNumber === 0 || seatNumber > 36 ) {
        return 'таких місць у вагоні немає';
    }
    
    let i;
    for (i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }
}
// getCoupeNumber(33);

document.write('ваше купе №', getCoupeNumber());
