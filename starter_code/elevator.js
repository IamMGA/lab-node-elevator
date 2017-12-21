const Person = require('./person.js');
class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction = "up"
  }

  start() {
    var interval = setInterval(() => { this.update(); }, 1000)
  }
  stop() {
    clearInterval(interval);
    console.log('Elevator stop');
  }
  update() {
    this.log();
    this._passengersEnter();
    this._passengersLeave();
    this.floor < this.requests[0] ? this.floorUp() : this.floorDown();
    if (this.floor === this.requests[0]) { this.requests.shift() }
    if (this.requests.length === 0){this.stop()}
  }
  _passengersEnter() {
    this.waitingList.forEach((elem, index) => {
      if(elem.originFloor === this.floor){
        this.passengers.push(elem);
        this.waitingList.splice(index, 1);
        this.requests.push(elem.destinationFloor);
        console.log(`${elem.name} has enter the elevator`);
      }
    });
  }
  _passengersLeave() {
    this.passengers.forEach((elem, index) =>{
      if(elem.destinationFloor === this.floor){
        this.passengers.splice(index, 1);
        console.log(`${elem.name} has left the elevator`);
      }
    });
  }
  floorUp() {
    this.floor < this.MAXFLOOR ?
      (this.floor++ , this.direction = "up", console.log(`Floor: ${this.floor}`)) :
      console.log("This is the last floor");
  }
  floorDown() {
    this.floor > 0 ?
      (this.floor-- , this.direction = "down", console.log(`Floor: ${this.floor}`)) :
      console.log("This is the first floor");
  }
  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;