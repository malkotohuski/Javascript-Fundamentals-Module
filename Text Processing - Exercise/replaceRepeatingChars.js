function replaceRepeatingChars(input) {


    let index = 1;
    let end = input.length;
    let word = input[0];

    while (index < end) {
        if (input[index] !== input[index - 1]) {
            word += input[index];
        }
        index++;
    }
    console.log(word);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');