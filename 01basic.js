// node -v
// 18.0.2
// node 01basic.js

// console.log('hello purplegang');

// let, var, const 
// variable - name given to the memory location.

// how to declare variable in JS 
// var variableName = value;

//  var firstName = 'Harshad'; //string
//  var studentId = 20; // number
//  var isPresent = true; //boolean 
 
// let firstName = 'Harshad'; //string
// let studentId = 20; // number
// let isPresent = true; //boolean

// const firstName = 'Harshad'; //string
// const studentId = 20; // number
// const isPresent = true; //boolean

//declare with assign
// var studentId = 20; // number
//   studentId = 200; // number

// let studentId = 20; // number
// studentId = 22; // number

// const studentId = 20; // number
//  studentId = 22; // number

// let studentId = 20; // number
// console.log(studentId)
 
// scope in JS (let var)

// array in JS
// array - collection of data 
// array - collection of data which are under same name and same type

// let student = ['Harshad', 'Deepak', 'Simraan', 'Rajesh', 'Chetan']
//starts from 0

//mutate or update
// student[4] = "ansh"
// student[1] = "Rizka"

//access
// console.log(student[1])
// console.log(student[4])

// conditional stmt

// if , switch
// simple if
// let isPresent = false; //boolean

// if(isPresent){
//     // console.log('Harshad is present')
// }

// if else
// if(isPresent){
//     console.log('Harshad is present')
// }
// else{
//     console.log('Harshad is absent')
// }


// else if ladder
// let totalMarks = 32;

// if(totalMarks>90) 
//     console.log('First class')
// else if(totalMarks>60) 
//     console.log('Second class')
// else if(totalMarks>35) 
//     console.log('Pass')
// else
//     console.log('Fail')

// console.log('I am out out of if')


// switch 
//  let totalMarks = 21;

//  switch(true){
//     case (totalMarks> 90) : 
//             console.log('First')
//             break;
//     case (totalMarks> 60) : 
//             console.log('Second')
//             break;
//     case (totalMarks> 35) : 
//             console.log('Pass')
//             break;
//     default: 
//             console.log('Fail')
//             break;
//  }
//  console.log('I am out out of switch')

// for

// for - looping stmt
// for(initialization; compare; inc/dec){
    // body of for
// }

let student = ['Harshad', 'Deepak', 'Simraan', 'Rajesh', 'Chetan']
// console.log(student.length)
// for (let i = 0; i < student.length; i++) {
//     console.log(student[i])
// }

// scope
// different types of for 

// forof 
// for (const iterator of student) {
//     console.log('iterator', iterator)
// }
 
// 6) Mathematic operations  👈🏻
// addition
// sub
// div
// mul
// inc/dec

// let a=2, b=3;
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(Math)
// console.log(a**b)
// console.log(Math.pow(a,b))
// console.log(Math.max(a,b,20))
// console.log(Math.min(a,b,20))
// console.log(Math.random())
 
//post fix
// let test = a++;
// prefix
// let test = ++a;
// console.log(test)
// console.log(a)

// string / template literals 

// let firstName ='Harshad';
// let secondName ='Code';
// let studentId =20;
 
// console.log(firstName + ' ' + secondName + ' ' + 20)
// console.log(`${firstName} ${secondName} having student ID: ${studentId} is present today`)

// let a="20";
// console.log(a+10)
// "20"+10
// 2010

// DOM - Document Object Model