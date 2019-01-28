var mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    name: String, // nome
    nick: String, // apelido
    email: String,
    phone: { type: String, default: "(00)00000-0000" },
    groups: [Schema.Types.ObjectId],
    createdAt: { type: Date, default: Date.now }, // criado em
    updatedAt: { type: Date, default: Date.now } // atualizado em
});

module.exports = usuarioSchema;