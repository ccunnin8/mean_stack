var _ = {
   map: function(arr,cb) {
     //code here;
     for (var i = 0; i < arr.length; i++){
       arr[i] = cb(arr[i]);
     }
     return arr;
   },
   reduce: function(arr,cb,memo=0) {
     // code here;
     var total = 0;
     for (var i = 0; i < arr.length; i++){
       total += cb(arr[i],memo);
     }
     return total;
   },
   find: function(arr,cb) {
     // code here;
     for (var i = 0; i < arr.length; i++){
       if (cb(arr[i])){
         return i;
       }
     }
     return -1;
   },
   filter: function(arr,cb) {
     // code here;
     var new_arr = [];
     for (var i = 0; i < arr.length; i++){
       if (cb(arr[i])){
         new_arr.push(arr[i]);
       }
     }
     return new_arr;
   },
   reject: function(arr,cb) {
     // code here;
     var new_arr = [];
     for (var i = 0; i < arr.length; i++){
       if (!cb(arr[i])){
         new_arr.push(arr[i]);
       }
     }
     return new_arr;
   }
 }
// you just created a library with 5 methods!
var test = [1,2,3,4,5];
console.log(_.reject(test,function(x) { return x % 2 === 0 }));
