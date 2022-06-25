"use strict";


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieD = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = +prompt('На сколько оцените его?','');

      personalMovieD.movies[a] = b;
      personalMovieD.movies[c] = d;
console.log(personalMovieD);




if (5==9) {
     console.log('ok!');
}  else {
     console.log('Error.');
}

const num = 50;
     if (num < 49) {
          console.log('Error');
     }    else if (num > 100) {
          console.log('много');
     }    else {
               console.log('Ok!');
          }
     

          (num == 50 ) ? console.log('Ok!') : console.log('Error');

          const nume = 50;
          switch (nume) {
               case 49: 
               console.log('Wrong');
               break;
               case 100:
                    console.log('Wrong');
               case 50: 
               console.log('Yeh');
               break;
               default:
               console.log('Looser');
               break;
