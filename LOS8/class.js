function foo(){}
console.log(foo); //function foo(){}
console.log(typeof foo); //function
console.log(foo instanceof Object); //true
console.log(foo instanceof Function); //true
console.log(foo === window.foo); //true

var a = new Array(5);
console.log(a);
//5

console.log(typeof new Function());
console.log(typeof new Date());
console.log(typeof new Array());
// function
// object
// object

console.log(Function instanceof Function);
console.log(Function instanceof Object);
// true
// true

console.log(Array instanceof Function);
console.log(Array instanceof Object);
// true
// true

console.log(Date instanceof Function);
console.log(Date instanceof Object);
// true
// true

console.log(Math instanceof Function);
console.log(Math instanceof Object);
// false
// true

console.log(JSON instanceof Function);
console.log(JSON instanceof Object);
// false
// true

var func=function(n){
	if(n<=0)
		return 1;
    else
        //return n*func(n-1);
		return n*arguments.callee(n-1);
};
console.log(func(4));
// 24

(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
}(4));
//24


//prototype 获取对象的原型
function Man(name,age){
	this.name=name;
	this.age=age;
}
Man.prototype.sex="M";
Man.prototype.sayHi=function(){
	console.log("hi");
};
var li=new Man("Leo",10);
li.sayHi();
console.log(li.sex);
// hi
// M


//绑定
var x=45;
var obj={
	x:23,
	test:function(){
		function foo(){
			console.log(this.x);
		}
		foo.bind(this)();
		foo();
	}
};
obj.test();
// 23
// 45
var x=45;
var obj={
	x:23,
	test:function(){
		function foo(){
			console.log(this.x);
		}
		var fee=foo.bind(this);
		fee();
	}
};
obj.test();
// 23
// 23

/*高阶函数练习
z = 2*(x+1)-3*y*y;
c = 2*a*a-3*(b-1);
k = 2*(i+1)-3(j-1);
*/
function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(y);
}
function f1(x){
	return x+1;
}
function f2(x){
	return x-1;
}
function f3(x){
	return x*x;
}
foo(1,1,f1,f3);
// 1
foo(1,1,f3,f2);
// 2
foo(11,1,f1,f2);
// 242


var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());//输出什么
console.log("输出：",obj.fun3()());//输出什么
console.log("输出：",obj.fun4());//输出什么
/* 输出： function fun2() {
        return this.x;//若改为 return this;
    }*/
// 输出： 12
// 输出： 34