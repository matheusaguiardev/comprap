"use strict";
const produtoRoute = require('./produto_route');

module.exports = function(app, db){
    produtoRoute(app, db);
};