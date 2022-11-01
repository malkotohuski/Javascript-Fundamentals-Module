function factorialDivision(firstNum, secondNum) {
   

    function factorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        console.log((factorial(firstNum) / factorial(secondNum)).toFixed(2)); 
    }
}
factorialDivision(5, 2);