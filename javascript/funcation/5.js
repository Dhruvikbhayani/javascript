// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '


// anonymous
// var uppaecase = function (std) {
//     var a, v
//     a = std.split(" ")
//     for (let i = 0; i < a.length; i++) {
//         a[i] = (a[i].charAt(0).toUpperCase() + a[i].slice(1))

//     }
//     return a;
// }
// console.log(uppaecase("dhruvik is god"))


//arrow function
// var uppaecase = (std) => {
//     var a, v
//     a = std.split(" ")
//     for (let i = 0; i < a.length; i++) {
//         a[i] = (a[i].charAt(0).toUpperCase() + a[i].slice(1))
//     }
//     console.log(str = a.join(" "))
// }

// console.log(uppaecase("dhruvik is god"))

function cell(get) {
    console.log("get", get)
    console.log(get("dhruvik is god"))
}

cell(function (std) {
    var a, v
    a = std.split(" ")
    for (let i = 0; i < a.length; i++) {
        a[i] = (a[i].charAt(0).toUpperCase() + a[i].slice(1))

    }
    return a.join(" ");
})


