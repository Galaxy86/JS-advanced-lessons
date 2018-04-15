/*12 JS闭包*/

function f1(){
	var x=1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3=f1();
console.log(f3);
console.log(f3());
// 1
// 报错

function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc=createInc(5);
console.log(inc(1));
console.log(inc(2));
inc=createInc(5);
console.log(inc(1));
// 6
// 8
// 6

function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc=createInc(5);
console.log(inc(1));
console.log(inc(2));
var inc2=createInc(5);
console.log(inc(1));
console.log(inc2(1));
// 6
// 8
// 9
// 6

function foo(){
	var i=0;
	function bar(){
		console.log(++i);
	}
	return bar();
}
foo();
foo();
// 1
// 1

function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();
a();
b();
// 1
// 2
// 1

var tmp=100;//自由变量，可以被访问
function foo(x){
	var tmp=3;//思考：词法作用域
	return function(y){
		console.log(x+y+(++tmp));
	}
}
var fee=foo(2);
fee(10);
fee(10);
fee(10);
// 16
// 17
// 18

var tmp=100;//自由变量，可以被访问
function foo(x){
	return function(y){
		console.log(x+y+(++tmp));
	}
}
var fee=foo(2);
fee(10);
fee(10);
fee(10);
// 113
// 114
// 115

function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());
console.log(d.count());
console.log(c.reset());
console.log(c.count());
console.log(d.count());
// 1
// 1
// 0
// 1
// 2

function f1(){
    var n = 999;
    function f2(){
        console.log(++n);
    }
    return f2;
}
var f = f1();
f();
f();
// 1000
// 1001

function fn() {
    var a;
    return function() {
        return a || (a = document.body.appendChild(document.createElement('div')));
    }
};
var f = fn();
f();
// <div>​</div>​

var db = (function() {
        var data = {};
        return function(key, val) {
            if (val === undefined) { return data[key] } // get
            else { return data[key] = val } // set
        };
    })();
    db('x'); 
    db('x', 1); 
    db('x'); 
    // 1

    function f(){
        var result = [];
        for (var i = 0; i < 3; i++) {
            //(function(){
                var pos = i;
                var func = function(){
                    return pos;
                }
                result.push(func);
                //console.log(i,pos);
            //}());
        }
        return result;
    }
    console.log(f()[1]());
    // 2

    function f(){
        var result = [];
        for (var i = 0; i < 3; i++) {
            (function(){
                var pos = i;
                var func = function(){
                    return pos;
                }
                result.push(func);
               console.log(i,pos);
            }());
        }
        return result;
    }
    console.log(f()[1]());
    // 0 0
    // 1 1
    // 2 2
    // 1