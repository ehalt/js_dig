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