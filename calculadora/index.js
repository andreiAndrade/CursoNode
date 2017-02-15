var http = require('http');
var url = require('url');
var requestListner = function (req, res) {
	console.log('Request', req.url);
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write("<h1>Calculadora!</h1>");		
	var reqResult = url.parse(req.url, true);

	if (reqResult.pathname == '/soma') {
		if (reqResult.query['valor1'] == undefined || reqResult.query['valor2'] == undefined) {
			res.write("<h3>Parâmetro da url deve ser nomeado como: valor1 e valor2</h3>");
		} else {
			var result = parseFloat(reqResult.query['valor1']) + parseFloat(reqResult.query['valor2']);
			res.write("<h2> Valor1: " + reqResult.query['valor1'] + "</h2>");
			res.write("<h2> Valor2: " + reqResult.query['valor2'] + "</h2>");
			res.write("<h3>" + result + "</h3>");
		}
	} else if (reqResult.pathname == '/subtrai') {
		if (reqResult.query['valor1'] == undefined || reqResult.query['valor2'] == undefined) {
			res.write("<h3>Parâmetro da url deve ser nomeado como: valor1 e valor2</h3>");
		} else {
			var result = parseFloat(reqResult.query['valor1']) - parseFloat(reqResult.query['valor2']);
			res.write("<h2> Valor1: " + reqResult.query['valor1'] + "</h2>");
			res.write("<h2> Valor2: " + reqResult.query['valor2'] + "</h2>");
			res.write("<h3>" + result + "</h3>");
		}
	} else if (reqResult.pathname == '/multiplica') {
		if (reqResult.query['valor1'] == undefined || reqResult.query['valor2'] == undefined) {
			res.write("<h3>Parâmetro da url deve ser nomeado como: valor1 e valor2</h3>");
		} else {
			var result = parseFloat(reqResult.query['valor1']) * parseFloat(reqResult.query['valor2']);
			res.write("<h2> Valor1: " + reqResult.query['valor1'] + "</h2>");
			res.write("<h2> Valor2: " + reqResult.query['valor2'] + "</h2>");
			res.write("<h3>" + result + "</h3>");
		}
	} else if (reqResult.pathname == '/divide') {
		if (reqResult.query['valor1'] == undefined || reqResult.query['valor2'] == undefined) {
			res.write("<h3>Parâmetro da url deve ser nomeado como: valor1 e valor2</h3>");
		} else {
			var result = parseFloat(reqResult.query['valor1']) / parseFloat(reqResult.query['valor2']);
			res.write("<h2> Valor1: " + reqResult.query['valor1'] + "</h2>");
			res.write("<h2> Valor2: " + reqResult.query['valor2'] + "</h2>");
			res.write("<h3>" + result + "</h3>");
		}
	} else if (reqResult.pathname == '/testaPar') {
		if (reqResult.query['valor1'] == undefined) {
			res.write("<h3>Parâmetro da url deve ser nomeado como: valor1</h3>");
		} else {
			var result = parseFloat(reqResult.query['valor1']) % 2 == 0;
			res.write("<h2> Valor1: " + reqResult.query['valor1'] + "</h2>");
			res.write("<h3>" + result + "</h3>");
		}
	}

	res.end();
}

var server = http.createServer(requestListner);
var serverLigou = function() {
	console.log('Servidor Hello World rodando!');
}
server.listen(3000, serverLigou);
