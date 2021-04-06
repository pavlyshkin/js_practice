'use strict';

function myFunction(b) {
  if (typeof b !== 'string') {
    alert('аргумент не строка');
    return;
  }

  b = b.trim(); 
  return b.length > 50 ? b.slice(0, 50) + '...' : b;
}
myFunction();
console.log(myFunction());