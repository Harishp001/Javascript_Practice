let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());


let myDate1 = new Date(2024,0,21);
console.log(myDate1.toDateString());

let myDate2 = new Date("2024-02-21");
console.log(myDate2.toDateString());

let myDate3 = new Date("03-21-2024");
console.log(myDate3.toDateString());

console.log(Math.round((Date.now())/ 1000));

