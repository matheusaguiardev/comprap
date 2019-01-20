const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./app/config/dbconnection');

const app = express();

// definindo porta
const port = 9090;

// Respondendo Json
app.use(bodyParser.urlencoded({ extended: true }));

// Recebendo Json
app.use(bodyParser.json());

// Importando rotas
require('./app/routes/index')(app, dbConnection);

// Subindo servidor
app.listen(port, () => {
    console.log('Servidor no ar na porta: ' + port);
});