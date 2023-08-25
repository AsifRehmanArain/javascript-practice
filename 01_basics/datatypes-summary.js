/*

#Primitive

7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

// Symbol Example

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(typeof id);
console.log(typeof anotherId);

console.log(id === anotherId);

//How to check data types for different types

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof userEmail);

*/





/*

Reference Type (None primitive)

Array, Objects, Functions

*/








// Array in Example
const heros = ["Mohammad Ali Jinnah", "Allama Iqbal", "Sir Syed Ahmed Khan", "Fatima Jinnah"];


// Objects in Example


const myObj = {
    name : "Asif",
    age : 30,
    isLoggedIn : true,
    email : "<xyz@dmain.com>",
}


// Functions in Example


const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

/*

typeof Operator Results


undefined            "undefined"

null                 "object"

boolean               "boolean"

number                "number"

string                "string"

symbol                "symbol"

bigint                "bigint"


array                  "object"

object                 "object"

function              "function"



Object
(native 
and
does 
not 
implement)             "object"


Object
(
native
or
host
and
does
implement           "Function"
)



Object              
(
host
and                 "undefined" "boolean", "number", or "string" 
does 
not 
implement
)

*/