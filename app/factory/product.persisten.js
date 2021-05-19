require('../config/conexion.db');
const Product = require('../models/producto.model');

async function insertProduct(prod){
    const product = new Product(prod)
    return await product.save((err, document));
}

async function findAll(){
    return await Product.find();
}

async function findByCode(code){
    return await Product.findOne({code:code});
}

module.exports =  {
    insertProduct: insertProduct,
    findAll:findAll,
    findByCode: findByCode
};
