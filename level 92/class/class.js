class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getIntroduction() {
    return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  }
}


const person1 = new Person("Saba", "Sokhashvili", 13);
console.log(person1.getIntroduction());


class Operative {
  constructor(name, rank) {
    this.name = name;
    this.rank = rank;
  }


  getInfo() {
    return `${this.name} holds the rank of ${this.rank}.`;
  }

 
  static compareRanks(op1, op2) {
    const ranks = ["Private", "Sergeant", "Lieutenant", "Captain", "Major", "Colonel", "General"];

    const rank1 = ranks.indexOf(op1.rank);
    const rank2 = ranks.indexOf(op2.rank);

    if (rank1 > rank2) return `${op1.name} outranks ${op2.name}.`;
    if (rank1 < rank2) return `${op2.name} outranks ${op1.name}.`;
    return `${op1.name} and ${op2.name} have the same rank.`;
  }
}


class EliteOperative extends Operative {
  constructor(name, rank, specialty) {
    super(name, rank); 
    this.specialty = specialty;
  }

 
  getInfo() {
    return `${this.name}, rank ${this.rank}, specializes in ${this.specialty}.`;
  }
}

const op1 = new EliteOperative("Saba", "Captain", "Stealth Operations");
const op2 = new EliteOperative("Luka", "Major", "Cyber Warfare");

// მეთოდის გამოძახება
console.log(op1.getInfo());  

console.log(op2.getInfo());  

console.log(Operative.compareRanks(op1, op2));

