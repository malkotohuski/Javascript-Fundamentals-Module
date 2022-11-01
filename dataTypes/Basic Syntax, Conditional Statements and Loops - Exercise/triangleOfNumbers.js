function solve(num) {

    for (let row = 1; row <= num; row++) {

        let line = '';

        for (let col = 1; col <= row; col++) {
            line+=`${row} `

        }
        console.log(line);
    }

}

solve(5)