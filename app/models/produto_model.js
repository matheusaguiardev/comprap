"use strict";

var ObjectID = require('mongodb').ObjectID;

module.exports.salvar = function(db, produto, callback) {
    db(function(conn){
        conn.collection('produto').insert(produto, (err, result) => {
            if (err) { 
                console.log("Falha ao executar" + err);
                callback({ 'error': 'Não foi possível cadastrar esse produto' });
              } else {
                console.log(produto);
                callback(result.ops[0]);
              }
        });
        conn.close();
    });
};

module.exports.buscarById = function (db, id, callback){
    db(function(conn){
        console.log("Buscar produto");
        const details = { '_id': new ObjectID(id) }; 
        conn.collection('produto').findOne(details, (err, result) => {
            if (err) {
                console.log("Falha ao executar" + err);
                callback({'error':'Produto não encontrado'});
            } else {
                callback(result);
            }
        });
        conn.close();
    });
};

module.exports.buscarTodos = function(db, callback){
    db(function(conn){
        conn.collection('produto').find({}).toArray(function(err, result) {
            if (err) {
                console.log("Falha ao executar" + err);
                callback({'error':'Produtos não cadastrados'});
            } else {
                callback(result);
            }
        });
        conn.close();
    });
};

module.exports.deletarById = function(db, id, callback){
    db(function(conn){
        console.log("Deletar produto");
        const details = { '_id': new ObjectID(id) };
        conn.collection('produto').remove(details, (err, item) => {
            if (err) {
                console.log("Falha ao executar" + err);
                callback({'error':'Não foi possível deletar esse produto'});
            } else {
                callback({'resposta':'Produto ' + item + ' foi deletado!'});
            } 
        });
        conn.close();
    });
};

module.exports.atualizarProduto = function(db, id, produto, callback){
    db(function(conn){
        console.log("Atualizar produto");
        const details = { '_id': new ObjectID(id) };
        conn.collection('produto').update(details, produto, (err, result) => {
            if (err) {
                console.log("Falha ao executar" + err);
                callback({'error':'Não foi possível atualizar'});
            } else {
                callback(produto);
            } 
        });
        conn.close();
    });
};
