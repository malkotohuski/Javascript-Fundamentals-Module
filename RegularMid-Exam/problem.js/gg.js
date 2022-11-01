function theGames(input) {
    let daysOfAdventures = input.shift();
    let countOfPlayers = input.shift();
    let groupEnergy = input.shift();
    let waterPerDayForOnePerson = input.shift();
    let foodPerDayForOnePerson = input.shift();

    let totalWater = daysOfAdventures * countOfPlayers * waterPerDayForOnePerson;
    let totalFood = daysOfAdventures * countOfPlayers * foodPerDayForOnePerson;

    for(let i = 0; i <= daysOfAdventures; i++){
        let energyLoss = input[i]
       
    }

}

theGames(["10", "7", "5035.5", "11.3", "7.2", "942.3", "500.57", "520.68", "540.87"])