import CodersArray from "./CodersArray";

describe("Given a length method", () => {
  describe("When it receives 2 elements", () => {
    test("Then it shoud return 2", () => {
      const numbers = new CodersArray(3, 8);
      const expectedLength = 2;

      const length = numbers.length();

      expect(length).toBe(expectedLength);
    });
  });

  describe("When it receives 10 word", () => {
    test("Then it should return 10", () => {
      const words = new CodersArray(
        "hola",
        "casa",
        "puertas",
        "farola",
        "pan",
        "araña",
        "zumo",
        "patinete",
        "bootcamp",
        "oro",
      );
      const expectedLength = 10;

      const length = words.length();

      expect(length).toBe(expectedLength);
    });
  });

  describe("When it receives 12 elements", () => {
    test("Then it should return 12", () => {
      const expressions = new CodersArray(
        "hola",
        3,
        "/",
        ".",
        "()",
        "(Ç",
        100,
        "-",
        "infierno",
        "funcion suma(a+b)",
        "rest",
        20,
      );
      const expectedLength = 12;

      const length = expressions.length();

      expect(length).toBe(expectedLength);
    });
  });
});
