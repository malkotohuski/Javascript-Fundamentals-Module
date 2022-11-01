function cutAndReverse(input) {
    let text = input.split('').reverse().join('');
    let first = text.slice(text.length / 2,);
    let secound = text.slice(0, text.length / 2);

    console.log(first);
    console.log(secound);
}


cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');