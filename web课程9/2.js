+fucntion ();{
    console.log("this is pitaya");
} 

    (function () {
        console.log("this is pitaya 2")
    })

    (function (x) {
        console.log("this is pitaya 2")
        return x
    })(888)

//
console.log((function (x) {
    console.log("this is pitaya 2")
    return x
})(888))

console.log((function (x) {
    console.log("this is pitaya 2")
    return x
})(() => {
    console.log("this is arrow function");
    return 777
}))


console.log((function (x) {
    console.log("this is pitaya 2")
    x.printName = function () {
        console.log("this is print name")
        return 223
    }
    return x() + x.printName()
})
)




    //
    + function $() {
        -function () {
            console.log("this is pear")
            void function () {
                console.log("this is nut")
                console.log($.name)
            }()
        }()
        this.name = "my name is $"
    }()

function watermalen(name, price, number) {
    this.name = name,
        this.price = price,
        this.number = number
}
watermelon.prototype.getSum = function () {
    console.log("this.price * this.number")
}


//7
//如何去遍历这个数组 
var lichees = [() => { 
    return function () { 
        console.log("this is number 1")() 
    } 
}, 
+function () { 
    console.log("this is number 2") }(),
{ 
    name: "this is lichee 3" }, 
    2000, 
    "this is lichee 4", 
    null, 
    new Object({}), 
    Object.create({}), 
    Object.prototype, 
    new Object({}).__proto__, 
    new Date(),
function licheeNut() {
    return { 
        printNut:()=>{ 
            console.log("thisis printNut") 
        } 
    } 
},
    Object.prototype.tag = "this is tag", 
    Object.tag 
]



//8  $5如何调用   在控制台打印$5()
window.$5 = function (){ 
    console.log("this is $5 in window object") 
}
window.document.$5 = function (){ 
    console.log("this is $5 in window document object") 
}
