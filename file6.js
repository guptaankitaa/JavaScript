//Modern JavaScript
undefined

//let vs const vs var
undefined

var myName = 'Ankita Gupta';
undefined

console.log(myName);
VM420:1 Ankita Gupta
undefined

myName = " shefali gupta ";
' shefali gupta '
console.log(myName);
VM528:1  shefali gupta 
undefined

//using var

undefined
var myName = 'Ankita Gupta';
undefined

console.log(myName);
VM597:1 Ankita Gupta
undefined

//using let

let Name = 'Ankita Gupta';
undefined

console.log(Name);
VM692:1 Ankita Gupta
undefined

myName = " shefali gupta ";
' shefali gupta '

//using const

const myname = 'Ankita Gupta';
undefined

console.log(myname);
VM784:1 Ankita Gupta
undefined

myname = " shefali gupta ";
' shefali gupta '

//From here i'm using code studio
// var = function scope
//let and const = block scope

function biodata(){
    var myFirstname = "Ankita"; 
    console.log(myFirstname);
    
    if(true){
        var mylastname = "gupta";
        console.log("inner block " + mylastname);
        console.log("inner block " + myFirstname);
    }
     console.log("outer block " + myFirstname);
     console.log("outer block " + mylastname);
}

biodata();

//using let

function biodata(){
    let myFirstname = "Ankita"; 
    console.log(myFirstname);
    
    if(true){
        let mylastname = "gupta";
        console.log("inner block " + mylastname);
        console.log("inner block " + myFirstname);
    }
    
       console.log("outer block " + myFirstname);
       console.log("outer block " + mylastname);
}

biodata();

//using const

function biodata(){
    const myFirstname = "Ankita"; 
    console.log(myFirstname);
    
    if(true){
        const mylastname = "gupta";
        console.log("inner block " + mylastname);
        console.log("inner block " + myFirstname);
    }
    
     console.log("outer block " + myFirstname);
     console.log("outer block " + mylastname);
}

biodata();

//Template literals

for(let num = 1; num <= 10; num++){
    let tableof = 12;
   
//console.log(tableof + " * " + num + " = " + tableof * num);
    console.log(`${tableof} * ${num} = ${tableof * num}`);
}

//default parameter

function mult(a,b=5){
    return a*b;
}

console.log(mult(5));

//FAT arrow function
//normal function

console.log(sum());

function sum(){
    let a = 5; b = 6;
    let sum = a+b;
    return `the sum is ${sum}`;
}

//convert if FAT arrow function 

const sum = () => {
    let a = 5; b = 6;
    return `the sum is ${a+b}`;
}
console.log(sum());
