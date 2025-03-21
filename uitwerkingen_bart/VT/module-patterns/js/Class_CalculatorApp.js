import { Class_Calculator_Module } from "./Class_Calculator_Module.js";

// Eerste instantie
var calc = new Class_Calculator_Module;
console.log("add: " + calc.add(2, 3));

// Tweede instantie
var calc2 = new Class_Calculator_Module;


console.log("sum ClassCalculatorApp: " + calc.sum(2, 3)); // 10
console.log("sum ClassCalculatorApp calc2: " + calc2.sum(2, 3)); // 5

