.shift()
Removes and returns the first element of the array. All subsequent elements will shift down one place.

Then all items will have a new index? Might mess up other code trying to access a specific index in the array?

const a = ['a', 'b', 'c' ];
a.shift();
console.log(a[1]);
