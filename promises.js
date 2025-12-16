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
