/*15 JS原型继承*/
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);
console.log(obj.str);
console.log(obj.show());
// 10
// Hi
// Hi

var obj={
	num:10,
	str:"Hi",
	show:function(){
		return this.str;
	}
};
console.log(obj.__proto__);
// Object {}
console.log(obj.__proto__===Object.prototype);
// true

//原型链
obj.z = 5;
console.log(obj.hasOwnProperty("z"));
console.log(obj.z);
console.log(proObj.z);
obj.z = 8;
console.log(obj.z);
delete obj.z;//true
console.log(obj.z);
delete obj.z;//true
console.log(obj.z);


function Person(){
	this.name="Jack";
	console.log('Hi');
}
var p=new Person();
console.log(p);
// Hi
// Person {name: "Jack"}

function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.sayHi=function(){
	console.log("Hi,i'm "+this.name);
};
var p=new Person("Mike",23);
// var p1=new person(24);
p.sayHi();
// Hi,i'm Mike