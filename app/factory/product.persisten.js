require('../config/conexion.db');
const Product = require('../models/producto.model');

const functions = {
    insertProduct: insertProduct,
    findAll:findAll,
    findByCode: findByCode
}
async function insertProduct(prod){
    let product = new Product(prod)
    await product.save((err, document) => {
        if (err) {
            return null
        }
        if(document) {
            return document
        }
    });
}

async function findAll(){
    return await Product.find();
}

async function findByCode(code){
    return await Product.findOne({code:code});
}

module.exports = functions;
