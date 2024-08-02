/*Given an integer array nums, a reducer function fn, and an initial value init, 
return the final result obtained by executing the fn function on each element of the array, 
sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: 
val = fn(init, nums[0]), val = fn(val, nums[1]), 
val = fn(val, nums[2]), ... until every element in the array has been processed. 
The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.
Please solve it without using the built-in Array.reduce method. */

function reduce(nums,fn,init){
    let arrayList = init;
    for(i=0; i<nums.length; i++){
        arrayList = (fn(arrayList, nums[i]));
    }
    return arrayList;
}

const arr1 = [1,2,3,4];
const sum = (init, i) =>init + i ;
const init1 = 0;
const result = reduce(arr1,sum,init1);
console.log(result);

const arr2 = [1,2,3,4];
const sum1 = (init, i) =>init + i * i ;
const init2 = 100;
const result1 = reduce(arr2,sum1,init2);
console.log(result1);

const arr3 = [];
const sum2 = (init, i) => 0 ;
const init3 = 25;
const result2 = reduce(arr3,sum2,init3);
console.log(result2);