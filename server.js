const productCtrl = require('./app/controllers/product.ctrl.js');

let prodOne = {
    name:"Envy 13.3 color silver",
    code:"laptop133envy",
    description:"Laptop de color negro, modelo delux, procesador intel i5, 8GB ram",
    suggestedPrice:32000
}

let prodTwo = {
    name:"Envy 13.3 color silver",
    code:"laptop133envy",
    description:"Laptop de color negro, modelo delux, procesador intel i5, 8GB ram",
    suggestedPrice:32000
}

let pO = productCtrl.insertProduct(prodOne);
let pT = productCtrl.insertProduct(prodTwo);
console.log(pO);
console.log(pT);
