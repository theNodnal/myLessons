'use strict';


/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/




const personalMovieD = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieD.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieD.count == '' || personalMovieD.count == null || isNaN(personalMovieD.count)) {
            personalMovieD.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieD.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    deteckPersonalLevel: function() {
        if (personalMovieD.count <= 10) {
            console.log('маловато');
        } else if (personalMovieD.count > 10 && personalMovieD.count <= 30) {
            console.log('середній чел');
        } else if (personalMovieD.count > 30) {
            console.log('ти кіноман');
        } else {
            console.log('Error');
        }
    },

    showMyDB: function(hiddn) {
        if (!hiddn) {
            console.log(personalMovieD);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieD.privat) {
            personalMovieD.privat = false;
        } else {
            personalMovieD.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i}`);
            
            if (genres === '' || genres == null) {
                console.log('Ви ввели некорктні данні');
                i--;
            } else {
                personalMovieD.genres[i - 1] = genres;

               // let genres = prompt(`Введіть Ваш любимый жанр через кому ${i}`).toLowerCase();            \\ це коротший варіант виконання
            
                // if (genres === '' || genres == null) {
                //     console.log('Ви ввели некорктні данні');
                //     i--;
                // } else {
                //     personalMovieD.genres = genres.split(', ');
                    //personalMovieD.genres.sort();

            }
        }

        personalMovieD.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i + 1} це ${item}`);
        } );

    }
};
