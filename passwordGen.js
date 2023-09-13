var display = document.getElementById("display");
var generateBtn = document.getElementById("generate");
var passwordLength = document.querySelector(".password-length");
var clear = document.getElementById("clear");
var numOnly = document.querySelector('.numbers-only');

let clicked = true;

function generatePassword()
{
    const str = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()';
    const strNum = '1234567890';
    let password = '';
    let rand;

    if(passwordLength.value >= 1 && passwordLength.value <= 20 && numOnly.checked == false)
    {
        for(let i = 0; i < passwordLength.value; i++)
        {
            rand = str.charAt(Math.floor(Math.random() * str.length));
            password += rand;
        }
    }else if(passwordLength.value >= 1 && passwordLength.value <= 20 && numOnly.checked == true){
        for(let i = 0; i < passwordLength.value; i++)
        {
            rand = strNum.charAt(Math.floor(Math.random() * strNum.length));
            password += rand;
        }
    } else{
        alert("Enter a number within the accepted password length range (1 - 20)");
    }
    return password;
}

function showPassword()
{
    display.value = generatePassword();
    generateBtn.style.animationName = "click";
    generateBtn.style.animationDuration = "0.2s"; 
}

function clearPassword()
{
    display.value = "";
    clear.style.animationName = "click";
    clear.style.animationDuration = "0.2s";   
}

generateBtn.addEventListener('click', showPassword);
generateBtn.addEventListener('animationend', () =>{
    generateBtn.style.animationName = "";
})

clear.addEventListener('click', clearPassword);
clear.addEventListener('animationend', () => {
    clear.style.animationName = "";
})