const productPersistent = require('../factory/product.persisten');

async function insertProduct(req, rest){
    let duplicado = await productPersistent.findCode(product.code);
    console.log(duplicado)
    if (duplicado) {
        return {
            codigo: 400,
            mensaje: "El registro esta duplicado",
            element: {}
        };
    }         
    element = await productPersistent.insertProduct(product)
    if (element){
        return {
            codigo: element ? 200:400,
            mensaje: element ? "Success": "Fail",
            element: element
        };
    }
}

async function updateProduct(req, res){
    return null;
}

async function findAll(req, res){
    const objects = await productPersistent.findAll();
    console.log(objects);
    return res.status(objects.length > 0 ? 200 : 400).json({
        countRow:objects.length,
        objects:objects,
        pages:0,
    })
}

async function findCode(req, res){
    const element = await productPersistent.findByCode(req.params.code);
    console.log(element);
    return res.status(element ? 200 : 400).json({
        countRow:0,
        objects:element,
        pages:0,
    })
}

module.exports = {
    insertProduct:insertProduct,
    updateProduct:updateProduct,
    findAll:findAll,
    findCode:findCode
};