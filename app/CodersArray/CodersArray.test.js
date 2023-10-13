import CodersArray from "./CodersArray";

describe("Given the class CodersArray's constructor", () => {
  describe("When it's called with 2 and 4", () => {
    test("Then it should return an object with two properties pointing to 2 and 4", () => {
      const expectedValueA = 2;
      const expectedValueB = 4;

      const values = new CodersArray(2, 4);

      expect(values[0]).toBe(expectedValueA);
      expect(values[1]).toBe(expectedValueB);
    });

    test("Then it should have the length of 2", () => {
      const expectedLength = 2;

      const values = new CodersArray(2, 4);

      expect(values.length).toBe(expectedLength);
    });
  });
});

describe("Given the class CodersArray with a push method", () => {
  describe("When it's called with the arguments 7 and 29", () => {
    test("Then it should point to pushed values", () => {
      const expectedValueA = 7;
      const expectedValueB = 29;

      const values = new CodersArray(3, 5, 8);
      values.push(7, 29);

      expect(values[3]).toBe(expectedValueA);
      expect(values[4]).toBe(expectedValueB);
    });

    test("Then the returned length should be 5", () => {
      const expectedLength = 5;

      const values = new CodersArray(3, 5, 8);
      const valuesLength = values.push(7, 29);

      expect(valuesLength).toBe(expectedLength);
    });
  });
});
