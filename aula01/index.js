var http = require('http');
var url = require('url');
var requestListner = function (req, res) {
	console.log('Request', req.url);
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write("<h1>Dados da query string!</h1>");		
	var result = url.parse(req.url, true);
	res.write(result.hostname);
	for(var key in result.query) {
		res.write("<h2>" + key + " : " + result.query[key]+"</h2>");
	}

	res.end();
}

var server = http.createServer(requestListner);
var serverLigou = function() {
	console.log('Servidor Hello World rodando!');
}
server.listen(3000, serverLigou);
