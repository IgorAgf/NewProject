'use strict'

const personalMovieDB = {
    numberofFilms: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start() {
        numberofFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)) {
            numberofFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    rememberMyFilms() {
        let i = 0;
        do {
            const a = prompt((i + 1) + ' Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            if (a != '' && a != null && b != '' && b != null && a.length < 50) {
                i++;
                personalMovieDB.movies[a] = b;
            }
        } while (i < 2);
    },
    detectPersonLevel() {
        if (personalMovieDB.count < 10) {
            alert('Просмотренно довольно мало фильмов')
        } else {
            if (personalMovieDB.count < 30) {
                alert('Вы класический зритель')
            } else { alert('Вы киноман!') }
        }
    },
    showMyDB() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres(a) {
        let i = 0;
        do {
            a[i] = +prompt('Ваш любимый жанр под номером' + (i + 1) + '?', '');
            if (a[i] != '' || a[i] != null) {
                i++;
            }

        } while (i < 3);
    },
    toggleVisibleMyDB(logic) {
        if (personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
}
personalMovieDB.writeYourGenres(personalMovieDB.genres);