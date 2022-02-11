// 9. Write a JavaScript function which accepts an argument and returns the type. 
// var d = function (a, b) {
//     return a + b
// }
// console.log(d(10, 20))

//arrow function
// var d = (a, b) => a + b
// console.log(d(10, 20))

function abc(xyz) {
    console.log("xyz", xyz)
    console.log(xyz(10, 20))
}

abc((a, b) => {
    return a + b
    // console.log(d(10, 20))
})