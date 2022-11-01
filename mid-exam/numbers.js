function numbers(numbers) {

    let arrOfNumbers = numbers.split(' ').map(Number);
    let sum = 0;
    for (const el of arrOfNumbers) {
        sum += el;
    }
    let avgNumbers = sum / arrOfNumbers.length;

    arrOfNumbers = arrOfNumbers
        .filter(el => el > avgNumbers)
        .sort((x, y) => y - x)
        .slice(0, 5);

    return arrOfNumbers.length > 0 ? arrOfNumbers.join(' ') : 'No';

}

console.log(numbers('10 20 30 40 50'));
console.log(numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51'));