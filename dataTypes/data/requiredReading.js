function solve(pages, pagesInHour, days) {

    let totalTime = pages / pagesInHour;
    let readedPerDay = totalTime / days;
    console.log(readedPerDay);
}

solve(212, 20, 2);