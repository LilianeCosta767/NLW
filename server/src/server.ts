import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json()); // use serve pra colocar um plugin no express
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);

// ANOTAÇÕES
// request param: parametros que vem na propria rota que identificam um recurso, muito utilizado quando queremos buscar/atualizar um UNICO usuario, etc
// query param: parametros na rota que serve para filtrar, fazer paginação. não é um parametro obrigatorio.
// request body: parametros para criação/atualização de informações
// o express.static() é para servir materiais estaticos de uma pasta especifica