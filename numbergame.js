let randomNum = Math.floor(Math.random()*(100-1+1)+1)
let attempt = 1
boll=true;
while(boll){
    let inputNumber = parseInt(window.prompt("Enter The Number Between 1-100"))
if(inputNumber>=1 && inputNumber<=100){
    
       
    if(inputNumber==randomNum){
        console.log(`You Have matched number correctly  i.e. ${randomNum}`)
        boll=false;
        window.alert(`You took ${attempt} attempt to Guess it`)
    }
    else if (inputNumber<(randomNum)){
        window.alert("Your Guess Is Lower | Try Again")
    }
    else if(inputNumber>(randomNum)){
        window.alert("Your Guess Is Higher | Try Again")
    }


attempt=attempt+1;

}
else{
    window.alert("please Enter the valid num inside the range")
    boll=false;
}
}
console.log(randomNum)