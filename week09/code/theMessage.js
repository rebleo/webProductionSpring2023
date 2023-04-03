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