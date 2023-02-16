// console.log("script is working from a different file");
// var username = prompt("Give me username:")
// alert("This script works: " + username);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
console.log(txtInput);

function clickHandler() {
        console.log("clicked!");
        console.log("click", txtInput.value);
      }

btnTranslate.addEventListener("click", clickHandler);




