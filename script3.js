/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberofFilms;

function start() {
    numberofFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)) {
        numberofFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}
start();
const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    let i = 0;
    do {
        const a = prompt((i + 1) + ' Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a != '' && a != null && b != '' && b != null && a.length < 50) {
            i++;
            personalMovieDB.movies[a] = b;
        }
    } while (i < 2);

}
// rememberMyFilms();

function detectPersonLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотренно довольно мало фильмов')
    } else {
        if (personalMovieDB.count < 30) {
            alert('Вы класический зритель')
        } else { alert('Вы киноман!') }
    }

}
// detectPersonLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    let i = 0;
    do {
        personalMovieDB.genres[i] = prompt('Ваш любимый жанр под номером' + (i + 1) + '?', 'Комедия');
        i++;
    } while (i < 3);
}

writeYourGenres();

showMyDB();
// Код возьмите из предыдущего домашнего задания