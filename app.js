<<<<<<< Updated upstream

var secondHand = document.querySelector(".");
var minuteHand = document.querySelector(".");
var hourHand = document.querySelector(".");

function setTime(){

    var currentDate = new Date();
    var seconds = currentDate.getSeconds();
    var minutes = currentDate.getMinutes();
    var hours = currentDate.getHours();

}

funtion (element, ){

}
=======

setInterval( setTime, 1000);

var secondHand = document.querySelector(".second");
var minuteHand = document.querySelector(".minute");
var hourHand = document.querySelector(".hour");

function setTime(){

    var currentDate = new Date();
    var secondsRatio = currentDate.getSeconds() / 60;
    var minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    var hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);


}

function setRotation (element, rotationRatio ){
    element.style.setProperty("--rotation", rotationRatio * 360);
}

setTime();
>>>>>>> Stashed changes
