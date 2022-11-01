function test3(data) {

  let state = data.shift().split("|")

  let index = 0;
  let command = data[index];
  index++;
  let i;

  while (command !== "Yohoho!") {
    let distancse = command.split(" ")
    let operation = distancse.shift();

    switch (operation) {
      case 'Loot':
        for (let el of distancse) {
          if (!state.includes(el)) {
            state.unshift(el);
          }
        }
        break;
      case 'Drop':
        i = Number(distancse[0]);
        if(i<0 || i > state.length){
          command =data[index];
          index++;
          continue;
        }
        let element = state.splice(i,1);
        state.push(element[0]);
         break;
      case 'Steal':
      let  count = Number(distancse[0]);
      let items = state.splice(-count);
      console.log(items.join(', '));  
      break;
    }
    command = data[index];
    index++
  }

  if(state.length > 0){
    let sum = 0;
    for (const el of state) {
      sum += el.length;
    }
    let avg = sum / state.length;
    console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
  }else{
    console.log('Failed treasure hunt');
  }

}




test3(["Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!"]);