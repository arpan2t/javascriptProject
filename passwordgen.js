
function generatePassword(length,lowercase,upperCase,number,symbols){

    const lwr = "abcdefghijklmnopqrstuvwxyz";
    const upr = lwr.toLowerCase();
    const num = "0123456789";
    const symbol = "!@#$%&*"
    let allowedChar = "";
    let password = "";
    allowedChar += lowercase?(lwr):"";
    allowedChar += upperCase?(upr):"";
    allowedChar += number?(num):"";
    allowedChar += symbols?(symbol):"";
    for(let i = 0 ; i<length ; i++){
        let randomNum = Math.floor((Math.random()*allowedChar.length)+0);
        password += allowedChar.charAt(randomNum);
    }


    return password;
}

const passwordLength = 12;
const lowercase = true;
const uppercase = true;
const number = true;
const symbols = true;

const password = generatePassword(passwordLength,
                                    lowercase,
                                    uppercase,
                                    number,
                                    symbols);
                                    
console.log(`Generated Password is : ${password}`)                                    