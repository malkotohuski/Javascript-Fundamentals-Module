function solve(data) {

    let pattern = /\+359([|-])2\1[0-9]{3}\1[0-9]{4}/
    let phoneNumbersList = data[0];

    let match = pattern.exec(phoneNumbersList);
    while (match !== null) {
        console.log(match);
        match = pattern.exec(phoneNumbersList);
        
    }
}

solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222,+359-2-222-222, +359-2-222-22222 +359-2-222-2222'])