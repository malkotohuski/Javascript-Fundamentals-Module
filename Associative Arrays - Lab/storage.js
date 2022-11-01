function storage(data) {

    let result = new Map();

    for (let line of data) {
        let [product, quality] = line.split(' ');
        if (result.has(product)) {
            let oldQuality = result.get(product);
            result.set(product, oldQuality + Number(quality));
        } else {
            result.set(product, Number(quality));
        }
    }
    for (let [k, v] of result) {
        console.log(k, '->', v);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])