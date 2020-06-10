import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json()); // use serve pra colocar um plugin no express

app.use(routes);

app.listen(3333);

// ANOTAÇÕES
// request param: parametros que vem na propria rota que identificam um recurso, muito utilizado quando queremos buscar/atualizar um UNICO usuario, etc
// query param: parametros na rota que serve para filtrar, fazer paginação. não é um parametro obrigatorio.
// request body: parametros para criação/atualização de informações