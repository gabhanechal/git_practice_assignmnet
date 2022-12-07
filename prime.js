
function checkPrime(number){
for (let i=1;i<=number;i++){
if(number%i==2){
return true;
}
}
return false;
}
checkPrime(1);