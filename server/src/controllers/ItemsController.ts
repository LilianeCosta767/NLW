import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {
    async index (request: Request, response: Response) {
        const items = await knex('items').select('*'); // mesmo que SELECT * FFROM items
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`,
            };
        });
        
        return response.json(serializedItems);
    }
}

export default ItemsController;

// OBSERVAÇÕES
// geralmente utilizamos, na criação de um controller, o metodo index para listagem; show para exibir um unico registro; create; update e delete