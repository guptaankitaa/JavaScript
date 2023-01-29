//using console 

//alert function
alert("hello world")
undefined

//to print
console.log("hello world")
VM348:1 hello world
undefined

//----------------------value and variables----------------------

undefined
var myName = 'Ankita Gupta';
undefined
myName
'Ankita Gupta'

var myAge = 20;
undefined
console.log(myAge);
VM619:1 20
undefined

//-------------------example of naming variable-----------------

//varibales names are case sensetive
undefined

var _myName = "Ankita";
undefined
console.log(_myName);
VM1003:1 Ankita
undefined

var _1my__Name = "Ankita";
undefined
console.log(_1my__Name);
VM1068:1 Ankita
undefined

var 1myName = "Ankita";
VM1084:1 Uncaught SyntaxError: Invalid or unexpected token
var $myName = 'Ankita';
undefined

//not start with number

console.log( $myName);
VM1192:1 Ankita
undefined


//-------------------data types in JavaScript--------------------
undefined

//there are 6 primitive datatypes
VM121:1 Uncaught SyntaxError: Unexpected identifier 'primitive'
var myName = 'Ankita Gupta';
undefined
console.log(typeof());
VM286:1 Uncaught SyntaxError: Unexpected token ')'
console.log(typeof(myName));
VM308:1 string
undefined
var myAge = 20;
undefined
console.log(typeof(myAge));
VM383:1 number
undefined

var iAmAnkita = true;
undefined
console.log(iAmAnkita);
VM504:1 true
undefined

console.log(typeof(iAmAnkita));
VM534:1 boolean
undefined

console.log(typeof(iAmAnkitaa));
VM543:1 undefined
undefined
