function startTrafficSignal1() {
    var green1 = document.getElementById("green1");
    var red1 = document.getElementById("red1");
    var yellow1 = document.getElementById("yellow1");

    var green2 = document.getElementById("green2");
    var red2 = document.getElementById("red2");
    var yellow2 = document.getElementById("yellow2");



    green1.style.opacity = 1;
    green2.style.opacity = 1;

    setTimeout(function() {
        green1.style.opacity = 0.2;
        red1.style.opacity = 0.2;
        yellow1.style.opacity = 1;

        green2.style.opacity = 0.2;
        red2.style.opacity = 0.2;
        yellow2.style.opacity = 1;
    }, 5000);

    setTimeout(function() {
        green1.style.opacity = 0.2;
        red1.style.opacity = 1;
        yellow1.style.opacity = 0.2;

        green2.style.opacity = 0.2;
        red2.style.opacity = 1;
        yellow2.style.opacity = 0.2;
    }, 7000);

    setTimeout(function() {
        green1.style.opacity = 0.2;
        red1.style.opacity = 1;
        yellow1.style.opacity = 1;

        green2.style.opacity = 0.2;
        red2.style.opacity = 1;
        yellow2.style.opacity = 1;
    }, 9000);

    setTimeout(function() {
        green1.style.opacity = 1;
        red1.style.opacity = 0.2;
        yellow1.style.opacity = 0.2;

        green2.style.opacity = 1;
        red2.style.opacity = 0.2;
        yellow2.style.opacity = 0.2;
    }, 12000);
}


function startTraficSignal2() {
    var green3 = document.getElementById("green3");
    var red3 = document.getElementById("red3");
    var yellow3 = document.getElementById("yellow3");

    var green4 = document.getElementById("green4");
    var red4 = document.getElementById("red4");
    var yellow4 = document.getElementById("yellow4");

    green3.style.opacity = 1;
    green4.style.opacity = 1;

    setTimeout(function() {
        green3.style.opacity = 0.2;
        red3.style.opacity = 0.2;
        yellow3.style.opacity = 1;

        green4.style.opacity = 0.2;
        red4.style.opacity = 0.2;
        yellow4.style.opacity = 1;
    }, 1000);

    setTimeout(function() {
        green3.style.opacity = 0.2;
        red3.style.opacity = 1;
        yellow3.style.opacity = 0.2;

        green4.style.opacity = 0.2;
        red4.style.opacity = 1;
        yellow4.style.opacity = 0.2;
    }, 3000);

    setTimeout(function() {
        green3.style.opacity = 0.2;
        red3.style.opacity = 1;
        yellow3.style.opacity = 1;

        green4.style.opacity = 0.2;
        red4.style.opacity = 1;
        yellow4.style.opacity = 1;
    }, 5000);

    setTimeout(function() {
        green3.style.opacity = 1;
        red3.style.opacity = 0.2;
        yellow3.style.opacity = 0.2;

        green4.style.opacity = 1;
        red4.style.opacity = 0.2;
        yellow4.style.opacity = 0.2;
    }, 7000);
}

var timer = setInterval(function() {
    startTrafficSignal1();
}, 12000);

startTrafficSignal1();

var timer = setInterval(function() {
    startTraficSignal2();
}, 12000);
startTraficSignal2();