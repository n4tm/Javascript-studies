const http = require('http');
const url = require('url');
const fs = require('fs');
const queryString = require('query-string');

const hostname  = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    var resposta;
    const urlparse = url.parse(req.url, true);
    const params = queryString.parse(urlparse.search);

    if (urlparse.pathname === '/criar-usuario') {
        fs.writeFile(`users/user${params.id}.txt`, JSON.stringify(params), (err) => {
            if (err) throw err;
            console.log('Saved!');
            output();
        });
        resposta = 'Usuario criado com sucesso';
    } else if (urlparse.pathname === '/selecionar-usuario') {
        fs.readFile(`users/user${params.id}.txt`, (err, data) => {
            if (err) throw err;
            resposta = data;
            output();
        });
    } else if (urlparse.pathname === '/remover-usuario') {
        fs.unlink(`users/user${params.id}.txt`, (err) => {
            if (err) throw err;
            resposta = `usuario removido com sucesso`;
            output();
        });
    }
    function output() {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(resposta);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
