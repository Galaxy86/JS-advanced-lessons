/*17 JS继承方式 */

var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;
console.log(subObj_Second.x);
// 5

function Person(name){
    this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){console.log(this.name);};
function Student(id){
    this.id = id;
}
Student.prototype = new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);
//Person {name: "Mike"}

console.log(s1.name,s1.age,s1.id);
console.log(s2.name,s2.age,s2.id);
s1.__proto__.name = "Jack";
console.log(s2.name);
s2.__proto__.__proto__.age = 99;
console.log(s2.age);
// Mike 22 2017001
// Mike 22 2017002
// Jack
// 99

s1.name = "Bill";
s1.age = 22;
s2.name = "Colin";
s2.age = 23;

function Person(name){
    this.name = name;
    }
    Person.prototype.age = 22;
    Person.prototype.showName = function(){console.log(this.name);};
   
    var person1 = new Person("Mike");
    var student1 = Object.create(person1,{id:{value:123,writable:true}});
    var student2 = Object.create(person1,{id:{value:456,writable:true,enumerable:true}});
 //  function (){console.log(this.name);}

 console.log(student1.name,student1.age,student1.id);
 console.log(student2.name,student2.age,student2.id);
 student1.__proto__.name = "Jack";
 console.log(student2.name);
 student2.__proto__.__proto__.age = 99;
 console.log(student2.age);
// Mike 22 123
// Mike 22 456
// Jack
// 99

function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){console.log(this.name);};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
//Object {}


var BaseClass = function() {};
BaseClass.prototype.f2 = function () {
    console.log("This is a prototype method ");
};
BaseClass.f1 = function(){
    console.log("This is a static method ");
};
BaseClass.f1();
var instance1 = new BaseClass();
instance1.f2();
// This is a static method 
// This is a prototype method 

function Foo() {}
var f = new Foo();
console.log(f.constructor.name);
// Foo

function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);
console.log(y instanceof Constr);
// Constr {name: "Mike"}
// true

function Person(name){
	this.name = name;
}
Person.prototype.getName = function(){}
var p = new Person("jack");
console.log(p.__proto__ === Person.prototype);
console.log(p.__proto__ === p.constructor.prototype);
console.log(Object.prototype === p.constructor.prototype);
console.log(({getName:function(){}}).__proto__ === p.constructor.prototype);

// true
// true
// false
// false