/*Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
The fn function takes one or two arguments:
arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. 
A truthy value is a value where Boolean(value) returns true.
Please solve it without the built-in Array.filter method. */

function filter(arr,fn){
    let filteredArr = [];
    for(i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

const arr1 = [0,10,20,30];
const greaterThan = (n) => n>10;
const result = filter(arr1,greaterThan);
console.log(result);

const arr2 = [1,2,3];
const firstIndex = () => i===0;
const result1 = filter(arr2,firstIndex);
console.log(result1);

const arr3 = [-2,-1,0,1,2];
const plusOne = (n) => n+1;
const result2 = filter(arr3,plusOne);
console.log(result2);