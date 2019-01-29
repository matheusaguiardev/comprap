"use strict";

const mongoose = require('mongoose');
const dbUrl = require('./db');

mongoose.connect(dbUrl.url, { useNewUrlParser: true })
    .then(function(){
        console.log("MongoBD connected");
    })
    .catch(function(err){
        console.log("Algum erro ocorreu: "+ err);
    });


module.exports = function(callback){

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Conexão com banco de dados aberta com sucesso!");
        callback(database);
    });


}