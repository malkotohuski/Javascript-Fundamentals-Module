function solve(count, type, day) {

    let totalPrice = 0;

    if (type === 'Students') {

        switch (day) {
            case 'Friday': totalPrice = count * 8.45; break;
            case 'Saturday': totalPrice = count * 9.80; break;
            case 'Sunday': totalPrice = count * 10.46; break;
        }
        if (count >= 30) {
            totalPrice *= 0.85
        }

    } else if (type === 'Business') {

        if (count >= 100) {
            switch (day) {
                case 'Friday': totalPrice = (count - 10) * 10.90; break;
                case 'Saturday': totalPrice = (count - 10) * 15.60; break;
                case 'Sunday': totalPrice = (count - 10) * 16; break;
            }

        } else {
            switch (day) {
                case 'Friday': totalPrice = count * 10.90; break;
                case 'Saturday': totalPrice = count * 15.60; break;
                case 'Sunday': totalPrice = count * 16; break;
            }
        }
    } else if (type === 'Regular') {

        switch (day) {
            case 'Friday': totalPrice = count * 15; break;
            case 'Saturday': totalPrice = count * 20; break;
            case 'Sunday': totalPrice = count * 22.50; break;
        }
        if (count >= 10 && count <= 20) {
            totalPrice *= 0.95;
        }

    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);


}

solve(30, "Students", "Sunday")