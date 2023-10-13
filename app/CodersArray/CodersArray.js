class CodersArray {
  length;

  constructor(...elements) {
    let counter = 0;

    for (const element of elements) {
      this[counter] = element;
      counter++;
    }

    this.length = counter;
  }

  push(...elements) {
    let counter = this.length;

    for (const element of elements) {
      this[counter] = element;
      counter++;
    }

    this.length = counter;
    return this.length;
  }
}

export default CodersArray;
