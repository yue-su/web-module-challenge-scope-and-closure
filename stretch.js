

(function(){
    var a = b = 3;
  })();
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));

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