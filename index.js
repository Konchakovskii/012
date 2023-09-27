
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films have you watched?");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you watched?");

    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
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

// rememberMyFilms();

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

// detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Your favourite genre number ${i+1}`);
    }
    console.log(personalMovieDB);
}

writeYourGenres();
console.log(personalMovieDB);