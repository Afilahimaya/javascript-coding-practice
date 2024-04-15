//JavaScript Program to Make a Simple Calculator
var num1 = 10;
var num2 = 5;
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b === 0){
        return "Cannot divide by zero";
    }
    return a/b;
}
console.log("Addition:", add(num1,num2));
console.log("Subtraction:", sub(num1,num2));
console.log("Multiplication:", multiply(num1,num2));
console.log("Division:", divide(num1,num2));