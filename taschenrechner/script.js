// const numElem1 = document.getElementById('num1');
// const numElem2 = document.getElementById('num2');
// const resultElem = document.getElementById('result');
// const btnElem = document.getElementById('btn');

// btnElem.addEventListener('click', e => {
//     let num1 = parseInt(numElem1.value);
//     let num2 = parseInt(numElem2.value);
//     // console.log(parseFloat("4.2"));
//     let result = addNumbers(num1, num2);
//     resultElem.innerText = result;
// });

// function addNumbers(num1, num2) {
//     return num1 + num2;
// }

const smileElem =
  document.querySelector(
    "[data-smile]"
  ); /** Gibt ein einzelnes Element mit dem Attribut data-smile zurück */
const resultElem = document.querySelector(".result");
// const resultElem = document.querySelector('[class="result"]');
// const resultElem = document.querySelector('[id="result"]');
// const resultElem = document.querySelector('#result');
const interimElem = document.querySelector(".interim-result");
const deleteElem = document.querySelector("[data-delete]");
const ceElem = document.querySelector("[data-ce]");
const cElem = document.querySelector("[data-c]");
const numberElems =
  document.querySelectorAll(
    "[data-number]"
  ); /** Gibt eine Liste von Elementen mit dem Attribut data-smile zurück */
const operationElems = document.querySelectorAll("[data-operation]");
// [ button, button, button, button, button, button, button, button, button, button, … ]
const equalsElem = document.querySelector("[data-equals]");
console.log(operationElems);

let operationLock = false;

ceElem.addEventListener("click", (e) => {
  resultElem.innerText = "0";
});
// Alternative Schreibweise:
//ceElem.addEventListener('click', clearResult);
// function clearResult(event) {
//     resultElem.innerText = '0';
// }

// Equality
if (10 == "10") {
  console.log("10 == 10: true");
}

// Strict Equality => keine Umwandlung der Datentypen
if (10 === "10") {
  console.log("10 === 10: true");
}

/**
 * result = 0
 * click auf zahl
 * wenn result == 0 || operationLock == true:
 *      dann result = e.target
 *      ansonsten result += e.target
 */
for (numberElem of numberElems) {
  numberElem.addEventListener("click", (e) => {
    if (resultElem.innerText.includes(",") && e.target.innerText == ",") {
      return;
    }

    /**
     * Boolsche Operatoren:
     * || => Logisches Oder
     * && => Logisches Und
     */

    let number = e.target.innerText;
    if (number != ",") {
      // ! =  Bedeutet: ist ungleich
      if (operationLock || resultElem.innerText == "0") {
        resultElem.innerText = number;
      } else {
        resultElem.innerText += number;
      }
      operationLock = false;
    } else {
      if (resultElem.innerText == "0" || operationLock) {
        resultElem.innerText = "0,";
      } else {
        resultElem.innerText += ",";
      }
      operationLock = false;
    }
  });
}

/**
 * - ergebnis und operation in zwischenergebnis schreiben
 * - nach operationseingabe => erste data-number wird gesetzt,
 *      statt hinzugefügt (reset result)
 */
for (operationElem of operationElems) {
  operationElem.addEventListener("click", (event) => {
    if (
      interimElem.innerText.includes("+") ||
      interimElem.innerText.includes("-") ||
      interimElem.innerText.includes("*") ||
      interimElem.innerText.includes("/")
    ) {
        /**
         * todo: teilen nach teilung
         */
      let num1 = interimElem.innerText.slice(
        0,
        interimElem.innerText.length - 2
      );
      let num2 = resultElem.innerText;
      let op = interimElem.innerText.slice(-1);
      let ergebnis;
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      let zwischenErgebnis = `${num1} ${op} ${num2} =`;
      switch (op) {
        case "+": {
          ergebnis = num1 + num2;
          break;
        }
        case "-": {
          ergebnis = num1 - num2;
          break;
        }
        case "*": {
          ergebnis = num1 * num2;
          break;
        }
        case "/": {
          ergebnis = num1 / num2;
          break;
        }
      }
      console.log(ergebnis);
      resultElem.innerText = ergebnis;
      interimElem.innerText = zwischenErgebnis;
    }
    if (interimElem.innerText.includes("=")) {
      interimElem.innerText = `${resultElem.innerText} ${event.target.innerText}`;
      operationLock = true;
    }
    if (operationLock == false) {
      let number = resultElem.innerText;
      let operation = event.target.innerText;
      interimElem.innerText += `${number} ${operation}`;
      operationLock = true;
    }
  });
}

equalsElem.addEventListener("click", (e) => {
  /**
   * definiere variable num1 => interimElem.innerText - letzte 2 character
   * definiere variable num2 => result.innerText
   * definiere variable op => letzter character in interimElem.innerText
   * Je nach 'op' => ergebnis = num1 op num2
   * schreibe ergebnis in resultElem.innerText
   * definiere variable zwischenErgebnis => 'num1 + operation + num2 =' also die komplette Gleichung
   */
  let num1 = interimElem.innerText.slice(0, interimElem.innerText.length - 2);
  let num2 = resultElem.innerText;
  let op = interimElem.innerText.slice(-1);
  let ergebnis;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  let zwischenErgebnis = `${num1} ${op} ${num2} =`;
  switch (op) {
    case "+": {
      ergebnis = num1 + num2;
      break;
    }
    case "-": {
      ergebnis = num1 - num2;
      break;
    }
    case "*": {
      ergebnis = num1 * num2;
      break;
    }
    case "/": {
      ergebnis = num1 / num2;
      break;
    }
  }
  console.log(ergebnis);
  resultElem.innerText = ergebnis;
  interimElem.innerText = zwischenErgebnis;
});

cElem.addEventListener("click", (e) => {
  interimElem.innerText = "";
  resultElem.innerText = "0";
});

deleteElem.addEventListener("click", (e) => {
  if (resultElem.innerText.length == 1) {
    resultElem.innerText = 0;
    // return;
  } else {
    resultElem.innerText = resultElem.innerText.slice(0, -1);
  }
});
