//JavaScript Program to Print the Fibonacci Sequence
//0 1 1 2 3 5 8
function fibonacciSequence(num){
    let num1 = 0;
    let num2 = 1;
    let num3 = 0
    for(let i = 0; i<= num; i++){
        console.log(num1);
        num3 = num1 +num2;
        num1 = num2;
        num2 = num3;
    

    }return num3;

}
var num = 5;
console.log(fibonacciSequence(num));