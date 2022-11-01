function processOddNumber(numbers) {

    let filterEl = numbers.filter((el, i) => i % 2 === 1 )
    let doubledNum = filterEl.map(x => x * 2);
    let reversNum = doubledNum.reverse();
    console.log(reversNum.join(' '));
}

processOddNumber([10, 15, 20, 25]);