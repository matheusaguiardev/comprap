"use strict";

var ObjectID = require('mongodb').ObjectID;

module.exports.salvar = function(db, usuario, callback) {
    db(function(conn){
        conn.collection('usuario').insert(usuario, (err, result) => {
            if (err) { 
                console.log("Falha ao executar" + err);
                callback({ 'error': 'Não foi possível cadastrar esse usuario' });
              } else {
                console.log(usuario);
                callback(result.ops[0]);
              }
        });
        conn.close();
    });
};

module.exports.buscarById = function (db, id, callback){
    db(function(conn){
        console.log("Buscar usuario");
        const details = { '_id': new ObjectID(id) }; 
        conn.collection('usuario').findOne(details, (err, result) => {
            if (err) {
                console.log("Falha ao executar" + err);
                callback({'error':'usuario não encontrado'});
            } else {
                callback(result);
            }
        });
        conn.close();
    });
};

module.exports.buscarPeloGrupo = function(db, grupo, callback){
    db(function(conn){
        console.log("Buscar grupo");
        
        conn.collection('usuario').find({"grupos": grupo }).toArray(function(err, result) {
            if (err) {
                console.log("Falha ao executar" + err);
                callback({'error':'usuario não encontrado'});
            } else {
                callback(result);
            }
        });
        conn.close();
    });
};

module.exports.atualizarUsuario = function(db, id, usuario, callback){
    db(function(conn){
        console.log("Atualizar usuario");
        const details = { '_id': new ObjectID(id) };
        conn.collection('usuario').update(details, usuario, (err, result) => {
            if (err) {
                console.log("Falha ao executar " + err);
                callback({'error':'Não foi possível atualizar'});
            } else {
                callback(usuario);
            } 
        });
        conn.close();
    });
};

module.exports.deletarById = function(db, id, callback){
    db(function(conn){
        console.log("Deletar usuario");
        const details = { '_id': new ObjectID(id) };
        conn.collection('usuario').remove(details, (err, item) => {
            if (err) {
                console.log("Falha ao executar" + err);
                callback({'error':'Não foi possível deletar esse usuario'});
            } else {
                callback({'resposta':'Usuario ' + item + ' foi deletado!'});
            } 
        });
        conn.close();
    });
};