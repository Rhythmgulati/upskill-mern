let num = 153;
let sumofdigits = 0;
let isarmstrong = false;
let isprime = true;
let factors = [];
let sumofdigitscube = 0;

let tempnum = num;
while(tempnum>0){
    let digit = tempnum%10;
    sumofdigits += digit;
    tempnum = Math.floor(tempnum/10);
}

tempnum = num;
while(tempnum>0){
    let digit = tempnum%10;
    sumofdigitscube += digit ** 3;
    tempnum = Math.floor(tempnum/10);
}
if(sumofdigitscube === num){
    isarmstrong = true;
}

if(num === 1){
   isprime = false;
}else{
    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i==0){
            isprime=false;
        }
    }
}

for(let i = 0 ; i<num ; i++){
    if(num%i==0){
        factors.push(i);
    }
}

console.log("Number :"+num);
console.log("Sum of digits :"+sumofdigits);
console.log("Is it an Armstrong number? :"+isarmstrong);
console.log("Is it an Prime number? :"+isprime);
console.log("Factors :"+factors);