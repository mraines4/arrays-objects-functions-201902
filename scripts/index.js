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

// Cities 1
// Write a function which takes an array of city objects like such:

// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 }
// ];
// as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.

const cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

function coldCities(place) {
    let coldPlace = cities.filter(function (which) {
        return which.temperature < 70.0;
    });
    let coldName = coldPlace.map(function (each) {
        return each.name;
    });
    return coldName;
}
console.log(coldCities(cities));

// Cities 2
// Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.

function cityNames(place) {
    let name = place.map(function (each) {
        return each.name;
    });
    return name;
}
console.log(cityNames(cities));