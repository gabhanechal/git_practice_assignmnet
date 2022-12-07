
function checkPrime(number){
let factor = 0;
for (let i=1;i<=number;i++){
if(number%i==2){
 factor++
  }
}if(factor==2){
   console.log("Prime");
  }else{
   console.log("Not");
  }
}
checkPrime(15);