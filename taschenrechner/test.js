const [resultElem, interimElem, deleteElem, ceElem, cElem, numberElems, operationElems, equalsElem] = [
  '.result',
  '.interim-result',
  '[data-delete]',
  '[data-ce]',
  '[data-c]',
  '[data-number]',
  '[data-operation]',
  '[data-equals]',
].map((selector) =>
  selector === '[data-number]' || selector === '[data-operation]'
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector)
);

class Calculator {
  constructor(elements) {
    Object.assign(this, elements);
    this.operationLock = false;
    this.result = 0;
    this.interimResult = 0;
    this.operation = '';
    this.addEventListeners();
  }

  addEventListeners() {
    this.numberElems.forEach((numberElem) =>
      numberElem.addEventListener('click', () => this.addNumber(numberElem.innerText))
    );
    this.operationElems.forEach((operationElem) =>
      operationElem.addEventListener('click', () => this.addOperation(operationElem.innerText))
    );
    this.equalsElem.onclick = () => this.equals();
    this.deleteElem.onclick = () => this.delete();
    this.ceElem.onclick = () => this.clearResult();
    this.cElem.onclick = () => this.clearAll();
  }

  updateDisplay(val, elem) {
    elem.innerText = val;
  }

  clearResult() {
    this.updateDisplay('0', this.resultElem);
  }

  clearInterimResult() {
    this.updateDisplay('', this.interimElem);
  }

  clearAll() {
    this.clearResult();
    this.clearInterimResult();
    this.operationLock = false;
    this.result = 0;
    this.interimResult = 0;
    this.operation = '';
  }

  delete() {
    this.resultElem.innerText =
      this.resultElem.innerText.length > 1 ? this.resultElem.innerText.slice(0, -1) : '0';
  }

  addNumber(number) {
    this.resultElem.innerText =
      this.resultElem.innerText === '0' || this.operationLock ? number : this.resultElem.innerText + number;
    this.operationLock = false;
  }

  addOperation(operation) {
    if (!this.operationLock) {
      this.interimResult = parseFloat(this.resultElem.innerText);
      this.clearResult();
      this.operationLock = true;
      this.operation = operation;
      this.interimElem.innerText = `${this.interimResult} ${this.operation}`;
    }
  }

  equals() {
    this.interimResult = parseFloat(this.interimElem.innerText);
    this.result = parseFloat(this.resultElem.innerText);
    this.clearResult();
    this.clearInterimResult();

    const operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    };

    this.resultElem.innerText = operations[this.operation](this.interimResult, this.result);
  }
}

const calculator = new Calculator({
  resultElem,
  interimElem,
  deleteElem,
  ceElem,
  cElem,
  numberElems,
  operationElems,
  equalsElem,
});
