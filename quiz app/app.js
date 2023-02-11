const first = document.getElementById("main1");
const second = document.getElementById("main2");
const third = document.getElementById("main3");

var total = 3;
var correct;
var wrong;
var percentage;


function submitone(){
    document.getElementById("main2").style.display = "block";
    document.getElementById("main1").style.display = "none";
}

function submittwo(){
    document.getElementById("main3").style.display = "block";
    document.getElementById("main2").style.display = "none";
}

function submitthree(){
    document.getElementById("main3").style.display = "none";
    document.getElementById("result").style.display = "block";
}