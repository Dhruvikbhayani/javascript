// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// var abc = function (str) {
//   var combinations = str.split("");
//   let i, j
//   for (i = 0; i < str.length; i++) {
//     for (j = i + 1; j <= str.length; j++) {
//       console.log(str.slice(i, j))
//     }
//   }
//   return combinations;
// }
// console.log(abc("dog"))

//arrow function

// var abc = (str) => {
//   var combinations = str.split("");
//   let i, j
//   for (i = 0; i < str.length; i++) {
//     for (j = i + 1; j <= str.length; j++) {
//       console.log(str.slice(i, j))
//     }
//   }
//   return combinations;
// }
// console.log(abc("dog"))


// callback function
function d(get) {
  console.log("get", get)
  console.log(get("dog"))
}

d((get) => {
  get.split("");
  let i, j
  for (i = 0; i < get.length; i++) {
    for (j = i + 1; j <= get.length; j++) {
      console.log(get.slice(i, j))
    }
  }
  return combinations;
});
