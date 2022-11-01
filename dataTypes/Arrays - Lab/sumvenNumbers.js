function solve(numbers) {

    for(let i =0;i < numbers.length; i++){
        numbers[i]=Number(numbers[i]);
    }
    let sum = 0;
    for(let num of numbers){
        if(num%2 === 0){
            sum+=num
        }
    }
    console.log(sum);
}

solve(['1', '2', '3', '4', '5', '6']);56