var num1 = 27;
var num2 = 18;
let hcf;
for(let i =1; i<=num1 && i<=num2; i++){
    if(num1%i == 0 && num2%i ==0){
        hcf = i;
    }
}
console.log("Hcf:",hcf);
let lcm = (num1 * num2)/hcf;
console.log("Lcm:", lcm);