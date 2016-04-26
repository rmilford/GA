"use strict";


 var title = document.getElementById("title");

 title.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "black";

    setTimeout(function() {
      event.target.style.color = "";
    }, 800);
  }, false);

 
var sayHello = document.getElementById("submit");

sayHello.addEventListener("click", function() {
    var name = prompt("Hello! What's your name?");

}, false);

