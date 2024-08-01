//In this program we have increment current value

function value(n){
    let currentCounter = n
        return function(){
        return currentCounter++;
    };
}

var counter = value(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());