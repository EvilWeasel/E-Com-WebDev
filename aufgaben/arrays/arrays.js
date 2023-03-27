/* 
Aufgabe 1: Summe aller Elemente in einem Array
Einleitung: In dieser Aufgabe geht es darum, die Summe aller Elemente in einem Array zu berechnen. Dabei sollen Sie eine Funktion schreiben, die ein Array von Zahlen als Eingabe erhält und die Summe dieser Zahlen zurückgibt.

Beispiel Input:
[1, 2, 3, 4, 5]

Beispiel Output:
15 
*/
// Funktionssignatur:
function summeArray(array) {
    // Ihr Code hier
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
let array1 = [1,2,3,4,5];
console.log(summeArray(array1));
console.log(`Aufgabe 1 Lösung ist ${(summeArray([1, 2, 3, 4, 5]) === 15) ? 'korrekt' : 'falsch'}`);




/* 
Aufgabe 2: Alle geraden Zahlen in einem Array finden
Einleitung: In dieser Aufgabe sollen Sie eine Funktion schreiben, die alle geraden Zahlen in einem Array identifiziert und in einem neuen Array zurückgibt.

Beispiel Input:
[1, 2, 3, 4, 5, 6]

Beispiel Output:
[2, 4, 6]
 */
// Funktionssignatur:
function findeGeradeZahlen(array) {
    // Ihr Code hier
    let newArray = new Array();
    array.forEach(item => {
        // modulo operator => Rest einer division
        if (item % 2 == 0) {
            newArray.push(item);
        }
    });
    return newArray;
}
let array2 = [ 1, 2, 3, 4, 5, 6 ];
console.log(findeGeradeZahlen(array2));
console.log(`Aufgabe 2 Lösung ist ${(findeGeradeZahlen([1, 2, 3, 4, 5, 6]).toString() === [2, 4, 6].toString()) ? 'korrekt' : 'falsch'}`);



/* 
Aufgabe 3: Entfernen von Duplikaten aus einem Array
Einleitung: In dieser Aufgabe geht es darum, eine Funktion zu schreiben, die alle Duplikate aus einem Array entfernt und ein neues Array mit den einzigartigen Elementen zurückgibt.

Beispiel Input:
[1, 2, 2, 3, 4, 4, 5, 6, 6]

Beispiel Output:
[1, 2, 3, 4, 5, 6]
 */
// Funktionssignatur:
function entferneDuplikate(array) {
    // Ihr Code hier
    let newArray = new Array();
    for (let i = 0; i < array.length; i++) {
        if (newArray.includes(array[i])) {
            return;
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}


console.log(`Aufgabe 3 Lösung ist ${(entferneDuplikate([1, 2, 2, 3, 4, 4, 5, 6, 6].toString() === [1, 2, 3, 4, 5, 6].toString())) ? 'korrekt' : 'falsch'}`);


/* 
Aufgabe 5: Array-Elemente invertieren
Einleitung: In dieser Aufgabe geht es darum, eine Funktion zu schreiben, die die Reihenfolge der Elemente in einem Array umkehrt. Die Funktion sollte das ursprüngliche Array nicht verändern, sondern ein neues Array mit den umgekehrten Elementen zurückgeben.

Beispiel Input:
[1, 2, 3, 4, 5]

Beispiel Output:
[5, 4, 3, 2, 1]

Nicht einfach folgende Methode benutzen, sondern selbst schreiben: Array.prototype.reverse();
 */
// Funktionssignatur:
function invertiereArray(array) {
    // Ihr Code hier
    return [];
}
console.log(`Aufgabe 5 Lösung ist ${(invertiereArray([1, 2, 3, 4, 5]).toString() === [5, 4, 3, 2, 1].toString()) ? 'korrekt' : 'falsch'}`);