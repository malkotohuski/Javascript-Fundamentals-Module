function battle(input) {
    let listBattle = {};
  
  
    function add(players, health, energy) {
       if (!listBattle.hasOwnProperty(players)) {
          listBattle[players] = {};
          listBattle[players].health = 0;
          listBattle[players].energy = energy;
       }
       listBattle[players].health += health;
  
    };
  
    function attack(atack, defend, damege) {
       if (listBattle[atack] && listBattle[defend]) {
          listBattle[defend].health -= damege;
       }
       if (listBattle[defend].health <= 0) {
          console.log(`${defend} was disqualified!`);
          delete listBattle[defend];
  
       }
       listBattle[atack].energy -= 1;
       if (listBattle[atack].energy <= 0) { //may be without <
          console.log(`${atack} was disqualified!`);
          delete listBattle[atack];
  
       }
  
    };
  
    function deletion(userName) {
       if (userName === "All") {
          for (let prop in listBattle) {
             delete listBattle[prop];
          }
       } else {
          if (listBattle.hasOwnProperty(userName)) {
             delete listBattle[userName];
          }
       }
    };
    for (let line of input) {
       if (line === 'Results') {
          break;
       }
       let tokens = line.split(':');
       if (tokens !== undefined && tokens !== null) {
          let command = tokens.shift();
          if (command === 'Add') {
             let person = tokens[0];
             let health = Number(tokens[1]);
             let energy = Number(tokens[2]);
             add(person, health, energy);
          } else if (command === 'Attack') {
             let attackerName = tokens[0];
             let defenderName = tokens[1];
             let damage = Number(tokens[2]);
             attack(attackerName, defenderName, damage);
          } else if (command === 'Delete') {
             let username = tokens[0];
             deletion(username);
          }
       }
  
    }
    let countofPeople = 0;
    countofPeople = Object.keys(listBattle).length;
    if (countofPeople !== 0) {
       console.log(`People count: ${countofPeople}`);
    }
    let sorted = Object.entries(listBattle);
    sorted.sort((a, b) => a - b);
    if (sorted.length > 0) {
       sorted.forEach(element => {
          console.log(`${element[0]} - ${element[1].health} - ${element[1].energy}`);
       });
    }
  
  
 }

 battle(["Add:Bonnie:3000:5",
"Add:Kent:10000:10",
"Add:Johny:4000:10",
"Attack:Johny:Bonnie:400",
"Add:Johny:3000:5",
"Add:Peter:7000:1",
"Delete:Kent",
"Results"])