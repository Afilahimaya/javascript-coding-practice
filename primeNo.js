//JavaScript Program to Check Prime Number
var num = 4;
let isPrime = true;
if(num == 1){
    console.log("1 is neither prime nor composite number");
}
else if(num >1){
    for(let i =2; i< num; i++){
        if(num % i == 0){
            isPrime = false;
            break;
        }
    }
}
if(isPrime == true){
    console.log("It is prime number");
}else{
    console.log("It is not prime number");
}