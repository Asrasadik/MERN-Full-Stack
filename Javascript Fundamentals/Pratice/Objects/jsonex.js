console.log('"JSON"');

//--------------------------------------

let jsonIn = `
[
    {"car": 123},
    {"car": 456},
    {"car": 789}
]

`;

let carIds = JSON.parse(jsonIn);
console.log(carIds);
//console.log(JSON.stringify(carIds));
