type Gender = 'M' | 'F';

// class Person {
//     public birthDate: Date;
//     public gender: Gender;
//     public name: string;

//     constructor(name: string, gender: Gender, birthDate: Date) {
//         this.name = name;
//         this.gender = gender;
//         this.birthDate = birthDate;
//     }
// }

class Person {
    constructor(
        public name: string,
        public gender: Gender,
        public birthDate: Date
    ) {}
}

const person = new Person('Edwin', 'M', new Date('1996-03-20'));
console.log(person);

export {};
