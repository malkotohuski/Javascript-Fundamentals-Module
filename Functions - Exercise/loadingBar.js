function loadingBar(number) {

    let complete = '%'.repeat(number / 10);
    let incomplete = '.'.repeat(10 - complete.length)

    if (incomplete.length === 0) {
        console.log(`100% Complete!`);
    } else {
        console.log(`${number}% [${complete}${incomplete}]`);
        console.log('Still loading...');
    }
}

loadingBar(30);
