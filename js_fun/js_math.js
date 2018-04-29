function zero_negativity(array){
  for (let i = 0; i < array.length; i++){
    if (array[i] < 0) {
      return false;
    }
  }
  return true;
}

function is_even(num){
  return num % 2 === 0;
}

function how_many_even(array){
  var total = 0
  for (let i = 0; i < array.length; i++) {
    if (is_even(array[i])) {
      total += 1;
    }
  }
  return total;
}

function create_dummy_array(n){
  array = [];
  for (let i = 0; i < n; i++){
    array.push(Math.floor(Math.random() * 9));
  }
  return array;
}

function random_choice(array){
  let length = array.length;
  let num = Math.floor(Math.random() * length);
  return array[num];
}

console.log(zero_negativity([1,2,3,4]));
console.log(zero_negativity([-1,2,3,4,]));
console.log(is_even(5));
console.log(is_even(6));
console.log(how_many_even([1,2,3,4,5,6]));
console.log(create_dummy_array(10));
console.log(random_choice([2,3,4,5,]));
