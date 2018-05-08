/*19 构造器Date*/

var date1=new Date(2017,9,18,12,34,1);
console.log(date1);
// Wed Oct 18 2017 12:34:01 GMT+0800 (中国标准时间)

var date2 = new Date(17,9,18,12,34,1);
console.log(date2);
// Thu Oct 18 1917 12:34:01 GMT+0800 (中国标准时间)

var date4 = new Date(1000); 
console.log(date4);
// Thu Jan 01 1970 08:00:01 GMT+0800 (中国标准时间)

var date5 = new Date();
console.log(date5);
// Mon May 07 2018 20:33:28 GMT+0800 (中国标准时间)

var date6 = new Date(NaN);
console.log(date6);
// Invalid Date

//有无new
var d1 = new Date();
var d2 = Date();
console.log(d1,typeof d1);
console.log(d2,typeof d2);
// Mon May 07 2018 21:34:55 GMT+0800 (中国标准时间) "object"
// Mon May 07 2018 21:34:55 GMT+0800 (中国标准时间) string

//思考
var n1 = new Number("123");
var n2 = Number("123");
console.log(n1,typeof n1);
console.log(n2,typeof n2);
// Number {[[PrimitiveValue]]: 123} "object"
// 123 "number"

console.log(Date.now());
console.log((new Date()).getTime());
// 1525675347538
// 1525675347542

var today=new Date();
today.setMonth(6);
console.log(today);
// Sat Jul 07 2018 20:45:50 GMT+0800 (中国标准时间)
console.log(today.getDay());
// 6

console.log(Date.parse("2010-01-01 11:12:23.111"));
console.log(new Date("2010-01-01 11:12:23.111"));
console.log(new Date().toISOString());
// 1262315543111
// Fri Jan 01 2010 11:12:23 GMT+0800 (中国标准时间)
// 2018-05-07T06:55:35.627Z

//计算50天之后的时间
var today=new Date();
var newDate=new Date(today.getTime()+1000*3600*24*50);
console.log(newDate);
// Tue Jun 26 2018 21:06:03 GMT+0800 (中国标准时间)
