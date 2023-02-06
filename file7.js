//-------------Array------------

var myFriends = ["ramesh", 22, "male", 'arjun', 32, "male"];
console.log(myFriends);

var myFriends = new Array;
var myFriends = ["ramesh", 22, "male", 'arjun', 32, "male"];
console.log(myFriends);

//to print particular data
var myFriends = ["ramesh","suresh","kamlesh",'arjun'];
console.log(myFriends[1]);

//to print last element in max size array
var myFriends = ["ramesh","suresh","kamlesh",'arjun'];
console.log(myFriends[myFriends.length - 1]);

//for  loop 
var myFriends = ["ramesh","suresh","kamlesh",'arjun'];

for(var i=0; i<myFriends.length; i++){
    console.log(myFriends[i]);
}

//for in loop
//it return index no

var myFriends = ["ramesh","suresh","kamlesh",'arjun'];

for(let elements in myFriends){
    console.log(elements);
}

//for of loop
//it return elements
var myFriends = ["ramesh","suresh","kamlesh",'arjun'];

for(let elements of myFriends){
    console.log(elements);
}

//for each loop
var myFriends = ["ramesh","suresh","kamlesh",'arjun'];

myFriends.forEach(function(element, index, array){
    console.log(element + " index  " + index + " " + array);
});

//using Fat arrow function

myFriends.forEach((element, index, array) => {
    console.log(element + " index  " + index + " " + array);
});


//CRUD

//push
//it push at back

const animal = ["pig", "goat", "sheep"];

animal.push("chicken");
console.log(animal);

//unshift 
//it push in front

const ani = ["pig", "goat", "sheep"];

ani.unshift("chicken");
console.log(ani);

const anim = ["pig", "goat", "sheep"];
const count = ani.unshift("chicken");
console.log(count);
console.log(anim);

const myNumber = [1,2,3,5];

console.log(myNumber.unshift(4,6));
console.log(myNumber);

//pop
//it pop the element

const plants = ['brocoli', 'cauliflower','kale','tomato','cabbage'];
console.log(plants);
console.log(plants.pop());
console.log(plants);

//it remove last element and change the size

//shift

const plants = ['brocoli', 'cauliflower','kale','tomato','cabbage'];
console.log(plants);
console.log(plants.shift());
console.log(plants);

//it remove 1st element


