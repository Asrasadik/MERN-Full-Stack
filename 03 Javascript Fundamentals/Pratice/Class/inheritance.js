console.log('"Class"');

//-------------------------------------

class Vehicle {
  constructor() {
    this.type = "car";
  }
}

class Car extends Vehicle {}
let car = new Car();
console.log(car.type);
//----------------Methods---------------------
class Vehicle1 {
  constructor() {
    this.type = "car";
  }
  start() {
    return `Starting Vehichle ${this.type}`;
  }
}

class Car1 extends Vehicle1 {
  constructor(props) {
    super(props);
  }
  start() {
    return "starting Car" + super.start();
  }
}
let car1 = new Car1();
console.log(car1.start());
