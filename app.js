// console.log("script is working from a different file");
// var username = prompt("Give me username:")
// alert("This script works: " + username);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// outputDiv.innerText = "vija";

console.log(txtInput);

function clickHandler() {
        // console.log("clicked!");
        // console.log("click", txtInput.value);

        outputDiv.innerText = "abcefflljalfa" + txtInput.value;
      }

btnTranslate.addEventListener("click", clickHandler);


// document.querySelector("textarea");
// .btn-primary
// #input-btn
// "input[name='translator']"



