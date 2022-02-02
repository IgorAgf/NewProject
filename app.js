'use strict'
const numberofFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// let a = '';
// let b = '';
// for (let i = 0; i < 2; i++) {
//     do {
//         a = prompt((i + 1) + ' Один из последних просмотренных фильмов?', '');
//         if (a == null) { a = ''; }
//         if (a.length >= 50) { a = '' }
//     } while (a == '');
//     do {
//         b = prompt('На сколько оцените его?', '');
//         if (b == null) { b = ''; }
//     } while (b == '');
//     personalMovieDB.movies[a] = b;
// }

// 2 способ
// let i = 0;
// while (i < 2) {
//     const a = prompt((i + 1) + ' Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//     if (a != '' && a != null && b != '' && b != null && a.length < 50) {
//         i++;
//     }

// 3 Способ
let i = 0;
do {
    const a = prompt((i + 1) + ' Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    if (a != '' && a != null && b != '' && b != null && a.length < 50) {
        i++;
    }
} while (i < 2);

if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов')
} else {
    if (personalMovieDB.count < 30) {
        alert('Вы класический зритель')
    } else { alert('Вы киноман!') }
}

console.log(personalMovieDB);