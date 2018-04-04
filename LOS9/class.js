
/*预解析*/
console.log(a);
var a=2;
console.log(a);
// undefined
// 2

console.log(a,b);
var b = 23;
console.log(a,b);
var a = b;
console.log(a,b);
// undefined undefined
// undefined 23
// 23 23

console.log(obj1,obj2);
var obj1 = {x:23};
console.log(obj1,obj2);
var obj2 = obj1;
console.log(obj1,obj2);
obj2.x =25;
console.log(obj1,obj2);
// undefined undefined
// Object {x: 23} undefined
// Object {x: 23} Object {x: 23}
// Object {x: 25} Object {x: 25}

console.log(foo);
var foo=function(){
	console.log("foo");
}
foo();
// undefined
// foo

/*同时有var和function关键字时*/
A();
function AA(){
	console.log("AA_1");
}
var AA=function AA(){
	consoe.log("AA_2");
};
AA();
// AA_1
// 报错

function AA(){
	console.log("AA_1");
}
var AA;
AA();
AA = function AA(){
    console.log("AA_2");
};
AA();
// AA_1
// AA_2

/*声明前置与作用域的关系*/
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();
// Jack