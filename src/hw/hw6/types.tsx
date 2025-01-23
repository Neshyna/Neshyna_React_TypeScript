// Задание
// Протипизировать следующие данные в 
// соответствии с изученными правилами
let age= 25;  
let age: number = 25;

let name = "Alice";
let name: string = "Alice";

let isActive = true; 
let isActive: boolean = true;

let nullableValue = null; 
let nullableValue: null | string = null; // Строка или null

let numbers = [1, 2, 3, 4]; 
let numbers:  numbers[] = [1, 2, 3, 4]; 

let names = ["Alice", "Bob", "Charlie"];
let names: string[] = ["Alice", "Bob", "Charlie"];

let mixed = [1, "Alice", 2, "Bob"];
let mixed: [number, string] = [1, "Alice", 2, "Bob"];

let colors = [123, "red", true, "blue"];
let colors: [number, string, boolean,string] = [123, "red", true, "blue"];
let colors: (number | string | boolean)[] = [123, "red", true, "blue"];


const add = (a, b) => {
  return a - b;
};
const add = (a:number,b:number): number {
  return a - b;
};



const logMessage = (message) => {
  console.log(message);
};
const logMessage = (message): void => {
  console.log(message);
}
