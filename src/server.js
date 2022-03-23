const express = require('express');
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send(`listaDeNome`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.post('/', (req, res) => {
    res.send('Hello world');
})

app.put('/', function (req, res){
    res.send('got a POST request at  /user');
});

app.delete('/user', function (req, res){
    res.send('got a DELETE request at /user');
})

app.postman('/', (req, res) => {
    const[
        nome = req.body.nome,
        idade = req.body.idade

        //conhece o carpano ???
    ];
})
