/*20 正则表达式*/



/*g-全局，i-忽略大小写，m-包含换行*/
var str='a fAt bat ,a faT cat';
var reg1=/[bc]at/gi;
str.replace(reg1,"XX");
//"a fAt XX ,a faT XX"

var str='a fAt bat ,a faT cat';
var reg2=new RegExp(/fat/,"i");
str.replace(reg2,"XX");
//"a XX bat ,a faT cat"

var str="xx-xy-yy";
var a=str.split("-");
console.log(a);
// ["xx", "xy", "yy"]

var str="xx-x*y-yy";
var a=str.split(/[*]/gi);
console.log(a);
//["xx-x", "y-yy"]

var str="xx-x*y-yy";
var a=str.split(/[-*]/gi);
console.log(a);
// ["xx", "x", "y", "yy"]

console.log("a2b3c4d".replace(/[2-3]/,"x"));
// axb3c4d

console.log("a2b3c4d".replace(/[2-3]/g,"x"));
// axbxc4d

"abcdef".replace("a","x");
//"xbcdef"
"abcdef".replace(/a/,"x");
//"xbcdef"

/*正则表达式 \ 相关字符*/
"a2d5".replace(/\d/gi,"X"); //  \d 匹配到数字
"aXdX"
"a2d5".replace(/\w/gi,"X");//  \w 匹配到字符
"XXXX"
"a2d5".replace(/\D/gi,"X");//  \D 匹配到非数字
"X2X5"
"a2d5".replace(/\W/gi,"X");//  \w 匹配到非字符
"a2d5"

console.log(/oo/.test("moon"));//true
console.log(/oo\b/.test("moon"));//false
console.log(/oon\b/.test("moon"));//true
console.log(/\boo/.test("moon"));//false

console.log("moon".search(/oo/));//1
console.log("moon".search(/oo\b/));//-1
console.log("moon".search(/oon\b/));//1
console.log("moon".search(/\boo\b/));//-1

console.log(/oo\B/.test("moon"));//true
console.log(/oon\B/.test("moon"));//false
console.log(/oo\B/.test("moon"));//true
console.log(/\Boo\B/.test("moon"));//true

console.log("moon".match(/oo\B/));//["oo", index: 1, input: "moon"]
console.log("moonoonxoo".match(/oo\B/));//["oo", index: 1, input: "moonoonxoo"]
console.log("moon".match(/oon\B/));//null
console.log("moo".match(/\Boo\B/));//null

console.log("nooooonooy".replace(/o?/g,"*"));
// *n******n***y*

"12345678".replace(/\d{3,6}/,'X');//贪婪模式
//"X78"
"12345678".replace(/\d{3,6}?/,'X');//在量词后加？设置为非贪婪模式
//"X45678"
"12345678".replace(/\d{3,6}?/g,'X');
//"XX78"

console.log("NameNameName_11111".replace(/Name{3}/,"X"));
console.log("NameNameName_11111".replace(/(Name){3}/,"X"));
// NameNameName_11111
// X_11111

//  | 或
"abcdefghijk_abcdehijk_abcfghijk".replace(/abc(de|fg)hijk/g,"X");
//"abcdefghijk_X_X"