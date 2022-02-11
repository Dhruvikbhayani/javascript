// Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// 1.
// var palindrome=function(abc){
//     var a,b,c,d
//     a=String(abc)
//     b=a.split("")
//     c=b.reverse("")
//     d=c.join("")

//     if(a==d){
//         console.log("this is palindrome")
//     }
//     else{
//         console.log("this is not palimdrome")
//     }
//     return d;
// }
// console.log(palindrome("mom"))


//arrow function
// const a1 = (str) => {
//     var a = String(str)
//     var d = a.split("").reverse().join("");
//     var e = (a == d) ? console.log("palindrome") : console.log("not palindrome")
// }
// console.log(a1("mom"))

// callback function
function call(get) {
    console.log("get", get)
    console.log(get("mom"))
}
call((str) => { 
    var a = String(str)
    var d = a.split("").reverse().join("");
    var e = (a == d) ? console.log("palindrome") : console.log("not palindrome")
    return d
})