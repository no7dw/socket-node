var express = require('express');
var app = express();
app.get('/', function(req, res){
	console.log('incoming');
	setTimeout(function(){
		res.send('hello world');},
	3000);//4000
});
var server = app.listen(3000, function(){
	console.log('ready at 3000');
});

server.on('connection', function(socket) {
  console.log("A new connection was made by a client.");
  socket.setTimeout(4 * 1000); 
  // 30 second timeout. Change this as you see fit.
})
console.log('---');
