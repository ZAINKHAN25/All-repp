// var studentsname = []
// studentsname[0] = "ZAIN"
// studentsname[1] = " Huzaifa"
// alert(studentsname)
var studentsnames = {}
studentsnames[0] = "USAMA"
studentsnames[1] = " Talha"
console.log(studentsnames)

var stringarray = ["This is a string array"]
console.log(stringarray)

var numberarray = [0, 1, 2, 3 /*this is number array*/]
console.log(numberarray)

var booleanarray = [true, false]
console.log(booleanarray)

var mixedArray = [1, "hello", true, null, {name: "John", age: 30}];
console.log(mixedArray)

var mobileNetworks = ["Mobilink", "Telenor", "Zong", "Warid", "Ufone"];
console.log(mobileNetworks)

var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h3>Available Education Qualifications in Pakistan:</h3>");

document.write("<ul>");
for(var i = 0; i < educationQualifications.length; i++){
  document.write("<li>" + educationQualifications[i] + "</li>");
}
document.write("</ul>");

var topMovies2015 = [];

// Add movies to the array one by one
topMovies2015.push("Star Wars: The Force Awakens");
topMovies2015.push("Jurassic World");
topMovies2015.push("Furious 7");
topMovies2015.push("Avengers: Age of Ultron");
topMovies2015.push("Inside Out");

// Display the elements of the array
document.write("<h3>Top Movies of 2015:</h3>");
document.write("<ul>");
for(var i = 0; i < topMovies2015.length; i++){
  document.write("<li>" + topMovies2015[i] + "</li>");
}
document.write("</ul>");

document.write("<p>The length of the array is: " + topMovies2015.length + "</p>");

var favcars = ["Audi", "Lamborghini", "Ferari", "Bhughatti", "Mecedes", "Land Crusier", "Rolls Royce"]

document.write(`<h1>Favourite Cars</h1> <br />`);
document.write(`${favcars} <br />`)
document.write(`first index of the array : 0 <br />`)
document.write(`Car at first index of the array : ${favcars [0]}.  <br />`)
document.write(`Last index of array : ${favcars.length-1} <br />`)
document.write(`Car at last index of the array : ${favcars [6]}.<br />  <br />`)

// var studentsbio = {
//     name: "Zain" ,
//     numberofname : 320,
//     percentageofname: "64%"
// }

// alert(studentsbio)

// Store student names and scores in arrays
var studentNames = ["Zain", "Huzaifa", "Usama"];
var studentScores = [420, 350, 450];

// Calculate the percentage scores for each student
var totalMarks = 500;
var studentPercentages = [];
for (var i = 0; i < studentScores.length; i++) {
  var percentage = (studentScores[i] / totalMarks) * 100;
  studentPercentages.push(percentage);
}

// Display the scores and percentages for each student
for (var i = 0; i < studentNames.length; i++) {
  document.write(studentNames[i] + " scored " + studentScores[i] + " out of " + totalMarks + " (" + studentPercentages[i] + "%)<br />");
}



// Initialize the color array
// var colors = ["red", "green", "blue", "yellow"];

// Display the array elements in the browser
// document.write("Initial array: " + colors + "<br><br>");

// Ask the user what color they want to add to the beginning of the array
// var newColorStart = prompt("Enter a color to add to the beginning of the array:");
// colors.unshift(newColorStart);

// Display the updated array in the browser
// document.write("Array with new color at the beginning: " + colors + "<br><br>");

// Ask the user what color they want to add to the end of the array
// var newColorEnd = prompt("Enter a color to add to the end of the array:");
// colors.push(newColorEnd);

// // Display the updated array in the browser
// document.write("Array with new color at the end: " + colors + "<br><br>");

// // Add two more colors to the beginning of the array
// colors.unshift("purple", "orange");

// // Display the updated array in the browser
// document.write("Array with two more colors at the beginning: " + colors + "<br><br>");

// // Delete the first color in the array
// colors.shift();

// // Display the updated array in the browser
// document.write("Array with the first color removed: " + colors + "<br><br>");

// // Delete the last color in the array
// colors.pop();

// // Display the updated array in the browser
// document.write("Array with the last color removed: " + colors + "<br><br>");

// // Ask the user at which index they want to add a color and the color name
// var indexToAdd = prompt("Enter the index where you want to add the color (0 - " + (colors.length - 1) + "):");
// var colorToAdd = prompt("Enter the color you want to add:");
// colors.splice(indexToAdd, 0, colorToAdd);

// // Display the updated array in the browser
// document.write("Array with new color added at index " + indexToAdd + ": " + colors + "<br><br>");

// // Ask the user at which index they want to delete color(s) and how many colors to delete
// var indexToDelete = prompt("Enter the index where you want to delete color(s) (0 - " + (colors.length - 1) + "):");
// var numToDelete = prompt("Enter the number of colors you want to delete:");
// colors.splice(indexToDelete, numToDelete);

// // Display the updated array in the browser
// document.write("Array with color(s) deleted from index " + indexToDelete + ": " + colors + "<br><br>");

var scoresbystudent = [320, 230, 480, 120]
document.write(scoresbystudent + "<br />" )
scoresbystudent.sort()
document.write(scoresbystudent+"<br />" )

var fruits = ["strawberry", "apple", "orange", "banana"];
fruits.sort();
document.write("Sorted fruits array in ascending order: " + fruits + "<br>");

fruits.sort(function(a, b) {
  return b.localeCompare(a);
});
document.write("Sorted fruits array in descending order: " + fruits+ "<br />");

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = [];

selectedCities.push(cities[0]);
selectedCities.push(cities[1]);
selectedCities.push(cities[2]);

document.write("Original cities array: " + cities + "<br>");
document.write("Selected cities array: " + selectedCities);

var arr = ["This", "is", "my", "cat"];
document.write("<br />" + arr);
var str = ["This is my cat"]
document.write("<br />" + str);

var fifo = ["fifo" , "(firt in first out)"]
document.write(`<br />${fifo[0]} ${fifo[1]}`)

var lifo = ["lifo" , "(last in first out)"]
document.write(`<br />${lifo[0]} ${lifo[1]}`)

var mobilenamefordroptdown = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write(`<br />
<select>
<option>${mobilenamefordroptdown[0]}</option>
<option>${mobilenamefordroptdown[1]}</option>
<option>${mobilenamefordroptdown[2]}</option>
<option>${mobilenamefordroptdown[3]}</option>
<option>${mobilenamefordroptdown[4]}</option>
<option>${mobilenamefordroptdown[5]}</option>
</select>
<br />
`)

var multidimentional0 = [0, 1, 2, 3, "<br />"]
document.write(multidimentional0)
var multidimentional1 = [1, 0, 1, 2, "<br />"]
document.write(multidimentional1)
var multidimentional2 = [2, 1, 0, 1, "<br />"]
document.write(multidimentional2)

//falto commit in 10:39 2/21/2023//
//falto commit in 10:40 2/21/2023//
//falto commit in 10:41 2/21/2023//