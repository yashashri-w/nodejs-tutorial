/*

    1.Lodash is a JavaScript library that provides utility functions 
for common programming tasks using a functional programming paradigm;
 it builds upon the older underscore. js library.
*/


const _ = require('lodash')

const items=[1,[2,[3,[4]]]]
const newItems= _.flattenDeep(items);
console.log(newItems);