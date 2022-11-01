function solve(first, end) {

    let sum = 0;
    let line = '';

    for (let i = first; i <= end; i++) {

        sum += i;

        if (i === end) {
            line += `${i}`;
        } else {
            line += `${i} `;
        }
    }
    console.log(line);
    console.log(`Sum: ${sum}`);

}

solve(5, 10);