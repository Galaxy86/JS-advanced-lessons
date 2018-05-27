/*21 构造器（Error）及异常处理*/

var a=new Array(-5);
//报错


try{
	var a=new Array(-5);
}
catch(e){
	console.log(e);
}
finally{
	console.log('finally');
}
/* RangeError: Invalid array length
    at <anonymous>:2:8*/
// finally


try{
	throw"abc";
}
catch(e){
	console.log(e);
}
// abc

console.warn('yy');
//警告 yy

console.error("yy");
//报错 yy

console.assert(3>2,"xx");
// 值为真 不输出

console.assert(3<2,"xx");
// 值为假 Assertion failed: xx


//异常处理嵌套
try {
    try {
        throw "oops";
    }
    catch (ex) {
        console.log("inner", ex);
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.log("outer", ex);
}
// inner oops
// finally


try {
    try {
        throw "oops";
    }
    catch (ex) {
        console.log("inner", ex);
		throw ex;
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.log("outer", ex);
}
// inner oops
// finally
// outer oops


try{
	function abc(x,cb){
		console.log(x);
		cb();
    }
	abc("xx",function(){
		var arr = new Array(-1);
	});
}
catch(e){
	console.log(e);
}
// xx
/* RangeError: Invalid array length
    at <anonymous>:7:13
    at abc (<anonymous>:4:3)
    at <anonymous>:6:2*/

    function UserError(message){
        this.message = message || '默认信息';
        this.name = 'UserError';
    }
    UserError.prototype.__proto__ = Error.prototype;
    //Object {name: "Error", message: ""}