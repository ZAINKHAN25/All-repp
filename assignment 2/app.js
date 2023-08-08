// for (let i = 1; i <= 5; i++){
// alert("Hello world")
// }

// for(let a = 1; a <= 10;a++){
//     document.write(`${a}<br />`)
// }

// var tables = +prompt("Enter a number to print its multiplications number")
// var tableslength = +prompt("Enter length of multiplication table");
// for(let b = 1; tableslength >= b ;b++){
//     document.write(`${tables} X ${b} = ${tables * tableslength}<br />`)
// }

// // for(let againi = 1; c >= againi; againi++){
// //     console.log(`${c[againi]}`)
// // }

// let c = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
// for (let index = 0; index < c.length ; index++) {
//     document.write(`${c[index]}<br />`) 
// }


// let d = ["apple","banana","mango","orange","strawberry"]
// for(let indexnoone = 1; d.length >= indexnoone; indexnoone++){
//     document.write(`${d[indexnoone - 1]} <br />`)
// }


// for (let index = 0; d.length > index ; index++) {
// document.write(`Element at index ${index} is ${d[index]} <br />`);
// }

// document.write(`Number of Items: ${promptkanumber}<br /> Itmes: <br />`)
// var promptkanumber = +prompt("Enter number of items");
// for( let promptkanumber1 = 0; promptkanumber1 < promptkanumber; promptkanumber1++){
//     var promptkanumber2 = prompt(`Enter Value of idex ${promptkanumber1}`)
//     document.write(`${promptkanumber2}<br />`)
// }


// document.write(`<br />`)

// for(let ultacounting = 15; ultacounting >= 1; ultacounting--){
    //     document.write(` ${ultacounting}`)
    // }
    
    // document.write(`<br />`)
    
    // for(let even = 2; even >= 10; even++){
        //     document.write( even + even )
        // }
        
// document.write(`<br />`)

// for(var odd = 0; odd >= 10; odd++){
    //     document.write(odd)
    // }
    
    // document.write(`<br />`)
    
    // for(let series = 0; series < 10; series + 3){
        //     console.log(`${series} k`)
        // }
        // document.write(`${counting}`)
        
// for (let counting = 1; counting <= 15; counting++) {
//     document.write(counting + ", "); 
// }
        
        
// document.write("a. Counting: ");
//     for (let counting = 1; counting <= 15; counting++) {
//     document.write(counting + ", ");
// }

// document.write("<br><br>b. Reverse counting: ");
// for (let i = 10;i >= 1; i--) {
//   document.write(i + ", ");
// }

// document.write("<br><br>c. Even: ");
// for (let i = 0; i <= 20; i+=2) {
//   document.write(i + ", ");
// }

// document.write("<br><br>d. Odd: ");
// for (let i = 1; i <= 19; i+=2) {
//   document.write(i + ", ");
// }

// document.write("<br><br>e. Series: ");
// for (let i = 1; i <= 10; i++) {
//   document.write(i * 2 + "k, ");
// }

// for(let i = 1; i <= 15; i++){
//     document.write(`${i}, `);
// }

// document.write(`<br />`);

// for(let i = 15; i >= 1; i-- ){
//     document.write(`${i}, `);
// }

// document.write(`<br />`);
// document.write(`0, 2, `);

// for(let i = 2; i <= 9; i++){
//     document.write(`${i + i}, `);
// }

// document.write(`20.`);
// document.write(`<br />`);

// for(let i = 0; i <= 20; i *= 2){
//     document.write(`${i * i - 1 }, `);
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

let bakeryitems = ["Muhammad", "Falana", "Dimkhan"]
let askuser = prompt("Please search anything here")

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    for(let i = 0; i <= bakeryitems.length; i++){
        for(let j = 0; j < 5;j++ ){
            if(askuser === bakeryitems[i] ){
                document.write("Yes this "+ askuser +" is available at index of " + [i+1]+"<br />");
            }
        }
    }
}