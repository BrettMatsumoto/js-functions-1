/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

let numberToString = (n) => {
    return n.toString();
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

let increase = (n) => {
    n++;
    return n;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

let decrease = (n) => {
    n--;
    return n;
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

let add = (x, y) => {
    return x + y;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

let subtract = (x, y) => {
    return x - y;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

let multiply = (x, y) => {
    return x * y;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

let divide = (x, y) => {
    return x / y;
}


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

let square = (x) => {
    return Math.pow(x, 2);
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

let calculate = (operation, x, y) => {
    if (operation === 'add') {
        let result = x + y;
        console.log(`${x} + ${y} = ${result}`);
        return result;
    } else if (operation === 'subtract') {
        let result = x - y;
        console.log(`${x} - ${y} = ${result}`);
        return result
    } else if (operation === 'multiply') {
        let result = x * y;
        console.log(`${x} * ${y} = ${result}`);
        return result;
    } else {
        let result = x / y;
        console.log(`${x} / ${y} = ${result}`);
        return result;
    }
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

let isGreaterThan = (a, b) => {
    return (a > b);
}


/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

let isLessThan = (a, b) => {
    return (a < b);
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

let areEqual = (a, b) => {
    return (a === b);
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

let minimum = (x, y) => {
    return Math.min(x, y);
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

let maximum = (x, y) => {
    return Math.max(x, y);
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

let isEven = (n) => {
    return (n % 2 === 0);
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

let isOdd = (n) => {
    return (n % 2 !== 0);
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

let letterGrade = (score, total) => {
    let percentage = Math.floor((score / total) * 100);

    if (percentage >= 90 && percentage <= 100) {
        return 'A';
    } else if (percentage >= 80 && percentage <= 89) {
        return 'B';
    } else if (percentage >= 70 && percentage <= 79) {
        return 'C';
    } else if (percentage >= 60 && percentage <= 69) {
        return 'D';
    } else if (percentage >= 0 && percentage <= 59) {
        return 'F';
    }
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

let incrementReviews = (restaurant) => {
    restaurant['reviews'] = (restaurant['reviews'] + 1 || 1);
    return restaurant;
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

let combine = (word1, word2) => {
    let result = `${word1} ${word2}`
    return result;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

let createCircle = (radius) => {
    let circle = {};

    circle['circumference'] = 2 * Math.PI * radius;
    circle['area'] = Math.PI * radius * radius;
    return circle;
}

