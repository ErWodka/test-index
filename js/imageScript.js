// imageScript.js

var testo = document.getElementById("testo");
var immagine = document.getElementById("immagine");
var didascalia = document.getElementById('didascalia');

didascalia.addEventListener("click", function () {
    if (testo.style.backgroundColor === "brown") {
        testo.style.backgroundColor = "green";
        console.log("verde");
    } else {
        testo.style.backgroundColor = "brown";
        console.log("marrone");
    }
});
