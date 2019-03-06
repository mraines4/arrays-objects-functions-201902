// add your solutions here

// Positive Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

function positiveNumbers(arr) {
    return arr.filter(function (num) {
        return num > 0;
    });
}

console.log(positiveNumbers([1, -4, 5, -6]));

// Even Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

function evenNumbers(arr) {
    return arr.filter(function (num) {
        return (num % 2 === 0);
    });
}

console.log(evenNumbers([1, 4, 5, 6, 7]));

// Square the Numbers
// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

function squaredNumbers(arr) {
    return arr.map(function (num) {
        return num * num
    });

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
    return coldPlace.map(function (each) {
        return each.name;
    });
}
console.log(coldCities(cities));

// Cities 2
// Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.

function cityNames(place) {
    return place.map(function (each) {
        return each.name;
    });
}
console.log(cityNames(cities));

// Good Job!
// Given an array of people's names:

// var people = [
//     'Dom',
//     'Lyn',
//     'Kirk',
//     'Autumn',
//     'Trista',
//     'Jesslyn',
//     'Kevin',
//     'John',
//     'Eli',
//     'Juan',
//     'Robert',
//     'Keyur',
//     'Jason',
//     'Che',
//     'Ben'
// ];
// Print out 'Good Job, {{name}}!' for each person's name, one on a line.

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

function goodJob(name) {
    name.forEach(function (each) {
        console.log(`Good Job ${each}!`);
    });
}

goodJob(people);

// 3 times
// Given this function:

// function call3Times(fun) {
//     fun();
//     fun();
//     fun();
// }
// Use the call3Times function to print "Hello, world!" 3 times.

function call3Times(fun) {
    fun();
    fun();
    fun();
}

function helloWorld() {
    console.log('Hello World!')
}

call3Times(helloWorld);

// n times
// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:

// > callNTimes(5, hello)
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// You are allowed to use a loop in the implementation of callNTimes.

function callNTimes(time, fun) {
    for (let i = 0; i < time; i++) {
        fun();
    }
}

callNTimes(5, helloWorld);

// Str Multiply
// Write a strMultiply function which takes two arguments:
// str - the string to multiply
// times - number of times to multiply
// You may not use the native repeat method that strings provide. But you can use the range function defined below.

function strMultiply(str, times) {
    let sentence = '';
    range(0, times).forEach(function () {
        return sentence += str;
    })
    return sentence;
}

function range(min, max) {
    var arr = [];
    for (var i = min; i < max; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(strMultiply('abc', 5));

// Sort an array
// Given an array of strings such as the array of names given in one of the "Good Job" problem, sort them by alphabetically order.

function sorted(name) {
    return name.sort();
}
console.log(sorted(people))

// Sort an array, 2
// Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.

function shortestFirst(name) {
    return name.sort(function (a, b) {
        return a.length - b.length;
    });
}
console.log(shortestFirst(people))

// Sort an array, 3
// Given an array of array of products:

// var products = [
//     { name: 'Basketball', price: 12.00 },
//     { name: 'Tennis Racquet', price: 66.00 },
//     { name: 'Tennis Balls', price: 9.00 },
//     { name: 'Tennis Balls', price: 9.00 }
// ];
// Sort the array by price.

var products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
];

function lowestToHighest(arr) {
    return arr.sort(function (a, b) {
        return a.price - b.price;
    })
}

console.log(lowestToHighest(products));
