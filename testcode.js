//  Continue Timestamp: 59:25 - 1:05:04 constructor functions  link: https://www.youtube.com/watch?v=hdI2bqOjy3c

// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980')
console.log(person1);

