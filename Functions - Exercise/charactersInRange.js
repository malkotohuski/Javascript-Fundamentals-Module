function charactersInRange(startNum, endNum) {

    let firstChar = Math.min(startNum.charCodeAt(0), endNum.charCodeAt(0));
    let endChar = Math.max(startNum.charCodeAt(0), endNum.charCodeAt(0));
    let charToSum = [];

    for (let current = firstChar + 1; current < endChar; current++) {
        let allChar = String.fromCharCode(current)
        charToSum.push(allChar);
    }
    console.log(charToSum.join(' '));
}

charactersInRange('a', 'd');