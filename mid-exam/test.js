function test(input) {

    let priceWithoutTaxes = 0;
    let totalPrice = 0;
    let taxes = 0;
    let type = input.pop();

    for (const price of input) {
        let currentPrice = Number(price);

        if (price > 0) {
            priceWithoutTaxes += currentPrice;
        } else {
            console.log(`Invalid price!`);
            continue;
        }
    }

    if (priceWithoutTaxes === 0) {
      return console.log(`Invalid order!`);
    }

    taxes = priceWithoutTaxes * 0.2;
    totalPrice = taxes + priceWithoutTaxes;

    if (type === "special") {
        totalPrice = totalPrice * 0.9;
    }

    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}

test(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular'
]);