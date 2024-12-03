const mysym = Symbol("key1")

const myUser = {
    "Name":"Harish",      
    age:22,
    location:"pune",
    [mysym]:"myKey"       //without [] mysym is only string ,if we want to define as a symbol then we have to use [] in object.
}


console.log(myUser.Name);
console.log(myUser[mysym]);       //those are both ways to access objects. second is most usefull than first.

myUser.location = "surat"
console.log(myUser);

//Object.freeze(myUser)             //when we use freeze we can not change the properties.

myUser.location = "amalner"
console.log(myUser);

myUser.message = function(){
    console.log("Hello, I am Harish.");
}

myUser.message();



