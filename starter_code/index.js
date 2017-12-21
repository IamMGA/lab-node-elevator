const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();

elevator.call(new Person("Rick Sánchez", 0, 5));
elevator.call(new Person("Morty Smith", 2, 0));
elevator.call(new Person("Mr. Meeseeks", 0, 8));
elevator.call(new Person("Mr. Poopybutthole", 7, 1));

elevator.start();