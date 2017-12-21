class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up"
  }

  start() {
    var interval = setInterval(() => {this.update();}, 1000)
  }
  stop() {
    clearInterval(interval);
  }
  update() {
    this.log();
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    this.floor < this.MAXFLOOR ? (this.floor++, console.log(this.floor)) : console.log("This is the last floor");
  }
  floorDown() {
    this.floor > 0 ? (this.floor--, console.log(this.floor)) : console.log("This is the first floor");
  }
  call() { }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;