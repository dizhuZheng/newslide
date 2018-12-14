var slideIndex;
var flag = false;
var v;
var x, y = "";

var imgFolder =  "imgs/";

var myArr = [{"src": imgFolder+ "1.jpg", "info": "caption1"},
{"src": imgFolder+ "2.jpg", "info": "caption2"},{"src": imgFolder+ "3.jpg", "info": "caption3"},
{"src": imgFolder+ "3.jpg", "info": "caption3"},{"src": imgFolder+ "4.jpg", "info": "caption4"},
{"src": imgFolder+ "5.jpg", "info": "caption5"},{"src": imgFolder+ "6.jpg", "info": "caption6"},
{"src": imgFolder+ "7.jpg", "info": "caption7"},{"src": imgFolder+ "8.jpg", "info": "caption8"},
{"src": imgFolder+ "9.jpg", "info": "caption9"},{"src": imgFolder+ "10.jpg", "info": "caption10"},
{"src": imgFolder+ "11.jpg", "info": "caption11"},{"src": imgFolder+ "12.jpg", "info": "caption12"},
{"src": imgFolder+ "13.jpg", "info": "caption13"},{"src": imgFolder+ "14.jpg", "info": "caption14"},
{"src": imgFolder+ "15.jpg", "info": "caption15"},{"src": imgFolder+ "16.jpg", "info": "caption16"},
{"src": imgFolder+ "17.jpg", "info": "caption17"},{"src": imgFolder+ "18.jpg", "info": "caption18"},
{"src": imgFolder+ "19.jpg", "info": "caption19"},{"src": imgFolder+ "20.jpg", "info": "caption20"}
];

for (y in myArr) {
    x += "<img src = " + myArr[y].src+ ">";
}

document.getElementById("demo").innerHTML = x ;

function showSlides() {
    disappear();

    document.getElementById("keys").style.display = "block";

    if (document.getElementById("play").value == "Random" && !flag) {
        document.getElementById("key2").style.display = "block";
        slideIndex = 0;
        b();
    }

    else if (document.getElementById("play").value == "Sequential")
    {
        document.getElementById("key1").style.display = "block";
        slideIndex = 1;
        a(slideIndex);
    }

    if(document.getElementById("effect").value == "Transition")
    {
        document.getElementById("myCanvas").classList.add("transit");
    }

    else if(document.getElementById("effect").value == "Transformation")
    {
        document.getElementById("myCanvas").classList.add("transform");
    }
}

    function plusSlides(n) {
        a(slideIndex += n);
    }

    function currentSlide(n) {
        a(slideIndex = n);
    }

    function stop(){
        flag = true;
        clearTimeout(v);
    }

    function start(){
        flag = false;
        b();
    }

function a(n) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var i;
    var slides = document.getElementsByTagName("IMG");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        ctx.clearRect(15, 15, 650, 650);
    }
    ctx.drawImage(slides[slideIndex - 1], 15, 15);
    ctx.font = "bold 30px arial";
    ctx.fillStyle = "blue";
    ctx.fillText(myArr[slideIndex-1].info,400,500);
}

function b() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var i;
    var slides = document.getElementsByTagName("IMG");

    for (i = 0; i < slides.length; i++) {
        ctx.clearRect(15, 15, 650, 650);
    }

    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }

    ctx.drawImage(slides[slideIndex - 1], 15, 15);
    ctx.font = "bold 30px arial";
    ctx.fillStyle = "blue";
    ctx.fillText(myArr[slideIndex-1].info,400,500);
    v = setTimeout(b, 2000);
    v;
 }

function disappear() {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "block";
}

function check(){
    if(document.getElementById("play").value == "" || document.getElementById("effect").value == "")
        document.writeln("Either input can't be empty !");
    else
        showSlides();
}