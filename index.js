
const square = require('./square.js');

const calsquare = (a) => {
    console.log(`the value of a is ${a} and the area is` +square.area(a));

    console.log(`the value of a is ${a} and the perimeter is` +square.perimeter(a))
}

console.log(__filename);
console.log(__dirname);
