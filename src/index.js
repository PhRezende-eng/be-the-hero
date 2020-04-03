const express = require ('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

routes.post('/users', (request, response) => {

    const body = request.body;

    console.log(body);

    return response.json({

        evento: 'Semana Oministeck 11.0',

        aluno: 'Paulo Henrique'

    });

});

app.listen(3333);