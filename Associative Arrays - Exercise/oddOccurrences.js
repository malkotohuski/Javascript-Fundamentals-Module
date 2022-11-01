function solve(data) {

    let result = new Map();
    let words = data.split(' ');

    for (let word of words) {
        word = word.toLowerCase();
        if (result.has(word)) {
            let oldValue = result.get(word);
            result.set(word, oldValue + 1);
        } else {
            result.set(word, 1);
        }  
    }

    let sortResult = Array.from(result).filter(([key, value])=>{
        return value % 2 !== 0
    });

    let buff = "";

    for (const [key , value] of sortResult) {
        buff += key + " ";
    }
    console.log(buff)
}
 
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')