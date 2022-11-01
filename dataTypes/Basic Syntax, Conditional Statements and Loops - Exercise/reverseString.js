function solve(text){

    let newString = "";
    for (let i = text.length - 1; i >= 0; i--) {
        newString += text[i];
    }
    console.log(newString);
}


solve('Hello');