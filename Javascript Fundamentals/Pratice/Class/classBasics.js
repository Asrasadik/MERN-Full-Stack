console.log('"Class"');

//-------------------------------------------------------
class Car {}
let car = new Car();
console.log(car);
//-----------------------------------------------------
class Car0 {}
let car0 = new Car0();
console.log(car0);
car0.id = 345;
//------------Class--------------------
class Car1 {
  constructor(id) {
    this.id = id;
  }
}
let car1 = new Car1(123);
console.log(car1.id);
car1.id = 456;
console.log(car1.id);

//-------Methods-----------------
class Car2 {
  constructor(id) {
    this.id = id;
  }
  identify(msg) {
    return `carId is ${this.id} for car ${msg}`;
  }
}
let car2 = new Car2(777);
console.log(car2.identify("porche"));
