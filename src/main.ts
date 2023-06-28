import { isValid } from './valid';

let s = '()';
console.log(isValid(s)); // true
s = '({)}';
console.log(isValid(s)); // false
