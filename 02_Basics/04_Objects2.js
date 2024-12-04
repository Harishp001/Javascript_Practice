// const instaUser = new Object()  singleton object

const instaUser = {}      //above and this both are same

instaUser.id = "123harish",
instaUser.name = "Harish",
instaUser.pass = "12345678"

// console.log(instaUser);   //also this way we can write objects. 

const user = {
    email : "hari123@gmail.com",
    userFullname : {                        //nested objects.
        fullname : {
            firstName : "Harish",
            lastName : "Patil",
        }
    }   
}
// console.log(user.userFullname.fullname.firstName);     nested objects.

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = Object.assign(obj1,obj2) // merge those objects in obj1 and also assign to obj3
// console.log(obj2 === obj3);              

// const obj3 = Object.assign({},obj1,obj2) // merge in {} and assign to obj3

//simple trick to merge object spread

const obj3 = {...obj1,...obj2}   //spread operator

// console.log(obj3);


const exArr = [
    {
        id  : 1,
        name : "abc"
    },
    {
        id  : 2,
        name : "abc"
    },{
        id  : 1,
        name : "abc"
    },{
        id  : 1,
        name : "abc"
    },{
        id  : 1,
        name : "abc"
    },{
        id  : 1,
        name : "abc"
    }
]

console.log( exArr[0].id);          //mostly used in db operation when there is multiple data , we can access object from array.

console.log(Object.keys(instaUser));      // output gives in array. so we can perform operation.
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));     //for both key and value.



//to ckeck in object has this property or not
console.log(instaUser.hasOwnProperty('name'));







