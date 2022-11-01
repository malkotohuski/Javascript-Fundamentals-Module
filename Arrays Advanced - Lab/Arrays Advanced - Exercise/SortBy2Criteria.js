function solve(arr) {

    let newArr = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    })
    console.log(newArr.join('\n'));
}

solve(['alpha', 'beta', 'gamma'])