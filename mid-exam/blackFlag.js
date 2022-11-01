function blackFlag(data) {

    let days = Number(data.shift());
    let reached = Number(data.shift());
    let target = Number(data.shift())
    let sum = 0;


    for (let i = 1; i <= days; i++) {
        sum += reached;
        if (i % 3 === 0) {
            sum += reached * 0.5;
        }
        if (i % 5 === 0) {
            sum -= sum * 0.3;
        }
    }

    if (sum >= target) {
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
    } else {
        let percentage = sum * 100 / target
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["5", "40", "100"])
blackFlag(["10", "20", "380"])