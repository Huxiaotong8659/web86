
Object2.prototype2 = {
    __proto2__ = null
}
function Object2(){
    this.__proto2__ = Object2.prototype2;
}



// var h4 = {}
// h4.name = ""
// function Haw3(){
//     console.log("this is haw")
// }

// Haw3.name


function apple(){
    this.__proto2__ =apple.information;
}
apple.information = {
    __proto2__:null
}

let obg = new apple();
console.log(obg.__proto2__.__proto2__);