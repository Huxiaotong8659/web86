//闭包
function apple (){
    var number = 0;
    console.log(number++)
}
apple()
apple()
apple()

//
var number = 0;
function apple (){
    console.log(number++)
}
apple()
apple()
apple()

//
function apple (){
    var number = 0;
    return function(){
        console.log(number++)
    }
}
var a = apple();
a()
a()
a()

//
for (var i = 0;i < 10;i++){
    setTimeout(function(){
        console.log("this is " + i)
    },2000)
}

//
for (var i = 0;i < 10; i++){
    (function(i){
        setTimeout(function(){
            console.log("this is " + i)
        },2000)
    })(i)
}

//异步
function orange(){
    console.log("this is orange 1")
    setTimeout(function(){
        console.log("this is orange 2")
    },2000)
    console.log("this is orange 3")
    console.log("this is orange 4")
}
orange()

//异步：如  网页的部分刷新
function orange(){
    console.log("this is orange 1")
    setTimeout(function(){
        console.log("this is orange 2")
        setTimeout(function(){
            console.log("this is orange 2-1")
        },3000)
    },2000)
    console.log("this is orange 3")
    console.log("this is orange 4")
}
orange()


//
for (let i = 0;i < 10; i++){
        setTimeout(function(){
            console.log("this is " + i)
        },2000)
}

//new Object()
var pitaya3 = {}
console.log(typeof pitaya3)

var pitaya4 = new Object();

console.log(pitaya3 instanceof Object);
console.log(pitaya4 instanceof Object);

//错误  不能给常变量更改值
const pitaya5 = 500;
pitaya5 = 200;

//
const pitaya6 = {
    name:"zhangsan"
}
pitaya6.name = "lisi"
