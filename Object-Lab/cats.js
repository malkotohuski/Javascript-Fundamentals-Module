function solve(catsData) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
        let cats = [];
        for (const catDate of catsData) {
            let token = catDate.split(' ');
            let catName = token[0];
            let catAge = token [1];
            let myCat = new Cat(catName , catAge);
            cats.push(myCat);
           
        }

        for(let myCat of cats){
            myCat.meow()
        }
}
solve(['Mellow 2', 'Tom 5']);