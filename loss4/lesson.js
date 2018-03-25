function isStrictMode(){
    if(this==undefined){
        return true; //严格模式
    }else{
        return false;//非严格模式为全局变量
        }
}
    isStrictMode();
    false


//非严格模式下
    function f(a,a,b){
        return a+b;
    }
    f(2,3,4);
    7
//严格模式下 
    "use strict";
    function f(a,a,b){
        return a+b;
    }
    f(2,3,4);   //报错

delete foo;
true

"use strict"
delete foo;
//报错

var i=65;
switch(new Boolean(true)){
    case i>=60:
		console.log('及格');
		break;
    case i<69:
		console.log('不及格');
		break;
    default:
		console.log("default");
}

 //default

 /*new Boolean(true)===new Boolean(true)*/
/*不指向同一个堆区*/

 var i=65;
switch(new Boolean(true)){
    case (new Boolean(i>=60)):
		console.log('及格');
		break;
    case (new Boolean(i<69)):
		console.log('不及格');
		break;
    default:
		console.log("default");
}

//default


var i=1;
switch(i){
    case 1:
		console.log("case1");
    case 2:
		console.log("case2");
    case 3:
		console.log("case3");
    case 4:
 		console.log("case4");
		break;
}
case1
case2
case3
case4