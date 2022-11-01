function solve(numberOne, operator, secoundNum) {


    switch (operator) {
        case '+':
            console.log(`${(numberOne + secoundNum).toFixed(2)}`); break;
        case '-':
            console.log(`${(numberOne - secoundNum).toFixed(2)}`); break;
        case '/':
            console.log(`${(numberOne / secoundNum).toFixed(2)}`); break;
        case '*':
            console.log(`${(numberOne * secoundNum).toFixed(2)}`); break;
    }

}

solve('15', '*', '44')