var str="abc_def_ghi_jkl_mn";
str.split("_");
str.split("_",2);
["abc", "def"]

var str="abc_def_ghi_jkl_mn";
str.concat("_opq");
"abc_def_ghi_jkl_mn_opq"

var str="abc_def_ghi_jkl_mn";
str.substr(4,7);
"def_ghi"

var str="abc_def_ghi_jkl_mn";
str.substring(4,7);
"def"

var str="abc_def_ghi_jkl_mn";
str.slice(2);
"c_def_ghi_jkl_mn"

var str="abc_def_ghi_jkl_mn";
str.slice(2,5);
"c_d"

var str="abc_def_ghi_jkl_mn";
str.slice(-2);
"mn"

var str="abc_def_ghi_jkl_mn";
str.slice(2,-2);
"c_def_ghi_jkl_"

var str="abc_def_ghi_jkl_mn";
str.bold();
"<b>abc_def_ghi_jkl_mn</b>"

var str="abc_def_ghi_jkl_mn";
str.link();
"<a href="undefined">abc_def_ghi_jkl_mn</a>"

var str="abc_def_ghi_jkl_mn";
str.fontcolor("red");
"<font color="red">abc_def_ghi_jkl_mn</font>"

typeof NaN;
"number"

var temp="23"-1;
typeof temp;
"number"

var a1=2;
var b1=new Number(2);
a1==b1;
true

var a=2;
if(2==a){
	console.log("输出")；
}
输出

显式类型转换
// Boolean();
// Number();
// String();
// Object();

var n1 = 12345.6789;
console.log(n1.toFixed(2));
console.log(n1.toPrecision(n));  //取1位整数，n-1位小数
console.log(n1.toString());
console.log(n1.toExponential(n));  //取1位整数，n位小数
