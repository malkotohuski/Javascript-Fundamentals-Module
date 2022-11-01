function inventory(arr) {

    let heroes = [];
    arr.forEach((el) => {
        let [name, level, items] = el.split(' / ');

        let currentHero = {
            name: name,
            level: +level,
            items: items,
        };
        heroes.push(currentHero);

    });
    let sortHeroes = heroes.sort((a, b) => {
        return a.level - b.level;
    });

    sortHeroes.forEach((heroes) => {
        console.log(`Hero: ${heroes.name}`);
        console.log(`level => ${heroes.level}`);
        console.log(`items => ${heroes.items}`);
    });
};

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);