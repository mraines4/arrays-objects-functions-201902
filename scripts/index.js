// add your solutions here

// Positive Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

function positiveNumbers(arr) {
    const newArray = arr.filter(function (num) {
        return num > 0;
    });
    return newArray;
}

console.log(positiveNumbers([1, -4, 5, -6]));