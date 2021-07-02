'use strict'

function printIm(print){
    print();
}
function printDel(print,timeout){
    setTimeout(print, timeout);
}
console.log('1');
setTimeout(()=> console.log('2') ,3000);

console.log('3');



printIm(()=>console.log('hello'));


printDel(()=>console.log('asny'), 1000);