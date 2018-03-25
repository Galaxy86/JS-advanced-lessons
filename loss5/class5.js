var i=1;
var b=++i + ++i + ++i;
b;
//=>9

var x="1";
x+=1;
//"11"

x/=1;
//11

console.log(3===3);
VM338:1 true

console.log(3=="3");
VM378:1 true

console.log(3==new String(3));
VM432:1 true

console.log(3===new String(3));
VM492:1 false

var obj1=new String("xyz");
var obj2=new String("xyz");
console.log("xyz"===obj1);
VM620:3 false

var obj1=new String("xyz");
var obj2=new String("xyz");
console.log(obj1===obj2);

VM672:3 false

console.log(2==2);
VM829:1 true

console.log(new Number(2)==new Number(2));
VM901:1 false

console.log(2==new Number(2));
VM955:1 true


console.log(2>1&&4<5);
console.log(true&&(!2));
console.log(false&&("2"==2));
console.log(false&&false);
VM1130:1 true
VM1130:2 false
VM1130:3 false
VM1130:4 false


console.log(2>1||4<5);
console.log(true||(!2));
console.log(false||("2"==2));
console.log(false||false);
//=> true
//=> true
//=> true
//=> false

//&& 转换后的左操作数若为true，则直接返回原始右操作数
//|| 转换后的左操作数若为true，则直接返回原始左操作数
console.log(true||23);
VM1293:1 true

console.log(false||23);
VM1333:1 23

console.log(true&&23);
VM1375:1 23

console.log(false&&23);
VM1415:1 false

var a=(new Boolean(false))||23;
console.log(a,typeof a);
VM1550:2 Boolean {[[PrimitiveValue]]: false} "object"

console.log(2&&4);
console.log(0&&4);
console.log({x:2}&&{name:"jame"});
console.log(null&&"hello");
//=> 4
//=> 0
//=> Object {name: "jame"}
//=> null

//&&与||在实际中的应用
var score=76;
console.log((score>90&&"great")||(score>75&&"good")||(score>60&&"pass")||(score<60&&"failed"));
//=> good


var sum=function(a,b,c){
	b=b||4;
	c=c||5;
	return a+b+c;
}
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
//未传实参时，形参为undefined，undefined的布尔值为false
console.log(sum(1,0,0));
//=> 6
//=> 8
//=> 10
//=> 10