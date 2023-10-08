// DOM SELECTION
let quoteText = document.getElementById('quote-text');
let author = document.getElementById('author');
let newQuoteBtn = document.getElementById('new-quote-button');

// array of quotes 
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr."
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        text: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
    },
]

// ADD EventListener
newQuoteBtn.addEventListener('click',displayQuote);

// Function
function genrateQuote(){
     let randomIndex = Math.floor(Math.random()*quotes.length)
    //  let randomIndex = Math.random()
    return quotes[randomIndex];
     
}
function displayQuote(){
    let singleQuote = genrateQuote();
    // console.log(singleQuote.text)
    // console.log(singleQuote.author)
    quoteText.textContent=singleQuote.text;
    author.textContent=`-${singleQuote.author}`
}

displayQuote();

//Objects 
// let student={
//     name: 'Harshad',
//     age: 20,
//     isPresent: true,
//     sayHello: function(){
//         console.log('hello I am object');
//     },
//     marks: ['20', '30']
// }

// console.log('student', student['isPresent']);
// console.log('student', student.name);
// console.log('student', student.sayHello());
// console.log('student', student.marks[1]);