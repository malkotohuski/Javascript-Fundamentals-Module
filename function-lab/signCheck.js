function signCheck(numOne, numTwo, numThree) {

    let sum = numOne * numTwo * numThree;
    let total = String(sum)
    if (total < 0) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}
signCheck(5, 12, -15);