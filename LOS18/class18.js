/*18 标准内置对象-构造器*/

var arr1 = [1,2,3,"4"];
var arr2 = new Array(5);
console.log(arr2);
for(var i=0;i<arr2.length;i++){arr2[i] = i;}
// []
//4

var arr22 = [];
for(var i=0;i<5;i++){
	document.onclick = function(){
		arr22[i] = i;
	}
}
/*function (){
		arr22[i] = i;
    }*/
    
var a1 = [1,2,3];
var a2 = a1;
a2.length = 0;
console.log(a1,a2);
// [] [](undefined)

var i=2,b=[];
b[i]=3;
b[i+1]="YY";
b[b[i]] = b[0];
console.log(b);
// [2: 3, 3: undefined]

var a = [];
a[-1.23] = true;
a["100"] = 0;  
a[1.00] = "Hi";
console.log(a.length);
console.log(a);
// 101
// [1: "Hi", 100: 0, -1.23: true]

var a1 = [,"abc"];
console.log(a1.length);
// 2

var table=new Array(5);
for(var i=0;i<table.length;i++){
	table[i]=new Array(5);
}
for(var row=0;row<table.length;row++){
	for(var col=0;col<table[row].length;col++){
		table[row][col]=row*col;
	}

}
var product=table[2][4];
//16

function f(){
	console.log(Array.isArray(arguments));
}
console.log(1,2,3,'xx');
// 1 2 3 "xx"

var arr1 = [1,3,4];
console.log(Array.isArray(arr1));
function foo(){
    console.log(Array.isArray(arguments));
    //console.log(arguments.pop());
    console.log(Array.prototype.pop.call(arguments));
}
foo(3,2,5);
// true
// false
// 5

var arr3 = ["a","b"];
var arr4 = ["c","d"];
Array.prototype.push.apply(arr3,arr4);
console.log(arr3);
// ["a", "b", "c", "d"]

var arr5 = ["a","b","c","d"];
var spliceElements = arr5.splice(1,2,"x");
console.log(spliceElements,arr5);
// ["b", "c"] ["a", "x", "d"]


var arr2 = ["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2);
// ["apple", "banana", "orange", "pear"]

var arr2 = ["banana","apple","pear","orange"];
//按第二个字母进行排序
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);
// ["banana", "pear", "apple", "orange"]


var arr3 = [-1,-20,7,50];
arr3.sort();
console.log(arr3);
// [-1, -20, 50, 7]

//排序
var arr3 = [-1,-20,7,50];
console.log(arr3);
arr3.sort(function(a,b){return a-b;})
arr3;
// [-1, -20, 7, 50]


var arr7 = [3,4,5];
var joinReturn = arr7.join("--");
console.log(joinReturn,arr7);
// 3--4--5   ([3, 4, 5])

var arr8 = [1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));
console.log(arr8.indexOf(5,3));
console.log(arr8.indexOf(5,5));
// 2
// 3
// 6
console.log(arr8.lastIndexOf(5));
console.log(arr8.lastIndexOf(5,3));
console.log(arr8.lastIndexOf(5,5));
// 6
// 3
// 3