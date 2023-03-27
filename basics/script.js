console.log('Hello World!');
/**
 * Variablendeklaration und Initialisierung
 */
let x = "name";
/**
 * Variablendeklaration
 */
let y; // console.log => undefined

y = 10;
console.log(y);

/**
 * Konstante Variablen
 */
const PI = 3.14152;
const STANDARD_PRESSURE = 1;
// PI = 5;

/**
 * Ausgabe in der Konsole
 */
console.log(PI);

console.log("Log: Hello World!");
console.debug("Debug: Hello World!");
console.info("Info: Hello World!");

// BITTE NICHT SO...
// so_nicht = 'Albert';
// console.log(so_nicht);


/**
 * Datentypen in JavaScript:
 * 
 * let x = 16 + "volvo";
 */

// Numbers => Zahlen
let length = 42;
let weight = 5.2;

let subtraction = length - weight;
console.log(subtraction);

let multiplication = 2 * 2;

let addition = 2 + 2;

let division = 42 / 2;

let exponent = 5 ** 2;
console.log(exponent);

let remainder = 5 % 2;
console.log(remainder);
let floor_devision = Math.floor(5 / 2);
console.log(floor_devision);

let abc = 10;

abc = ++abc; // Pre-Increment
let def = abc++; // Post-Increment
++abc;
def++;
--abc;
abc--;

console.log(abc);

console.log(def);

/**
 * Assignment Operators
 * Zuweisungsoperatoren
 */
x = y;
let a = 5;
let b = 2;
// a = a + b;
a += b; // a = 7; b = 2
a -= b; // a = 5
a *= b; // a = 10
a /= b; // a = 5


/**
 * Strings :)
 * 
 */
let name = 'Müller';
let vornamen = "Michael";
let fullName = `${name} ${vornamen}`; // Interpolated String
console.log(fullName);
console.log(vornamen.length);

let text = "apple, banana, kiwi, pineapple";
let text_part = text.slice(7,13);

console.log(`Banana: ${text_part}`);

let other_part = text.slice(-9);
console.log(other_part)

console.log(text);

/**
 * Replace verändert den originalen String nicht!
 * Replace liefert immer einen neuen String
 * Replace verändert nur das erste Vorkommen
 */
let text_to_replace = "Please visit Microsoft.com\nMicrosoft.com";
let replaced_text = text_to_replace.replace("Microsoft.com", "Gnu.org");

console.log(replaced_text);

console.log(replaced_text.toUpperCase());

console.log(replaced_text.toLowerCase());

let whitespace_text = '       Hello    World!    ';

let trimmedText = whitespace_text.trim();

console.log(trimmedText);


let excelImport = "Name,Vorname,Alter\nMüller,Michael,42\nWehrle,Tobias,24";

let tableRows = excelImport.split('\n');

tableRows.forEach(row => {
    row = row.split(',');
    console.log(`| ${row[0]} | ${row[1]} | ${row[2]} |`)
})

console.log(tableRows);

let text1 = 'Hello';
let text2 = 'World';
let text3 = text1.concat(text2);
let text4 = text1 + text2;
console.log(text3);
console.log(text4);

// let text_to_search = 'Please locate where "this" is.'
let text_to_search = "Please locate where 'dogo' is."

let search_result = text_to_search.lastIndexOf('dogo');
console.log(search_result)

let real_result = text_to_search.slice(search_result, search_result + 4);

console.log(real_result)

let better_result = text_to_search.search('dogo');

console.log(better_result);


