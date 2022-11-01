function schoolGrades(data) {
    let arrResult = {};
    let sumScore = 0;
    let countScore = 0;
   
    for (let line of data) {
      let currentStudent = line.split(" ");
      let name = currentStudent.shift();
   
      let sumGrades = 0;
      let count = 0;
      for (let grade of currentStudent.map(Number)) {
        sumGrades += grade;
        count++;
      }
   
      arrResult[name] = {
        score: sumGrades,
        count: count,
      };
    }
   
    console.log(arrResult);
  }
  schoolGrades(['Lilly 4 6 6 5',
  'Tim 5 6',
  'Tammy 2 4 3',
  'Tim 6 6']);