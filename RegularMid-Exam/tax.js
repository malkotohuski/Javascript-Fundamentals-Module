function taxCalcolator(arr) {

    let type = arr[0].split('>>');
    let taxesGathering = 0;
    let taxes = 0;

    for (let index = 0; index < type.length; index++) {
        let distancse = type[index].split(" ");
        let typeCar = distancse[0];
        let carDrived = Number(distancse[1]);
        let moving = Number(distancse[2]);

        if (typeCar === 'family') {
            let km =Math.floor(moving / 3000);
            taxes = (km * 12) + (50 - (carDrived * 5));
            taxesGathering += taxes;
            console.log(`A ${typeCar} car will pay ${taxes.toFixed(2)} euros in taxes.`);
        } else if (typeCar === 'heavyDuty') {
            let km =Math.floor(moving / 9000);
            taxes = km * 14 + (80 - (carDrived * 8));
            taxesGathering += taxes;
            console.log(`A ${typeCar} car will pay ${taxes.toFixed(2)} euros in taxes.`);
        } else if (typeCar === 'sports') {
            let km =Math.floor(moving / 2000);
            taxes = km * 18 + (100 - (carDrived * 9));
            taxesGathering += taxes;
            console.log(`A ${typeCar} car will pay ${taxes.toFixed(2)} euros in taxes.`);
        } else {
            console.log('Invalid car type.');
        }

    }
    console.log(`The National Revenue Agency will collect ${taxesGathering.toFixed(2)} euros in taxes.`);
}


taxCalcolator((['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']));
