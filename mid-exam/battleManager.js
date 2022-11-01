function battleManager(data) {
   let listBattle = {};

   data.forEach(el => {
      if (el === 'Results') {
      }
      let tokens = el.split(':');
      if (tokens !== null && tokens !== undefined) {
         let command = tokens.shift();
         if (command === 'Add') {
            let people = tokens[0];
            let health = Number(tokens[1]);
            let energy = Number(tokens[2]);
            add(people, health, energy);
         } else if (command === 'Attack') {
            let attack = tokens[0];
            let defend = tokens[1];
            let damage = Number(tokens[2]);
            attacker(attack, defend, damage);
         } else if (command === 'Delete') {
            let username = tokens[0];
            delette(username);
         }
      }

   });
   let countofPeople = 0;
   countofPeople = Object.keys(listBattle).length;
   if (countofPeople !== 0) {
      console.log(`People count: ${countofPeople}`);
   }
   let sorted = Object.entries(listBattle);
   sorted.sort((a, b) => a - b)
   if (sorted.length > 0) {
      sorted.forEach(element => {
         console.log(`${element[0]} - ${element[1].health} - ${element[1].energy}`);
      });
   }

   function add(people, health, energy) {
      if (!listBattle.hasOwnProperty(people)) {
         listBattle[people] = {};
         listBattle[people].health = 0;
         listBattle[people].energy = energy;
      }
      listBattle[people].health += health;

   };

   function attacker(attack, defend, damage) {
      if (listBattle[attack] && listBattle[defend]) {
         listBattle[defend].health -= damage;
      }
      if (listBattle[defend].health <= 0) {
         console.log(`${defend} was disqualified!`);
         delete listBattle[defend];

      }
      listBattle[attack].energy -= 1;
      if (listBattle[attack].energy <= 0) {
         console.log(`${attack} was disqualified!`);
         delete listBattle[attack];

      }

   };

   function delette(names) {
      if (names === "All") {
         for (let prop in listBattle) {
            delete listBattle[prop];
         }
      } else {
         if (listBattle.hasOwnProperty(names)) {
            delete listBattle[names];
         }
      }
   };

}

battleManager(["Add:Bonnie:3000:5",
   "Add:Kent:10000:10",
   "Add:Johny:4000:10",
   "Attack:Johny:Bonnie:400",
   "Add:Johny:3000:5",
   "Add:Peter:7000:1",
   "Delete:Kent",
   "Results"])