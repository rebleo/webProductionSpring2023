console.log("hello javascript!")
//variables
let theName = "rebecca";
let theNumber = 30;
console.log(theName + " " + theNumber);
// grabbing html elements
// 
const theButton = document.querySelector("button");
console.log(theButton)
let thePara = document.querySelector("p")
// adding an event listener to said element
theButton.addEventListener("click", potato)
//writing yr own function that does stuff
function potato(){
    console.log("yay - a click!");
    thePara.style.backgroundColor = "pink"

}


let thePrice = 5;
let theQuantity = 50;
let theTotal = thePrice * theQuantity;

console.log("js!");



// let theButton = document.querySelector("button");
// let theTxt = document.querySelector('h2');
// let theBody = document.querySelector('body');
// console.log(theTxt)
// //
// theButton.addEventListener('click', theClick);

// function theClick(){
//  console.log("click!!!");
//  theButton.style.backgroundColor = "yellow";
//  theButton.style.fontSize = 80;
//  theButton.style.color = "blue";
//  theBody.style.backgroundColor =  "purple";
 
// }


// document.addEventListener('keydown', myFunction)

// function myFunction() {
//  console.log("yay!");
//  theTxt.textContent = "you pressed any key!!"
// }

