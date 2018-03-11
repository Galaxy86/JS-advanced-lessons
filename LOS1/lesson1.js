var x=10;
document.onclick=function(){
    console.log("x=",x);
};

if(x>22){
    x+=2;
}else{
    console.log("x不大于2");
}

var xx=234;
if(234==xx){
    console.log("相等");
}

console.log(a);
if(true){
    var a=2;
}
console.log(a);

console.log(b);
if(false){
    var b=3;
}
console.log(b);

for(var i=0;i<3;i++){
    console.log("i:",i);
}
console.log(i);

function max(x,y){
    return x>y?x:y;
}
console.log(max(2,3));