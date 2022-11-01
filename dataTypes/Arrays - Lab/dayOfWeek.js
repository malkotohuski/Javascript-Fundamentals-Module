function solve(day) {

    if (day < 1 || day > 7) {
        console.log('Invalid day!');
    } else {
        let dayName = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"]
        console.log(dayName[day - 1]);
    }



}

solve([7]);
