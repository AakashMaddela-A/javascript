/*
function fun_one(arg1?: string, arg2?: string, arg3?: string): void {
  console.log(arg1, arg2, arg3);
}

fun_one(); // undefined undefined undefined
fun_one("hello1"); // hello1 undefined undefined
fun_one(undefined, undefined, "hello3"); // undefined undefined hello3
// fun_one(null, null, null);
*/

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/*
function fun_one(arg2: string, arg1?: string): void {
  console.log(arg2, arg1);
}

// fun_one();  // error
fun_one("hello1"); // hello1 undefined
fun_one("hello1", "hello2"); // hello1 hello2
// fun_one(undefined, undefined);  // undefined undefined
// fun_one(null, null);  // null null
*/
////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function fun_one(arg1: string, arg2?: string, ...arg3: string[]): any {
  console.log(arg1, arg2, arg3);
}

// fun_one(); // error : expected atleast one argument
fun_one("hello1"); //hello1 undefined []
fun_one("hello1", "hello2", "hello3"); //hello1 hello2 [ 'hello3' ]
// fun_one(undefined, undefined, undefined); // undefined undefined [undefined]
// fun_one(null, null, null); //null null [null]
