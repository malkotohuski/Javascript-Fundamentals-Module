function solve (numbers){

    let pattern = @"( ?\+359 2 \d{3} \d{4})|(\+ ?359-2-\d{3}-\d{4})";

    let  validPahones = [];
    while((validPahones = pattern.exec(phoneNumberss)) !== null){
    validPahones.push(validPahones[0]);

    
    }
    console.log(validPahones.join(', '));
}



solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']
)