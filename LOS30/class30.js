/*30 对函数的扩展 */

var f = function (v) {
    return v + 1;
};
f(2);
//3

var f = () => 5;

var f = function () {
    return 5
};

var foo = (num1, num2) => {
    if (num1 > num2) {
        return num1 * 2;
    } else {
        return num2 * 2;
    }
};
foo(2,3);   //foo(3,2);
//6

function full({ first, last }) {
    return last + ' ' + first;
  }
  full({first:"Ming",last:"Li"});
// "Li Ming"


var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;
        }

        function moveToY() {
            this.y = y;
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
// Object {x: 0, y: 0}


function foo() {
    setTimeout(function(){
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });
// id: 21


function foo() {
    return () => {
        return () => {
            return () => {
                console.log('id:', this.id);
            };
        };
    };
}
var f = foo.call({id: 1});
var t1 = f.call({id: 2})()(); 
var t2 = f().call({id: 3})(); 
var t3 = f()().call({id: 4}); 
// id: 1
// id: 1
// id: 1


var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
console.log(sum(1,0,0));
// 6
// 8
// 10
// 10

function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
    console.log(url);
    console.log(body);
    console.log(method);
    console.log(headers);
}

fetch('http://example.com')

//http://example.com
 
// GET
// Object {}


function abc(...v){
    console.log(v)
}
o1 = {};
abc.call(o1,...[1,2,3]);
// [1, 2, 3]