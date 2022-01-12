'use strict'
let numberofFilms = prompt('Сколько фильмов Вы уже посмотрели?', 0);
let personalMovieDB = {
    count: numberofFilms,
    movies: '',
    actors: '',
    genres: new Array(),
    privat: false
};

console.log(personalMovieDB);