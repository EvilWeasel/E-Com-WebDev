/*
  Aufgabe 1: Länge eines Strings ermitteln
  Einleitung: In dieser Aufgabe sollen Sie eine Funktion schreiben, die die Länge eines gegebenen Strings zurückgibt. 
  Sie dürfen nicht die eingebaute length-Eigenschaft von JavaScript verwenden.

  Beispiel Input:
  "JavaScript"

  Beispiel Output:
  10
*/

// Funktionssignatur:
function stringLaenge(string) {
    // Ihr Code hier
    let result = 0;
    for (let char in string) {
      result++;
    }
    return result;
}
function stringLaengeAlt(string) {
  let count = 0;
  while (string[count] !== undefined) {
    count++;
  }
  return count;
}




/*
Aufgabe 2: Ersetzen von Zeichen in einem String
  Einleitung: In dieser Aufgabe sollen Sie eine Funktion schreiben, die alle Vorkommen eines bestimmten Zeichens in einem 
  gegebenen String durch ein anderes Zeichen ersetzt und den modifizierten String zurückgibt.

  Beispiel Input:
  String: "Hallo Welt!"
  Altes Zeichen: "l"
  Neues Zeichen: "x"

  Beispiel Output:
  "Haxxo Wext!"
*/

// Funktionssignatur:
function ersetzeZeichen(string, altesZeichen, neuesZeichen) {
    // Ihr Code hier
    let modString = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] === altesZeichen) {
        modString += neuesZeichen;
      } else {
        modString += string[i];
      }
    }
    return modString;
}




/*
  Aufgabe 3: Palindrom-Überprüfung
  Einleitung: In dieser Aufgabe sollen Sie eine Funktion schreiben, die überprüft, ob ein gegebener String ein Palindrom ist.
  Ein Palindrom ist ein Wort, das vorwärts und rückwärts gelesen gleich bleibt. Groß- und Kleinschreibung soll dabei ignoriert werden.

  Beispiel Input:
  "Anna"

  Beispiel Output:
  true
*/

// Funktionssignatur:
function istPalindrom(string) {
    // Ihr Code hier
    string = string.toLowerCase();
    let revString = ''; // i <= string.length
    for (let i = string.length - 1; i >= 0; i--) {
      revString = revString + string[i];
    }
    //console.log(revString);
    if (revString == string) return true;
    else return false;
}

function istPalindrom(string) {
  // Konvertieren des Strings zu Kleinbuchstaben, um Groß-/Kleinschreibung zu ignorieren
  string = string.toLowerCase();
  // Initialisieren der Variablen für den Anfang und das Ende des Strings
  let start = 0;
  let end = string.length - 1;
  // Solange Start kleiner als End ist...
  while (start < end) {
    // ...wenn die Zeichen an Start und End nicht gleich sind, ist es kein Palindrom
    if (string[start] !== string[end]) {
      return false;
    }
    // Ansonsten bewegen wir uns zu den nächsten Zeichen
    start++;
    end--;
  }
  // Wenn wir den Schleifendurchlauf beenden und keine Unterschiede gefunden haben, ist es ein Palindrom
  return true;
}


/**
  Aufgabe 4: CountVowels
  Einleitung: Bauen Sie eine Funktion, welche als Input-Parameter einen beliebigen Text auf die Anzahl an Vokalen prüft und diese zurück gibt.

  Beispiel Input:
  "Hello World!"
  "JavaScript"
  "ChatGPT"
  "Hamster"

  Beispiel Output:
  3
  3
  1
  2
 */
let testStrings = [];
testStrings.push("Hello World!")
testStrings.push("JavaScript")
testStrings.push("ChatGPT")
testStrings.push("Hamster")

function summeVokale(text) {
  const vokale = ['a', 'e', 'i', 'o', 'u'];
  let vokaleCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (vokale.includes(text[i])) {
      vokaleCount++;
      // vokaleCount = vokaleCount + 1;
    }
  }
  return vokaleCount;
}

for (let i = 0; i < 4; i++) {
  console.log(summeVokale(testStrings[i]));
}
 