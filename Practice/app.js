// var students = {
//     name: "zain",
//     fame: "Anwar Saeed",
//     dateofbirth: `17/july/2008`
//     }
    
//     alert(students)

var ronaldo = {
    firstname: "Cristiano ",
    lastname: "Ronaldo",
    age: "38",
    datOfBirth: "February 5, 1985",
    totalGoalsInFifa2022: "1"
}

var messi = {
    firstname: "Lionel",
    lastname: "Messi",
    age: "35",
    dateOfBirth: "June 24, 1987",
    totalGoalsInFifa2022: "7"
}

var zain = {
    firstname: "Muhammad",
    lastname: "Zain-ul-arfeen",
    age: "15",
    dateOfBirth: "17/july/2008",
    totalGoalsInFifa2022: 0123456789 + 9876543210
}

// console.log(ronaldo)
// console.log(messi)

document.write(`${zain["firstname"]} ${zain["lastname"]} goals <b> ${zain["totalGoalsInFifa2022"]}</b> in fifa 2022 <br />`)
document.write(`${messi["firstname"]} ${messi["lastname"]} goals <b> ${messi["totalGoalsInFifa2022"]} </b> in fifa 2022 <br />`)
document.write(`${ronaldo["firstname"]} ${ronaldo["lastname"]} goals <b> ${ronaldo["totalGoalsInFifa2022"]} </b> in fifa 2022 <br />`)



/* alert wala jagah */

if(ronaldo["totalGoalsInFifa2022"] > messi["totalGoalsInFifa2022"]){
    alert("Ronaldo goal more than Messi")
}

else if( zain["totalGoalsInFifa2022"] < messi["totalGoalsInFifa2022"] ){
    alert("Zain goal more than Ronaldo and Messi")
}

else{
    alert("Messi goal more than Ronaldo")
}

var naem = zain

for(var j=0; j >= 5; j++ ){
    console.log(naem)
}