let searchProvider = 'https://www.bing.com/search?q=';


// Ich bin ein einzeiliger Kommentar
/*
    Ich bin ein mehrzeiliger Kommentar :)
*/

// 1. Element auswählen
// 2. Aktuelle Uhrzeit ermitteln
// 3. Timer erstellen
//    3.1 Inhalt des Elements auf die aktuelle Uhrzeit setzen
/**
 * Strings (Zeichenketten) in JavaScript
 * "Hello World!"
 * 'Hello World!'
 */
// Variablendeklaration und -initialisierung
const clock = document.getElementById('clock');

setInterval(getTime, 100);

function getTime() {
    let date = new Date();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let hour = date.getHours();
        
    // Variablendeklaration
    let datestring = "";
    
    /**
     * wenn wert kleiner als 10, dann füge 0 hinzu
     */
    if(hour < 10) {
        datestring = datestring + "0" + hour;
    } else {
        datestring = datestring + hour;
    }
    datestring = datestring + ":";
    if(min < 10) {
        datestring = datestring + "0" + min;
    } else {
        datestring = datestring + min;
    }
    datestring = datestring + ":";
    if(sec < 10) {
        // datestring = datestring + sec + "0";
        datestring = datestring + "0" + sec;
    } else {
        datestring = datestring + sec;
    }
       
    clock.innerText = datestring;
}

const search = document.getElementById('search');
const searchField = document.getElementById('search-field');

/**
 * 1. 'keydown' Event => Objekt 'event' => event.key ==> "Enter"
 * 2. Setze display Attribut von dem 'search' Element von 'none' auf 'flex'
*/

document.addEventListener("keydown", spawnSearchField);

function spawnSearchField(event) {
    if (event.key == " ") {
        searchField.value = '';
        search.style.display = 'flex';
        searchField.focus();
    } else if (event.key == "Escape") {
        search.style.display = 'none';
    }
}

searchField.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        search.style.display = 'none';
        let query = searchField.value;
        window.open(searchProvider + query);
    }
});

const quoteBox = document.getElementById('quote-box');

/**
 * 1. HTTP-GET: https://api.chucknorris.io/jokes/random
 * 2. Extrahiere 'value' aus HTTP-Response
 * 3. quoteBox Inhalt auf API-Response setzen
 */
fetch('https://api.chucknorris.io/jokes/random')
    .then(http_response => {
        return http_response.json();
    })
    .then(joke => {
        quoteBox.innerText = joke.value;
    });
