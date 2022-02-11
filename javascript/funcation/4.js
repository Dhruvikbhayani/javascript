// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

// var abc = function (str) {
//     var a, b, c, d, e
//     a = String(str)
//     b = a.split("")
//     c = b.sort()
//     d = c.join("")
//     return d;

// }
// console.log(abc("webmaster"))

//arrow function
// var a=(abc)=>String(abc).split("").sort().join("").replace("");
// console.log(a("dgnhsjdm"));

function cell(get) {
    console.log("get", get)
    console.log(get("webmaster"))
}
cell((abc) => {
    var a = String(abc).split("").sort().join("");
    return a

})

