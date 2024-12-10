// testing asyncronous 

let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("The operation was success!");
    }
    else {
        reject("Something went wrong!");
    }
});

console.log(promise);

