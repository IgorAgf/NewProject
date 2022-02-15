'use strict'

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    detectPersonLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотренно довольно мало фильмов')
        } else {
            if (personalMovieDB.count < 30) {
                alert('Вы класический зритель')
            } else { alert('Вы киноман!') }
        }
    },
    showMyDB: function(hiden) {
        if (hiden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(logic) {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        // for (let i = 1; i <= 3; i++) {
        //     let genre = prompt('Ваш любимый жанр под номером ' + i + ' ?', '');
        //     if (genre == '' || genre == null) {
        //         console.log('Вы ввели некоректные данные');
        //         i--
        //     } else { personalMovieDB.genres[i - 1] = genre }

        //     personalMovieDB.genres.forEach((item, i) => {
        //         console.log(`Любимый жанр ${i+1} - это ${item} `);
        //     });
        // }
        // 2 способ
        for (let i = 1; i < 2; i++) {
            let genres = prompt('Введите любимые жанры через запетую').toLowerCase();
            if (genres === '' || genres == null) {
                console.log('Вы ввели некоректные данные');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
            }
            personalMovieDB.genres.sort();
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i+1} - это ${item} `);
            });

        }
    }
};