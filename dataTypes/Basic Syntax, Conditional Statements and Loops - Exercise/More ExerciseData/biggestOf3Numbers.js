function solve(numA, numB, numC) {

    if (numA >= numB && numA >= numC) {
        console.log(numA);
    } else if (numB >= numA && numB >= numC) {
        console.log(numB);
    } else if (numC >= numA && numC >= numB) {
        console.log(numC);
    }

}

solve(5, -2, 7);