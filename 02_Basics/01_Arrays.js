//Array
const myArr = [0,1,2,3,4,5,6]
// console.log(myArr);

const myArr1 = new Array('Harish', 'Amrutsing', 'Patil')
// console.log(myArr1);

//Array Methods
myArr.push(7)
myArr1.push('hey')
// console.log(myArr);
// console.log(myArr1);

myArr1.pop()
// console.log(myArr1);

myArr.unshift(8)
// console.log(myArr);

myArr.shift()
// console.log(myArr);

// console.log(myArr1.includes('Harish'))
// console.log(myArr1.includes(1))

// console.log(myArr1.indexOf(1))
// console.log(myArr1.indexOf('Harish'))

const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

//slice
const n1 = [1,2,3,4,5,6,7,8,9,10]
console.log("A", n1); //before
console.log(n1.slice(1,5));
console.log("B", n1); //after

//splice
const n2 = [2,3,4,5,6,7,8,9,10]
console.log("A", n2); //before
console.log(n2.splice(1,5));
console.log("B", n2); //after


