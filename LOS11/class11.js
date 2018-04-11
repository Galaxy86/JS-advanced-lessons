/*11 立即执行的函数表达式*/


//常见形式
(function max( x,y){
    console.log("the max is",x>y?x:y);
}(2,3));
// the max is 3


//分号结尾
(function() {
    console.log("111");
})();
//111

(function() {
    console.log("111");
})()
(function() {
    console.log("222");
})()
// 111
// 报错


true&&function(a,b){
	return a>b?a:b;
}(5,9);
//9

//与运算符结合
!function(x,y){
    return x==y?true:false; 
}("5",5);
//false

!function(x,y){
    return x===y?true:false; 
}("5",5);
// true


(function(){
	var x=10;
	document.onclick=function(){
		console.log("x=",x);
		alert("x="+x);
	};
})();
//弹出 x=10；
//undefined


function f(){
	var getNumFuncs=[];
	for(var i=0;i<10;i++){
		getNumFuncs[i]=function(){
			return i;
		};
	}
	return getNumFuncs;
}
var tmp=f();
tmp[0]();
tmp[1]();
tmp[2]();
tmp[3]();
//10

function f(){
	var getNumFuncs=[];
	for(var i=0;i<10;i++){
		(function(j){
		getNumFuncs[j]=function(){
			return j;
		};
        }(i));
	}
	return getNumFuncs;
}
var tmp=f();
tmp[0]();
//0

function f(){
    var getNumFuncs = [];
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return j;
        };
    }
    return getNumFuncs;//设置断点
}
var tmp = f();
tmp[3]();
//9

for(var i=0;i<3;i++){
	(function(j){
		setTimeout(function(){
			console.log(new Date,j);
		},1000*i);
	})(i);
}

// Mon Apr 09 2018 15:22:26 GMT+0800 (中国标准时间) 0
// Mon Apr 09 2018 15:22:27 GMT+0800 (中国标准时间) 1
// Mon Apr 09 2018 15:22:28 GMT+0800 (中国标准时间) 2