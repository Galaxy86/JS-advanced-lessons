/*31 新增数据类型和数据结构*/

var mySymbol=Symbol();

var a={};
a[mySymbol]='Hello!';

var a={
    [mySymbol]:'Hello!'
};

var a={};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });


var aSymbol = Symbol("abc");
var obj = {
    [aSymbol]: 'Hello!'
};
Object.defineProperty(obj, Symbol("abc"), { value: 'World!' });
console.log(obj);
// Object {Symbol(abc): "Hello!", Symbol(abc): "World!"}


const COLOR_RED = Symbol();
const COLOR_GREEN = Symbol();
function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_GREEN:
            return COLOR_RED;
        default:
            throw new Error('Undefined color');
    }
}


var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);
// [Symbol(a), Symbol(b)]


var obj = {};
var foo = Symbol("foo");
Object.defineProperty(obj, foo, {
    value: "foo bar",
});
for (var i in obj) {
    console.log(i); 
}
Object.getOwnPropertyNames(obj);
Object.getOwnPropertySymbols(obj);
//[Symbol(foo)]

var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(s1 === s2); 
// true

var set = new Set();
set.add({});
console.log(set.size); 
set.add({});
console.log(set.size); 
// 1
// 2

var m = new Map();
var o = {p: 'Hello World'};
m.set(o, 'content');
m.get(o); // "content"
m.has(o); // true
m.delete(o); // true
m.has(o); // false