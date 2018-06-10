/*28 */

var a = 1;var b = 2;var c = 3;
console.log(a,b,c);
//1 2 3

var [a, b, c] = [1, 2, 3];
console.log(a,b,c);
//1 2 3

let [foo,[[bar],baz]] = [1,[[2],3]];
console.log(foo,bar,baz);
//1 2 3

let [ , , xx] = ["foo", "bar", "baz"];
console.log(xx);
// "baz"

let [x, , y] = [1, 2, 3];
console.log(x,y);
//1 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head,tail);
//1 [2, 3, 4]

let [d, e, ...f] = ['a'];
console.log(d,e,f);
//"a" undefined []

var [foo2] = [];
var [bar2, fee2] = [1];
console.log(foo2,fee2);
//undefined undefined

let [x2, y2] = [1, 2, 3];
console.log(x2, y2);
//1 2

let [a2, [b2], d2] = [1, [2, 3], 4];
console.log(a2, b2, d2);
//1 2 4

function f2() {
    return 2;
}
let [x7 = f2()] = [1];
console.log(x7);
// 1

let [m1 = 1, n1 = m1] = []; 
let [m2 = 1, n2 = m2] = [2]; 
let [m3 = 1, n3 = m3] = [1, 2]; 
console.log(m1,n1,m2,n2,m3,n3);
// 1 1 2 2 1 2

let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a == b);
// false

function* fibs() {
    var a8 = 0;
    var b8 = 1;
    while (true) {
        yield a8;
        [a8, b8] = [b8, a8 + b8];
    }
}
var [first, second, third, fourth, fifth, sixth,xxx,yyy,zzz,mm,nn,pp] = fibs();
console.log(first, second, third, fourth,fifth,sixth,xxx,yyy,zzz,mm,nn,pp);
// 0 1 1 2 3 5 8 13 21 34 55 89

var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = obj2;
console.log(x); 
console.log(y);
// Hello
// World

let obj3 = {};
let arr = [];
({ foo7: obj3.prop, bar7: arr[0] } = { foo7: 123, bar7: true });
console.log(obj3);
console.log(arr);
// Object {prop: 123}
// [true]

var {x2 = 3} = {};
console.log(x2); 
// 3

var {x3, y3 = 5} = {x3: 1};
console.log(x3); 
console.log(y3); 
// 1
// 5

var {x4:y4 = 3} = {};
console.log(y4); 
// 3

var {x5:y5 = 3} = {x5: 5};
console.log(y5); 
var { message: msg = 'Something went wrong' } = {};
console.log(msg); 
// 5
// "Something went wrong"


function move1({x = 0, y = 0} = {}) {
    return [x, y];
}
console.log(move1({x: 3, y: 4})); 
console.log(move1({x: 3})); 
console.log(move1({})); 
console.log(move1()); 
VM37:4 [3, 4]
VM37:5 [3, 0]
VM37:6 [0, 0]
VM37:7 [0, 0]