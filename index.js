const fs = require('fs');
const http = require('http')  

const port = 3000

function rand(max) {
				  return Math.floor(Math.random() * max);
}

const fortunes = fs.readFileSync('bofh.txt').toString().split("\n");


var babble = false;

const requestHandler = (request, response) => {  
	switch (request.url) {
		case "/start":
						response.end('starting');
						babble = setInterval(quote,1);
						break;
		case "/stop":
						response.end('stoping... ');
						clearInterval(babble);
						break;
		default:
						response.end('what?');
						break;
	}
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
 	if (err) {
 	  return console.log(err)
 	}
 	console.log(`server is listening on ${port}`)
})

function quote() {
				console.log("Bofh excuse: "+fortunes[rand(fortunes.length)]);
}
