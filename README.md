// Select the option that correctly assigns the increment function to the variable incrementHolder.
const increment = (salary) => {
  const revisedSalary = salary + 5;
  console.log(revisedSalary);
  return revisedSalary;
}
increment(5500); // ???  const incrementHolder = increment;


// ???
// The code snippet includes a function assigned to the variable sum. Given the fact that JavaScript functions are first-class objects, fill in the blanks so that a property of sum called alias is assigned the string value, 'summation'.

const sum = (x, y) => x + y;
sum.alias = 'summation';
👏
// You got it!



// Higer order function
let cb = (n1, n2) => {return n1 + n2};
 
let hof = (func) => {
  let value = func(3, 5);
  return `this function returned ${value}`;
}
 
hof(cb) // 'this function returned 8'