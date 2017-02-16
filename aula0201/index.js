var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response) {
    var req = url.parse(request.url, true);

    if (req.pathname == '/estado') {
        fs.readFile(__dirname + '/estados.json', function(err, arquivo) {
            var headers = {};
            headers["Access-Control-Allow-Origin"] = "*";
            headers["Content-Type"] = "application/json";
            response.writeHead(200, headers);
            
            var arq = JSON.parse(arquivo);
            console.log('QUery:' +req.query);
            console.log(function(){
                for (var i in arq) {
                    console.log(req.query[0]);
                    console.log(i);
                    if (req.query[0] instanceof i){
                        return i;
                    }
                }
            });
            response.write(arquivo);
            response.end();
        });
    }
    fs.readFile(__dirname + '/estados.json', function(err, arquivo) {
        var headers = {};
        headers["Access-Control-Allow-Origin"] = "*";
        headers["Content-Type"] = "application/json";
        response.writeHead(200, headers);
        
        var arq = JSON.parse(arquivo);
        console.log(arq[0]);

        response.write(arquivo);
        response.end();
    });
});

server.listen(8000, function () {
    console.log('Executando Servidor HTTP');
})