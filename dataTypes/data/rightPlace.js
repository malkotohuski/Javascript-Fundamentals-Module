function solve(arg1 , char, arg2) {

    let res = "";

    for (let i = 0; i < arg1.length; i++){
        let current = arg1[i];
        if(current === "_"){
            res += char;

        }else {
            res += current
        }
    }
    if(res === arg2){
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

solve('Str_ng', 'I', 'Strong');