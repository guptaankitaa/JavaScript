//ternary operator is the only operator in js that takes three operands
undefined

var age = 17;
undefined

console.log((age >= 18) ? "you can vote" : "you cant vote ");
VM3164:1 you cant vote 
undefined

//--------switch statement-------
undefined

var area = "circle";
undefined
var PI = 3.142, l=5, b=4, r=3;
undefined
switch(area){                                                                                                                                                                           
  case "circle" :                                                                                                                                                                    
    console.log("the area of circle is " + PI*r**2);                                                                                                                               
    break;    
   case "triangle" :                                                                                                                                                            
   console.log("the area of triangle is " + (l*b)/2);                                                                                                                                  
    break; 
   case "rectangle" :                                                                                                                                                                  
    console.log("the area of rectangle is " + (l*b));                                                                                                                               
    break; 
   case "square" :                                                                                                                                                                      
    console.log("the area of square is " + (l*l));                                                                                                                                          
   break;                                                                                                                                                                            
  default :                                                                                                                                                                           
    console.log("enter valid data");}
VM5801:5 the area of circle is 28.278
undefined

//---------while loop--------
undefined

var num = 10;
undefined
while(num <= 10){
    console.log(num);num++;}
VM6027:2 10
10
5*2
10
20/2
10
var num = 0;
undefined
while(num <= 10){
    console.log(num);num++;}
VM6052:4 0
VM6052:4 1
VM6052:4 2
VM6052:4 3
VM6052:4 4
VM6052:4 5
VM6052:4 6
VM6052:4 7
VM6052:4 8
VM6052:4 9
VM6052:4 10
10

//Do while loop--------
undefined

var num = 0;
undefined
do{ console.log(num); num++;}while(num<=10);
VM305:1 0
VM305:1 1
VM305:1 2
VM305:1 3
VM305:1 4
VM305:1 5
VM305:1 6
VM305:1 7
VM305:1 8
VM305:1 9
VM305:1 10
10
//exit control loop
undefined

//for loop----------------
undefined

for(var sum = 0; sum<=10; sum++){console.log(sum)}
VM558:1 0
VM558:1 1
VM558:1 2
VM558:1 3
VM558:1 4
VM558:1 5
VM558:1 6
VM558:1 7
VM558:1 8
VM558:1 9
VM558:1 10
undefined

//---------print table-----
undefined

for(var num = 1; num<=10; num++){var tableof = 8; console.log(tableof + " * " + num + " = " + tableof * num);}
VM1112:1 8 * 1 = 8
VM1112:1 8 * 2 = 16
VM1112:1 8 * 3 = 24
VM1112:1 8 * 4 = 32
VM1112:1 8 * 5 = 40
VM1112:1 8 * 6 = 48
VM1112:1 8 * 7 = 56
VM1112:1 8 * 8 = 64
VM1112:1 8 * 9 = 72
VM1112:1 8 * 10 = 80
undefined

//---------------function-----
undefined

//block of code design to perform a particular task
undefined
function sum(){ var a = 10, b = 20; var total = a+b;} console.log
ƒ log() { [native code] }
function sum(){ var a = 10, b = 20; var total = a+b;console.log(total);} sum();
VM1641:1 30
undefined

//parameter and arguments
undefined

function sum(a,b){  var total = a+b;console.log(total);} sum(); sum(20,30); sum(20,80);
VM1803:1 NaN
VM1803:1 50
VM1803:1 100
undefined
