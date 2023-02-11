// const first = document.getElementById("main1");
// const second = document.getElementById("main2");
// const third = document.getElementById("main3");

// var total = 3;
// var correct = 0;
// var wrong = 0;
// var percentage;


// function submitone(){
//     const answer1 = document.querySelector('input[name="opt"]:checked');
//     if (answer1.value === "Hyper Text Markup Language") {
//         correct++;
//     } else {
//         wrong++;
//     }


//     document.getElementById("main2").style.display = "block";
//     document.getElementById("main1").style.display = "none";
// }

// function submittwo(){


//     const answer2 = document.querySelector('input[name="opt"]:checked');
//     if (answer2.value === "2") {
//         correct++;
//     } else {
//         wrong++;
//     }

//     document.getElementById("main3").style.display = "block";
//     document.getElementById("main2").style.display = "none";
// }

// function submitthree() {
//     const answer3 = document.querySelector('input[name="opt"]:checked');
//     if (answer3.value === "Closing tag has a / in front") {
//         correct++;
//     } else {
//         wrong++;
//     }

//     document.getElementById("main3").style.display = "none";
//     document.getElementById("result").style.display = "block";
// }

// document.getElementById("correct").innerHTML = correct;
// document.getElementById("wrong").innerHTML = wrong;
// document.getElementById("percentage").innerHTML = correct / 3 * 100;

const first = document.getElementById("main1");
const second = document.getElementById("main2");
const third = document.getElementById("main3");

var total = 3;
var correct = document.querySelector(".correct");
console.log(correct)
var wrong = 0;
var percentage = 0;

function submitone(){
  const selectedOption = document.querySelector('input[name="opt"]:checked');
  if (selectedOption && selectedOption.nextSibling.textContent === "Hyper Text Markup Language") {
    correct++;
  } else {
    wrong++;
  }

  document.getElementById("main2").style.display = "block";
  document.getElementById("main1").style.display = "none";
}

function submittwo(){
  const selectedOption = document.querySelector('input[name="opt"]:checked');
  if (selectedOption && selectedOption.nextSibling.textContent === "2") {
    correct++;
  } else {
    wrong++;
  }

  document.getElementById("main3").style.display = "block";
  document.getElementById("main2").style.display = "none";
}

function submitthree(){
  const selectedOption = document.querySelector('input[name="opt"]:checked');
  if (selectedOption && selectedOption.nextSibling.textContent === "Closing tag has a / in front") {
    correct++;
  } else {
    wrong++;
  }

  document.getElementById("main3").style.display = "none";
  document.getElementById("result").style.display = "block";
  calculatePercentage();
}

function calculatePercentage() {
  percentage = (correct / total) * 100;
  document.querySelector('#result span:nth-child(2)').textContent = total;
  document.querySelector('#result span:nth-child(4)').textContent = correct;
  document.querySelector('#result span:nth-child(6)').textContent = wrong;
  document.querySelector('#result span:nth-child(8)').textContent = percentage.toFixed(2);
}
