'use strict';
const express = require('express');
const rulesRoutes = express.Router();

rulesRoutes.route('/liveness').get(function liveness(res, resp){
    resp.json({code:200, message: "ok"});
});

module.exports = rulesRoutes;