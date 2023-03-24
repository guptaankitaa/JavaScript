
//String
//string constructor

let petName = new String("Shefali Gupta");

console.log(petName);

let myname = "Ankita Gupta"
console.log(myname);

//to find length

let myname = "Ankita Gupta"
console.log(myname.length);

//" '' " vice versa we can use or backslash\\ is known as escape character

//finding a string in a string 

const myData = 'I am Ankita Gupta';
console.log(myData.indexOf("am"));

//it give index no of that string

const myData = 'I am Ankita Gupta';
console.log(myData.indexOf("a", 3));

//we can search using search keyword function
//search method does not contain second start position argument

const myData = 'I am Ankita Gupta';
console.log(myData.search("am"));

//Extracting string parts
//3 methods

//slice(start, end)
//substring(start, end)
//substr(start, length)

var str = "Apple, Banana, Kiwi, Papaya";
console.log(str.slice(0,4));

// Appl
//the slice method select the element starting at the given start argument and ends at but does not include the given end argument.
//original array will not be change

var str = "Apple, Banana, Kiwi, Papaya";
console.log(str.slice(7));

//it give value from index 7 till end

//Display only 280 character in a string


let myTweets = " Despite the fact that piranhas are relatively harmless, many people continue to believe the pervasive myth that piranhas are dangerous to humans. 
This impression of piranhas is exacerbated by their mischaracterization in popular media. For example, the promotionalposter for the 1978 horror film Piranha features 
an oversized piranha poised to bite the leg of an unsuspecting woman. Such a terrifying representation easily captures theimagination and promotes unnecessary fear.
 While the trope of the man-eating piranhas lends excitement to the adventure stories, it bears little resemblance to the real-life piranha. By paying more attention 
to fact than fiction, humans may finally be able to let go of this inaccurate belief.";

 let myActualTweet = myTweets.slice(0,280);
 console.log(myActualTweet);

//2nd Method
//substring method same as slice but not use negative indexes

//if we give negative value then the character are counted from the 0th positon
//3rd Method
//substr method it is also same but if we write negative index it dont print anything
var str = "Apple, Banana Kiwi";
// let res = str.substr(7,-2);
let res = str.substr(-10);
console.log(res);

//with the help od substr we extract string from last 


//Replacing String Content
//syntax => searchfor,replacewith

let myBioData = `I am Ankita Gupta Ankita`;

let replaceData = myBioData.replace('Ankita','Shefali');
console.log(replaceData);

//it is casesensitive and it will only change 1st value not the other and it will change in new string not the original one

//Extraction  String Character

//3 Method

//charAt(position)
//charCodeAt(position)
//property Acess[]

//1st method charAt it give value of that position

 let str = "HELLO WORLD";
 console.log(str.charAt(9));

//2nd method charCodeAt it return unicode 0 to 65535 UTF-16 code

 let str = "HELLO WORLD";
 console.log(str.charCodeAt(0));
 
//Return the unicode of last character

let str = "HELLO WORLD";
let lastChar = str.length - 1;
console.log(str.charCodeAt(lastChar));

//3rd method property Acess[] it work like an array
let str = "HELLO WORLD";
console.log(str[10]);

//other Methods 

let myName = "AnKiTa GuPta";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

//split array

var txt ="a,b,c | d ,e";
console.log(txt.split(","));
console.log(txt.split(" "));
console.log(txt.split("|"));

//Date and Time 

//1st january 1970  we can pass 7 arguments(year,month,day,hour,mint,sec,milisec)
//get and set method is used here 
let currDate = new Date();
console.log(currDate);

console.log(new Date());                    //2023-03-10T11:33:46.516Z
console.log(new Date().toLocaleString());   //3/10/2023, 11:33:46 AM
console.log(new Date().toString());         //Fri Mar 10 2023 11:34:54 GMT+0000 (Coordinated Universal Time)
//it tell millisecond from 1st jan 1970 till now
console.log(Date.now());

var d = new Date(2023,2,10,33,30,0);
console.log(d.toLocaleString());


var d = new Date(2023,4);
console.log(d.toLocaleString());

const curDate = new Date();

console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth());
console.log(curDate.getDate());
console.log(curDate.getDay());

const curTime = new Date();

console.log(curTime.toLocaleString());
console.log(curTime.getTime());
console.log(curTime.getHours());
console.log(curTime.getSeconds());
console.log(curTime.getMinutes());
console.log(curTime.getMilliseconds());


//Math Object

console.log(Math.PI);

//Round Method      rounded to nearest integer

let num = 10.4122;
console.log(Math.round(num));

//Math.sqrt()

console.log(Math.sqrt(27));
console.log(Math.sqrt(64));
console.log(Math.sqrt(169));

//Math.abs()  negative to positive

console.log(Math.abs(-2));
console.log(Math.abs(-4.5));

//Math.ceil()               increment
//Math.floor()               decrement

console.log(Math.ceil(8.5));
console.log(Math.floor(8.5));

//Math.min 
//Math.max

console.log(Math.max(0,1,4,2,-1,5));
console.log(Math.min(0,1,4,2,-1,5));

//Math.trunc()   it return only before decimal value

console.log(Math.trunc(1.33));
console.log(Math.floor(Math.random()*10)); 
 //it give any random no btw 0 - 9

console.log(Math.trunc(4.6));
//it give only decimal previous value
