function solve(nums, criteria) {
    let count = 0;
    let el = criteria[2];

    let arr = nums.slice(0, criteria[0]);
    // here
    arr = arr.slice(criteria[1], arr.length);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            count++;
        }
    }
for(let i = 0 ; i < el.length; i++){}
if (){

}

    console.log(`Number ${el} occurs ${count} times.`)

};

solve([7, 1, 5, 8, 2, 7],
    [3, 1, 5]);