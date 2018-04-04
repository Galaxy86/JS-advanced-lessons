/*全局作用*/
var a = 10,
    b = 20;
function fn() {
    var a = 100,
        c = 200;
    function bar() {
        var a = 500,
            d = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();
//500 20 200 600


/*词法作用域*/
var name = "Jack";
function echo() {
    console.log(name);
}
echo();
//Jack

var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();
//Jack

var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();
//Jack

var scope = "g";
function foo(){
	var scope = "l";
	return new Function("console.log(scope);")
}
foo()();
// g

var scope="global";
function checkScope(){
	var scope="local";
	return function(){
		return scope;
	};
}
console.log(checkScope()());
// local

var scope="global";
function checkScope(){
	var scope="local";
	return new Function("return scope");
}
console.log(checkScope()());
// global

var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
var a=2,b=3;
if(a<b){
    var userId = 234;
}

(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());
//undefined