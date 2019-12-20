const a = 8;
const b = 10;
const c  = 5;
const d = 8;

// lebih dari '>'
console.log(a > c); //true
console.log(a > b); //false

//kurang dari '<'
console.log(a < c); //false
console.log(a < b); //true

//sama double '=='
console.log (a == 8); //true
console.log (b == c); //false

//sama triple '==='
console.log (a === d); //true
console.log (b === c); //false

//tidak sama dengan atau negasi '!='
console.log ( a != c); //true
console.log ( a != d); //false

// '!=='
console.log ( a !== c); //true
console.log ( a !== d); //false

//lebih dari sama dengan '>='
console.log ( a >= b); //false
console.log ( a >= d); //true

//kurang dari sama dengan '<='
console.log ( a <= b);
console.log ( a <= d);