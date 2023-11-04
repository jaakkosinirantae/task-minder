/* 
   filename: complex_code.js
   content: Highly complex and elaborate JavaScript code
*/

// Define a class for a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  static getAgingPerson(persons) {
    let agingPerson = persons[0];
    for (let person of persons) {
      if (person.age > agingPerson.age) {
        agingPerson = person;
      }
    }
    return agingPerson;
  }
}

// Define a function to create a random number between two values
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random array of persons
let persons = [];
const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
for (let i = 0; i < 10; i++) {
  let name = names[getRandomNumber(0, 4)];
  let age = getRandomNumber(20, 50);
  persons.push(new Person(name, age));
}

// Display the information of each person
for (let person of persons) {
  person.introduce();
}

// Find the oldest person
let oldest = Person.getAgingPerson(persons);
console.log(`The oldest person is ${oldest.name} who is ${oldest.age} years old.`);

// Perform a complex calculation using recursion
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(`Factorial of 5: ${factorial(5)}`);

// Simulate a complex algorithm
function simulateComplexAlgorithm(input) {
  let output = input;
  for (let i = 0; i < 10000; i++) {
    output = Math.sqrt(Math.pow(output, 3) + Math.sin(output) + Math.cos(output));
  }
  return output;
}

let input = 2.5;
let result = simulateComplexAlgorithm(input);
console.log(`Result of complex algorithm with input ${input}: ${result}`);

// More elaborate code goes here...

// ...

// ...

// End of complex_code.js