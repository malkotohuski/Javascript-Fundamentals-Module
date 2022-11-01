function piccolo(input) {

    let parkingList = new Set();

    input.forEach(line => {
        let [comands, CarNumber] = line.split(', ');
        
        if(comands === "IN"){
            parkingList.add(CarNumber)
        } else{
            parkingList.delete(CarNumber)
        }
    });

    if(parkingList.size === 0 ){
        return console.log("Parking Lot is Empty");
    }
    
    let sortParking = Array.from(parkingList.values()).sort() 
       

  
    console.log(sortParking.join('\n'));
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])