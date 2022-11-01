function theGames(input) {
    let days = input.shift();
    let players = input.shift();
    let energy = input.shift();
    let water = input.shift();
    let food = input.shift();

    let energyLoss = input.slice()

    let totalWater = days * players * water;
    let totalFood = days * players * food;
    let haveEnergy = true;

    for (let i = 1; i <= days; i++) {
       energyLoss = input[i-1];
        

        if (energy - energyLoss <= 0) {

            haveEnergy = false;
            break;
        } else {
            energy -= energyLoss;
        }
        if (i % 2 === 0 && i !== 0) {
            energy += 5 / 100 * energy;
            totalWater -= 30 / 100 * totalWater;
        }
        if (i % 3 === 0 && i !== 0) {
            totalFood -= totalFood / players;
            energy += 10 / 100 * energy;
        }
    }
    if (haveEnergy === true) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`)
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`)
    }
}

theGames(["10", "7", "5035.5", "11.3", "7.2", "942.3", "500,57", "520.68", "540.87","505.99","630.3","784.20","321.21","456.8","330"])