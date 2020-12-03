// this is comment.
/* this is multi-line
    comment */


object = {}
array = []

8 kind data type:
undefined
null
boolean // true false null  lowercase!!
string
symbol
bigint
number
object

// create a variable
var firstVariable;
firstVariable = 7;

var a = 9;

a++  //means a = a + 1;
a--  //means a = a - 1;

console.log(var)  // means print

/* if wanna console a quote, need use \" or \' e.g.
\'  singel quote
\"  double quote
\\  backslash
\n  newline
\r  carriage return
\t  tab
\b  word boundary
\f  form feed
*/

var.length return var's length
e.g.
a.length // return a's length

var[var.length - 1]// return last element of var

arr = [2,3];
arr.push(5); // push to last element
// arr = [2,3,5]
one = arr.pop(); // remove last element and return
// one = 5 , arr = [2, 3]
two = arr.shift(); // remove first element and return
//two = 2, arr = [3]
arr.unshift(9); // add element on [0]
// arr = [9, 3]

let varName = arr.splice(4,2); // remove 2 elements start and include arr[4] and return to varName
arr.splice(0,2,"DarkSalmon","BlanchedAlmond");
// replace first two elements with "DarkSalmon" and "BlanchedAlmond".
let newArr = arr.slice(a,b);
// newArr = arr[a] to but no inclued arr[b], arr no change.
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray

let fragment = ['to', 'code'];
let sentence = ['learning', ...fragment, 'is', 'fun'];
// return [ 'learning', 'to', 'code', 'is', 'fun' ]
let sentence = ['learning', fragment, 'is', 'fun'];
// return [ 'learning', ['to', 'code'], 'is', 'fun' ]


let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates'); // returns -1 means not exists
fruits.indexOf('oranges'); // returns 2 return index
fruits.indexOf('pears'); // returns 1, the first index at which the element exists

function quickCheck(arr, elem) {return arr.indexOf(elem) != -1;}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
//return true or false

function functionName() {  // defin a function
    console.log("any text here");
}

// if name a var in a function without 'var', it means this var ganna be global, if dont want global, put 'var' first
// for that way, the var is only visble in that function.
// if a var has local value (value in the function) and global value, take local value first

var sum = 0;
function addSum(num) {
    sum = sum + num;  // for a function without return, it only works but retun nothing.
                      // in this case, addSum will change sum but not return.
}

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);  // everything is object

function functionName() {
    if (conditionOne) {        // if else loop
        return "answer one";
    }else if (conditionTwo) {
        return "answer two";
    }else{
        return "answer three"
    }
}

function countOnline(usersObj) {
    let result = 0;
    for (let i in usersObj) {
        if (usersObj[i].online === true){
            result++;
      }
    }return result;
}


function functionName(arr) {
    var result = "";
    switch(arr) {
        case "bob": result = "Marley";                    break;
        case 42:    result = "The Answer";                break;
        case 1:     result = "There is no #1";            break;
        case 99:    result = "Missed me by this much!";   break;
        case 7:     result = "Ate Nine";                  break;
        // if no break, it will continue

        case 20:     // same output can put together
        case 8:
        case 9:     result = "Number";                    break;

        default:    result = "whatever"                   break;
        // set default value
    }
    return result
}
functionName(1) // will return "There is no #1",
                // but if there's no break under case 1, will return "Missed me by this much!".


// defin a object (dictionary)
var objectName = {
    var1: 1,
    var2: 2,
    var3: 3,
};
var one = objectName.var1; // no qutation marks even call the string key.
var two = objectName["var2"]; // need qutation marks when call string key.
var cool = "var3";
var three = objectName[cool]; // return 3

objectName.var1 = 10; // update the object properties (value)
objectName["var2"] = 20;

objectName.var4 = 4; // add new properties
objectName["var5"] = 5;

delete objectName.var4; // delete properties
delete objectName["var5"];

object[id][prop] = object[id][prop] || [];
// if object[id][prop] exist, object[id][prop] = object[id][prop]
// if object[id][prop] not exist, make it a empty array

objectNmae.hasOwnPrperty(var1); // true
var1 in objectName; // true

// when recive a parameter that need get properties back, use [], cuz . not working.
// if a key has space, then have to use [] to call it




//while loop
var array = [];
var i = 5;
while(i > 0) {
    array.push(i);
    i--;
}


// for loop
var array = [];
for (var i = 5; i > 0; i--) { // begining, while, do every return
    array.push(i);
}

// for loop iterate an array
var array=[1,2,3,4,5,6,7]
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// for loop iterate multi array
var arr = [  [1,2], [3,4], [5,6] ];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
// do while loop, do first then check the condition if still match while.
var arr = []
var i = 10
do {
    arr.push(i);
    i++;
} while i > 10; // even not match the while, it still runs do loop once.

// recursion
function sum(arr, n) {
    if(n <= 0){
      return 0
    } else {
      return sum(arr, n-1) + arr[n-1]
    }
}
or
var total = 0;
function sum(arr, n) {
  if(n <= 0){
    return total;
  } else {
    total += arr[n-1];
    return sum(arr,n-1);
  }
sum([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9], 18)
sum([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9], 17) + arr[18]
sum([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9], 16) + arr[18] + arr[17]
// these 3 are the same

Math.random() // return a decimal number between 0 to 1, could be 0 but can not be 1
Math.floor(Math.random()*10); // return a integer 0 to 9
Math.floor(Math.random()*(max - min +1)) + min; // return a integer between min and max
parseInt("007"); // return integer 7
parseInt("11", 2); // return 3, it convert "11" as a binary because of 2.

function functionName(a, b) {
    if (a > b){ return "a is bigger";}
    else if (a === b) {return "a is equal to b"}
    else { return "b is bigger";}
}
// equal to
function functionName(a, b) {
    return (a > b) ? "a is bigger"
    : (a < b) ? "b is bigger"
    : " they are even";
//  return  condition1 if true? true return
//  : condition2 if true ? true return
//  : else return;


function countdown(n) {
  if (n < 1) {return [];}
  else {const arr = countdown(n - 1);
    arr.unshift(n); // this happen last, after arr.unshift(n-1)
    return arr;
  }
}
or
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
or
function countdown(n){
   return n < 1 ? [] : [n, ...countdown(n - 1)];
}
// arr return [5,4,3,2,1]



3 == "3" // true because JavaScript can conver string with number
3 === "3" // strict equality false, type different

0 == false // true
1 == true // true

3 !== "3" // true
3 !== 3 // false

&& and
|| or


------------------------------------------------------------------------------
ES6

let anyVarName = 10; // if a variable named with let, anyVarName can not let twice
function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}// let only works in the same {}
const anyVarName = 10;
anyVarName = 20; // error, const anyVarName can not be reassign.
anyVarName += 5; // anyVarName == 15.

Object.freeze(anyVarName); // with Object.freeze, anyVarName cannot be update or change

const myFunc = () => {
  const myVar = "value";
  return myVar;
}           // can just name a var and assaign a function to it without function name
or
const myFunc = () => "value"; // or just return a value don't even need {}.
const functionName = (arr) => arr * 2; // arrow function.
const functionName = (name = "April") => "Hello" + name.
// name = "April" is a default value, if there's no parameter pass in, will print "April".

const functionName = (...args) => args.reduce((a, b) => a + b, 0);
// return sum of all args
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2; arr2 = [...arr1]; // arr2 === arr1
// ... means spread a array, take all the parameters

const anyObject = { a: 22, b: 33, c: 44};

const a = anyObject.a;
const b = anyObject.b;
or
const {a, b} = anyObject;
// these two output are same, a = 22, b = 33.

const {a: q, b: w} = anyObject;
// q = 22, w =33.

const anyObject = {letter: { a: 22, b: 33, c: 44}}
const {letter: {a: newA, b: newB}} = anyObject;
//newA = 22, newB = 33.


const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // output[1,2,5]
console.log([a, b,,, c]); // output [ 1, 2, <2 empty items>, 5 ]
// ,,, means skiped two elements. called destructuring

let a = 6, b = 8;
[a,b] = [b,a] // a = 8, b = 6.

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]


const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const [,,...arr]=list;
  return arr;
}
const arr = removeFirstTwo(source);
// output arr = [3,4,5,6,7,8,9,10].

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (stats) => (stats.max + stats.min) / 2.0;
or
const half = ({max,min}) => (max+min) / 2.0;

const createPerson = (name, age, gender) => {name, age, gender};
// if name= name, age=age, gender=gender, can be simply write like this.

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
equal to
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};// no need function


class Vegetable {
    constructor(name) { // constructor is perdefined function, don't change
        this.name = name;
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); // output

class Thermostat{
    constructor(f) {this.f = f;}
    get temperature() {return 5/9 * (this.f-32); }
    set temperature(c) {this.f = (c+32) * 9/5; }
}


<script type="module" src="filename.js"></script>

const uppercaseString = (string) => {  return string.toUpperCase();}
const lowercaseString = (string) => {  return string.toLowerCase()}
export {lowercaseString, uppercaseString}; // export some function
import {uppercaseString, lowercaseString} from './string_functions.js'; //import some func
import * as stringFunctions from './string_functions.js'; // import all functions.

export default function subtract(x, y) {return x - y;}
// every file can export one and only one defalut function.
import subtract from "./math_functions.js";
// import default function no need {}.

const makeServerRequest = new Promise((resolve, reject) =>{
    let responseFromServer;
  if (responseFromServer)
  {resolve("We got the data")}
  else {reject("Data not received")}
});
makeServerRequest.then(result => { console.log(result)});
// if resolve, take the resulet as a parameter, log the result to console.
makeServerRequest.catch(error => { console.log(error)});
// if reject, take the error as a parameter, log to console.

"use strict"; //

Object.keys(obj) // return all keys of obj.


------------------------------------------------------------------------------
Regular Expressions

let string = "Hello, World!";
let regex = /Hello/;
let result = regex.test(string);
// check if regex in string, and return a bollean to result.
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]

'string'.match(/regex/);
/regex/.test('string');


let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let regex = /dog|cat|bird|fish/; // | means or
let starRegex = /twinkle/gi; // g is match many times as possable, i is case no senstive
let unRegex = /.un/ // . can match any character, called wildcard character
let vowelRegex = /[aeiou]/gi; // [] match anything inside.
let regex = /[0-9a-zA-Z]/gi; // number and upper/lower case.
let negatedRegex = /[^aeiou0-9]/gi; // ^ in [] means something don't wanan match
let calRegex = /^Cal/; // ^ outside of [] means begining.\
let lastRegex = /caboose$/; // $ means at the end
let myRegex = /s+/g; // s+ match "s" "ss" "sssssssssss" and return.
let chewieRegex = /Aa*/; //match "A" "Aa" "Aaaaaaaaaa" * means 0 time or many times.
let myRegex = /<.*?>/; // ? is lazy match, means return as less as it can be, and ? is work for the * before it.
let alphabetRegexV2 = /\w/g; //\w = [A-Za-z0-9_],  match all letters and numbers and _.
let nonAlphabetRegex = /\W/g; //\W = [^A-Za-z0-9_].
let numRegex = /\d/g; // \d = [0-9]
let noNumRegex = /\D/g; // \D = [^0-9]
let userCheck = /^[a-z]([0-9]{2,6}|[a-z]+\d*)$/i;
// start with one letter, then match 2 to 6 times [0-9] or many times letter
// maybe a number at the end
let manyTimes = /ha{2,}/; // match a at least 2 times
let manyTimes = /ha{2}/;  // match a 2 times
let manyTimes = /ha{2,6}/; // match a 2 to 6 times.
let countWhiteSpace = /\s/g; // \s match white space, return tab, form feed and newline
// \s equal to [ \r\t\f\n\v]
let countNonWhiteSpace = /\S/g; // equal to [^ \r\t\f\n\v].
let favRegex = /favou?rite/; // ? means 'u' is optional.
let pwRegex = /(?=^\D)(?=\w{5,})(?=\w*\d{2,})/;
//(?=...) check if the has ... (?!...) check if the string don't have ...
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
// (a|b) a or b
let reRegex = /(\d+)(\s)\1\2\1/;
// equal to /\d+\s\d+\s\d+/;

let str = "one two three";
let fixRegex = /(\w+)(\s)(\w+)\2(\w+)/;
let replaceText = "$4 $3 $1";
let result = str.replace(fixRegex, replaceText);
// output result = "three two one"

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; //select white space start and end of the string many times
let result = hello.replace(wsRegex,"");

let result = quoteSample.match(vowelRegex);


------------------------------------------------------------------------------
Debugging

console.log("Hello, World!")
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven); // number
console.log(typeof three); // string

function myFunction() {return "You rock!";}
let varOne = myFunction; // set to equal a function
let varTwo = myFunction(); // set to equal the string "You rock!"
------------------------------------------------------------------------------

Algrithm

function reverseString(str) {
  return str
  .split("")
  .reverse()
  .join("");
} // split into array, reverse array, join into str
reverseString("hello");
or
function reverseString(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
} // make a new str, add all the old str from the end


function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]

function confirmEnding(str, target) {
  if (str.slice(str.length-(target.length),str.length) === target){
    return true;
  }
  return false;
} // check if str .endsWith target
confirmEnding("Bastian", "n");


function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, anyNameHere => anyNameHere.toUpperCase());
} // convert first letter of all the words in string to uppercase.

let varInt=parseInt(num1/num2) // get an integer.


------------------------------------------------------------------------------

Object Oriented

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";},
  or
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();



function Dog() {
    this.name = "sam";
    this.color = 'black';
    this.numLegs= 4;
}
let hound = new Dog();//hound's name is "sam", color is "black"
let number2 = Object.create(Dog.prototype);
// number2 name is "sam", color is "black".
let Chiwawa.prototype = Object.create(Dog.prototype);
// Chiwawa now inherit from Dog and Chiwawa is a class.

 function Dog(name, color) {
 this.name = name;
 this.color = color;
 this.numLegs = 4;
}
let terrier = new Dog("sam","white");
// terrier name is "sam", color is "white"
terrier instanceof Dog;
// true
ownProps = []
for (let property in terrier){
    ownProps.push(property);
}// ownProps = name, color
Dog.prototype.ears= 2; // add property to Dog.
terrier.ears; // 2
terrier.hasOwnProperty(name) // true
terrier.hasOwnProperty(ears) // false , because it get from prototype.
terrier.constructor === Dog // true, terrier is inherit from Dog

Dog.prototype = { // add couple properties once.
    constructor: Dog, // also define constructor, otherwise terrier.constructor is changing to
                      // object, because Dog been overwritten.
    eat: function(){console.log("eat ice cream.")},
    drink: function(){console.log("drink vodka!")},
    nose: 1
}
Dog.prototype.isPrototypeOf(terrier); // true


function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };
function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
// inherit all methods from animal
// ChildObject.prototype = Object.create(ParentObject.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () { // ChildObject.prototype.methodName = function() {...};
    console.log("Woof!");
}
let beagle = new Dog();


let bird = { name: "Donald",  numLegs: 2};
let boat = { name: "Warrior", type: "race-boat"};
let glideMixin = function(obj) {
  obj.glide = function() { console.log("We're different but we're the same!")}
}
glideMixin(bird); // add glide() to bird.
glideMixin(boat);
bird.glide(); // print "We're different but we're the same!"


// before, not safe, anybody can change the weight from outside use Bird.weight
function Bird() {this.weight = 15;}
// after now use a function to return weight, called closure.
function Bird() {
  let weight = 15;
  this.getWeight = function() {return weight;}
}


(function() {console.log("A cozy nest is ready");}) ()
// Immediately Invoked Function Expression (IIFE)
// this kind function has no name no variable, executed immediately



let funModule = (function(){
    return{
        isCuteMixin: function(obj) {
            obj.isCute = function() {return true;};
        },
        singMixin: function(obj) {
            obj.sing = function() { console.log("Singing to an awesome tune"); };
        }
    }
    })();
funModule.isCuteMixin(terrier);
terrier.isCute(); // return true
funModule.singMixin(terrier);
terrier.sing(); // return "Singing to an awesome tune"



------------------------------------------------------------------------------

Functional Programming

function remove(list, bookName) { // remove an element from an array
  return list.filter(book => book !== bookName);
}

function remove(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  if (newArr.indexOf(bookName) >= 0) {
    // Check whether the bookName parameter is in new array.
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
    return newArr; // Return the new array.
  }
} or same as
function remove(list, bookName) {
  return list.filter(book => book !== bookName);
}
// if use newArr = arr, whenever you change the newArr, you change arr too. they point to same memory


const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];


const names = users.map(function (anyThingHere){return anyThingHere.name});
const names = users.map(anyThingHere => anyThingHere.name);// these two are the same

console.log(names); // [ 'John', 'Amy', 'camperCat' ]



var qulify = watchList.filter(arr => parseFloat(arr.["imdbRating"]) > 8.0);
var filteredList = qulify.map(({"Title":title, "imdbRating":rating})=>({title, rating}));


// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  for (let i=0; i < this.length; i++){
    if (callback(this[i])){ newArray.push(this.[i]); }
  };
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
// filter function homestyle!

// reduce()
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce(function(total, currentValue){return total + currentValue.age},0);
same as
const sumOfAges = users.reduce((total,currentValue)=>(total+currentValue.age),0)
console.log(sumOfAges);
// reduce take four parameters, total(required),currentValue(required),currentIndex(optional),arr(optional)
// and a  initialValue, it's 0 in this case, optional, it's a value that to be passed to the function as the initial value
// the reduce method is add first and second elements and return to the index0, then repeat


var cn = watchList.filter(arr=>arr['Director']==="Christopher Nolan");
var rate = cn.map(arr=>parseFloat(arr["imdbRating"]));
var totalRate = rate.reduce((sum, current)=>(sum+current),0);
var averageRating= totalRate/rate.length;
// other e.g.


const squareList = arr => {
  return arr.reduce((sqrIntegers, num) => {
      console.log(sqrIntegers,num)
    return Number.isInteger(num) && num > 0
      ? sqrIntegers.concat(num * num)
      : sqrIntegers;
  }, []);
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
// reduce e.g.




-----------------------------------------------

sort

arr.sort(function(a, b)){return a - b;}; // works for numbers
// sort need a compare function to support, if a-b return negetavie which if false, means a < b, then a is fron of b

arr.sort(function(a,b)){ // reverse sort  works for letters
    return
    a === b ? 0
    : a < b ? 1
    : -1;
};



split and join

var arrSplit = arr.split("anythingSplitArrShouldBeHere");
// arr can be split by space, comma, semicolon, and RE
var arrSplit = arr.split(/\W|\s/); // split by space or dash

var newArr = arr.join(" ");


title = title.toLowerCase().trim();// trim white space and convert into lowercase


function checkPositive(arr) {return arr.every(i => i >0)}; // check every element in arr if > 0
function checkPositive(arr) {return arr.some(i => i >0)}; // check some elements in arr if > 0
checkPositive([1, 2, 3, -4, 5]);


function add(x) {
  return function(y){
  return function(z){
    return x+y+z;
  }
}
} //currying function, if there's too many arrs, can use this.
or
function add(x) { return y => z => x + y + z;}
add(10)(20)(30);



--------------------------------------------------------------------------------

Intermediate Algorithm Scripting

function sumAll(arr) {
  let total = 0;
  arr = arr.sort((a,b)=>a-b);
  for (let i = arr[0]; i <= arr[1]; i++){
    total += i;
     }
  return total;
} // sort arr, use as a range, add all the number in the range.
sumAll([1, 4]);


// includes
function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
} // find the element that different between two arrays.
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}

// arguments
function destroyer(arr) {
  let args = Array.from(arguments).slice(1);
  return arr =
  arr.filter(item => !args.includes(item));
  }
same as
const destroyer = (arr, ...valsToRemove) => arr.filter(elem => !valsToRemove.includes(elem));
destroyer([1, 2, 3, 1, 2, 3], 2, 3



function whatIsInAName(collection, source) {
 let srcKey = Object.keys(source); // get all the keys from source
 // filter out if the collction dosen't have srcKey or obj srcKey value doesn't equal to source srcKey value
 return collection.filter(function (obj){
   for (let i =0; i < srcKey.length; i++){
     if (!obj.hasOwnProperty(srcKey[i])|| obj[srcKey[i]] !== source[srcKey[i]]){
       return false
     }
 }return true
 });
}
same as

function whatIsInAName(collection, source) {
 let srcKey = Object.keys(source);
 return collection.filter(function (obj){
   return srcKey.every(function (key){
     return obj.hasOwnProperty(key) && obj[key] === source[key];
   });
 });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);



// replace
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // $1 means ([a-z]), $2 means ([A-Z]), this replace is find a lowercase letter which followed by a uppercase
  // letter and add space between them
  // console.log(str) output The Andy Griffith_show
  return str.replace(/\s+|_+/g, "-").toLowerCase();
  // output the0-andy-griffith-show
}

same as
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/) // (?=[A-Z]) means find [A-Z], split from it but keep it,
    .join("-")
    .toLowerCase();
}
spinalCase("TheAndyGriffith_Show");


// DNA Pairing
function pairElement(str) {
  var pairs = { A: "T", T: "A", C: "G", G: "C" };
  var arr = str.split("");
  return arr.map(x => [x, pairs[x]]);
}
pairElement("GCG");


function uniteUnique(...arrays) {
  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);
  // create a Set which clears any duplicates since it's a regular set and not a multiset
 console.log([...new Set(flatArray)]);
} // get unique array

same as
function uniteUnique(...arr) {
  return [...new Set(arr.flat())] // arr.flat() sum mutipal arr into one
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);




function convertHTML(str) {
  let convert = {
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':'&quot;',
    "'":"&apos;"
    }
    let keys = Object.keys(convert);
    str = str.replace(/([&<>"'])/g, REmatch=>convert[REmatch]);
    // REmathch is whatever the RE catch at the first place
  return str;
}

convertHTML("Dolce & Gabbana");


function sumFibs(num) {
  /* make a arr = [1,1 ...]
      then the next number equal to sum of last two number.
      break when next number bigger than num.
      then add all odd numbers in arr.
  */
  let i = 1;
  let o = 0;
  let result = 0;
  while( i <= num){
    if (i % 2 !== 0){
      result += i
    }
    i += o;
    o = i - o;

  }
  return result
  }
sumFibs(1000);

-------
const smallestCommons = arr => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  // Initially the solution is assigned to the highest value of the array
  let sol = max;


  for (let i = max - 1; i >= min; i--) {
    // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solution and restart the loop
    if (sol % i) {
      sol += max;
      i = max;
    }
  }
  return sol;
};

or better solution

function smallestCommons(arr) {
  var range = [];
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }

  // can use reduce() in place of this block
  var lcm = range[0];
  for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
} // find first two numbers' lcm , then find lcm and the third number's lcm, until finish.
  return lcm;

  function gcd(x, y) {
    // Implements the Euclidean Algorithm
    if (y === 0) return x;
    else return gcd(y, x % y);
  }
}
// test here
smallestCommons([1, 5]);

------
function sumPrimes(num) {
  // step 1
  let arr = Array.from({ length: num + 1 }, (v, k) => k).slice(2);
  // step 2
  let onlyPrimes = arr.filter(n => {
    let m = n - 1;
    while (m > 1 && m >= Math.sqrt(n)) {
      if (n % m === 0) return false;
      m--;
    }
    return true;
  });
  // step 3
  return onlyPrimes.reduce((a, b) => a + b);
}
// test here
sumPrimes(977);

---------

function steamrollArray(arr) {
  let newArr = [...arr]
  let result = []
  while(newArr.length){
  let choosen = newArr.pop()
  if (Array.isArray(choosen)){
    newArr.push(...choosen)
  }else{
    result.unshift(choosen);
  }}
  console.log(result)
   return result;
} // flat an array

steamrollArray([1, {}, [3, [[4]]]]);

----------------


function binaryAgent(str) {
let arr = str.split(" ");
let newArr = [];
for (let i = 0; i < arr.length; i++){
  console.log(parseInt(arr[i],2))
    newArr.push(String.fromCharCode(parseInt(arr[i],2)));
}newArr = newArr.join("");
return newArr;
}// binary to letter

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

-----------------------

function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}
or
function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++){
    if (Boolean(collection[i][pre]) == false){
      return false
    }
  }
  return true;
}
// check if second argument is true in first argument or not
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
-----------------

function addTogether(first, second) {
  if (typeof first !== "number"){return undefined;}
  const sum = i => typeof i === 'number' ? first + i : undefined;
  return typeof second === 'undefined' ? i => sum(i) : sum(second);
  // if first is not number or second is defined but not number, return undefined
  // if both are number, return sum, otherwise return a sum function
}

same code as

function addTogether(first, second) {
  if (typeof first !== "number"){return undefined;}
  const sum = function _(i){
    if (typeof i === 'number'){
      return first + i
      } else{
        return undefined
        }};
  if(typeof second === 'undefined'){
    return function _(i) {
      return sum(i);
     }}
     else{
       return sum(second)
     };
 }
addTogether(2,3);

--------------------

var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  var fullName = firstAndLast
  this.getFullName = function() {
    return fullName
  }

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  }
 this.getLastName = function() {
    return fullName.split(" ")[1];
  }
  this.setFirstName = function(name){
    fullName = name + " " + fullName.split(" ")[1];
  }
  this.setLastName = function(name){
    fullName = fullName.split(" ")[0]+" "+ name;
    }
  this.setFullName = function(name){
    fullName = name
  }
  // define a class with change and get name.
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());


function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
    return { name, orbitalPeriod };
  });
}https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris


orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


function palindrome(str) {
  str = str.toLowerCase()
  str = str.match(/[a-z0-9]/ig)
  for (let i = 0, o = str.length-1; i < (str.length-1)/2; i ++, o --){
    if (str[i] !== str[o]){
      return false
    }
  }
  return true;
}

or same as
function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
}
// check if the letters and numbers in sentens is mirror or not
palindrome("0_0 (: /-\ :) 0-0"); // true
palindrome("My age is 0, 0 si ega ym.") // ture
--------------

function rot13(str) {

  return str
  .split("")
  .map(char=>{
    let x = char.charCodeAt()
    if (x>90||x<65){
      return char
    }
    else if( x <78){
      return String.fromCharCode(x+13);
    }else if (x>77){
      return String.fromCharCode(x-13);
    }
  }).join("")
}
// rot13 code and decode
rot13("SERR PBQR PNZC");
-------------
function telephoneCheck(str) {
  let X = /^(1\s?)?(\(\d{3}\)|\d{3})[\-|\s]?\d{3}[\s|\-]?\d{4}$/
return X.test(str)}
// check if a string is phone number
telephoneCheck("2 (757) 622-7382");
