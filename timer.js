var theVertiUP = document.querySelector("#vertiUP");
var currentPos = 0;

var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;



setTimeout(function() {
    function moveCar() {
        currentPos += 5;

        theVertiUP.style.bottom = currentPos + "px";

        if (Math.abs(currentPos) >= 1500) {
            currentPos = -200;
        }


        requestAnimationFrame(moveCar);

    }


    moveCar();
}, 3000);

var theVertiDOWN = document.querySelector("#vertiDOWN");
var currentPos1 = 0;


setTimeout(function() {
    function moveCar1() {
        currentPos1 += 5;

        theVertiDOWN.style.top = currentPos1 + "px";

        if (Math.abs(currentPos1) >= 1500) {
            currentPos1 = -200;
        }

        requestAnimationFrame(moveCar1);

    }
    moveCar1();
}, 3000);

var theHoriLEFT = document.querySelector("#horiLEFT");
var currentPos2 = 0;

function moveCar2() {
    currentPos2 += 5;

    theHoriLEFT.style.right = currentPos2 + "px";

    if (Math.abs(currentPos2) >= 1500) {
        currentPos2 = -200;
    }

    requestAnimationFrame(moveCar2);

}
moveCar2();

var theHoriRight = document.querySelector("#horiRIGHT");
var currentPos3 = 0;

function moveCar3() {
    currentPos3 += 5;

    theHoriRight.style.left = currentPos3 + "px";

    if (Math.abs(currentPos3) >= 1500) {
        currentPos3 = -200;
    }

    requestAnimationFrame(moveCar3);

}
moveCar3();