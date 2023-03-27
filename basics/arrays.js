/**
 * Arrays in JavaScript
 */

let array1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let array2 = [ 'Hello', 'World', '!' ];

console.log(array1);
console.log(array2);

let car1 = 'volvo';
let car2 = 'saab';
let car3 = 'bmw';
let car4 = 'skoda';

if (car1 == 'audi') {
    console.log('gefunden!');
} else if (car2 == 'audi') {
    console.log('gefunden!');
} else if (car3 == 'audi') {
    console.log('gefunden!');
}

let carList = [ car1, car2, car3 ];
// carList.append(car4)

console.log(carList);

let volvo = carList[0];
let saab = carList[1];

console.log(volvo, saab);
console.log(carList);

let divers 
    = [ 10, 42, 'oma', "Hamster", true,
    [ 1, 2, 4 ], { name: "Merz" } ];

const cars2 = new Array('volvo', 'saab', 'bmw');
const cars3 = [ 'volvo', 'saab', 'bmw' ];

cars2.forEach(car => {
    console.log(car);
});

cars2.push('audi');

cars2.push('porsche');

let entferntesElem = cars2.pop();


cars2.forEach(car => {
    console.log(car);
});

console.log(`Porsche entfernt aus Array: ${entferntesElem}`);