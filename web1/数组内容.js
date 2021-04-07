//定义数组
var a = 1;//用var类型定义一个变量
let b = 2;//es6提供的let关键字，定义一个变量
const c = 3;//定义一个常量
var arr1 = [1,2,3,4]; //定义一个数组
var arr2 = new Array(4); //通过Array关键字来定义数组
console.log(arr1.length) //获得数组的长度
console.log(arr1[1]) //获得数组里面的值
arr1[1] = 6;  //改变数组里面的值

//数组的操作
//往数组里面添加新元素
arr2.push(5);
//如果想把数组里面的元素弹出去
arr2.pop();
//js 是一种弱类型的编程语言，我们在定义数组时，数组里面的元素可以是多种类型的
var arr3 = [1,2,3,'a','',{},function(){}];
//定义一个空数组
var arr4 = []
var arr5 = [,,,,,,]
var arr6 = [
    {
        name:"lisi",
        age:20
    },
    {
        name:"wangwu",
        age:40
    }
]

//new 是否可以省略呢？
var arr7 = new Array(3);
//new 这个关键字是可以省略的
var arr8 = Array(4);
//如果只是声明一个数组，里面没有具体的赋值，那么它的默认值就是undefined
console.log(arr7[0]);
console.log(arr8[1]);
//Array 是 什么类型？
var arr9 = []
console.log(typeof arr9);
//from 数组自带方法,从一个字符串转化成一个数组
let flag = "1234abcde";
let result = Array.from(flag);
console.log(result)
//of 数组自带方法
let result2 = Array.of("abc","123");
console.log(result2)

let result3 = Array(10) //这个数组长度是10
console.log(result3.length)
result3.length = 8; //数组的长度是重新改掉
console.log(result3[9])
//数组的遍历
let arr10 = [1,2,3,4,5,6];
for(var i = 0;i<arr10.length;i++){
    console.log(arr10[i]);
}
//使用 for in 循环进行打印
let arr11 = [1,2,3,4,5,6];
for(var a in arr11){
    console.log(a);//a 是数组的下标
    console.log(arr11[a]);
}
//普通的for 和for in 有什么区别
var obj1 = {
    name:"zhangsan",
    age:20,
    address:"beijing"
}
//我想把 obj1 对象里面的内容都打印出来
//如何用for 去做呢？ 可以使用for in 结构来循环遍历对象里面的属性
var obj2 = {
    name:"zhangsan",
    age:20,
    address:"beijing"
}
for(var b in obj2)
{
    console.log(obj2[b])
}
//第三种 遍历方式 forEach
let arr13 = [1,2,3,4];
function func(arg){
    if(arg % 2 == 0){
        console.log(arg);
        return true;
    }
    else{
        return false;
    }
}
let result6 = arr13.forEach(func)
console.log(result6);

let arr14 = [1,2,3,4]
var obj3 = {
    f1:function(arg){
        console.log(arg +" " + this.f2());
    },
    f2:function(){
        console.log("this is obj3")
    }
}
//forEach 是有多个参数，第一个参数是必须的，第二个参数是可选
arr14.forEach(obj3.f1,obj3);


function newPrint(x,y = 0){
    console.log(x+y);
}
newPrint(3,4);


//
var obj4 = {
    f1:function (){
        console.log("this is f1");
        this.f2()
    },
    f2:function (){
        console.log("this is f2 in obj4")
    }
}
var obj5 = {
    f2:function (){
        console.log("this is f2 in obj5")
    }
}

var arr14 = [1,2,3];
arr14.forEach(obj4.f1,obj4);
//forEach(回调函数，【可选的参数】)
var obj16 = {
    f1:function (){
        console.log("this is f1 in obj16");
        //this 引用
        this.f2()
    },
    f2:function(){
        console.log("this is f2 in obj16")
    }
};

var obj17 = {
    f2:function(){
        console.log("this is f2 in obj17")
    }
}

var arr20 = [1,2];
arr20.forEach(obj16.f1,obj17);


//every 方法： 针对数组中的每一个元素进行比对，只要有一个元素比对结果为false则返回false，
//反之要所有的元素比对结果为true才为true
var arr21 = [1,2,3,4,5]
arr21.every(function(arg){
    console.log(arg);
    //return true;
    return false;
})

var arr22 = [1,2,6,3,4,5]
arr22.every(function(arg){
   if(arg>4){
       console.log(arg)
       return false;
   }
   else{
       console.log("continue")
       return true;
   }
})

//some()方法，同样是针对数组中的每一个元素，但是这个方法是，
//只要有一个元素比对结果为true，返回结果就为true，反之要所有的元素比对结果为false才为false
var arr23 = [1,2,3,4,5,6]
arr23.some(function(arg){
    console.log(arg)
})
console.log("%%%%%%%%")
arr23.every(function(arg){
    console.log(arg)
    return true;
})