
const person = {
    firstName: 'John',                          // string
    lastName: 'Doe',                            // string
    age: 30,                                    // number
    hobbies: ['music', 'movies', 'sports'],     // array
    adress: {                                   // inbeded object (an object within an object)
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.hobbies[1]); 
