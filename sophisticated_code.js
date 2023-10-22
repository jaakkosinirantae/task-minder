/* 
   Filename: sophisticated_code.js
   Content: Complex JavaScript code demonstrating advanced concepts and functionality.
*/

// Define a class to represent a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create multiple instances of the Person class
const person1 = new Person("John", 30);
const person2 = new Person("Alice", 25);
const person3 = new Person("Bob", 40);

// Implement a sorting algorithm: Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Test the mergeSort function
const unsortedArray = [9, 7, 2, 4, 5, 8, 1, 3, 6];
const sortedArray = mergeSort(unsortedArray);
console.log("Sorted Array:", sortedArray);

// Implement a higher-order function: map
function map(array, callback) {
  const result = [];
  
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  
  return result;
}

// Use the map function to double the values of an array
const array = [1, 2, 3, 4, 5];
const doubledArray = map(array, (x) => x * 2);
console.log("Doubled Array:", doubledArray);

// Implement a closure: counter
function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    console.log("Current count:", count);
  }
}

// Test the closure function
const counter = createCounter();
counter();
counter();
counter();

// Use a generator function: fibonacci sequence
function* fibonacciSequence() {
  let current = 0;
  let next = 1;
  
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

// Print the first 10 numbers in the fibonacci sequence
const fibonacciGenerator = fibonacciSequence();
for (let i = 0; i < 10; i++) {
  console.log(fibonacciGenerator.next().value);
}

// Implement a recursive function: factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  
  return n * factorial(n - 1);
}

// Compute the factorial of a number
const number = 5;
const factorialResult = factorial(number);
console.log(`Factorial of ${number}:`, factorialResult);

// Use the Fetch API to make an HTTP request
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => console.log("Received data:", data))
  .catch((error) => console.error("Error:", error));