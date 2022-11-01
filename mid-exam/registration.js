function registration(data) {

    let name = data.shift();
    data.forEach(el => {
        let [commandOne, commandTwo] = el.split(' ')
        
        if (commandOne === "Letters") {
            if (commandTwo === 'Lower') {
                name = name.toLowerCase()
                console.log(name);
            } else if (commandTwo === 'Upper') {
                name = name.toUpperCase();
            }
        } else if (commandOne === 'Reverse') {
            let startIndex = el.split(' ')[1];
            let endIndex = el.split(' ')[2];
            reversedStr = ''
            if (startIndex >= 0 && startIndex < name.length && endIndex >= 0 && endIndex < name.length) {
                reversedStr = name[startIndex.slice(), endIndex + 1];
          //      reversedStr = reversedStr.slice()
                console.log(reversedStr);

            }
        } else if (commandOne === 'Substring') {
            let substt = el.split(' ')[1];
            if (name.hasOwnProperty(substt)) {
                name = name.replace(substt, '');
                console.log(name);
            } else {
                console.log(`The username ${name} doesn't contain ${substt}.`);
            }
        } else if (commandOne === 'Replace') {
            let chart = el.split(' ')[1];
            name = name.replace(chart, '-');
            console.log(name);
        } else if (commandOne === 'IsValid') {
            let charter = el.split(' ')[1];
            if(name.hasOwnProperty(charter)){
                console.log("Valid");
            } else {
                console.log(`${charter} must be contained in your username.`);
            }
        } else if (commandOne === 'Registration'){
           
        }



    });

}
registration(["John",
    "Letters Lower",
    "Substring SA",
    "IsValid @",
    "Registration"]);