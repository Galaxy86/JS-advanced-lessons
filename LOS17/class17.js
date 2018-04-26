/*JS中的this*/

//一般函数中的this
var a = 10;b = "Hi";
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a,c);
// 20 "新添加属性"

function thisTest(){
    a =b= 20;
  }
  thisTest();
  console.log(a,b);
  //  a 报错
  //  b 20


  //对象方法中的this
  var point={
	x:0,
	y:0,
	moveTo:function(x,y){
		this.x=x;
		this.y=y;
	}
};
point.moveTo(1,1)
console.log(point);
// Object {x: 1, y: 1}


//构造函数中的this
var Person=function(name,age){
	this.name=name;
	this.age=age;
	this.showMe=function(){
		console.log(this.name,this.age);
	}
}
var p1=new Person("Mike",23);
var p2=new Person("Lucy",22);
p1.showMe();
p2.showMe();
// Mike 23
// Lucy 22

var Person=function(name,age){
	var namePrivate=name;
	var agePrivate=age;
	this.showMe=function(){
		console.log(namePrivate,agePrivate);
	}
}
var p1=new Person("Mike",23);
p1.showMe();
// Mike 23

//间接调动中的this
objA = {name:"AA",x:1};
objB = {name:"BB",x:5};
objA.test = function () {
    console.log(this.name,this.x);
};

objA.test();
objA.test.call(objB);
// AA 1
// BB 5


var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y;
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
// Object {x: 0, y: 0}

var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;
        }
        function moveToY() {
            this.y = y;
        }
        moveToX.call(this);
        moveToY();
    }
};
point.moveTo(2,2);console.log(point);
// Object {x: 2, y: 0}

function Point(x,y){
	this.x=x;
	this.y=y;
	this.moveXY=function(x,y){
		function moveX(x){
			this.x+=x;
		}
		function moveY(y){
			this.y+=y;
		}
		moveX(x);
		moveY(y);
	};
}
var p=new Point(2,3);
p.moveXY(1,1);
console.log(p);
// Point {x: 2, y: 3}