// var names = ["ZAIN", "UBAID", "REHAN", "HUZIFA"]
// var asknames = prompt("WRITE YOUR NAME HERE")
// if(asknames.includes(names)){
//     alert("Yes your name is available at school")
// }
// else(
//     alert("Sorry your name is not available")
// )

// var bakery = ["pasteries", "cakes", "bread", "rusk", "chips"]
// var askWhichProduct  = +prompt("Which product you want to buy")

// if(bakery.indexOf(askWhichProduct)>0)
// {
//     alert(`Yes ${askWhichProduct} is available at index number ${bakery.indexOf(askWhichProduct)}`)
//     Document.write(bakery[bakery.indexOf(askWhichProduct)])
// }
// else{
//     alert(`No your product is not available`)
// }

// var bakery = ["pasteries", "cakes", "bread", "rusk", "chips"]
// var askWhichProduct  = prompt("Which product you want to buy")

// if(bakery.indexOf(askWhichProduct)>0)
// {
//     alert(`Yes ${askWhichProduct} is available at index number ${bakery.indexOf(askWhichProduct)}`)
//     Document.write(bakery[bakery.indexOf(askWhichProduct)])
// }
// else{
//     alert(`No your product is not available`)
// }

var bakery = ["pasteries", "cakes", "bread", "rusk", "chips"]
var askWhichProduct  = prompt("Which product you want to buy")

if(bakery.includes(askWhichProduct)>=0)
{
    alert(`Yes ${askWhichProduct} is available at index number ${bakery.includes(askWhichProduct)}`)
    Document.write(bakery[bakery.includes(askWhichProduct)])
}
else{
    alert(`No your product is not available`)
}