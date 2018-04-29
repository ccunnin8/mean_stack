function starString(num){
  let string = "";
  let star = typeof(num) === "string" ? num[0].toLowerCase() : "*";
  let length = typeof(num) === "string" ? num.length : num;
  for (let i = 0; i < length; i++){
      string += star;
  }
  return string;
}

function drawStars(arr){
  for (let i = 0; i < arr.length; i++){
      console.log(starString(arr[i]));
  }
}

let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
console.log(drawStars(x));
