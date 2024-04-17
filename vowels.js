//Count the Number of Vowels in a Given String
var str = "HELLO WORLD";
function countVowels(str){
    str = str.toLowerCase();
    const vowels = ['a','e','i','o','u'];
    let vowelcount = 0;
    for (let i = 0; i < str.length; i++) {
     if (vowels.includes(str[i])) {
        vowelcount++;
     }
           
    }
    return vowelcount;
}
 
var result = countVowels(str);
console.log("Number of vowels:",result);

