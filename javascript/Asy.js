//https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/
let i = 1;
function fun1() {
  console.log(i);
  i++;
}

let x = setInterval(fun1, 100);

setTimeout(() => {
  clearInterval(x);
}, 4400);

let Fruits = ["strawberry", "grapes", "banana", "apple"];
let j = 0;

function fun2() {
  console.log(Fruits[j]);
  j++;
}

let y = setInterval(fun2, 1100);

setTimeout(() => {
  clearInterval(y);
}, 4500);
