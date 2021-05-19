'use strict';
const express = require('express');
const rulesRoutes = express.Router();
const productCtrl = require('../controllers/products.ctrl');

rulesRoutes.route('/product').post(async function(req, resp){
    let objectReq = req.body;
    if (!objectReq.code){
        resp.status(400).json({code:101, message: "La propiedad 'codigo' debe existir"});
    }
    let resultado = await productCtrl.insert(objectReq);
    resp.status(resultado.status).json(resultado.content);
});

rulesRoutes.route('/product').get(async function (req, resp){
    const resultado = await productCtrl.findAll();
    resp.status(resultado.status).json(resultado.content);
});

rulesRoutes.route('/product/:code').get(async function(req, resp){
    const resultado = await productCtrl.findByCode(req.params.code)
    resp.status(resultado.status).json(resultado.content);
});

rulesRoutes.route('/product').patch(async function(req, resp){
    let objectReq = req.body;
    if (!objectReq.code){
        resp.status(400).json({code:101, message: "La propiedad 'codigo' debe existir"});
    }
    let resultado = await productCtrl.update(objectReq);
    resp.status(resultado.status).json(resultado.content);
});

rulesRoutes.route('/product').delete(async function (req, resp){
    resp.json({code:200, message: "ok"});
});


module.exports = rulesRoutes;