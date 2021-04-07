//for-of 和 for-in 循环的区别
//
var arr =["apple","orange","peach","melon"];
for(var a in arr){
    console.log(a);
}
for(var a of arr){
    console.log(a)
}
//区别：在循环遍历数组时,for-in 打印下标，for-of打印具体的值

//用for-in 遍历对象的属性
Object.prototype.color = "blue";
var obj = {
    name:"apple",
    price:20,
    address:"jingdezhen"
}

for(var o in obj){
    console.log(o + ":");
    console.log(obj[o]);
}
//过滤是否属于自己的属性
for(const key in object){
    if(Object.hasOwnProperty.c){
        
    }
}



//字符串

//字符串转换
var num1 = 89 ;
console.log(typeof num1);
//把num1 转换成字符串，如何操作
var result1 = num1.toString();
console.log(result1);
console.log(typeof result1);

//字符串大小转换

var name1 = "apple";
console.log(name1);
//转换成大写
var result2 = name1.toUpperCase();
console.log(result2)
//转换成小写
var result3 = result2.toLowerCase();

//字符串分割
var name4 = "jiangxi,software,university";
var result4 = name4.split(",",2);
console.log(result4);

//字符串长度
var name5 = "jiangxi,software,university";
var result6 = name5.length;
console.log(result6);

//字符串查找位置（下标）
var name6 = "software,jiangxi,software,university";
var result7 = name6.indexOf("software");
console.log(result7);
var result8 = name6.lastIndexOf("software");
console.log(result8);
console.log(name6.length)

//字符串替换
var name7 = "software,jiangxi,software,university";
var result9 = name7.replace("software","hardware").replace("software","hardware");
console.log(result9);

//查找给定位置的字符
var name8 = "apple";
let result10 = name8.charAt(0);
console.log(result10);
//ASCLL码  a:97 b:98
let result11 = name8.charCodeAt(0);
console.log(result11);

//字符串链接
//字符串拼接
var name9 = "apple";
var name10 = "orange";
var name11 = name9 + name10;
var name12 = name9.concat(name10);

//字符串切割和提取
var name13 = "apple,orange,peach,melon";
var result13 = name13.slice(1,5);//这里的 5 是指下标为 5 的前面
console.log(result13);
var result14 = name13.substring(1,5);
console.log(result14);
var result15 = name13.substr(1,5);//这里的 5 是指长度
console.log(result15);

//写一个getSuffix函数，用于获得输入参数的后缀名，例如输入jiangxi.doc
function geySuffix(fileName){
    return fileName.substr(fileName.indexof(".") + 1,3)
}
console.log(getSuffix("abc.doc"))