/*JS对象属性特性*/
var obj = {
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}
// y 2

//设置特性属性
//writable可写性、configurable可配置性、enumerable可枚举性
//value属性值
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,
    configurable:false,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);
person.name = "Lucy";
console.log(person.name);
delete person.name;
console.log(person.name);
//Mike
//Mike
//Mike

var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:true,//打开可写性
    configurable:false,//不可删除
    enumerable:true,
    value:"Mike"
});
console.log(person.name);
person.name = "Lucy";
console.log(person.name);
delete person.name;
console.log(person.name);
// Mike
// Lucy
// Lucy

//给对象添加属性

//直接添加（默认true）
var obj = {
    x:1,
    y:2
};
obj.z=3;
for(var k in obj)
{
	console.log(k,obj[k]);
}
// x 1
// y 2
// z 3

//通过defineProperty方法添加(默认false)
var obj = {
    x:1,
    y:2
};
obj.z=3;
Object.defineProperty(obj,'w',{
	value:456,configurable:true
});
for(var k in obj)
{
	console.log(k,obj[k]);
}

// x 1
// y 2
// z 3

var o4 = {};
o4.a = "aaa";
Object.defineProperty(o4,"b",
    {configurable:true,enumerable:false,writable:true,value:"bbb"}
);
var o5 = Object.create(o4);
o5.c = 234;
Object.defineProperty(o5,"d",{enumerable:false,value:567});
for(var k in o5){
    if(o5.hasOwnProperty(k)){
        console.log("o5 自有可遍历属性：",k,o5[k]);
    }else {
        console.log("o5 非自有可遍历属性：",k,o5[k]);
    }
}
console.log(o5.propertyIsEnumerable("a"),
    o5.propertyIsEnumerable("b"),
    o5.propertyIsEnumerable("c"),
    o5.propertyIsEnumerable("d")
);
console.log("a" in o5,"b" in o5,"c" in o5,"d" in o5);
console.log(Object.keys(o5));
console.log(Object.getOwnPropertyNames(o5));
// o5 自有可遍历属性： c 234
// o5 非自有可遍历属性： a aaa
// false false true false
// true true true true
// ["c"]
// ["c", "d"]

var empty1 = {a:1};
console.log(Object.isExtensible(empty1));
// true

empty2 = Object.create({},{
    "a":{
        value : 1,
        configurable : false,
        enumerable : true,
        writable : true
    }
});
console.log(Object.isExtensible(empty2));
//true