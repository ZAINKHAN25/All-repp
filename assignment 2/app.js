for (let i = 1; i <= 5; i++){
alert("Hello world")
}

for(let a = 1; a <= 10;a++){
    document.write(`${a}<br />`)
}

var tables = +prompt("Enter a number to print its multiplications number")
var tableslength = +prompt("Enter length of multiplication table");
for(let b = 1; tableslength >= b ;b++){
    document.write(`${tables} X ${b} = ${tables * tableslength}<br />`)
}

// for(let againi = 1; c >= againi; againi++){
//     console.log(`${c[againi]}`)
// }

let c = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
for (let index = 0; index < c.length ; index++) {
    document.write(`${c[index]}<br />`) 
}


let d = ["apple","banana","mango","orange","strawberry"]
for(let indexnoone = 1; d.length >= indexnoone; indexnoone++){
    document.write(`${d[indexnoone - 1]} <br />`)
}


for (let index = 0; d.length > index ; index++) {
document.write(`Element at index ${index} is ${d[index]} <br />`);
}

document.write(`Number of Items: ${promptkanumber}<br /> Itmes: <br />`)
var promptkanumber = +prompt("Enter number of items");
for( let promptkanumber1 = 0; promptkanumber1 < promptkanumber; promptkanumber1++){
    var promptkanumber2 = prompt(`Enter Value of idex ${promptkanumber1}`)
    document.write(`${promptkanumber2}<br />`)
}

for (let counting = 0; counting < 15; counting++) {
    document.write(` ${counting}`) 
}

document.write(`<br />`)

for(let ultacounting = 15; ultacounting >= 1; ultacounting--){
    document.write(` ${ultacounting}`)
}
