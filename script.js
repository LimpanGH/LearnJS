/* MDN is the best documentation for JS according to Traversy.
Console metods: https://developer.mozilla.org/en-US/docs/Web/API/console#methods */

// Traversy tutorial: https://www.youtube.com/watch?v=hdI2bqOjy3c

// In VS code:
// alert ('Hello World'); - Gives you a popup in the browser.
// console.log ('Hello World'); - Gives you the message Hello World in the browser console


// In the console:---------------------------------------------
// alert (1) - Gives you a popup in the browser.

/* INSTANCE METHODS IN CONSOLE. (more examples https://developer.mozilla.org/en-US/docs/Web/API/console#methods )

console.log() - For general output of logging information. You may use string substitution and additional arguments with this method.

console.clear() - Clear the console.

console.info() - Informative logging of information. You may use string substitution and additional arguments with this method.

console.warn() - Outputs a warning message. You may use string substitution and additional arguments with this method.
---------------------------------------------------------------*/ 

/* VARIABLES:---------------------------------------------------
let - Use if you need to be able to reassign values.
const - Cannot be reassigned (constant), always use const unless you know you want be able to reassign values.

const age = 30
console.log(age)
Will print 30 to the console

let age = (30)
age = 35
console.log(age)
Will print 35 since I changed it

let age
age = 35
console.log(age)
With let, you dont even have to assign a value to the variable for it to work.

You can assign these datatypes with the let and const variables:
string    const name = 'John';
number    const age = 30;
boolean   const isCool = true;
null      const x = null;
undefined const y = undefined;

Array and object-litterals are not primitive datatypes but rather objects.

console.log(typeof name);
Will print string since 'John' is a string.
Null will come up as object but thats incorrect.
------------------------------------------------------------*/

/* Concatenation (deprecated)------------------------------
console.log('My name is ' + name + 'and I am ' + age)  

Template strings is the new way since ES6 from 2015.
We make it a template string by using backticks:

console.log(`My name is ${name} and I am ${age}`);
Will print: My name is John and I am 30

Another way is to assign it to a variable (let or const):
const hello = `My name is ${name} and I am ${age}`;
console.log(hello); 
Will also print: My name is John and I am 30
------------------------------------------------------------*/

/* String-property and string-methods-----------------------
.length             (property)

.toUpperCase()      (method, and therefore it has two parentheses)
.toLowerCase()      (method)
.substring()        (method)
.split()            (method, gives you an array of the characters in the string that you are splitting) 


const example = 'Hello World';
console.log(example.length);
Will print '11'.

const example = 'Hello World';
console.log(example.toUpperCase());
Will print 'HELLO WORLD'.

const example = 'Hello World';
console.log(example.substring(0, 7));
Will print 'Hello W'.  (since it grabs the characters indexed 0-6, starting from 0, omitting the 7th characters) 

const example = 'Hello World';
console.log(example.substring(0, 7).toUpperCase());
Will print 'HELLO W'. (combinding two method wtih the dot operator). 

const example = 'Hello World';
console.log(example.split(''));     (split by letter)
Will print '(11) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']'  (Stating 11 indexed characters in the paranteses and then prints all of them)

const example = 'technology, computer, it, code';
console.log(example.split(', '));    (split by )
Will print '(4) ['technology', 'computer', 'it', 'code']'. (Stating 4 indexed words in the paranteses and then prints all of them)

const example = 'Hello World';
console.log(example.split());     (split by )
Will print
------------------------------------------------------------*/


/* Arrays (variables that hold multiple values) --------------

Using the Array constructor:  (This way is not used very often) ('new array' is the constructor)
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
Will print '(5) [1, 2, 3, 4, 5]'.

const example = ['apples', 'oranges', 'pears'];
console.log(example);
Will print '(3) ['apples', 'oranges', 'pears']'.
------------------------------------------------------------*/


