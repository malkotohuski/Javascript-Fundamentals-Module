function stringSubstring(key, text) {

    let elemnetText = text.split(' ')

    for (const el of elemnetText) {
        if (el.toLowerCase() === key.toLowerCase()) {
            console.log(key);
            return
        }
    }
    console.log(`${key} not found!`);
}


stringSubstring('javascript',
    'JavaScript is the best programming language');