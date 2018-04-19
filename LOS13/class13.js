/*13 JS对象*/
var obj={
	num:10,
	name:'Galaxy',
	str:'hi',
	show:function(){
		console.log(this.str);
	}
}
console.log(obj.name);
console.log(obj.str);
obj.show();
// Galaxy
// hi
// hi

console.log(typeof Array);//function
console.log(typeof Function);//function
console.log(typeof Date);//function
console.log(typeof Number);//function
console.log(typeof String);//function
console.log(typeof Boolean);//function
console.log(typeof Math);//object
console.log(typeof JSON);//object


console.log(Object instanceof Function);
console.log(Object instanceof Object);
console.log(Boolean instanceof Function);
console.log(Boolean instanceof Object);
console.log(String instanceof Function);
console.log(String instanceof Object);
console.log(Number instanceof Function);
console.log(Number instanceof Object);
console.log(Function instanceof Function);
console.log(Function instanceof Object);
console.log(Array instanceof Function);
console.log(Array instanceof Object);
console.log(Date instanceof Function);
console.log(Date instanceof Object);
console.log(Math instanceof Function);//false
console.log(Math instanceof Object);
console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);
console.log((new Function())instanceof Function);
console.log((new(new Function()))instanceof Function());//false


/*访问器属性*/
var o={
	_x:1.0,
	get x(){
		return this._x;
	},
	set x(val){
		this._x=val;
	}
};
console.log(o.x);
o.x=2;
console.log(o.x,o._x);
// 1
// 2 2

var o={
	_x:1.0,
	get x(){
		return this._x;
	}
};
console.log(o.x);
o.x=2;
console.log(o.x,o._x);
// 1
// 1 1

var p1={
	_name:'Galaxy',
	_age:20,
	set age(val){
		if(val>0&&val<150){
			this._age=val;
		}else{
			console.log("请输入正确年龄");
		}
	},
	get age(){
		return this._age;
	}
};
p1.age=155;
console.log(p1.age);
// 请输入正确年龄
// 20

var p ={
    x:1,
    y:1,
    get r(){return Math.sqrt(this.x*this.x+this.y*this.y);},
    set r(newValue){
        var oldValue = Math.sqrt(this.x*this.x+this.y*this.y);
        var ratio = newValue/oldValue;
        this.x*=ratio;
        this.y*=ratio;
    },
    get theta(){return Math.atan2(this.y,this.x);}
};
var q = Object.create(p);
q.x = 2;
q.y = 2;
console.log(q.r);
console.log(q.theta);
// 2.8284271247461903
// 0.7853981633974483