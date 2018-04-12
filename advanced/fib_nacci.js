function fib() {
  // Some variables here'
  var a = 1;
  var b = 1;
  function nacci() {
    console.log(a);
    var x = a;
    a = b
    b += x
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"

//recursive fib 
// function fib_num(a,b){
//   console.log(b);
//   if (b > 50) {
//     return false;
//   }
//   return fib_num(b,a+b);
// }
//
// fib_num(0,1);
