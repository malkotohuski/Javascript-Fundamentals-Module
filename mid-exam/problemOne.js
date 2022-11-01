function tour(input) {

    let firstText = input.shift();
    let data = input.shift();

    while (data !== "Travel") {
        let [action, firstParam, lastParam] = data.split(":");
        let startIndex;
        let endIndex;

        switch (action) {
            case "Add Stop":
                startIndex = Number(firstParam);
                if (startIndex < 0 || startIndex >= firstText.length) {
                    console.log(firstText);
                    break;
                }
                let value = lastParam;
                let firstPart = firstText.slice(0, startIndex);
                let secoundPart = firstText.slice(startIndex);
                firstText = firstPart + value + secoundPart;
                console.log(firstText);
                break;
       
             
    }
    console.log(data);
}
}

tour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])