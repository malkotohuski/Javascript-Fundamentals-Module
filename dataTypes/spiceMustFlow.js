function solve(yield) {

    let daysCounter = 0;
    let spiceCounter = 0;

    while (yield >= 100) {
        daysCounter++;
        spiceCounter += (yield - 26);
        yield-=10;
    }
        console.log(daysCounter);
    if(daysCounter !== 0){
        console.log(spiceCounter - 26);
    }else {
        console.log(spiceCounter);
    }
}

solve(111);