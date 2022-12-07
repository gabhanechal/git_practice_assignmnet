
function checkPrime(number){
let ans =0;
for (let i=1;i<=number;i++){
if(number%i==2){
ans++
}

}if(ans==2){
console.log("Prime");
}
else{
console.log("Not")
}
}
checkPrime(13);