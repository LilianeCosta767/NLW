import express from 'express';
import knex from './database/connection';

const routes = express.Router(); // para conseguir desacomplar as rotas do aqruivo principal

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*'); // mesmo que SELECT * FFROM items

    const serializedItems = items.map(item => {
        return {
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        };
    });

    return response.json(serializedItems);
});

export default routes;

// OBSERVAÇÕES
// quando temos uma funcionalidade que demora, por exemplo uma query, usamos o await na frente, o await é basicamente aguardar a query terminar pra depois ter os resultados, atribuir à alguem, algo assim
// quando usamos o await somos obrigados a usar o async
// função assincrona é algo que executa em paralelo ao seu código e não sequencialmente
// serialized: as infomações do banco não estão exatamente como preciso retornar para o front, entao serielized é uma transformação dos dados por um novo formato
// map retorna todos os itens do banco de dados e modifica como desejado