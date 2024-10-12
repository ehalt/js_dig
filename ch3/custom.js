
function greeting(msg) {
    return function who(name) {
        console.log(`${ msg }, ${ name }!!`);
    };
};

let hello = greeting('hello');
let howday = greeting('howday');

hello('shakil');
howday('babu');



