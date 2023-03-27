/**
 * Schreiben Sie eine Funktion, welche ein Array als Parameter übergeben bekommt, und ein neues Array zurückgibt, wo alle Zahlen des ersten Arrays enthalten sind, welche restlos durch 2 teilbar sind.
 */
function divisibleByTwo(array) {
    /**
     * schleife: foreach?
     * wenn item restlos durch 2 teilbar, dann...
     * füge item zu ergebnis-array hinzu
     * letzter schritt: gib das ergebnis-array zurück
     */
    let newarray = new Array();
    array.forEach(item => {
        if (item % 2 == 0) {
            newarray.push(item);
        }
    });
    
    // Geben Sie das Array zurück
    return newarray;
}

let testData = [ 1, 2, 3, 5, 6, 8, 9, 22, 42, 55 ];

console.log(testData);

let ergebnis = divisibleByTwo(testData);

console.log(ergebnis);
// [ 2, 6, 8, 22, 42 ]