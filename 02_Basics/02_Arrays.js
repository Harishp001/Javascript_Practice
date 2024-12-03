const n1 = [1,2,3,4,5]
const n2 = [6,7,8,9,10]
const n3 = [11,12,13,14]

// n1.push(n2) //push add array into array

const newArr = n1.concat(n2,n3)            //concat array and return new array
// console.log(newArr);

const newArr1 = [...n1, ...n2, ...n3]      //spread same as concat but we can give multiple array S
// console.log(newArr1);

const complexArray = [1,2,3,[4,5,6],7,8,[9,[10]]]
// console.log(complexArray.flat(Infinity));        //Also we can give depth level like 1,2,3

// console.log(Array.isArray(complexArray));        //check array present is or not

const name1 = "Harish"
const nameArray = Array.from(name1)
// console.log(nameArray);

const newObj = {
    name : "Harish",
    age  : '22'
}
// const objArray = Array.from(newObj)
// console.log(objArray);                    //gives empty array because we did not specify which key we want to convert in array

const objArray = Array.from(newObj.age)
// console.log(objArray);

let a = 123
let b = 456
let c = 789

const newSetArray = Array.of(a,b,c)
console.log(newSetArray);


