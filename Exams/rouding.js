function solve(number, precisoin) {

    if ( precisoin > 15){
        precisoin = 15;
    }

    let roundNumber = number.toFixed(precisoin);
    console.log(parseFloat(roundNumber));    
    
}

solve(10.5, 3);