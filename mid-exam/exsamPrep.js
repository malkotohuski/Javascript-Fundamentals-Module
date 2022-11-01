function solve(input) {
    let pass = input.shift();

    for (const line of input) {
        const tokens = line.split(' ');
        const cmd = String(tokens[0]);

        if (cmd === 'TakeOdd') {
            let raw = ''
            for (let i = 0; i < pass.length; i++) {
                if (i % 2 !== 0) {
                    raw += pass[i];
                }
            }
            pass = raw;
            console.log(pass);

        } else if (cmd === 'Cut') {
            const index = tokens[1];
            const length = tokens[2];
            const substr = pass.substr(index, length);
            pass = pass.replace(substr, '');
            console.log(pass);

        } else if (cmd === 'Substitute') {
            const substr = tokens[1];
            const substitute = tokens[2];

            if (!pass.includes(substr)) {
                console.log("Nothing to replace!");
            } else {
                pass = pass.split(substr).join(substitute);
                console.log(pass);
            }

        }

    }
    console.log(`Your password is: ${pass}`);
}

solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);