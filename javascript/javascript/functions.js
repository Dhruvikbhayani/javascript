// v=18
//functions call 
// function mytable(){
//     for(i=1;i<=10;i++){
//         console.log(`2*${i}=${2*i}`)
//       }
// }
// mytable();
// _________________________________________________________
//v=19
// function parameters & argument 

// function mytable(num){ //parameters
//     for(i=1;i<=10;i++){
//         console.log(`${num}*${i}=${num*i}`)
//       }
      
// }
// mytable(2); //argument 
// mytable(5);

// function my(num,num1){
//     console.log(num+num1)
// }
// my(3,8)

// ________________________________________________
// v=20

//the argument object in 


// function add(){

//     if(arguments == 0){
//         console.log("No parameter passed !")

//     }
//     else{
//         let sum =0;
//         for(let i=0;i<arguments.length;i++){
//         sum=sum+arguments[i];
//         }
//         console.log(sum)
//     }

// }

// add(5,15,11)

// ______________________________________________________________________________
// v-=21 == returning a value in javascript

// function add(a,b){
//     return a+b;
// }
// let c=add(5,10)

// console.log(c)
// _________________________________________________________________________________
// v=22  == golbal var & local var

// let car ="Audi"//Golbal variable

// function add(){
//     let result=22
// }

// _______________________________________________________________________________________
// V=23 == anonymous Funcations

//  Function expression
// let show=function (){
//     console.log("Hello world")
// };
// show()

//time set mate = settimeout()
// setTimeout(function,time)

// function show(){
//     console.log("hello ")
// } 
//     setTimeout(show,3000)
// ____________________________________________________________________
// v=24 == Immediately invoked function

//  (function(){
//      console.log("Hello")
//  })();

// ___________________________________________________________________________
// v=26 object 

// let person = {
//     firstname:"dhruvik",
//     Lastname:"bhayani"
// };
// person.age=22

//access type in object

// 1.
// console.log(person.firstname)

//2.
// console.log(person["first name"]).

// delete person.Lastname

// check propaties
// console.log("height" in person)
 
// loop true all object access in for in 

// for(let key in person){
//     console.log(key);
// }

// for(let key in person){
//     console.log(key + ":" +person[key]);
// }

// ___________________________________________________________________________
// v= 27 method object

// 1.first method
// person.sayhello = function (){
//     console.log("Hello !")
// }

// person.sayhello();

// 2.method

// function greet(){
//     console.log("Hello !")
// }

// person.sayhello=greet;

// person.sayhello();

// 3.method

// let person = {
//     firstname:"dhruvik",
//     Lastname:"bhayani",
//     sayhello:function (){
//             console.log("Hello !")
//         }
// };
// person.age=22

// person.sayhello(); 

// 4.method

// let person = {
//     firstname:"dhruvik",
//     Lastname:"bhayani",
//     sayhello (){
//             console.log("Hello !")
//         }
// };
// person.age=22

// person.sayhello(); 

// ____________________________________________________________
// v=28   this user object

// propaties access ==this
// let person = {
//     firstname:"Dhruvik",
//     Lastname:"bhayani",
//     sayhello (){
//             console.log("Hello ! I am "+ this.firstname+" and I have a "+car.brand+" car")
//         }
// };
// person.age=22

// let car ={
//     brand : "tata",
//     model : "safari"
// }

// person.sayhello(); 

// ___________________________________________________________________
// v=29 Math Object

// console.log(Math.PI)
// console.log(Math.E)

// round 
// var x=4.2
// console.log(Math.round(x))

// ceil
// var x=4.2
// console.log(Math.ceil(x))

// floor
// var x=4.2
// console.log(Math.floor(x))

//trunc
// var x=4.2
// console.log(Math.trunc(x))

// pow (base,pow)
// console.log(Math.pow(2,5))

//sqrt
// console.log(Math.sqrt(64))


//min
// console.log(Math.min(64,5,66,600,400))


//max
// console.log(Math.max(64,50,600,1410))

// _________________________________________________________________
// v=30

// random

// console.log(Math.floor(Math.random()*10)+1)

// var x=(Math.floor(Math.random()*(max - min)+min))
// console.log(x)

// function get(min,max){
//     var x=(Math.floor(Math.random()*(max - min+1)+min))
//   return x
// }
// console.log(get(10,50))
// _______________________________________________________________________________________
// v=31 date

// date(years,month,day,h,mim,sec)
// var x= new Date(2018,10,18,7,30,05);
// console.log(x)
