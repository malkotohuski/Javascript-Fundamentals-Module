function solve(x, y, operator) {

    let res;

    switch(operator){
        case 'multiply': res = (x, y) => x * y ; break
        case 'divide': res = (x, y) => x / y ; break
        case 'add': res = (x, y) => x + y ; break
        case 'subtract': res = (x, y) => x - y ; break
    }
    console.log(res(x, y));
    
}

solve(5, 5, 'add');