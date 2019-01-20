"use strict";

const model = require('../models/produto_model');

module.exports.salvarProduto = function(db, produto, res){
    model.salvar(db, produto, function(result){
        if(!result.error){
            res.status(201).send(result);
        } else {
            res.status(404).send(result);
        }
    });
};

module.exports.buscarById = function(db, id, res){
    model.buscarById(db, id, function(result){
        if(!result.error){
            res.status(200).send(result);
        } else {
            res.status(404).send(result);
        }
    });
};

module.exports.buscarTodos = function(db, res){
    model.buscarTodos(db, function(result){
        if(!result.error){
            res.status(200).send(result);
        } else {
            res.status(404).send(result);
        }
    });
};

module.exports.deletarById = function(db, id, res){
    model.deletarById(db, id, function(result){
        if(!result.error){
            res.status(200).send(result);
        } else {
            res.status(400).send(result);
        }
    });
};

module.exports.atualizarProduto = function(db, id, produto, res){
    model.atualizarProduto(db, id, produto, function(result){
        if(!result.error){
            res.status(200).send(result);
        } else {
            res.status(400).send(result);
        }
    });
};