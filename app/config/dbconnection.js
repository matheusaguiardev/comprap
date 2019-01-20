"use strict";

const dbUrl = require('./db');
const mongoClient = require('mongodb').MongoClient;

module.exports = function (callback) {
    mongoClient.connect(dbUrl.url, (err, database) => {
        if(err) return console.log(err);

        console.log("Conexão com banco de dados aberta com sucesso!");
        callback(database);

        //console.log(database);
    });
}