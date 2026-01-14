import mul from './math.js';
import { add, sub } from './math.js';

const randomColor = await import('randomcolor');
console.log(randomColor.default());

// console.log(add(2, 3));
// console.log(sub(5, 2));
// console.log(mul(4, 3));