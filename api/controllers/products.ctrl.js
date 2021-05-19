const productData = require('../data/products.data');

async function insert(data){
    console.time("tiempo");
    const obj = await productData.findByCode(data.code);
    console.log(obj);
    if (obj){
        console.timeEnd("tiempo");
        return {status:400, content:{code:102,message:"El producto se encuentra duplicado."}};
    }
    const valueInsert = await productData.insert(data);
    console.log(valueInsert)
    if (!valueInsert) {
        return {status:400, content:{code:103,message:"Fallo el registro del usuario."}};
    }
    return {status:200, content:{code:200, payload:valueInsert}}
}

async function findAll(){
    let listElements = await productData.findAll();
    return {
        status: 200,
        content: {
            code: 200,
            payload: {
                count: listElements.length,
                elements: listElements
            }
        }
    }
}

async function findByCode(code){
    const product = await productData.findByCode(code);
    return product;
}
module.exports = {
    insert:insert,
    findAll:findAll,
    findByCode:findByCode
};