
10 +"20"
'1020'

//-----BUG------

9 - '5'
4
undefined

//it give bug (-)

"java" + "script"
'javascript'

" " +" "
'  '

" "+0
' 0'

"ankita" - "gupta"
NaN

//-----------NOT A NUMBER---------
undefined

true + true
2
true + false
1
false + true
1
false - false
0
false - true
-1

//-----------difference Btw null and undefine------
undefined

var iAmUseless = null;
undefined
console.log(iAmUseless);
VM1111:1 null
undefined

var iAmStandBy;
undefined
console.log(iAmStandBy);
VM1217:1 undefined
undefined

var iAmUseless = null;
undefined
console.log(typeof(iAmUseless));
VM1302:1 object
undefined

console.log(typeof(iAmStandBy));
VM1337:1 undefined
undefined

//NaN
undefined

//it is a variable in globle scope
undefined

var myPno = 123456789;
undefined
var myName = "Ankita Gupta";
undefined
console.log(isNaN(myName));
VM435:1 true
undefined

if(isNaN(myName)){
console.log("plese ent valid no");}
VM670:2 plese ent valid no
undefined

if(isNaN(myName)){
console.log("plese ent valid no");}
VM736:2 plese ent valid no
undefined

NaN === NaN
false
Number.NaN === NaN;
false
isNaN(NaN);
true
isNaN(Number.NaN);
true
Number.isNaN(NaN);
true
