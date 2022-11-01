function phone(data) {

    let pattern = /\+359([ |-])2\1[0-9]{3}\1[0-9]{4}/g
    let phoneNumber = data[0];
    let match = pattern.exec(phoneNumber);
    let res = [];

    while (match !== null) {
        res.push(match[0]);

        match = pattern.exec(phoneNumber);
    }

    console.log(res.join(', '));

}

phone(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222,+359-2-222-222, +359-2-222-22222 +359-2-222-2222']);