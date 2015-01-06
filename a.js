var net = require('net');

var server = net.createServer(function (socket) {
  console.log('1');
  socket.on('end', function(){
	console.log('client disconnected');
  })
  socket.write('Echo server\r\n');
  socket.on('data', function(data){
        socket.write(data.toString().toUpperCase())
    });
 // socket.pipe(socket);
});

server.listen(1337, '127.0.0.1');
console.log('listening');
