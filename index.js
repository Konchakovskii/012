const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("How many films have you watched?");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you watched?");

            }
        },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const x = prompt("What is your latest movie watched?");
            const y = prompt("How do you rate it?");
            if (x != null && y != null && x != '' && y != '' && x.length < 50) {
                personalMovieDB.movies[x] = y;
                console.log('Done');
            } else {
                console.log ("error");
                i--;
            }
            
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Very few films");
        } else if (personalMovieDB.count < 30) {
            alert("Classic");
        } else if (personalMovieDB.count > 30) {
            alert("Fan!");
        } else {
            alert("error!");
        }
    },
    showMyDB: function (hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let z = prompt('Введите любимые жанры через запятую').toLowerCase();
            if (z != null && z != '') {
                personalMovieDB.genres = z.split(', ');
                personalMovieDB.genres.sort();
            } else {
                console.log('Wrong data');
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i+1} - это ${item}`);
        })
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
  
        }

};

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const x = prompt("What is your latest movie watched?");
//         const y = prompt("How do you rate it?");
//         if (x != null && y != null && x != '' && y != '' && x.length < 50) {
//             personalMovieDB.movies[x] = y;
//             console.log('Done');
//         } else {
//             console.log ("error");
//             i--;
//         }
        
//     }
// }


// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         alert("Very few films");
//     } else if (personalMovieDB.count < 30) {
//         alert("Classic");
//     } else if (personalMovieDB.count > 30) {
//         alert("Fan!");
//     } else {
//         alert("error!");
//     }
// }


// function showMyDB(hidden) {
//     if(!hidden) {
//         console.log(personalMovieDB);
//     }
// }


// function writeYourGenres() {
//     for (let i = 0; i < 3; i++) {
//         personalMovieDB.genres[i] = prompt(`Your favourite genre number ${i+1}`);
//     }
//     console.log(personalMovieDB);
// }


// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();


// console.log(personalMovieDB);

