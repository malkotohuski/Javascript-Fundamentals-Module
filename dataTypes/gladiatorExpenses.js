function solve(lostBattle, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let totalSum = 0;
    let lostFightsCounter = 0;
    let shieldCounter = 0;

    for (let i = 1; i <= lostBattle; i++) {

        lostFightsCounter++;

        if (lostFightsCounter % 2 === 0) {
            totalSum += helmetPrice;
        }
        if (lostFightsCounter % 3 === 0) {
            totalSum += swordPrice;
        }
        if (lostFightsCounter % 6 === 0) {
            totalSum += shieldPrice;
            shieldCounter++;
            
            if (shieldCounter % 2 === 0) {
                totalSum += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5)