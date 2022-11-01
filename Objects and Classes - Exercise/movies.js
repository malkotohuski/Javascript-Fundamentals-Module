function movies(arr) {

    let movies = [];

    arr.forEach((el) => {
        if (el.includes('addMovie ')) {
            let movie = el.replace('addMovie ', '');
            movies.push({ name: movie });
        } else if (el.includes('directedBy')) {
            let movieInfo = el.split(' directedBy ');
            let name = movieInfo[0];
            let director = movieInfo[1];
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            });
        } else if (el.includes('onDate')) {
            let [name, date] = el.split(' onDate ');
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date;
                }
            });
        }
    });
    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);