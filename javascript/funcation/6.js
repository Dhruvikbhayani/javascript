// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'


// anonymous
// var sab = function (abc) {
//     var a, b, c
//     a = abc.split(" ")
//     console.log(a.sort())
//     console.log(a[0])
// }
// console.log(sab("Web Development Tutorial"))


//arrow funcation

// var sab = (abc) => {
//     var a, b, c
//     a = abc.split(" ")
//     console.log(a.sort())
//     console.log(a[0])
// }
// console.log(sab("Web Development Tutorial"))

//callback function

function abc(xyz) {
    console.log("xyz", xyz)
    console.log(xyz("Web Development Tutorial"))
}
abc((xyz) => {
    var a, b, c
    a = xyz.split(" ")
    a.sort()
    console.log(a[0])

})



