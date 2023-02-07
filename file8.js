//practice question

//add Dec at the end
//return value of splice method
//update march to March
//delete June from an array

//---------splice method------------
//sol1
const months = ['Jan','march','April','June','July'];

const newMonths = months.splice(months.length ,0,'Dec');
console.log(months);

//sol2
console.log(newMonths);

//sol3

const months = ['Jan','march','April','June','July'];

const indexofmonth = months.indexOf('march');

if(indexofmonth != -1){
   const updatemonth = months.splice(indexofmonth ,1,'March');
console.log(months); 
console.log(updatemonth); 
}
else{
  console.log('no such data found');   
}

//splice = start,how much data,newvalue

//sol4

const months = ['Jan','march','April','June','July'];

const indexofmonth = months.indexOf('June');

if(indexofmonth != -1){
   const updatemonth = months.splice(indexofmonth ,1);
   console.log(months);
   console.log(updatemonth); 
}

//Map and Reduce method

const array1 = [1, 4, 9, 16, 25];
let newArr = array1.map((curElem, index,arr) =>{
    return curElem >9;
})
console.log(array1);
console.log(newArr);

//map return new array containing the result

const array1 = [1, 4, 9, 16, 25];
let newArr = array1.map((curElem, index, arr) =>{
    return `index no = ${index} and the value is ${curElem} belong to ${arr}`})
console.log(newArr);

//map return new array
//for each return undefine

const array1 = [1, 4, 9, 16, 25];
let newArr = array1.forEach((curElem, index, arr) =>{
    return `index no = ${index} and the value is ${curElem} belong to ${arr}`})
console.log(newArr);

//challenge

//find the sqr of element in an array
//multiply each element by 2 and return which are greater than 10

//sol1

let arr = [25, 36, 49, 64, 81];
let arrsqr = arr.map((curElem) =>{
    return Math.sqrt(curElem);
})
console.log(arrsqr);

//sol2
let arr = [2, 3, 4, 5, 6, 8];

let arr2 = arr.map((curElem) =>{
    return curElem * 2;
}).filter((curElem) => {
    return curElem > 10;
})
console.log(arr2);

//is known as chaning style

//Reduce method 

//flatten an array means convert 3d or 2d into 1d

//it take 4 argument
//accumulator
//current value
//current Index
//source array

let arr = [2, 3, 4];

let sum = arr.reduce((accumulator, curElem, index, arr) =>{
    return accumulator += curElem;
})
console.log(sum);

//adding extra value
let arr = [2, 3, 4];

let sum = arr.reduce((accumulator, curElem, index, arr) =>{
    return accumulator += curElem;
},2)
console.log(sum);


//flatarray

 const arr = [
     ['zone1','zone2'],
     ['zone3','zone4'],
     ['zone5','zone6'],
     ['zone7',['zone7','zone8','zone8']],
     ];

let flatarr = arr.reduce((accum, currVal) =>{
    return accum.concat(currVal);
})
console.log(flatarr);
