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

module.exports.buscarUsuarioById = function(db, res){
    model.buscarById(db, function(result){
        if(!result.error){
            res.status(200).send(result);
        } else {
            res.status(404).send();
        }
    });
}

module.exports.buscarUsuarioPeloGrupo = function(db, grupo,res){
    model.buscarPeloGrupo(db, grupo, function(result){
        if(!result.error){
            res.status(200).send(result);
        } else {
            res.status(404).send();
        }
    });
}

module.exports.atualizarUsuario = function(db, id, usuario, res){
    model.atualizarUsuario(db, id, usuario, function(result){
        if(!result.error){
            res.status(200).send(result);
        } else {
            res.status(400).send(result);
        }
    });
}

module.exports.deletarUsuario = function(db, id, res){
    model.deletarById(db, id, function(result){
        if(!result.error){
            res.status(200).send(result);
        } else {
            res.status(400).send(result);
        }
    });
}