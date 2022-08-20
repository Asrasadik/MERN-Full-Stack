console.log('"prototypes"');

//-------------------------------------------------------------------------

function Car(id) {
  this.carId = id;
}

Car.prototype.start = function () {
  console.log(`start car ID ${this.carId}`);
};

let app = new Car(123);
app.start();

//------prototype for builtin constructors-------------

String.prototype.hello = function () {
  return this.toString() + " Hello";
};
console.log("foo".hello());
