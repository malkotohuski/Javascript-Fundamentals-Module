function palindromeIntegers(number) {

    for (const el of number) {
        let current = String(el);
        let reversed = String(el).split('').reverse().join('')

        if (current === reversed) {
            console.log(`true`);
        } else {
            console.log(`false`);
        }
    }
}
palindromeIntegers([123, 323, 421, 121]);