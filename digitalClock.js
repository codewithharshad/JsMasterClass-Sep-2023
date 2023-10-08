// string literals 
// DOM
// concadination
// date obj
// function
// setInterval

// function - collection code / set of statement


//declaration of fun
// let count = 0;
// function sayHello(){
//     console.log('Hello, PurpleGang',count++)
// }
// sayHello();

// setInterval(sayHello, 1000);


// let now = new Date()
// console.log(now)
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

// DOM SELECTION
let time = document.getElementById('time')
let dateYear = document.getElementById('date-year')
// console.log(time)

function digitalClock(){
    let now = new Date()
    let hours = now.getHours();
    let mins = now.getMinutes().toString().padStart(2,0);
    let secs = now.getSeconds().toString().padStart(2,0);

    const timeString = `<span>${hours}</span> : <span>${mins}</span> : <span>${secs}</span>`; 
    time.innerHTML = timeString;
    dateYear.innerHTML =`${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`
    // console.log(now)
    // console.log(now.getHours())
    // console.log(now.getMinutes())
    // console.log(now.getSeconds())
}

 setInterval(digitalClock, 1000)