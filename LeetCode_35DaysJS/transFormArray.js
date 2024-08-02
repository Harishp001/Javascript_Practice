/*
Given an integer array arr and a mapping function fn, 
return a new array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).
*/
function map(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
}


const arr1 = [1, 2, 3];
const plusone = (n) => n + 1;
const newArray1 = map(arr1, plusone);
console.log(newArray1);

const arr2 = [10,20,30];
const plusI = (n,i) => n + i;
const newArray2 = map(arr2, plusI);
console.log(newArray2);

const arr3 = [4,8,12];
const constant = () => 42;
const newArray3 = map(arr3, constant);
console.log(newArray3);