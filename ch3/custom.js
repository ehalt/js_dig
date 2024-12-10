

function sol (name) {
    let nameArr = name.split(' ');
    return (nameArr[0][0] + '.' + nameArr[1][0].toUpperCase());
}
console.log(sol("Sam Harris"));