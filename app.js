// console.log("script is working from a different file");
// var username = prompt("Give me username:")
// alert("This script works: " + username);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json";

// outputDiv.innerText = "vija";

console.log(txtInput);

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server: try again after some time");
}

function clickHandler() {
        // console.log("clicked!");
        // console.log("click", txtInput.value);

        // outputDiv.innerText = "abcefflljalfa" + txtInput.value;

        var inputText = txtInput.value;

        fetch(getTranslationURL(inputText))
          .then(response => response.json())
          .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            })
          .catch(errorHandler);
      }

btnTranslate.addEventListener("click", clickHandler);


// document.querySelector("textarea");
// .btn-primary
// #input-btn
// "input[name='translator']"



