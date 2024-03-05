const divide=(a,b)=>{
   return new Promise((resolve, reject) => {
    if(b==0){
        reject("Error:Division by zero not allowed");
    }else{
        
        resolve("Dividing "+a+" by "+b+" Result: "+a/b);
    }
   });
};

divide(10,2).then(result => console.log(result)).catch(error=>console.log(error));
divide(5,0).then(result => console.log(result)).catch(error=>console.log(error));
divide(111,22).then(result => console.log(result)).catch(error=>console.log(error));
divide(103,2).then(result => console.log(result)).catch(error=>console.log(error));
divide(13,0).then(result => console.log(result)).catch(error=>console.log(error));