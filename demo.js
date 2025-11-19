console.log("welcome to js");

console.log(10 + 10); //20

console.log(10 + "10"); //1010

console.log(100 + +"100"); //200

console.log(10 + "10" + 10); //101010

console.log(10 + +"10" + 10); //30

console.log(10 - "2"); //8

console.log(10 - "2" - "8"); //0

console.log(10 + "2" - "2"); //100

console.log(10 > 9 > 8); // false

console.log(10 * "10"); //100

console.log(100 / "100"); // 1

console.log(100 / "0"); // infinity

console.log(100 + +"100" - "100" * "100"); // -9800

/////////////////////////////////////////////////

//  == it checks the value and performs the type coversion if two are different.(called coercion)

console.log(1 == "1"); //true
//  === it also checks the type and value (no type conversion).
console.log(1 === "1"); //false

console.log(1 == "one"); //false
console.log(1 === "one"); //false
console.log(1 + true); // 2
console.log(1 - true); // 0
console.log(1 + true - false); //2

var var_one = "hello";
console.log(var_one);

var abc = 23;
console.log(abc);

////////////////////////////////////////////////////
//numbers
// decimal, float or double, hexadecimal, octal , binary
//hexadecimal numbers will prefix with '0x' .
//octal numbers will prefix with '0o'.
//binary numbers will prefix with '0b'.
var decimalNum = 100;
var doubleNum = 100.1234;
var hexadecimalNum = 0x123a;
var octalNum = 0o123;
var binaryNum = 0b10101;

//////////////////////////////////////////////////////
//boolean
//true or false
// true -- 1
//false -- 0
var flag = true;
console.log(flag); //true
console.log(1 + flag); //2
console.log(1 + true); //2
console.log(true + true); //2
console.log(true - false); //1
console.log("1" + true); // 1true
console.log(+"1" + true); //2

var x = true;
x == true ? console.log("hello") : console.log("bye"); // hello

var a = "hello";
a == "Hello" ? console.log("welcome") : console.log("hai"); //hai

/////////////////////////////////////////////////////////
//string is an collection of characters
// '', "" and backtick operator
// this backtick operator is introduced in ES6
// this called as template literal
// this is used to define the paragraphs.

var sub = "ReactJs";
var wish = `Welcome to ${sub}`;
console.log(wish);

var sub_one = "ReactJs";
var sub_two = "NodeJs";
var sub_three = "MongoDB";
var mernStack = `${sub_one} <==> ${sub_two} <==> ${sub_three}`;
console.log(mernStack);

var tbl_name = "employees";
var sal = 50000;
var sql_query1 = `select * from ${tbl_name} where esal>${sal}`;
console.log(sql_query1);

var uname = "admin";
var upwd = "admin123";
var sql_query2 = `select * from ${tbl_name} where uname='${uname}' and upwd='${upwd}'`;
console.log(sql_query2);

var mern = `MERN Stack Means
            ****************
            frontend = ${sub_one}
            ++++++++++++++++
            backend =${sub_two}
            ^^^^^^^^^^^^^^^^
            database=${sub_three}`;

console.log(mern);

//////////////////////////////////////////////////
//string, number, boolean, undefined, null, bigint, symbol

//undefined
var z;
console.log(z); //undefined

z = null;
console.log(z); //null

console.log(undefined == undefined); //true

console.log(undefined === undefined); //true

console.log(null == null); //true

console.log(null === null); //true

console.log(undefined == null); //true

console.log(undefined === null); //false

////////////////////////////////////////////////////
//bigint -> suffix with 'n'
// greater than 2^53 -1
var bigint =
  126557638423846925462368923748723457523423894632753276423764763257324732546732543274523765432874873547634762783467823487326982377326753287632987392687327376487246982378532653278523856325783279322578537957632853278932684387538954378564385894357437564858094385436574375984365465843757435473658435764375437534765437656435674375743574584365465436543875432n;
console.log(bigint);

///////////////////////////////////////////////////
//typeof operator
console.log(typeof "hello"); //string
console.log(typeof 100); //number
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); // object
console.log(typeof []); //object
console.log(typeof 1n); //bigint
console.log(1n + 2n); // 3n
console.log(1 + 2n); // error
console.log(1n / 1n); //1n
console.log(1 / 1n); //error
