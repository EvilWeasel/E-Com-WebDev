/**
 * - If-/Else Anweisung => 
 *  Wenn Bedingung erfüllt ist, wird die Anweisung ausgeführt.
 */
let x = 10;
let erg = 5 + 5;

let condition = 1 < 0;
console.log(condition);


/**
 * Wenn *Bedingung*, dann *Anweisung*, ansonsten *else-anweisung*
 */
if (condition) {
    console.log('true');
} else {
    console.log('false');
}


let carList = [ 'audi', 'benz', 'skoda'];

let car = 'audi';

if (car == carList[0]) {
    console.log('audi');
} else if (car == carList[1]) {
    console.log('benz');
} else if (car == carList[2]) {
    console.log('skoda');
} else {
    console.log('cartype does not exist');
}


/**
 * Switches
 */
let operation = '/';

let num1 = 10;
let num2 = 5;
let ergebnis;

switch (operation) {
    case '+': {
        ergebnis = num1 + num2;
        break;
    }
    case '-': {
        ergebnis = num1 - num2;
        break;
    }
    case '*': {
        ergebnis = num1 * num2;
        break;
    }
    case '/': {
        ergebnis = num1 / num2;
        break;
    }
}
console.log(ergebnis);

/**
 * Schleifen:
 * While-Schleife im Computer (low-level):
 * {
 * load var1 reg1;
 * add var2 reg1;
 * jump zeile 70;
 * }
 */
let i = 1;
while (i <= 5) {
    console.log('while is running');
    i++;
}
console.log('nach while loop');

let i2 = 6;

do {
    console.log('do while is running');
    i2 = i2 + 1;
} while (i2 <= 5)

console.log('nach do while loop');


/**
 * For-Loops:
 */
for (let i = 0; i < carList.length; i++) {
    if (carList[i] == 'audi') continue;
    console.log(carList[i]);
    if (carList[i] == 'benz') break;
}

const person = {
    vorname: "John",
    nachname: "Doe",
    alterino: 42
};
person.vorname

console.log(
`${person.vorname} ${person.nachname} ist ${person.alter} Jahre alt.`
);

/** For-In Object */
for (variable in person) {
    console.log(
`${variable}:\t${person[variable]}`
    );
}

// for (oma in document) {
//     console.log(`${oma}:\t${document[oma]}`)
// }

/** For-In Array */
for (carIndex in carList) {
    console.log(carList[carIndex]);
}

/** For-Of Array */
const newarray = [ 'a', 'b', 'c' ];

for (let elem in newarray) {
    console.log(elem); // 0, 1, 2
}

for (const oma of newarray) {
    console.log(oma); // 'a', 'b', 'c'
}

newarray.forEach(item => {
   console.log(item); 
});

// for (variable of person) {
//     console.log(`${variable}`);
// }