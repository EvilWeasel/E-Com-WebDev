/**
 * Konvertieren Sie den String in ein Array, sodass jeder
 * Character ein Element dieses Arrays ist. Entfernen Sie
 * außerdem die `+` Chars.
 */

function returnSanitzedData(dirtyString) { // input: string
    let result;
    // code goes here...
    result = dirtyString.split('+');

    // for (char of cleanString) {
    //     result.push(char);
    // }

    return result; // array
}





let dirtyString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

const result = returnSanitzedData(dirtyString);

console.log(compareResult(result));





function compareResult(result) {
    const solution = ['Ryu','Ken','Chun-Li','Cammy','Guile','Sakura','Sagat','Juri'];
    return result.toString() == solution.toString();
}