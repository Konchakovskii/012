
const numberOfFilms = +prompt("How many films have you watched?");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("What is your latest movie watched?");
    b = prompt("How do you rate it?");
    c = prompt("What is your latest movie watched?");
    d = prompt("How do you rate it?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);