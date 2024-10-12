// we can shallow-copy an array using itertor consumption via the ...spread operator

let arr = [10, 20, 30, 40];

let arrCopy = [...arr];

// console.log(arrCopy);


// we can also iterate the characters in a string one at a time

var name = "Itachi uchiha";
let charName = [...name];

// for(ch of charName) {
//     console.log(ch);
// }



/**
 
A Map data structure uses objects as keys, associating a value (of any type) with that object. Maps have a different default iteration than seen here, in that the iteration is not just over the map's values but instead its entries. An entry is a tuple (2-element array) including both a key and a value.

 */




var another_arr = [10, 20, 30, 40];

for (let [index, value] of another_arr.entries()) {
    console.log(`[${ index }] : [${ value }]`);
}



const arr = ['a', 'b', 'c'];

for (let [index, value] of arr.entries()) {
    console.log(`[${ index }] : [ ${value} ]`);
}



