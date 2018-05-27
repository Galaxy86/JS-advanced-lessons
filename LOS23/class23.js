/* 23  非构造器JSON*/

var o1 = {
    a:[1,2],
    b:true,
    c:[3,4,"x",{y:34,z:56}],
    d:5,
    e:{name:"Jack"},
    f:function(){console.log(12);}, 
    h:0x12
};
var jsonStr1 = JSON.stringify(o1);
console.log(jsonStr1);
console.log(o1);
// {"a":[1,2],"b":true,"c":[3,4,"x",{"y":34,"z":56}],"d":5,"e":{"name":"Jack"},"h":18}
// Object {a: Array[2], b: true, c: Array[4], d: 5, e: Object…}


var a1 = [1,"x",true,{y:2,z:3}];//对比 ["1","x","true",{y:"2",z:3}]
var jsonStrArr1 = JSON.stringify(a1);
console.log(jsonStrArr1);
console.log(a1);
// [1,"x",true,{"y":2,"z":3}]
// [1, "x", true, Object]


JSON.stringify({});                        // '{}'
JSON.stringify(true);                      // 'true'
JSON.stringify("foo");                     // '"foo"'
JSON.stringify([1, "false", false]);       // '[1,"false",false]'
JSON.stringify({ x: 5 });                  // '{"x":5}'

JSON.stringify({x: 5, y: 6});              
// "{"x":5,"y":6}"

JSON.stringify([new Number(1), new String("false"), new Boolean(false)]); 
// '[1,"false",false]'

JSON.stringify({x: undefined, y: Object, z: Symbol("")}); 
// '{}'

JSON.stringify([undefined, Object, Symbol("")]);          
// '[null,null,null]' 


JSON.stringify( 
    Object.create(
        null, 
        { 
            x: { value: 'x', enumerable: false }, 
            y: { value: 'y', enumerable: true } 
        }
    )
);
// "{"y":"y"}"


JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
JSON.parse('1');               //  1


var o2 = {
    a:[1,2],
    b:true,
    c:[3,4,"x",{y:34,z:56}],
};
var jsonStr2 = JSON.stringify(o2,function (key,value) {
    if(value === true){
        value = false;
    }
    if((value instanceof Array)&&value.length == 4){
        value[0] = "Hi";
    }
    if(key === "a"){
        console.log("find key a");
        value = 12345;
    }
    if(key === "z"){
        console.log("find key z");
        value = "zzz";
    }
    return value;
});
console.log(jsonStr2);
console.log(o2);
// find key a
// find key z
// {"a":12345,"b":false,"c":["Hi",4,"x",{"y":34,"z":"zzz"}]}
// Object {a: Array[2], b: true, c: Array[4]}


function replacer(key, value) {
    if (typeof value === "string") {
        return undefined;
    }
    return value;
}
var foo = { foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7 };
var jsonString1 = JSON.stringify(foo, replacer);
console.log(jsonString1);
//'{"week":45,"month":7}'

window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    div1.addEventListener("click",function (e) {
        console.log("div1 click");
    },false);
    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },false);
    div3.addEventListener("click",function (e) {
        console.log("div3 click");
    },false);