"use strict";
// https://mongoosejs.com/docs/index.html
// https://mongoosejs.com/docs/api.html#model_Model-save

var ObjectID = require('mongodb').ObjectID;
const userSchema = require('./../schemas/usuario_schema');
const mongoose = require('mongoose');
const collectionName = require('./../models/models_mongo').usuario_collection;
const userModel = mongoose.model(collectionName, userSchema);


module.exports.salvar = function(db, usuario, callback) {
    const userDoc = new userModel(usuario);
    userDoc.save(function(err, result){
       if (err) {
        console.log("Falha ao executar" + err);
        callback({ 'error': 'Não foi possível cadastrar esse usuario' });
      } else {
        console.log(usuario);
        callback(result);
      }
    });    
};

module.exports.buscarById = function (db, id, callback){
    if(ObjectID.isValid(id)) {
        userModel.find({_id: id}, (err, result) => {
            if (!err) {
                if(result.length > 0){
                    callback(result);
                } else {
                    callback({'error':'Usuário não encontrado!'});
                }
            } else {
                console.log("Falha ao executar " + err);
                callback({'error':'Não foi possível encontrar o usuário'});
            } 
        });
    } else {
        callback({'error':'Por favor, verificar id do usuário!'});
    }
};

module.exports.buscarPeloGrupo = function(db, grupo, callback){
    userModel.find({groups: grupo}, (err, result) => {
        if (!err) {
            if(result){
                callback(result);
            } else {
                callback({'error':'Usuário(s) não encontrado(s)!'});
            }
        } else {
            console.log("Falha ao executar " + err);
            callback({'error':'Não foi possível encontrar usuários do grupo:' + grupo});
        } 
    });
};

module.exports.atualizarUsuario = function(db, id, usuario, callback){
    if(ObjectID.isValid(id)) {
        userModel.findOneAndUpdate({_id: id}, usuario, (err, result) => {
            if (!err) {
                if(result){
                    callback(usuario);
                } else {
                    callback({'error':'Usuário não encontrado!'});
                }
            } else {
                console.log("Falha ao executar " + err);
                callback({'error':'Não foi possível atualizar'});
            } 
        });
    } else {
        callback({'error':'Por favor, verificar id do usuário!'});
    }
};

module.exports.deletarById = function(db, id, callback){
    if(ObjectID.isValid(id)) {
        userModel.findOneAndDelete({_id: id}, function(err, result){
            if(!err){
                if(result){
                    callback({'resposta':'Usuario ' + result.nick + ' foi deletado com sucesso!'});
                } else {
                    callback({'error':'Usuário não encontrado!'});
                }
            } else {
                callback({'error':'Não foi possível deletar esse usuario'});
            }
        });
    } else {
        callback({'error':'Por favor, verificar id do usuário!'});
    }
};