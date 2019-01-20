'use strict';

const model = require('../models/usuario_model');

module.exports.salvarUsuario = function(db, res){
    model.salvar(db, function(result){
        if(!result.error){
            res.status(200).send(result);
        } else {
            res.status(400).send(result);
        }
    });
}

