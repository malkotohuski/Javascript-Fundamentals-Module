function orders(type, count) {

    let totalPrice = 0;
    switch (type) {
        case 'coffee':
            totalPrice = count * 1.50;
            console.log(totalPrice.toFixed(2));
            break;
        case 'water':
            totalPrice = count * 1.00;
            console.log(totalPrice.toFixed(2));
            break;
        case 'coke':
            totalPrice = count * 1.40;
            console.log(totalPrice.toFixed(2));
            break;
        case 'snacks':
            totalPrice = count * 2.00;
            console.log(totalPrice.toFixed(2));
            break;
    }
}

orders("coffee", 2);