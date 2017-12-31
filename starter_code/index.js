const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();

elevator.call(new Person("Rick Sánchez", 3, 5));
elevator.call(new Person("Morty Smith", 2, 9));
elevator.call(new Person("Mr. Meeseeks", 7, 8));
elevator.call(new Person("Mr. Poopybutthole", 7, 1));

elevator.start();