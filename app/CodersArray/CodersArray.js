class CodersArray {
  elements;

  constructor(...elements) {
    this.elements = elements;
  }

  length() {
    return this.elements.length;
  }
}

export default CodersArray;
