function solve(numb) {

    let result = [];

    for(let el of numb){
        result.push(el);
    }
    while(result.length > 1){
        let temp = [];
        for(let i = 0; i < result.length -1; i ++){
            temp[i] = result[i] + result[i + 1];
        }
        result = temp;
    }

   console.log(result.join());
}

solve([2, 10, 3]);