import express, { request, response } from 'express';

const app = express();

// lista todos os usuarios (por enquanto de forma estatica)
app.get('/users', (request, response) => {
    console.log('listagem de usuarios');

    response.json([
        'Diego',
        'Cleiton',
        'Robson'
    ]);
});

// cria usuarios
app.post('/users', (request, response) => {
    const user = {
        name: 'Diego',
        email: 'diego@rocketseat.com.br'
    }

    return response.json(user);
});

app.listen(3333);