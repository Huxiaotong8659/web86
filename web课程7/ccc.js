//var pitaya = Object.creat()
var pitaya = {}

var pitaya2 = {
    name:"火龙果",
    price: 15,
    origin:"海南省",
    weight:1,
    nut: {
        name:"火龙果 nut"
    },
    printName:function(){
        console.log(this.name)
    }
}
pitaya2.printName();
pitaya2["printName"]();

function Haw(name,price,origin){
    this.name = name;
    this.price = price;
    this.origin = origin;
    this.printName = function(){
        console.log("this is Haw");
    }
}

Haw.prototype.printPrice = function(){
    console.log("prototype print Price")
}

var h1 = new Haw("山楂",2,"河南省");

h1.printName2 = function(){

}
h1.name = "山楂2"

console.log(h1.__proto__)
h1.printName()
h1.printPrice()

Haw.printName()
Haw.printPrice()