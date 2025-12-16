// creating the promise

/*

let promise1=new Promise((resolve,reject)=>{
     resolve('tommarow i will discuss dom manipulation');
});

//consuming the promise
promise1.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});

*/

////////////////////////////////////////////////////////

/*

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('we will discuss dom manipulations in tommarow sessions');
    },5000);
});

promise2.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
})

*/

/////////////////////////////////////////////////////////////


/*

let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello1');
    },5000)
});

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello2');
    },10000)
});

let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello3');
    },15000)
});

Promise.all([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes)
    },(errRes)=>{
    console.log(errRes)   // [ 'hello1', 'hello2', 'hello3' ]
});  // result will be after 15 seconds

*/



/*

// repeated code

promise1.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
})

promise2.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
})

promise3.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
})

*/



//////////////////////////////////////////////////////////////


/*

let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello1');
    },5000)
});

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Error');
    },10000)
});

let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello3');
    },15000)
});

Promise.all([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes)
    },(errRes)=>{
    console.log(errRes)   
});   // Error


*/

/////////////////////////////////////////////////////////////////

/*

let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello1');
    },5000)
});

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Error');
    },10000)
});

let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello3');
    },15000)
});

Promise.allSettled([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes)
    },(errRes)=>{
    console.log(errRes)   
});

*/

// [
//   { status: 'fulfilled', value: 'hello1' },
//   { status: 'rejected', reason: 'Error' },
//   { status: 'fulfilled', value: 'hello3' }
// ]


/////////////////////////////////////////////////////////////////////

/*

 let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello1');
    },0)
});

let promise2=new Promise((resolve,reject)=>{
        resolve('hello2');
});

promise1.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
})

promise2.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
})


// hello2
// hello1


*/

/////////////////////////////////////////////////////////////

/*

let promise1=new Promise((resolve,reject)=>{
        resolve('hello1');
});

async function myfun(){
    let result=await promise1;
    console.log(result);
}

myfun();  // hello1

*/

////////////////////////////////////////////////////////////////

/*

// callback hell not used 

let add = (num,callback)=>{
    return callback(num+5,false);
}; 


let sub= (num,callback)=>{
    return callback(num-3,false);
};

let mul=(num,callback)=>{
    return callback(num*2,false); 
}

let div=(num,callback)=>{
    return callback(num/2+3,false);
}

add(5,(addRes,error)=>{
    if(!error){
        sub(addRes,(subRes,error)=>{
            if(!error){
            mul(subRes,(mulRes,error)=>{
                if(!error){
                   div(mulRes,(divRes,error)=>{
                    console.log(divRes);
                   })
                }
            })
            }
        })
    }
});

*/

////////////////////////////////////////////////////////////////////


let add=(num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num+5);
    })
}

let sub=(num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num-3);
    })
}

let mul=(num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num*2);
    })
}


let div=(num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num/2+3);
    })
}



/*

// first then function

add(5).then((posRes)=>{
    sub(posRes).then((posRes)=>{
        mul(posRes).then((posRes)=>{
            div(posRes).then((posRes)=>{
                console.log(posRes);
            },(errRes)=>{

            })
        },(errRes)=>{

        })
    },(errRes)=>{

    })
},(errRes)=>{

});

*/


/////////////////////////////////////////////////////////

// async and await 

/*

async function calc(){
    let addRes=await add(5);
    let subRes=await sub(addRes);
    let mulRes=await mul(subRes);
    let divRes=await div(mulRes);

    console.log(addRes,subRes,mulRes,divRes); 
}

calc();

*/

/////////////////////////////////////////////////////////////

// IIFE

/*


(async()=>{
    let addRes=await add(5);
    let subRes=await sub(addRes);
    let mulRes=await mul(subRes);
    let divRes=await div(mulRes);

    console.log(addRes,subRes,mulRes,divRes); 
})()

*/
