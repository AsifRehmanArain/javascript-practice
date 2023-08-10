var accountId = 12345;
var userName = "asifRehman";
let accountEmail = 'example@domain.com';
const accountPassword =1234567890;
accountCity = "Karachi";             //It works but not prefer to use this method 
accountState;

// console.log(accountId);
// console.log(userName);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);


accountId ="987665";
accountEmail = "xyz@gmail.com";
accountCity = "Lahore";
accountState = "Sindh";
//accountPassword = 1122334455;     //const can not be changed not allowed



// console.log(accountPassword);
// console.log(accountCity);



/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId ,userName , accountEmail , accountPassword , accountCity , accountState]);