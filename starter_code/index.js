const Elevator = require('./elevator.js');
var elevator = new Elevator();
for(let i = 0; i < 12 ; i++){
  elevator.floorUp();
}