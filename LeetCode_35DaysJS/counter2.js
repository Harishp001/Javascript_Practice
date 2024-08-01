/*
increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

var createCounter = function(init){
    let value = init;
    return{
        increment : () => ++value,
        decrement : () => --value,
        reset : () => value = init,
    };
}

const counter = createCounter(5);

console.log("Increment = "+counter.increment());
console.log("Reset = "+counter.reset());
console.log("Decrement = "+counter.decrement());