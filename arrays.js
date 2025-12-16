// arrays -> collection of indexed elements called arrays.
// index starts from 0.
// we will represent the array by using [].

// to find the length
/*
let arr=[10,20,30,40,50];
console.log(arr.length);  // 5
console.log(arr[0],arr[1]);  // 10 20
console.log(arr[-1]); // undefined
arr.length=3;
console.log(arr[0],arr[1],arr[2],arr[3]); // 10 20 30 undefined
*/


// push() -> add element from end
// pop()-> remove the element from end
// unshift() -> add the element at beginning
// shift() -> remove the element from beginning

/*
let arr=[20,30,40];
console.log(arr); // [ 20, 30, 40 ]

arr.push(50);
console.log(arr); // [ 20, 30, 40, 50 ]

arr.unshift(10);
console.log(arr);  // [ 10, 20, 30, 40, 50 ]

arr.pop();
console.log(arr);  //[ 10, 20, 30, 40 ]

arr.shift();
console.log(arr); // [ 20, 30, 40 ]
*/

///////////////////////////////////////////////////////


//delete -> it doesnot release the memory but it will deletes 
/*
let arr=[10,20,30,40,50];
console.log(arr.length); // 5

delete arr[0];
console.log(arr.length); // 5
console.log(arr); // [ <1 empty item>, 20, 30, 40, 50 ]
*/


///////////////////////////////////////////////////


// concatenation -> spread operator
/*
let arr1=[10,20,30];
let arr2=[40,50,60];

let arr3=[...arr1,...arr2];  
console.log(arr3); // [ 10, 20, 30, 40, 50, 60 ]
*/

////////////////////////////////////////////////////

// creating deep copy
/*
let arr1=[10,20,30];
let arr2=[...arr1];

arr1.push(40);
arr2.pop();

console.log(arr1); // [ 10, 20, 30, 40 ]
console.log(arr2); // [ 10, 20 ]
*/

////////////////////////////////////////////////////

// splice() 

/*
let arr1=[10,20,30,40,50,60,70,80,90,100];
arr1.splice(4,3); // deleting the 3 elements from index 4
console.log(arr1); // [10,20,30,40,80,90,100]

arr1.splice(6,1);
console.log(arr1); // [ 10, 20, 30, 40, 80, 90 ]

arr1.splice(1,2);
console.log(arr1); // [ 10, 40, 80, 90 ]

arr1.splice(2,0,50,60,70);
console.log(arr1); // [10,50,60,70,80,90]

arr1.splice(1,0,20,30);
console.log(arr1); // [10,20,30,40,50,60,70,80,90]

arr1.splice(9,0,100);
console.log(arr1); // [10,20,30,40,50,60,70,80,90,100]
*/


//////////////////////////////////////////////////

// map() -> used to manipulate each element

/*
console.log([1,2,3,4,5].map((element,index)=>{
    return element*100;
}));  // [ 100, 200, 300, 400, 500 ]


console.log([1,2,3,4,5].map((element,index)=>{
    return [element];
}));  // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]


console.log(
    [1,2,3,4,5].map((element,index)=>{
        return [element,index];
    })
);  // [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 4 ] ]


console.log(
    [1,2,3,4,5].map((element,index)=>{
        return {[index]:element};
    })
); // [ { '0': 1 }, { '1': 2 }, { '2': 3 }, { '3': 4 }, { '4': 5 } ]
*/

////////////////////////////////////////////////////////////////////

//filter()

/*
console.log(
    [1,2,3,4,5].filter((element,index)=>{
        return element>=3;
    }).map((element,index)=>{
        return element*100;
    })
); // [ 300, 400, 500 ]


console.log(
    [{'eid':111,ename:'aakash',esal:100000},{'eid':222,ename:'suresh',esal:200000},{'eid':333,ename:'rajesh',esal:300000},{'eid':444,ename:'mahesh',esal:400000},{'eid':555,ename:'kamesh',esal:500000}].filter((element,index)=>{
        return element.esal>=300000;
    }).map((element,index)=>{
        return element.ename=='rajesh' ? {'eid':333,ename:'vihaan',esal:300000} : element;
    })
);

*/

/*

[
  { eid: 333, ename: 'vihaan', esal: 300000 },
  { eid: 444, ename: 'mahesh', esal: 400000 },
  { eid: 555, ename: 'kamesh', esal: 500000 }
]

*/

/////////////////////////////////////////////////////////


// reduce() -> it is used to find addition of elements

/*
console.log(
    [1,2,3,4,5].reduce((firstElement,accumulator)=>{
        return firstElement+accumulator;
    })
);  // 15


console.log(
    [100,200,300,400,500].reduce((firstElement,accumulator)=>{
        return firstElement+accumulator;
    })
); // 1500
*/

//////////////////////////////////////////////////////////////

/*
console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element*100;
    }).filter((element,index)=>{
        return element>=100;
    }).reduce((firstElement,accumulator)=>{
        return firstElement+accumulator;
    }) 
); // 1500
*/

//////////////////////////////////////////////////////////////

// reduceRight() -> find summation from the right side

/*
console.log(
    ['javascript','to','welcome'].reduceRight((firstElement,accumulator)=>{
        return firstElement+' '+accumulator;
    })
); // welcome to javascript
*/

/////////////////////////////////////////////////////////////

// slice()

/*

let arr1=[10,20,30,40,50,60,70,80,90,100];

console.log(arr1.slice(4,6)); // [ 50, 60 ]

console.log(arr1.slice(7,9)) // [ 80, 90 ]

console.log(arr1.slice(0,1)) // [10]
 
console.log(arr1.slice(9,10)); // [100]

console.log(arr1.slice(-6,-4)); // [50,60]

console.log(arr1.slice(-10,-9)); // [10]

*/

/////////////////////////////////////////////////////////////

// flat() -> to convert multidimensional array to single

/*
console.log(
    [[1],[2],[3]].flat(1)
); // [ 1, 2, 3 ]


console.log(
    [[[[[[[1]]]]]],[[[[[[[2]]]]]]],[[[[[[[3]]]]]]]].flat(Infinity)
); // [ 1, 2, 3 ]
*/

//////////////////////////////////////////////////////////////


/*

let arr1=[1,2,3];
let arr2=['one','two','three'];

console.log(
    arr1.map((element,index)=>{
        return [element,arr2[index]]
    }).flat(1)
); // [ 1, 'one', 2, 'two', 3, 'three' ]


console.log(
    arr1.flatMap((element,index)=>{
        return [element,arr2[index]]
    })
); // [ 1, 'one', 2, 'two', 3, 'three' ] 

*/

//////////////////////////////////////////////////////////////////

// findIndex()

/*

console.log(
    [1,2,3,4,5,6].findIndex((element,index)=>{
        return element==2;
    })
) // 5


console.log(
    [10,20,30,40,50,60,70,80,90,100].findIndex((element,index)=>{
        return element==50;
    })
) // 4


console.log(
    [10,20,30,40,50,60,70,80,90,100].findIndex((element,index)=>{
        return element==5;
    })
) // -1


let arr1=[10,20,30,40,50];
arr1.splice(arr1.findIndex((element,index)=>{
    return element==30;
}),1);
console.log(arr1); // [ 10, 20, 40, 50 ]


let arr2=[10,100,1000,10000,20,200,2000,20000];
arr2.splice(arr2.findIndex((element,index)=>{
    return element==20;
}),1);
console.log(arr2);


let arr3=[{'eid':111,ename:'aakash',esal:100000},
    {'eid':222,ename:'rajesh',esal:200000},
    {'eid':333,ename:'mahesh',esal:300000},
    {'eid':444,ename:'kamesh',esal:400000},
    {'eid':555,ename:'suresh',esal:500000}];
    arr3.splice(arr3.findIndex((element,index)=>{
        return element.eid==333;
    }),1);

    console.log(arr3); // deleting the third object

*/

////////////////////////////////////////////////////////////

/*

console.log(
    [1,2,3,4,5].some((element,index)=>{
        return element<=1;
    })
) // true

*/

///////////////////////////////////////////////////////////

/*

console.log(
    [1,2,3,4,5].every((element,index)=>{
        return element<=5;
    })
) // true

*/

///////////////////////////////////////////////////////////

/*

console.log(
    [1,2,3,4,5].find((element,index)=>{
        return element==3;
    })
);

*/

///////////////////////////////////////////////////////////////

/*

let arr1=[1,2,3,4,5];
console.log(arr1.fill(100)); // [ 100, 100, 100, 100, 100 ]

console.log(arr1.fill(200,1)); // [ 100, 200, 200, 200, 200 ]

console.log(arr1.fill(300,2)); // [ 100, 200, 300, 300, 300 ]

console.log(arr1.fill(400,3)); // [ 100, 200, 300, 400, 400 ]

console.log(arr1.fill(500,4)); // [ 100, 200, 300, 400, 500 ]

console.log(arr1.fill(600,1,3)); // [ 100, 600, 600, 400, 500 ]

*/

/////////////////////////////////////////////////////////////

// indexOf()

let arr1=[10,20,30,10,40,10,20,50];
arr1.forEach((element,index)=>{
    console.log(arr1.indexOf(element),index)
    console.log('--------------------------');
})

let arr2=[10,20,30,10,20,30];
arr2.forEach((element,index)=>{
    console.log(arr2.indexOf(element),index)
    console.log('--------------------------');
})

let arr3=[100,200,300,100,200,300];
console.log(arr3.filter((element,index)=>{
    return arr3.indexOf(element) == index;
}) 
);

























