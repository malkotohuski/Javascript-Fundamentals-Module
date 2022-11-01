function firstLastKNumbers(numbers) {

    let k = numbers.shift();

    let firstK = numbers.slice(0, k);
    let lastK = numbers.slice(-k);

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}

firstLastKNumbers([2, 7, 8, 9]);