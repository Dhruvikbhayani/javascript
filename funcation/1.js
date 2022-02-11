//1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223

// anonymous
// var a = function (abc) {
//     var a, b, c, d
//     a = String(abc)
//     b = a.split("")
//     c = b.reverse()
//     d = c.join("")
//     return d;

// }
// console.log(a(123456))

// arrow function
// var a = (abc) => String(abc).split("").reverse().join("");
// console.log(a(789696541332565));



// call function 

function call(get) {
    console.log("get", get)
    console.log(get(123456))

}
call(function (abc) {
    var a, b, c, d
    a = String(abc)
    b = a.split("")
    c = b.reverse()
    d = c.join("")
    return d
});