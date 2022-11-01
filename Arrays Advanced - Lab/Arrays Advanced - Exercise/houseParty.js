function houseParty(input) {

    let newArr = [];

    for (const el of input) {
        let command = el.split(' ')
        let names = command[0];

        if(command.length === 3){
            if(newArr.includes(names)){
                console.log(`${names} is already in the list!`);
            }else{
                newArr.push(names);
            }
        }else{
            if(!newArr.includes(names)){
                console.log(`${names} is not in the list!`);
            }else{
                let index = newArr.indexOf(names);
                newArr.splice(index, 1);
            }
        }
    }
    console.log(newArr.join('\n'));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])