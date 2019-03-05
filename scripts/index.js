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

// Even Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

function evenNumbers(arr) {
    const evenArray = arr.filter(function (num) {
        return (num % 2 === 0);
    });
    return evenArray;
}

console.log(evenNumbers([1, 4, 5, 6, 7]));

// Square the Numbers
// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

function squaredNumbers(arr) {
    const squaredArray = arr.map(function (num) {
        return num * num
    });

    return squaredArray;
}

console.log(squaredNumbers([1, 2, 3]));