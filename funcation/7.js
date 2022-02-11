// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 

//anoym==
// function vowel_count(str1) {
//     var a = 'IaeiouAEOU';
//     var b = 0;

//     for (var x = 0; x < str1.length; x++) {
//         // console.log(a.indexOf(str1[x]))

//         if (a.indexOf(str1[x]) >= 0) {
//             b += 1;
//         }

//     }
//     return b;
// }
// console.log(" output")
// console.log(vowel_count("jaimIn"));


//arrow funcation
// var vowel_count = (str) => {
//     var a = 'IaeiouAEOU';
//     var b = 0;

//     for (var x = 0; x < str.length; x++) {
//         // console.log(a.indexOf(str[x]))

//         if (a.indexOf(str[x]) >= 0) {
//             b += 1;
//         }

//     }
//     return b;
// }
// console.log(" output")
// console.log(vowel_count("jaimIn"));

//callback functions
function abc(xyz) {
    console.log("xyz", xyz)
    console.log("output")
    console.log(xyz('jaimin'))
}
abc((xyz) => {
    var a = 'IaeiouAEOU';
    var b = 0;

    for (var x = 0; x < xyz.length; x++) {
        // console.log(a.indexOf(str[x]))

        if (a.indexOf(xyz[x]) >= 0) {
            b += 1;
        }

    }
    return b;

});

