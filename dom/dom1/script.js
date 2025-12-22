/*

5 phases of dom manipulation:

1.DOM -> document object model
2.Selection of HTML Elements
3.How to change or manipulate HTML
4.CSS ko kaise change kar sakte hai
5.event listeners (event ko kaise suna jaaye)

*/


/*

// Selection of html elements

let a=document.querySelector('h1');
console.log(a);

let b=document.querySelector('p');
console.log(b);

*/

/////////////////////////////////////////////////

/*

// how to change or manipulate html

let h1=document.querySelector('h1');
h1.innerHTML='this is you and me';

let p=document.querySelector('p');
p.innerHTML='hello my name is aakash and i studied computer science engineering in vidya jyothi institute of technology';

*/

//////////////////////////////////////////////////////

/*

// CSS ko kaise change kar sakte hai

let a=document.querySelector('h1');
a.style.backgroundColor='yellow';
a.style.color='black';

let b=document.querySelector('p');
b.style.backgroundColor='yellow';
b.style.color='black';

*/

//////////////////////////////////////////////////////

/*

// event listeners

let h1=document.querySelector('h1');
h1.addEventListener('click',()=>{
    h1.style.backgroundColor='orange';
    h1.style.color='red';
    h1.innerHTML='i studied in vjit';
    // console.log('alpha');
})

*/


/*

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

*/


let p=document.querySelector('p');

let button=document.querySelector('button'); // this is normal button

let offbutton=document.querySelector('.offbutton');  // this is a class

button.addEventListener('click',()=>{
    p.style.scale='1';
    // p.style.backgroundColor='yellow';
    // console.log('button clicked');
})

offbutton.addEventListener('click',()=>{
    p.style.scale='0.5';
    // p.style.backgroundColor='red';
})





