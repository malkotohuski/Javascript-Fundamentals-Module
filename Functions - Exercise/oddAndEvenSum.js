function oddAndEvenSum(number) {

    let oddSum = 0;
    let evenSum = 0;
    let numberToString = String(number);
    for (const el of numberToString) {
        let num = Number(el);
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);