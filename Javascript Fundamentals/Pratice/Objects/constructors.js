console.log('"Objects and Arrays"');

//-----------Constructor--------------------
let Car = function (id) {
  let carId = id;
  console.log(carId);
};
let app = new Car(123);
console.log(app); //Car{} (object)

//-----------Basic way -----------
//1. wrong way to call constructor function
function Car1() {
  console.log(this);
}
Car1(); //window

//2.
function Car2() {
  console.log(this);
}
let vehicle = new Car2(); //Car2{} (object)

//--------------Constructor + this ---------------
//1.
function CarThis(id) {
  console.log(this);
  this.carId = id;
}
let carnum = new CarThis(789);
console.log(carnum.carId);
//2.
function Carlet(id) {
  console.log(this);
  let carId = id;
  console.log(carId);
}
let carnum3 = new Carlet(113);
console.log(carnum3.carId);

//--------------Constructor+Method------
function CarMethod(id) {
  this.carId = id;
  this.start = function () {
    console.log(`start car id ${this.carId}`);
  };
}
let carApp = new CarMethod(223);
carApp.start();
