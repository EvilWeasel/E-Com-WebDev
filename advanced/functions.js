/**
 * Funktionen im Allgemeinen:
 * - Hat Inputs und Ouputs
 * - In der Mathematik: 
 *      - Eine Beziehung zwischen zwei Mengen
 * 
 * Funktionen in JavaScript:
 *  - Werden auch als ... Bezeichnet:
 *      - Prozeduren
 *      - Methoden
 *  - Können quasi beliebig viele Input-Parameter und genau EINEN Output-Paramter haben
 *  - Anonyme Funktionen
 *  - Asyncrone Funktionen
 */

function funktionName(parameter1, parameter2) {
    let outputParameter = 'Hello World';
    console.log(outputParameter);
    // Beendet die Ausführung der Funktion und liefert einen Rückgabewert, oder undefined
    return outputParameter; // maximal 1 Wert, der Zurückgegeben werden kann
}
let x = funktionName(10, 20) // Aufrufer der Funktion => Caller
console.log(x)

let array = new Array(1,2,3);

array.forEach((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array);
});
/* 
class Arry {
    function forEach(callbackFunction) {
        callbackFunction(value, index, array)
    }
} 
*/
// Anonyme Funktion
array.forEach((item) => {
    console.log(item);
});

// Wenn nur ein Parameter notwendig ist, können die Parameterklammern der inneren Funktion weggelassen werden
array.forEach(item => {
    console.log(item);
});

// Wenn nur eine Anweisung notwendig ist, können die geschweiften Klammern für den Anweisungsblock ebenfalls weggelassen werden
array.forEach(item => console.log(item));


// Rückgabewerte in anonymen Funktionen

let nums = [1,2,3,4,5,6,7,8,9,10];

/* function findeGeradeZahlen(array) {
    // Ihr Code hier
    let newArray = new Array();
    array.forEach(item => {
        // modulo operator => Rest einer division
        if (item % 2 == 0) {
            newArray.push(item);
        }
    });
    return newArray;
} */

nums = nums.filter(value => {
    return value % 2 == 0;
});

console.log(nums);

function filterDivisibleByTwo(value) {
    return value % 2 == 0;
}

nums = nums.filter(filterDivisibleByTwo);

console.log(nums);

let numbersToReduce = [1,2,3,4,5,6,7,8,9,10];

console.log(numbersToReduce);

let reduceResult = numbersToReduce.reduce((sum, item) => {
    sum += item;
    return sum;
});


let reduceResult1 = numbersToReduce.reduce((count, item) => {
    count++;
    // previous = previous + 1;
    return count;
});

/* 
let count = 0;
let testArray = ['Hello', 'World', '!'];
for (let word of testArray) {
    harry(count, word);
} 
*/


console.log(reduceResult);
console.log(reduceResult1);
//console.log(count);