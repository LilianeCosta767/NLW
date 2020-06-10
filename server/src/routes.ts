import express from 'express';

const routes = express.Router(); // para conseguir desacomplar as rotas do aqruivo principal

routes.get('/', (request, response) => {
    return response.json({message: 'Hello World'});
});

export default routes;