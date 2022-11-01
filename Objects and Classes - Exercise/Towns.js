function towns(input) {

    let currentTown = {};

    for (let city of input) {

        let cityElement = city.split(' | ')
        let townName = cityElement[0];
        let townLatitude = Number(cityElement[1]);
        let townLongitude = Number(cityElement[2]);

        currentTown.town = townName;
        currentTown.latitude = townLatitude.toFixed(2);
        currentTown.longitude = townLongitude.toFixed(2);

        console.log(currentTown);

    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);