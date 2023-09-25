
const numberOfFilms = +prompt("How many films have you watched?");



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert("Very few films");
} else if (personalMovieDB.count < 30) {
    alert("Classic");
} else if (personalMovieDB.count > 30) {
    alert("Fan!");
} else {
    alert("error!");
}

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



console.log(personalMovieDB);