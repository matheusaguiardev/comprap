'use strict';

const model = require('../models/usuario_model');

module.exports.salvarUsuario = function(db, usuario, res){
    model.salvar(db, usuario, function(result){
        if(!result.error){
            res.status(200).send(result);
        } else {
            res.status(400).send(result);
        }
    });
}

module.exports.buscarUsuario = function(db, res){
    model.buscarUsuario(db, function(result){
        if(!result.error){
            res.status(200).send(result);
        } else {
            res.status(404).send();
        }
    });
}

module.exports.atualizarUsuario = function(db, usuario, res){
    model.atualizarUsuario(db, usuario, function(result){
        if(!result.error){
            res.status(200).send(result);
        } else {
            res.status(404).send();
        }
    });
}