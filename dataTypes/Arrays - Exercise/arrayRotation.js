function solve(array, rotations) {

    while (rotations > 0) {
        let element = array.shift();
        array.push(element);
        rotations--;
    }
    console.log(array.join(' '));
}

solve([51, 47, 32, 61, 21], 2);