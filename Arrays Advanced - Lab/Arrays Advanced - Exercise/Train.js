function train(input) {

    let vagons = input
        .shift()
        .split(' ')
        .map(Number);

    let maxCapacity = input.shift()

    for (let i = 0; i < input.length; i++) {
        let arrNew = input[i].split(" ");

        if (arrNew[0] === "Add") {
            vagons.push(Number(arrNew[1]));
        } else {

            for (let j = 0; j < vagons.length; j++) {
                if (Number(arrNew[0]) + vagons[j] <= maxCapacity){
                vagons[j] += Number(arrNew[0]);
                break;
                }
            }
        }
    }
    console.log(vagons.join(" "));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])