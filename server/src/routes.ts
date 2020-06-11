import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router(); // para conseguir desacomplar as rotas do aqruivo principal
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);


export default routes;

// OBSERVAÇÕES
// quando temos uma funcionalidade que demora, por exemplo uma query, usamos o await na frente, o await é basicamente aguardar a query terminar pra depois ter os resultados, atribuir à alguem, algo assim
// quando usamos o await somos obrigados a usar o async
// função assincrona é algo que executa em paralelo ao seu código e não sequencialmente
// serialized: as infomações do banco não estão exatamente como preciso retornar para o front, entao serielized é uma transformação dos dados por um novo formato
// map retorna todos os itens do banco de dados e modifica como desejado
// trx: serve para dizer que se uma query falhar a outra nao vai executrar, isso graças ao transaction