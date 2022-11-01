function times(number) {
    let matrix = [];
    for (let i = 0; i < number; i++) {
        let row = [];
        for (j = 0; j < number; j++) {
            row.push(number)
        }
        matrix.push(row.join(' '));
    }
    console.log(matrix.join('\n'));
}
times(3);