"use strict";
const controller = require('../controllers/usuario_controller');

module.exports = function(app, db){

    app.post('/produto/cadastro', (req, res) => {
        controller.salvarProduto(db, req.body, res);       
    });

    app.get('/produtos', (req, res) => {
        controller.buscarTodos(db, res);
    });

    app.get('/produto/:id', (req, res) => {
        const id = req.params.id; // pegando o parametro id
        controller.buscarById(db, id, res);
    });

    app.delete('/produto/:id', (req, res) => {
       const id = req.params.id;
       controller.deletarById(db, id, res);
    });

    app.put('/produto/:id', (req, res) => {
        const id = req.params.id;
        controller.atualizarProduto(db, id, req.body, res);
    });

};