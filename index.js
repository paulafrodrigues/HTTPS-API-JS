const express = require('express');

const server =  express();

server.get('/', function(req, res){
    res.send('I love you 3000!');
});

server.get('/', function(req, res){
    res.send('root');
});

server.get('/about', function(req, res){
    res.json('about');
});

server.get('/users/:username', (req, res, next) => {
    res.send(req.params);
});

server.get('/books/:bookId', (req, res, next) => {
    res.send(req.params);
});

server.get('/users/:username/books/:bookId', (req, res, next) => {
    res.send(req.params);
});

server.get('/search', (req, res, next) => {
    res.send(req.query)
})


server.listen(3000);