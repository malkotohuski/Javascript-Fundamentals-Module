function santasNewList(input) {
    const goodChildren = {};
    const presents = {};
   
    for (const elem of input) {
      if (elem === 'END') break;
   
      if (elem.includes('Remove')) {
        const [command, childName] = elem.split('->');
        delete goodChildren[childName];
        continue;
      }
   
      let [childName, typeOfToy, amount] = elem.split('->');
      amount = Number(amount);
      
      if (!goodChildren.hasOwnProperty(childName)) {
        goodChildren[childName] = 0;
      }
   
      goodChildren[childName] += amount;
   
      if (!presents.hasOwnProperty(typeOfToy)) {
        presents[typeOfToy] = 0;
      }
      
      presents[typeOfToy] += amount;
    }
   
    console.log('Children:');
   
    Object.entries(goodChildren)
      .sort(([childA, presentsA], [childB, presentsB]) => {
        return presentsB - presentsA || childA.localeCompare(childB);
      })
      .forEach(([child, presents]) => {
        console.log(`${child} -> ${presents}`);
      }
    );
   
    console.log('Presents:');
   
    Object.entries(presents)
      .forEach(([toy, amount]) => {
        console.log(`${toy} -> ${amount}`);
      }
    );
  }


  santasNewList(['Marty->Toys->5',
    'Sam->Candy->20',
    'Leo->Candy->10',
    'Leo->Toys->1',
    'Katy->Clothes->4',
    'Bobbie->Clothes->6',
    'Tanya->Phone->1',
    'Nasko->Tablet->3',
    'END'])