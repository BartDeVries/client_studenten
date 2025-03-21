import { RMP_Calculator_Module } from "./RMP_Calculator_Module.js";

// Eerste instantie
var calc = new RMP_Calculator_Module;
console.log("add: " + calc.add(2, 3));

// Tweede instantie
var calc2 = new RMP_Calculator_Module;


console.log("sum RMPCalculatorApp: " + calc.sum(2, 3)); // 10
console.log("sum RMPCalculatorApp calc2: " + calc2.sum(2, 3)); // 5

