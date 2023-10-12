import CodersArray from "./CodersArray";

describe("Given a length method", () => {
  describe("When it receives 2 elements", () => {
    test("Then it shoud return 2", () => {
      const numbers = new CodersArray(3, 8);
      const expectedLength = 2;
      const elements = 2;

      const length = numbers.length();

      expect(length).toBe(expectedLength);
    });
  });
});
