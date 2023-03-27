function testStringLaenge() {
    try {
      const input = "JavaScript";
      const output = stringLaenge(input);
      const erwartetesOutput = 10;
  
      if (output === erwartetesOutput) {
        console.log("Aufgabe 1 Lösung ist korrekt");
      } else {
        console.log("Aufgabe 1 Lösung ist falsch");
      }
    } catch (error) {
      console.log("Aufgabe 1 Implementierung fehlt oder ist fehlerhaft:", error.message);
    }
}
  
function testErsetzeZeichen() {
    try {
      const input = "Hallo Welt!";
      const altesZeichen = "l";
      const neuesZeichen = "x";
      const output = ersetzeZeichen(input, altesZeichen, neuesZeichen);
      const erwartetesOutput = "Haxxo Wext!";
  
      if (output === erwartetesOutput) {
        console.log("Aufgabe 2 Lösung ist korrekt");
      } else {
        console.log("Aufgabe 2 Lösung ist falsch");
      }
    } catch (error) {
      console.log("Aufgabe 2 Implementierung fehlt oder ist fehlerhaft:", error.message);
    }
}
  
function testIstPalindrom() {
    try {
      const input1 = "Anna";
      const output1 = istPalindrom(input1);
      const erwartetesOutput1 = true;
  
      const input2 = "JavaScript";
      const output2 = istPalindrom(input2);
      const erwartetesOutput2 = false;

      const input3 = "Bob";
      const output3 = istPalindrom(input3);
      const erwartetesOutput3 = true;
  
      if (output1 === erwartetesOutput1 &&
        output2 === erwartetesOutput2 &&
        output3 === erwartetesOutput3) {
        console.log("Aufgabe 3 Lösung ist korrekt");
      } else {
        console.log("Aufgabe 3 Lösung ist falsch: Weitere Details im Log");
        if (output1 !== erwartetesOutput1) {
          console.error(`Testfall 1: Erwartet: ${erwartetesOutput1}, Erhalten: ${output1}`);
        }
        if (output2 !== erwartetesOutput2) {
          console.error(`Testfall 2: Erwartet: ${erwartetesOutput2}, Erhalten: ${output2}`);
        }
        if (output3 !== erwartetesOutput3) {
          console.error(`Testfall 3: Erwartet: ${erwartetesOutput3}, Erhalten: ${output3}`);
        }
      }
    } catch (error) {
      console.log("Aufgabe 3 Implementierung fehlt oder ist fehlerhaft:", error.message);
    }
}
  
  
function testeAlleAufgaben() {
    testStringLaenge();
    testErsetzeZeichen();
    testIstPalindrom();
}
  
// Führe alle Tests aus
testeAlleAufgaben();
  