"use strict";
const produtoRoute = require('./produto_route');
const usuarioRoute = require('./usuario_route');

module.exports = function(app, db){
    produtoRoute(app, db);
    usuarioRoute(app, db);
};