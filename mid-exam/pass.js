function pass(data){

    let password = data.shift();
    let line = data.shift();

    while(line !== "Complete"){
        let commands = data.split(' ')
        let asd = data[0];
        switch(commands){
            case "Make":
                let caps = data[1]
                let index 
        }
    }

    console.log(line);

}

pass(['invalidpassword*',
'Add 2 p',
'Replace i -50',
'Replace * 10',
'Make Upper 2',
'Validation',
'Complete'])