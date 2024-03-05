const arr=[2,33,44,554,33,2332,22,21];

function maxnumber(arr){
    let maxnum = 0 
   for(let i=0;i<arr.length;i++){
    if(maxnum<arr[i]){
        maxnum=arr[i];
    }
   }
   return maxnum;
}

function sumofelements(){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

function countofodd(arr){
    let count = 0 ;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            count += 1;
        }
    }
    return count;
}

console.log("Array: "+arr)
console.log("Maximum number: "+maxnumber(arr));
console.log("Sum of all elements: "+sumofelements(arr));
console.log("Count of Odd numbers: "+countofodd(arr));