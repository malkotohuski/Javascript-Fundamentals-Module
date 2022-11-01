function times(text) {

    let keyText = text.split(' ');
    let word = ''
    for (const el of keyText) {
        if (el.includes('#') && el.length > 1) {
            let flag = true;
            let wordLower = el.toLowerCase();

            for (let i = 1; i < wordLower.length; i++) {
                if (wordLower.charCodeAt(i) < 97 || wordLower.charCodeAt(i) > 122) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                console.log(el.slice(1));
            }
        }
    }
}
times('The symbol # is known #variously in English-speaking #regions as the #number sign');