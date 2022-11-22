// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let getnum = numbers.filter((num) => typeof num === "number");
    let average = getnum.reduce((a, b) => a + b, 0) / getnum.length;
    return average;
 }
 
 module.exports = average;