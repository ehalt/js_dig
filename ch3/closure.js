// closure is when a function remembers and continues to access variables from outside its scope, even when 
// the function is executed in a different scope 

function greeting(msg) {
    return function who(name) {
        console.log(`${ msg }, ${ name }!`);
    };
};

let hello = greeting('hello');
var howday = greeting('howday');

hello('Torikus');
howday('Sadik');




// another example 

function counter(step = 1) {
    var count = 0;
    return function increaseCount(){
        count = count + step;
        return count;
    };
}

var incBy1 = counter(1);
var incBy3 = counter(3);

console.log(incBy1());
console.log(incBy1());

console.log(incBy3());
console.log(incBy3());
console.log(incBy3());







// another simple example 


function outer() {

    let msg = "hello!";
    function inner() {
        console.log(msg);
    }

    inner();
}

outer();





