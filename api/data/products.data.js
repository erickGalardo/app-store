require('../../config/conexion.db');
const Product = require('../models/producto.model');


async function insert(data){
    const product = new Product(data);
    return await product.save();
}

async function update(data){
    const product = await new Product(data).save();
    return product;
}

async function findAll(){
    const product = await Product.find();
    return product;
}

async function findByCode(code){
    const product = await Product.findOne({code:code});
    return product;
}


module.exports = {
    insert:insert,
    update:update,
    findAll:findAll,
    findByCode:findByCode
};