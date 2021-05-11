const productPersistent = require('../factory/product.persisten.js');
const functions = {
    insertProduct:insertProduct,
    updateProduct:updateProduct,
    findAll:findAll
}


function insertProduct(product){
    let duplicado = findCode(product.code);
    console.log("----------------------------");
    console.log(duplicado);
    if (!duplicado){
        return {
            codigo: 400,
            mensaje: "El registro esta duplicado",
            element: {}
        };
    } else {
        element = productPersistent.insertProduct(product)
        return {
            codigo: element ? 200:400,
            mensaje: element ? "Success": "Fail",
            element: element
        };
    }
}

function updateProduct(){
    return null;
}

function findAll(){
    let objects = productPersistent.findAll();
    return {
        elements:objects.size(),
        pages:0,
        objects:objects
    }
}

function findCode(code){
    let element = productPersistent.findByCode(code);
    return element;
}

module.exports = functions;