
/* MDN is the best documentation for JS according to Traversy.
Console metods: https://developer.mozilla.org/en-US/docs/Web/API/console#methods */

// Traversy tutorial: https://www.youtube.com/watch?v=hdI2bqOjy3c

//In VS code: -----------------------------------------------------
alert ('Hello World');       /*Gives you a popup in the browser.*/
console.log ('Hello World'); /*Gives you the message Hello World in the browser console*/
// ----------------------------------------------------------------


//In the console: --------------------------------------------------
alert (1) - Gives you a popup in the browser.

INSTANCE METHODS IN CONSOLE. /*more examples https://developer.mozilla.org/en-US/docs/Web/API/console#methods */

console.log()   /* For general output of logging information. You may use string substitution and additional arguments with this method. */
console.clear() /* Clear the console.*/
console.info()  /* Informative logging of information. You may use string substitution and additional arguments with this method. */
console.warn()  /* Outputs a warning message. You may use string substitution and additional arguments with this method. */
// ----------------------------------------------------------------


// VARIABLES:------------------------------------------------------
let             /* Use if you need to be able to reassign values. */
const           /* Cannot be reassigned (constant), always use const unless you know you want be able to reassign values. */

const age = 30
console.log(age)
// Will print 30 to the console

let age = (30)
age = 35
console.log(age)
// Will print 35 since I changed it

let age
age = 35
console.log(age)
// With let, you dont even have to assign a value to the variable for it to work.

// You can assign these datatypes with the let and const variables:
DATATYPES   EXAMPLES
string      const name = 'John';
number      const age = 30;
boolean     const isCool = true;
null        const x = null;
undefined   const y = undefined;

// Array and object-litterals are not primitive datatypes but rather objects.

console.log(typeof name);
Will print string since 'John' is a string.
Null will come up as object but thats incorrect.
// ----------------------------------------------------------------


// Concatenation (deprecated)--------------------------------------
console.log('My name is ' + name + 'and I am ' + age)  

//Template strings is the new way since ES6 from 2015.We make it a template string by using backticks:

console.log(`My name is ${name} and I am ${age}`);
// Will print: My name is John and I am 30

// Another way is to assign it to a variable (let or const):
const hello = `My name is ${name} and I am ${age}`;
console.log(hello); 
// Will also print: My name is John and I am 30
// ----------------------------------------------------------------


// String-property and string-methods------------------------------
.length         /* Property */

.toUpperCase()  /* method, and therefore it has two parentheses */
.toLowerCase()  /* method */
.substring()    /* method */
.split()        /* method, gives you an array of the characters in the string that you are splitting */

const example = 'Hello World';
console.log(example.length);
// Will print '11'.

const example = 'Hello World';
console.log(example.toUpperCase());
// Will print 'HELLO WORLD'.

const example = 'Hello World';
console.log(example.substring(0, 7));
//Will print 'Hello W' since it grabs the characters indexed 0-6, starting from 0, omitting the 7th characters.

const example = 'Hello World';
console.log(example.substring(0, 7).toUpperCase());
// Will print 'HELLO W', combining two methods with the dot operator.

const example = 'Hello World';
console.log(example.split(''));     (split by letter)
//Will print '(11) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']'. Stating 11 indexed characters in the paranteses and then prints all of them.

const example = 'technology, computer, it, code';
console.log(example.split(', '));    (split by )
// Will print '(4) ['technology', 'computer', 'it', 'code']'. Stating 4 indexed words in the paranteses and then prints all of them.
// ----------------------------------------------------------------


// Arrays are variables that hold multiple values) ----------------

// Using the Array constructor, This way is not used very often. ('new array' is the constructor)
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
// Will print '(5) [1, 2, 3, 4, 5]'. 

const example = ['apples', 'oranges', 'pears'];
console.log(example);
// Will print '(3) ['apples', 'oranges', 'pears']'.

// In JS you can have multiple datatypes in an array

const example = ['apples', 'oranges', 'pears', 10, true];
console.log(example);
// Will print '(5) ['apples', 'oranges', 'pears', 10, true]'.

// You can acces a specific value in your array:
const example = ['apples', 'oranges', 'pears', 10, true];
console.log(example[1]);
// Will print 'oranges' since oranges is indexed as 1 and apples as 0.

// You can add values to your array and specify the index of your added value:
const example = ['apples', 'oranges', 'pears', 10, true];
example[3] = 'grapes';
console.log(example);
// Will print '(5) ['apples', 'oranges', 'pears', 'grapes', true]'.

fruits.push('mangos'); // will add mangos in the end of your array.
fruits.unshift('mangos'); // will add mangos in the beginning of your array.
fruits.pop(); // will not print the last value in your array.
console.log(Array.isArray)('example'); // will give you a boolean answer as to whether something is an array or not.
console.log(example.indexOf('oranges')); // Will print the index of a certaint value. Will print '1' since oranges has the index of 1.

// Array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// ----------------------------------------------------------------


// Object litterals (Key value pairs) -----------------------------

const person = {
    firstName: 'John',                          // string
    lastName: 'Doe',                            // string
    age: 30,                                    // number
    hobbies: ['music', 'movies', 'sports'],     // array
    address: {                                   // inbeded object (an object within an object)
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person);                            // Will print '{firstName: 'John', lastName: 'Doe', age: 30, hobbies: Array(3), adress: {…}}'.
console.log(person.firstName);                  // Will print 'John'
console.log(person.firstName, person.lastName); // Will print 'John Doe'.
console.log(person.hobbies[1]);                 // Will print 'movies'.
console.log(person.address.city);               // Will print 'Boston'.

const { firstName, lastName } = person;         // By using destructuring we can create variables (pull them out) from the object
console.log(firstName);                         // and when we CL the destructure, it will print 'John'.
const { firstName, lastName, address: { city }} = person;         // We can also pull out values from inbeded objects.
console.log(city);                              // and when we CL the destructure, it will print 'Boston'.

 person.email = 'john@gmail.com';               // Adding properties with values to the object
 console.log(person);


 // Arrays of objects ----------------------------------------------

 // Lets make a to-do list, an array of to-do's
 const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    },
 ];
console.log(todos);           // Will print '(3) [{…}, {…}, {…}]'
console.log(todos[1].text);   // will grab the second array since it is indexed as 1, then grab the value assigned to the property of text, and print 'Meeting with Boss'.      
// ----------------------------------------------------------------


 // JSON -----------------------------------------------------------
/* JSON is a data format and it is used a lot in full stack dev and the use of APIs when you are 
sending data to a server and receives data from a server and it is similar to object literals */

// If we take this Object, (same as above)..
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    },
 ];

 /* and run the code, bracket to bracket, in a JSON formatter @ https://freeformatter.com/html-formatter.html, 
 we would get this JSON code, notice the DOUBBLE QUOTES: */
 [
    {
       "id": 1,
       "text": "Take out trash",
       "isCompleted": true
    },
    {
       "id": 2,
       "text": "Meeting with boss",
       "isCompleted": true
    },
    {
       "id": 3,
       "text": "Dentist appointment",
       "isCompleted": false
    }
    ]
    
    // To convert your code before you send it to the server:
 const todoJSON = JSON.stringify(todos);
 console.log(todoJSON);
// ----------------------------------------------------------------


// Loops ----------------------------------------------------------

// for-loops
for(let i = 0; i <= 10; i++) {  // We pass in three parameters, i=0 (assigning the iterator/variable), i<=10 (the condition that needs to be met) and i++ (the increments, ++ will add one to the i-variable).
    console.log(i);             
    // Will print '0 1 2 3 4 5 6 7 8 9 10'.
    
for(let i = 0; i <= 10; i++) {
    console.log(`Hej: ${i}`);       // We could use Template String in order to modify the output.
}
// Will print: 'Hej: 0 Hej: 1 Hej: 2 Hej: 3 Hej: 4 Hej: 5 Hej: 6 Hej: 7 Hej: 8 Hej: 9 Hej: 19'.


// while-loops (here we set the variable outside the loop)
let i = 0;
while(i < 10) {
    console.log(`Tjena: ${i}`);
    i++;
}  
// Will print 'Tjena: 0 Tjena: 1 Tjena: 2 Tjena: 3 Tjena: 4 Tjena: 5 Tjena: 6 Tjena: 7 Tjena: 8 Tjena: 9'.

// Loop through arrays (iterate)
for(let todo of todos) {
    console.log(todo);            // Grab all the properties in the array with (todo).           
}  
// Will print: 
{id: 1, text: 'Take out trash', isCompleted: true}
{id: 2, text: 'Meeting with boss', isCompleted: true}
{id: 3, text: 'Dentist appointment', isCompleted: false}

// Loop through arrays with for-of (iterate)
for(let todo of todos) {
    console.log(todo.text);        // Just grab the 'text' properties in the array with (todo.text).               
}  
// Will print 
Take out trash
Meeting with boss
Dentist appointment

// High order array-methods (forEach, map and filter) are the recomended way to iterate with arrays.
/*      for each -  loops through the array.
        map      -  allows us to create a new array through an array.
        filter   -  allows us to create a new array based on a condition. */

todos.forEach(function(todo) {
console.log(todo.text);
})
// Will print:
Take out trash
Meeting with boss
Dentist appointment


// ----------------------------------------------------------------


 fortsätt vid  42:43  https://www.youtube.com/watch?v=hdI2bqOjy3c 


/* Manipulating the DOM with JavaScript----------------------------
https://www.reddit.com/r/learnjavascript/comments/103uxvs/mustknow_dom_manipulation_methods */ 

// Creating, adding and removing:
document.createElement('HTMLTag');          // Create an element 
document.body.prepend(myElement);           // Insert last 
document.body.append(myElement);            // Insert first
parentElement.insertBefore(newElement, existingElement); // Insert before 
element.remove();                           // Remove element

// Content setting:
element.innerHTML = "HTML content";         // Set HTML content inside element
element.innerText = "text content";         // Set text (preserves formatting)
element.textContent = "text content";       // Set text (ignores formatting)

// Working with attributes:
element.getAttribute('attribute');          // Returns attribute value 
element.removeAttribute('attribute');       // Removes attribute
element.setAttribute('attribute', 'value'); // Sets attribute with
element.id;                                 // Returns element id 
element.id = 'value';                       // Sets element id
element.className = 'list';                 // Set new class list 
element.classList;                          // Returns items in class list in array-like format
element.classList.add('classItem');         // Add item to class list element.classList.remove('classItem'); // Remove item from class list
element.classList.toggle('classItem');     // Toggle item in class list

// Editing styles:
getComputedStyle(myElement);                // Returns all styling of an element
element.style = 'CSS';                      // Sets element style attribute
element.style.styleAttribute = 'value';     // Sets individual style

// Vet inte var jag ska lägga dessa
element.insertAdjacentHTML('beforeend', `HTML content`)
element.insertAdjacentText('beforeend', `Text content`)
// ----------------------------------------------------------------
