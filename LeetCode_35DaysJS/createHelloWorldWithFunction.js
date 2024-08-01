function createHelloWorldWithFunction(){
    return function(){
        return "Hello World";
    };
}

const f = createHelloWorldWithFunction();
console.log(f());
console.log(f({},null,42));

//leetcode question from js series
//function prints "Hello World" if you give arguments or not to function. 


