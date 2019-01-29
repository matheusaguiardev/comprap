"use strict";
const controller = require('../controllers/usuario_controller');

module.exports = function(app, db){

    app.post('/usuario/cadastro', (req, res) => {
        controller.salvarUsuario(db, req.body, res);       
    });

    app.get('/usuario/:id', (req, res) => {
        const id = req.params.id;
        controller.buscarUsuarioById(db, id, res);
    });

    app.get('/usuarios/grupo/:grupo', (req, res) => {
        const grupo = req.params.grupo;
        controller.buscarUsuarioPeloGrupo(db, grupo, res);
    });

    app.delete('/usuario/:id', (req, res) => {
       const id = req.params.id;
       controller.deletarUsuario(db, id, res);
    });

    app.put('/usuario/:id', (req, res) => {
        const id = req.params.id;
        controller.atualizarUsuario(db, id, req.body, res);
    });

};