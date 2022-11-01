function solve(n) {
    let counter = Number(n);
    let sum = 0;
    let odd = 1;
 
 
    for (let i = 1; i <= counter; i++) {
        sum += odd;
        console.log(odd);
        odd += 2
    }
    console.log(`Sum: ${sum}`)
}


solve(5)