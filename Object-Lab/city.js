function cityParser(cityInfo) {

    for (const key of Object.keys(cityInfo)) {
        console.log(`${key} -> ${cityInfo[key]}`);
    }
}

cityParser({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})