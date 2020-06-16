

(function(){
    var a = b = 3;
  })();
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));

/*
Becasue of hoisting, Javascript will parse the code like below:

var a;    <- declared but not defined;
a = b;
b = 3;    <- declared and defined as global variable;  

*/

  /*
  Write a function that would allow you to do this using a closure. 
    var addSix = createBase(6);
    addSix(10); // returns 16
    addSix(21); // returns 27
  */

  function createBase(base){
      return function plus(num) {console.log(base + num)}
  }

  let addSix = createBase(6);
  addSix(10);
  addSix(21);
  let addSeven = createBase(7);
  addSeven(10);
  addSeven(21);

//   for (var i = 0; i < 3; i++) {
//     setTimeout(function() { alert(i); }, 1000 + i);
//   }

// for (var i = 0; i < 3; i++) {
//     setTimeout(function(j) { 
//         return alert(j); 
//       }(i), 1000 + i);
//   }

 function createCounter() {
   let counter = 0;
   const myFunction = function() {
     counter += 1
     return counter
   }
   return myFunction
 }
 const increment = createCounter()
    const c1 = increment()
    const c2 = increment()
    const c3 = increment()
    console.log('example increment', c1, c2, c3)

const incrementSec = createCounter()
    console.log(incrementSec(),incrementSec(),incrementSec())