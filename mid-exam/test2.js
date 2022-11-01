function test(input) {

    let type = input.pop();
    let taxes = 0;
    let totalPrice = 0;
    let allPrice = 0;

    for (let i = 0; i < input.length; i++) {
        let curentPrice = Number(input[i]);

        if (curentPrice > 0) {
            totalPrice += curentPrice;
        } else {
            console.log("Invalid price!");
            continue;
        }
    }

    if (totalPrice === 0) {
        return console.log("Invalid order!");
    }
    taxes = totalPrice * 0.2;
    allPrice = taxes + totalPrice;

    if (type === "special") {
        allPrice = allPrice * 0.9;
    } 
    
    


    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${allPrice.toFixed(2)}$`);
}
test([

    'regular'

])