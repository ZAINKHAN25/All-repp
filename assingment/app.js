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

// Display the length of the array
document.write("<p>The length of the array is: " + topMovies2015.length + "</p>");





