/* 
Filename: ComplexJavascriptCode.js
Content: This complex JavaScript code demonstrates a simulation of a virtual world with multiple objects and interactions.
*/

// Define the World object with its properties and functions
class World {
  constructor(name) {
    this.name = name;
    this.objects = [];
  }

  addObject(object) {
    this.objects.push(object);
  }

  removeObject(object) {
    this.objects = this.objects.filter(o => o !== object);
  }

  simulate() {
    console.log(`Simulating world: ${this.name}`);
    for (let i = 0; i < 100; i++) {
      console.log(`-- Time step: ${i} --`);
      this.objects.forEach(object => {
        object.update();
      });
    }
  }
}

// Define the Object base class with properties and a common function
class Object {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  move(newPosition) {
    this.position = newPosition;
    console.log(`${this.name} moved to position: [${this.position.x}, ${this.position.y}, ${this.position.z}]`);
  }

  update() {
    console.log(`${this.name} updated at position: [${this.position.x}, ${this.position.y}, ${this.position.z}]`);
  }
}

// Define the Sphere class that extends Object
class Sphere extends Object {
  constructor(name, position, radius) {
    super(name, position);
    this.radius = radius;
  }

  update() {
    super.update();
    console.log(`Radius of ${this.name}: ${this.radius}`);
  }
}

// Define the Cube class that extends Object
class Cube extends Object {
  constructor(name, position, sideLength) {
    super(name, position);
    this.sideLength = sideLength;
  }

  update() {
    super.update();
    console.log(`Side length of ${this.name}: ${this.sideLength}`);
  }
}

// Create a new world
const myWorld = new World("Virtual World");

// Create and add objects to the world
const sphere = new Sphere("Sphere A", { x: 0, y: 0, z: 0 }, 5);
const cube = new Cube("Cube B", { x: 10, y: 5, z: 3 }, 7);
myWorld.addObject(sphere);
myWorld.addObject(cube);

// Simulate the world
myWorld.simulate();