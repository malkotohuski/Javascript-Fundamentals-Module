function treasureHunt(array) {
    let initialTresure = array.shift().split('|');
    let total = 0;
    let isIndexValid = (index, arr) => index >= 0 && index < arr.length;

    for (const line of array) {
        let [command, ...elements] = line.split(' ');

        if (command === 'Yohoho!') {
            break;
        }

        if (command === 'Loot') {
            for (const item of elements) {
                if (!initialTresure.includes(item)) {
                    initialTresure.unshift(item);
                }
            }
        } else if (command === 'Drop') {
            let index = Number(elements[0]);
            if (isIndexValid(index, initialTresure)) {
                let dropped = initialTresure.splice(index, 1);
                initialTresure.push(...dropped);
            }
        } else if (command === 'Steal') {
            let index = Number(elements[0]);
            let stealedTresure = initialTresure.slice(-index);
            initialTresure.splice(-index);
            console.log(stealedTresure.join(', '));
        }
    }
    total = initialTresure
        .reduce((sum, initialTresure) => sum + initialTresure.length, 0) / initialTresure.length;

    if (initialTresure.length > 0) {
        return `Average treasure gain: ${total.toFixed(2)} pirate credits.`
    } else {
        return "Failed treasure hunt."
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"]);