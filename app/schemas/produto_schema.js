var mongoose = require('mongoose');

const produtoSchema = mongoose.Schema({
    name: String, // nome
    price: String, // preço
    createdBy: Schema.Types.ObjectId, // criado por
    boughtBy: Schema.Types.ObjectId, // comprado por
    createdAt: { type: Date, default: Date.now }, // criado em
    updatedAt: { type: Date, default: Date.now } // atualizado em
});

module.exports = produtoSchema;