import CodersArray from "./CodersArray/CodersArray.js";

const names = new CodersArray("Marta", "Luis", "Pere");

const ejemplo = new CodersArray(3, 8, 10, 2);

console.log(ejemplo);

const length = ejemplo.push(9, 12);

console.log(length);

console.log(names);
