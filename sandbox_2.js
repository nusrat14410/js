//string
console.log("My name is Dana");

let email = 'nusrat15-14410@diu.edu.bd';
console.log(email);

//string concatenation
let firstName = 'Nusrat';
let lastName = 'Jahan';

let fullName=firstName+" "+lastName;
console.log(fullName);

//getting characters
console.log(fullName[4]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result=fullName.toLocaleLowerCase();
console.log(result,fullName);

//index
console.log(fullName.indexOf('J'));

let r = email.lastIndexOf('u');
console.log(r);

let r1 = email.lastIndexOf();
console.log(r1);
//slice
let r2 = email.slice(2,7);
console.log(r2);
//substr
let r3 = email.substr(3,7);
console.log(r3);

//char replace
let r4 = email.replace('n','M');
console.log(r4);


