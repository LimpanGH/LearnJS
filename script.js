
/* MDN is the best documentation for JS according to Traversy.
Console metods: https://developer.mozilla.org/en-US/docs/Web/API/console#methods */

// Traversy tutorial 'JavaScript Crash Course For Beginners': https://www.youtube.com/watch?v=hdI2bqOjy3c

// The console ------------------------------------------------------
alert ('Hello World');       /*Gives you a popup in the browser.*/
console.log ('Hello World'); /*Gives you the message Hello World in the browser console*/

INSTANCE METHODS IN CONSOLE. /*more examples https://developer.mozilla.org/en-US/docs/Web/API/console#methods */
console.log()   /* For general output of logging information. You may use string substitution and additional arguments with this method. */
console.clear() /* Clear the console.*/
console.info('Example')  /* Informative logging of information. You may use string substitution and additional arguments with this method. */
console.warn('Example ')  /* Outputs a warning message. You may use string substitution and additional arguments with this method. */
// ------------------------------------------------------------------


// VARIABLES:--------------------------------------------------------
let             // Use if you need to be able to reassign values.
const           // Cannot be reassigned (constant), always use const unless you know you want be able to reassign values.
var             // DEPRECATED, globaly scoped, can cause conflicts.

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
const name = 'John';        // String
const age = 30;             // Number
const isCool = true;        // Boolean
const x = null;             // Null    
const y = undefined;        // Undefined
const y;                    // Undefined. If you dont assign a datatype to the variable, it will automatically be undefined.


// Array and object-litterals are not primitive datatypes but rather objects.

/* Null will come up as object but thats incorrect. In the first implementation of JavaScript, JavaScript 
values were represented as a type tag and a value. The type tag for objects was 0. null was represented as 
the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the "object" typeof return value. */

console.log(typeof name);
Will print string since 'John' is a string.

// ------------------------------------------------------------------


// Concatenation (deprecated)----------------------------------------
console.log('My name is ' + name + 'and I am ' + age)  

//Template strings is the new way since ES6 from 2015.We make it a template string by using backticks:
console.log(`My name is ${name} and I am ${age}`);
// Will print: My name is John and I am 30

// Another way is to assign it to a variable (let or const):
const hello = `My name is ${name} and I am ${age}`;
console.log(hello); 
// Will also print: My name is John and I am 30
// ------------------------------------------------------------------


// String-property and string-methods--------------------------------
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
console.log(example.split(''));     //split by letter
//Will print '(11) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']'. Stating 11 indexed characters in the paranteses and then prints all of them.

const example = 'technology, computer, it, code';
console.log(example.split(', '));    //split by word
// Will print '(4) ['technology', 'computer', 'it', 'code']'. Stating 4 indexed words in the paranteses and then prints all of them.
// ------------------------------------------------------------------


// Arrays are variables that hold multiple values) ------------------

// Using the Array constructor, This way is not used very often. ('new array' is the constructor)
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
// Will print '(5) [1, 2, 3, 4, 5]'. 

// This way is the common way of making arrays with brackets [].
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

// ------------------------------------------------------------------


// Objects, AKA Object Litterals, are key value pairs ---------------

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
console.log(person.firstName);                  // Will print 'John' by using the dot syntax.
console.log(person.firstName, person.lastName); // Will print 'John Doe' by using the dot syntax and a comma between.
console.log(person.hobbies[1]);                 // Will print 'movies' by using the dot syntax and brackets to specify the index you want from the arary. 
console.log(person.address.city);               // Will print 'Boston' by using the dot syntax twice.
 
// Destructuring (advanced, came with ES6)
const { firstName, lastName } = person;         // By using destructuring we can create variables (pull them out) from the object
console.log(firstName);                         // and when we CL the destructure, it will print 'John'.
const { firstName, lastName, address: { city }} = person;         // We can also pull out values from inbeded objects.
console.log(city);                              // and when we CL the destructure, it will print 'Boston'.

 person.email = 'john@gmail.com';               // Adding properties with values to the object
 console.log(person);


 // Arrays of Objects -----------------------------------------------

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
// ------------------------------------------------------------------


 // JSON -------------------------------------------------------------
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
// ------------------------------------------------------------------


// Loops ------------------------------------------------------------

 // for-loops
 for(let i = 0; i <= 10; i++) {  // We pass in three parameters: i=0 (assigning the iterator/variable), i<=10 (the condition that needs to be met) and i++ (the increments, ++ will add one to the i-variable).
    console.log(i);             
    // Will print '0 1 2 3 4 5 6 7 8 9 10'.
 } 

 //for-loop with added template string
 for(let i = 0; i <= 10; i++) {
    console.log(`Hej: ${i}`);       // Here we use Template String in order to modify the output.
 // Will print: 'Hej: 0 Hej: 1 Hej: 2 Hej: 3 Hej: 4 Hej: 5 Hej: 6 Hej: 7 Hej: 8 Hej: 9 Hej: 19'.


 // while-loops (here we set the variable outside the loop), (while loops are oldschool)
 let i = 0;
 while(i < 10) {
    console.log(`Tjena: ${i}`);
    i++;
 }  
 // Will print 'Tjena: 0 Tjena: 1 Tjena: 2 Tjena: 3 Tjena: 4 Tjena: 5 Tjena: 6 Tjena: 7 Tjena: 8 Tjena: 9'.

 // Loop through arrays with for-of-loop (iterate)
 for(let todo of todos) {          // todo is just a name, todos is the name of our array above.
    console.log(todo);            // Grab all the properties in the array with (todo).           
 }  
 // Will print: 
 {id: 1, text: 'Take out trash', isCompleted: true}
 {id: 2, text: 'Meeting with boss', isCompleted: true}
 {id: 3, text: 'Dentist appointment', isCompleted: false}

 // Loop through arrays with for-of-loop  (iterate)
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

 //forEach
 todos.forEach(function(todo) {                      
 console.log(todo.text);
 })
 // Will print:
 Take out trash
 Meeting with boss
 Dentist appointment

 //map 
 const todoText = todos.map(function(todo) {         
    return todo.text;
 });
 console.log(todoText);
 // Will print:
 (3) ['Take out trash', 'Meeting with boss', 'Dentist appointment']
 
 //filter
 const todoCompleted = todos.filter(function(todo) {   
    return todo.isCompleted === true;                   //Filters out the .text values that are true.
 });
 console.log(todoCompleted);
 // Will print:
 0: {id: 1, text: 'Take out trash', isCompleted: true}
 1: {id: 2, text: 'Meeting with boss', isCompleted: true}
 length: 2

// ------------------------------------------------------------------


// Conditionals------------------------------------------------------
 // https://www.youtube.com/watch?v=hdI2bqOjy3c  at 46:30

 // if and else or else if.
 // We can use the doubble AND operator: && (both have to be true), or the OR-operator: ||, (one of the values have to be true). 
 // The ternary operator ?, takes three operands
 // According to Kyle, we can skip using Else to make the code more readable https://www.youtube.com/watch?v=EumXak7TyQ0 but if you use If and Else properly, it usualy works very well.

 // Example 1
 const x = 10;      // Changing the variable will change the output in the console
 if(x === 10) {     // The use of === is more precise than the use of == because it also matches the datatypes
     console.log('x = 10'); 
 } else if (x > 10) {
     console.log('x is greater than 10');
 }else {
     console.log('x is less than 10');
 }
 // Will print 'x = 10'.

 // Example 2
 const x = 4;
 const y = 11;
 if(x > 5 || y > 10){       // with the OR operator, one of the values have to be true, in this case, y is true.
     console.log('x is more than 5 or y is more than 10');
 }
 // Will print 'x is more than 5 or y is more than 10' since one of the values are true

 // Example 3 Ternary
 const x = 11;
 const color = x > 10 ? 'red' : 'blue' // if x is greater than(?) 10, print red, else(:) print blue.
 console.log(color);
  // Will print: 'red'

  // Example 4 Switch
  const x = 10;
  const color = x > 10 ? 'red' : 'blue'
  switch(color) {
      case 'red':
          console.log('color is red');
          break;
      case 'blue':
          console.log('color is blue');
          break;
      default:
          console.log('color is NOT red or blue');
      }
    // Will print: 'color is red'. If we change const color to green, then it will print 'color is NOT red or blue'.
// ------------------------------------------------------------------


// Functions --------------------------------------------------------

function addNums(num1, num2) {
    return num1 + num2;
}
console.log(addNums(5, 5));
 // Will print '10'
 
 // Arrow functions, handy and clean things up, introduced in ES6
 const addNums = (num1, num2) => {  // Name it as a variable (const) insteat of function, then add an = before () and a fat arrow => after the ().
    return num1 + num2;
}
console.log(addNums(5, 5));
 // Will print '10'

 // Usually you dont console log functions but rather return them. But here are some examples.

 // Example 1
 function addNums(num1, num2) {
    console.log(num1 + num2);
 }
 addNums(5,4);      // Calls the above function and adds the two parameters 5 and 4. Not adding parameters will prin 'NaN' (Not a Number).
 // Will print '9'

 // Example 2
 function addNums(num1 = 1, num2 = 1) { // adding the parameters directly.
    console.log(num1 + num2);
 }
 addNums();
 // Will print '2'. If you call the function with addNums(5, 5); it will override and print '10'.

// ------------------------------------------------------------------



// Object oriented programming --------------------------------------
// https://www.youtube.com/watch?v=hdI2bqOjy3c Timestamp: 59:25

 //Constructor Functions 


// ------------------------------------------------------------------

// Questions for aries ----------------------------------------------
let b = Math.floor(2,4);                    // Math.floor doesen´t have a parantheses around it, value in the function-prantheses
console.log(b);

let a = Math.floor (Math.random() *10);     // Why no function-parantheses for Math.floor
console.log(a);

let c = Math.floor (Math.random(4,4) * 10); //does the function-parantheses with a value simply go after Math.random instead of after Math.floor like on line 420?

console.log ( Math.floor (Math.random() * 100) );






// Functions -------------------------------------------------------- https://www.youtube.com/watch?v=W6NZfCO5SIk

/* Functions are one of the three Reference data-types (objects, arrays, functions). Functions is one of the fundamental building blocks in JS.
A function is basically a set of statements that performs a task or calculates a value. */

// Performing a task.
function greet() {                 // Declaring a function by writing "function ()", giving the function a name "greet". We define our logic by writing our statements in the function body (everything between the curly braces).
  console.log('Hello World');      // First statement in our function body, statements are ending with a semicolon. The logic here is to display a message in the console.
}

greet();                           // Here we call the function by writing a statement with the name of the function followed by ();
// Output: Hello World


// Functions can have inputs in the declaration that can change how the function behaves.
function greet (firstName, lastName)                    // Here we input two variables that we refer to as parameters. We input parameters that we name "firstName" and "lastName". These variables/parameters are only meaningful inside of this function, they will not be accessible outside of this function.
    console.log (`Hello ${firstName} ${lastName}` );    // Using template string to print both parameters
  }
  
  greet('John ', 'Smith');                              // In this statement we call the function "greet" and add two arguments, 'John' and 'Smith', to the greet-function. THE ARGUMENT IS A VALUE THAT WE SUPPLY TO THE PARAMETER.
// Output: Hello John Smith



  // Calculating a value.
function square (number) {         //  We declare the function "square" and enter the parameter "number".
    return number * number;        // In our statement/logic we add the keyword "return" and ask it to multipy the parameter by the parameter. The return keyword will return the result-value to whoever is calling the function.
  } 
  
  let number = square (2);        // Here we call the square-function and add the argument "2".
  console.log(number);


// Inserting a persons name to a message.
function sayThanks(name) {        // declaring a function and name it "sayThanks", adding a parameter that we name "name".
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.'); // Inserting the parameter to our message.
  }
  sayThanks('Cole'); /* Calling sayThanks() and inserting an argument in the form of a variable (numbers would be called values) 
                        to the function declarations parameter "name". The parameter then inserts the argument to the code-block. */ 


/* 1 Passing the values 5 and 7 to the parameters.
   2 Calculating area.
   3 Returning the result
   4 Printing the result to the console. */
function rectangleArea (width, height) {    // creating a function named "rectangleArea" and assign two parameters.  
    let area = width * height;              // Then we declare a variable named area and set its value to the parameters "width" and "height".
    return area;                            // Then we return the result/value of area.
  }
  console.log(rectangleArea (5, 7));        // Calling our function and passing the arguments/values 5 and 7 to the paramenters in our function declaration.
  

// This function will result in the same value as..
function monitorCount(rows, columns) {
  const numOfMonitors = rows * columns;
  return numOfMonitors
}
console.log(monitorCount(5, 4));
  
  // ... this one.
function monitorCount(rows, columns) {
   return rows * columns;
 }
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);


// FUNCTION DECLARATIONS:
// Example 1: A function that converts the temperature from Celsius to Fahrenheit.
function multiplyByNineFifths(number) {         // 3. Value of 15 is passed from the "multiplyByNineFifths" "parameter" to the functions codeblock and multiplied by "9/5".
    return number * (9/5);                      // 4. result is returned to  "getFahrenheit" since "getFahrenheit" is the function that called "multiplyByNineFifths".   
  };
   
  function getFahrenheit(celsius) {             // 2. Value of "15" is inserted in "celsius-parameter", the code-block calls "multiplyByNineFifths" and passes value to "number-parameter".
    return multiplyByNineFifths(celsius) + 32;  // 5. "getFahrenheit" takes the returned value (27) from "multiplyByNineFifths" and adds 32.
  };                                            // 6. the result (59) is returned to the function-caller "getFahrenheit(15)" 
   
  console.log(getFahrenheit(15));               // 1. calling getFahrenheit and passing value of 15
                                                // 7. The returned value from the mainfunction and the helper function has now reached the function-caller and is then printed to the console.


// Example 2: Calculating cost for monitors                                                
function monitorCount(rows, columns) {          // 3. The values "5" and "4" are passed from "monitorCounts" parameters "rows, columns" to the code-block where they are multiplied.
    return rows * columns;                      // 4. result is returned to  "costOfMonitors" since "costOfMonitors" is the function that called "monitorCount".//
  }
  
  function costOfMonitors (rows, columns) {     // 2. Value of "5" and "4" is inserted to parameters "rows" and "columns", the code-block calls "monitorCount" and passes the values to it's parameters "rows, columns".
    return monitorCount(rows, columns) * 200;   // 5. "costOfMonitors" takes the returned value (200) from "monitorCount" and multiplies it by 200. 
  }                                             // 6. the result (4000) is returned to the function-caller "costOfMonitors (5, 4);" 
  
  const totalCost = costOfMonitors (5, 4);      // 1. Making a variable called named "totalCost" and assign ints value to: call "costOfMonitors" and pass two arguments in form of values (5, 4), to "costOfMonitors" parameters "rows" and "columns".
  console.log(totalCost);                       // 7. Printing "totalCost" to the console.


// FUNCTION EXPRESSIONS: (another way of writing a function, there are several ways to write a function).   https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions/exercises/function-expressions
// Example 1: This will give the same result as the example above, (Example 2: Calculating cost for monitors ). 
const monitorCount = function(rows,columns) {
  return rows * columns;
}

const costOfMonitors = function (rows, columns) {
  return monitorCount(rows, columns) * 200;
}

console.log(costOfMonitors(5,4));


 
  //Example 2 : check if it is correct day to water plants. 
  const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
    return true; 
    } else {
      return false;
    }
  };
  console.log (plantNeedsWater('Tuesday'));


  // These two will result in the same value. (calculating mumber of seconds in a week)
const numberOfSecondsInOneWeek = function(seconds, minutes, hours, days) {
let totalSeconds = seconds * minutes * hours * days; 
  return totalSeconds
}
let total = numberOfSecondsInOneWeek(60,60,24,7);
console.log(total);


function numberOfSecondsInOneWeek(seconds, minutes, hours, days) {
  return seconds * minutes * hours * days;
}
console.log(numberOfSecondsInOneWeek(60,60,24,7));



// Default parameters, change them to custom parameters by entering arguments when you call the function. Undefinded argument will print the default parameter.
  function makeShoppingList(item1 = ('milk'), item2 =('bread'), item3=('eggs')){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList('rubbers', undefined,'straaabris');

// Return keyword, storing the result of a calculation and returns the value to the function-call.
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {                              // If true: the first "return" will run.
    return 'You need positive integers to calculate area!';
  }
  return width * height;                                      // If false: the second "return" will run.
}
console.log(rectangleArea(2,2) );                             // Both values are positive number so the second "return" will run and return the value of 4.


 /* 1. Convert 15° celsius to farenheit with two functions (main function and helper-function).
    2. Print the result to console. */
function multiplyByNineFifths(number) {     // 4. The argument is inserted in the parameter "number".
  return number * (9/5);                    // 5. The parameters value (still 15), is passed to the varable "number" and multiplied by (9/5). The result is return to "getFarenheit".
};

function getFarenheit(celsius) {            // 2. "15" is passed to parameter (celsius).
  return multiplyByNineFifths(celsius) +32; // 3. Codeblock calls "multiplyByNineFifths" and passes the argument "celsius" which has the value of 15.
};                                          // 6. The returned value (27), is added to 32, which results in 59. The value of 59 is returned to the function-call "getFarenheit(15)" and then printed to the console.

console.log(getFarenheit(15));              // 1. Function-call calls "getFarenheit" and passes the argument "15"


// Arrow functions
// Example 1: Concise body single-line block (without param-parantheses, return-keyword and curly-braces).
const sumNumber = number => number * number; // A variable named "sumNumber", which also is the function-id, followed by the parameter "number", (0 or multiple params need a parantheses). Then a fat arrow point to the code-block.
console.log(sumNumber(5));                   //The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.
                                             // Single line code-blocks don´t need curly-braces. So the arument "5" will hit the param and then go to the code-block and is multiplied by itself.

// Example 2: Concise body multi-line block.
const sumNumber = number => {
  const sum = number * number;
  return sum;
}
console.log(sumNumber(5));

// Example 3: Concise body single-line block with ternary operators.
const plantNeedsWater = day => day === 'Wednesday' ? true : false; // Here I used ternary operators "?" and ":" to make a multi-line block into a single-line block.
console.log(plantNeedsWater('Wednesday'));


// Loops ------------------------------------------------------------ https://www.youtube.com/watch?v=Kn06785pkJg

/* 
1. for
2. for..of
3. for..in
4. while
5. do..while
6. forEach  */
  
// 1.1. for loop
for (let i = 0; i < 5; i++) {   // (Initialization, conditition, iteration).
  console.log('Hi!' + i);       // Logs the string and the indexnumber of each iteration.
  if (i === 3) {                // we can add an if-statement and the keyword "break"
    break;                      // In this case, the iteration will stop at 3, not printing 4.
  }
}
// Prints: "Hi!0" "Hi!1" "Hi!2" "Hi!3"
  
// 1.2. for-loop to loop through an array.
const firstNames = ['john', 'bob', 'mary', 'joe']; 
for (let i = 0; i < firstNames.length; i++) {   // let i be less than the length of our array (4), and itterate by 1 each time.
  console.log(firstNames[i] + i);               // print each element in the array by adding our index "[i]" to our variable, I'm also adding the index-number " + i".
}
// Prints: "john0" "bob1" "mary2" "joe3"

// 2. for..of loop. This kind of loop is a bit slower than a normal for-loop
const firstNames = ['john', 'bob', 'mary', 'joe']; // Setting a variable to an array.
for (variable of firstNames) {                     // Deconstructing the array, taking each element in the array and assign it to our variable
  console.log(variable);
}
// Prints: "john" "bob" "mary" "joe"

// 3. for..in loop with an object
const user = {             // Creating an object with two key-value pairs.
  'firstName': 'john',     // Don't forget the comma!
  'lastName': 'doe'
}
for (variable in user) {        // The index of our key-value pairs will be stored in our variable, (I just named it "variable" in this case).
  console.log(user[variable]);  // Logging "user" with the index of "[variable]". I.e the loop first logs the key "firstName" and then the key "lastName".
}
// Prints: "john" "doe"


// 4.1 While loop with optional break
let i = 0;                      // Here we declare our index outside the loop.
while (i < 10) {                // While i is less then ten..
  console.log(i);               // ..keep logging i..
  i ++;                         // ..increment by 1, WITHIN THE LOOP!! Otherwise it becomes an infinite loop.
  if (i === 5) break;           //.. but stop if i = 5 (break or continue is optional.
} 
// Prints: 0 1 2 3 4

// 4.2 While loop with optional continue
let i = 0;                      
while (i < 10) {                
  i ++;                         
  if (i === 5) continue;           // If we use "continue" we need to console.log AFTER the if statement. Continue skips 5 and then continues the loop until it is false.
  console.log(i); 
} 
// Prints: 1 2 3 4 .. 6 7 8 9 10      // Starts at 1 instead of 0 since the cl comes AFTER the i++.


// 5. Do while loop (similar to the while-loop, but will ALWAYS run the first time)
let i = 0;
do {      // The first statement will always run in do-while loops. It checks for the condition after the do-statement has run. For example, if i is set to 0, it will still print 1.
  i ++;
  if (i === 5) continue;
  console.log(i);
} while (i < 10);
// Prints: 1 2 3 4 .. 6 7 8 9 10      // Will start at 1 instead of 0 since do-while loops ALWAYS run the first time.

// 6. For each (one of the High order array functions). GOOD FOR LOOPING THROUGH ARRAYS.
const animals = ['cat', 'dog', 'horse', 'sheep', 'bird']; // Creating a variable and set it to an array.
animals.forEach(variable => {               // Taking our variable and attaching 
  console.log(animal);
})

// Manipulating the DOM with JavaScript------------------------------

 //https://www.reddit.com/r/learnjavascript/comments/103uxvs/mustknow_dom_manipulation_methods

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
// ------------------------------------------------------------------
