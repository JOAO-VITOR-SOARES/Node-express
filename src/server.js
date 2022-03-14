const express = require('express');
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('Wello world')
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