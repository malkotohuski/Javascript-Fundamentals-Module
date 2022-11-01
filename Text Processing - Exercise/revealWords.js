function words(words, text) {

    let keyWord = words.split(', ');
    let keyText = text.split(' ');
    let result = '';

    for (const element of keyWord) {
        for (const word of keyText) {
            if (word.includes('*') && word.length === element.length) {
                text = text.replace(word, element);
            }
        }
    }
    console.log(text);
}

words('great',
    'softuni is ***** place for learning new programming languages');