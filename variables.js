//for loop
// it is used to iterate the values
for (var i = 0; i < 5; i++) {
  console.log(i);
}

for (var i = 0; i < 5; i++) {
  //
}
console.log(i); //var : 5

for (let i = 0; i < 5; i++) {
  //
}
console.log(i); // i is not defined

// var keyword breaks the scope rule
// let keyword obeys the scope rule

//////////////////////////////////////////////////
var data = 100;
var data = 200;
console.log(data); //200
// to overcome this we use the let keyword
// var keyword allows the duplicate variables
// let keyword wont allow the duplicate variables

//////////////////////////////////////////////
//global
var da = 100;
// console.log(da); //100

//block
{
  //local
  var da = 200;
  //   console.log(da); // 200
}
console.log(da); // var : 200  let :100
// to overcome this bug we use let keyword
//if any block of code affectig globla member called as global polluting issue
// we can overcome global polluting issue by using let keyword.

///////////////////////////////////////////////////
// variables declaration and initialization
var msg = "hello";
console.log(msg); // hello   // variable accesing

console.log(message); // var: undefined , if let then error
var message = 100;
// getting undefined before declaration and initialization called as variable hoisting.
// variable hoisting issue raised because of var keyword.
// we can overcome variable hoisting with the help of let keyword.

/*
          var                            let
    *******************************************************
    ES1                                   ES6
    scope rule break                 scope rule follows
    duplicate members allows       duplicate not allows
    global polluting issue           we can overcome
    variable hoisting raised        we can overcome
    ******************************************************
*/

///////////////////////////////////////////////////
//const keyword
const info = 100;
// info = 200;  // error assignment to constant variable.

const arr = [1, 2, 3, 4, 5];
// arr = [6, 7, 8, 9, 0]; // error assignment to constant variable.
arr[0] = 200;
arr[4] = 100;
arr[5] = 300;
console.log(arr); // [ 200, 2, 3, 4, 100, 300 ]

arr.pop(); //removing last
console.log(arr);
arr.shift(); // removing first
console.log(arr);
arr.unshift(1); // adding first
console.log(arr);
