'use strict'
const numberofFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let a = '';
let b = '';
for (let i = 0; i < 2; i++) {
    do {
        a = prompt((i + 1) + ' Один из последних просмотренных фильмов?', '');
        if (a == null) { a = ''; }
        if (a.length >= 50) { a = '' }
    } while (a == '');
    do {
        b = prompt('На сколько оцените его?', '');
        if (b == null) { b = ''; }
    } while (b == '');
    personalMovieDB.movies[a] = b;
}
if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов')
} else {
    if (personalMovieDB.count < 30) {
        alert('Вы класический зритель')
    } else { alert('Вы киноман!') }
}


console.log(personalMovieDB);