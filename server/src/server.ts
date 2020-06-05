import express, { request, response } from 'express';

const app = express();

app.use(express.json()); // use serve pra colocar um plugin no express

const users = [
    'Diego',
    'Cleiton',
    'Robson'
]

// lista todos os usuarios (por enquanto de forma estatica)
app.get('/users', (request, response) => {
    const search = String(request.query.search);

    console.log(search);

    // fazendo o filtro
    const filteredUsers = search ? users.filter(users => users.includes(search)) : users;

    response.json(filteredUsers);
});

// lista somente o usuario com o id passado como parametro
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user); // retorna uma resposta no formato json do usuario
})

// cria usuarios
app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email,
    }

    return response.json(user);
});

app.listen(3333);

// ANOTAÇÕES
// request param: parametros que vem na propria rota que identificam um recurso, muito utilizado quando queremos buscar/atualizar um UNICO usuario, etc
// query param: parametros na rota que serve para filtrar, fazer paginação. não é um parametro obrigatorio.
// request body: parametros para criaçao/atualização de informações