const passwordBox = document.getElementById("password");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbole = "!@#$%^&*()_+-=/?:";

const allChar = upperCase + lowerCase + number + symbole;

function createPassword(){
    let password ="";

    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*lowerCase.length)];
    password += symbole[Math.floor(Math.random()*lowerCase.length)];


    while(length >password.length){
        password += allChar[Math.floor(Math.random()*allChar.length)];
    }

    passwordBox.value = password;
}

createPassword()

function copyPass(){
    passwordBox.select();
    document.execCommand("copy");

}

copyPass();