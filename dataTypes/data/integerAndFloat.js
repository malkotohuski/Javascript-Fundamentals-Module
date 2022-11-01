function solve(firstNum, secondNum, lastNum) {

    let totalSum = firstNum + secondNum + lastNum;
    let sumToString = String(totalSum);
    let isFloat = false;
    for (let i = 0; i < sumToString.length; i++){
        if (sumToString[i] === ".") {
            isFloat = true;
        }
}

console.log(`${totalSum} - ${isFloat ? "Float" : "Integer"}`);
}

solve(9, 100, 1.1);