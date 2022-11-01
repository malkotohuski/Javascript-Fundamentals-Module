function passValidator(password){
    let enoughLength = false;
    let onlyLetterAndDigits = true;
    let digits = 0;
    if(password.length >= 6 && password.length <= 10){
        enoughLength = true;
    }
    for(let i = 0; i < password.length; i++){
        if(password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57){    // digits
            digits++;
        } else if((password[i].charCodeAt(0) >= 65 && password[i].charCodeAt(0) <= 90) || (password[i].charCodeAt(0) >= 97 && password[i].charCodeAt(0) <= 122)){    // letters
            continue;
        } else {
            onlyLetterAndDigits = false;
        }
 
    }
    if(enoughLength === true && digits >= 2 && onlyLetterAndDigits === true){
        console.log("Password is valid");
    } else{
        if(!enoughLength){
            console.log("Password must be between 6 and 10 characters");
        }
        if(!onlyLetterAndDigits > 0){
            console.log("Password must consist only of letters and digits");
        }
        if(digits < 2){
            console.log("Password must have at least 2 digits");
        }    
    }
    }





    passValidator(['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'])