console.log('"Closures"');

function Car(id) {
  let idCar = id;
  let start = function () {
    console.log(`start car ${idCar}`);
  };
  start(); // inner function should be called or returned by outer function to get access of inner function and result from inner function
}

//Car(123); // start car 123
let vehicle = new Car(456); //start car 456

//------------------------------------------------------------------------------------------
function Car(id) {
  let idCar = id;
  let start = function (msg) {
    return idCar + 2 + msg;
  };
  return start;
}
Car(3)("Hi"); //2Hi
//---or----
let app = Car(5);
app("Hello"); //5Hello

//-----------return-----------
function Carr(id) {
  let idCar = id;
  let start = function () {
    return idCar + 2;
  };
  return start();
}
Carr(3);
//--------------------------
function Car2(id) {
  let idCar = id;
  let start = function (msg) {
    console.log(`start car ${idCar} with ${msg}`);
  };
  return start;
  //start();
}

let res1 = Car2(123);
let res2 = res1("Happy");

//let vehicle = new Car(456); */
