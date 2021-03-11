function showProperties(obj) {
    for (let i in obj) {
        if (typeof(obj[i]) === 'number') {
            continue;
        }
        else {
            console.log(i, obj[i]);
        }
    }
}

const movies = {
    title: "Akash",
    releaseYear: 2022,
    rating: 5.0,
    director: "Singh"
};
showProperties(movies);