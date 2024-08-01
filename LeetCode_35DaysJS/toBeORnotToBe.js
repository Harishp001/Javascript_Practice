/*in this problem we use arrow function also we can use simple return function for 
toBe(val) accepts another value and returns true if the two values === each other. 
                        If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. 
                        If they are equal, it should throw an error "Equal".
*/


var except = function(val){
    return{
        toBe : function (val2){
           if(val === val2){
                return true;
           }else{
                throw new Error ("Not Equal");
           }
        },
        notToBe : function (val2){
            if(val !== val2){
                 return true;
            }else{
                 throw new Error ("Equal");
            }
         }
    }
}

var result = except(5).toBe(5);
var result1 = except(5).notToBe(5);

console.log(result);
console.log(result1);