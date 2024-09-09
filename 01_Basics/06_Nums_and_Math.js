//+++++++++++++++++++++++ Nums ++++++++++++++++++++++++++++

const score = 500
console.log(score);

const balance = new Number(225)
console.log(balance);
console.log(balance.toFixed(2));

const no = 223.453
console.log(no.toPrecision(4));

let cost = 10000000
console.log(cost.toLocaleString('en-IN'));

console.log(balance.toString());
console.log(balance.valueOf());


//++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-5));      // negative to positive
console.log(Math.round(4.2)); 
console.log(Math.round(4.8)); 


console.log(Math.ceil(4.2));  //choose highest
console.log(Math.ceil(4.8)); 

console.log(Math.floor(4.2)); //choose lowest
console.log(Math.floor(4.8)); 

console.log(Math.min(4,3,2 ,5 ,6,7)); 
console.log(Math.max(4,3,2 ,5 ,6,7)); 

console.log(Math.random()); 
console.log(Math.floor((Math.random() * 10)+1)); 

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1) + min)); 






