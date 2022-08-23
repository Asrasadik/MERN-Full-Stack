console.log('"Promises and Error Handling"');

//-------------------------------------------------------------
try {
  let car = newCar;
} catch (error) {
  console.log("error:", error);
} finally {
  console.log("continuing....");
}
//--------------throw(own/developer error)------------------------
try {
  throw new Error("My custom error");
} catch (error) {
  console.log("error:", error);
} finally {
  console.log("finally always executes");
}

//------------Creating Promise---------------
let promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "someValue");
});
console.log(promise);
//-------------settling Promise------------------
let settlepromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "someValue");
});
settlepromise.then(
  (value) => console.log("fulfilled: " + value),
  (error) => console.log("rejected: " + error)
);
