//convert data type 

let number = 21
console.log(typeof(number));

let numberToString = String(number);
console.log(numberToString);
console.log(typeof numberToString);

//convert to number
let stringName = "33"
let stringName1 = "33abc"
console.log(typeof(stringName));
console.log(typeof(stringName1));

let stringToNumber = Number(stringName);
let stringToNumber1 = Number(stringName1);
console.log(stringToNumber);
console.log(stringToNumber1);
console.log(typeof stringToNumber);
console.log(typeof stringToNumber1);
//"33" -> 33
//"33abc" => NaN

//convert to boolean
let isLoggedIn = 1
let boolenLogedIn = Boolean(isLoggedIn);
console.log(boolenLogedIn);
//1 => true, 0 => false