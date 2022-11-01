function solve(input) {
    let totalCount = 0
    let result = new Map();
    for (const el of input) {
        if(el === "END"){
            break;
        }
        if(el.includes('->')){
            let [name, gift, count] = el.split('->');
            result.set(name,[]);
            result.get(name).push(Number(count));   
            let gifts = Number(gift);
            if(gift && name ){

            }

            }
            
            
        }    
    }
    console.log('Children:');
    for (const [name, count, gift] of result) {
        
        console.log(`${name} -> ${count}`);
    }

}


solve(['Marty->Toys->5',
    'Sam->Candy->20',
    'Leo->Candy->10',
    'Leo->Toys->1',
    'Katy->Clothes->4',
    'Bobbie->Clothes->6',
    'Tanya->Phone->1',
    'Nasko->Tablet->3',
    'END'])