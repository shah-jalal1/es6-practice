// fuction expression
// function dobleIt(num) {
//     return num * 2;
// }

// function decleration
// const doubleIt = function myFun(num) {
//     return num * 2;
// }

// es6
// single parameter
const doubleIt = num => num * 2;

// more than one parameter
const add = (x, y) => x+y;

// without parameter
const give5 = () => 5;

// multiple work
const doMath = (x, y) => {
    const sum = x+y;
    diff = x - y;
    const result = sum * diff;
    return result;

}

const result = doubleIt(14);
console.log(result);

const result2 = add(50, 70);
console.log(result2);