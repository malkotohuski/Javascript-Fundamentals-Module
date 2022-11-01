function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        let evenSum = 0;
        let oddSum = 0;
        let sum = 0;
        for (let element of arr) {
            if (element % 2 === 0) {
                evenSum += element;
            } else {
                oddSum += element;
            } 
        }
        sum = evenSum - oddSum;
        console.log(sum);
        break;
    
    }
   
}
solve([1, 2, 3, 4, 5, 6]);
