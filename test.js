const a = {a: 1, b: 2};
const c = {c: 3, d: 4};
c.__proto__["e"]= 5;
c.__proto__["f"]= 6;

console.log(Object.assign(a, c));