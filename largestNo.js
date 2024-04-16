//JavaScript Program to Find the Largest Among Three Numbers
var num1 = 4;
var num2 = 8;
var num3 = 19;
let largestNum;
if (num1>=num2 && num1>=num3){
     largestNum = num1;
}else if(num2>=num1 && num2>=num3){
    largestNum = num2;
}else{
    largestNum = num3;
}
console.log("The largest number is " + largestNum);