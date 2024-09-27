// app.js
//const http = require('http');

const express =require('express');
const app = express();
const port = 3000;

//ROUTE GET
// app.get('/',(req,res) => {
//     res.send('Hello, Get Student');
// });

app.get('/text',(req,res) => {
    res.send('ini adalah response text,');
});

app.get('/html',(req,res) => {
    res.send('ini adalah response html,');
});

app.get('/json',(req,res) => {
    res.send('ini adalah response json,');
});

//midleware untuk parsing body request
//app.use(express.json());

//menyajikan file static dari folder public
app.use(express.static('public'));

//ROUTE POST
app.post('/submit', (req, res) => {
    const {name} = req.body;
    res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
    console.log('server running at http://localhost:3000/')
})



// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, Mantok chan!\n');
// });

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });