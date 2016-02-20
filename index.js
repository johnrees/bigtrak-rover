var app = require('express')(),
  http = require('http').Server(app),
  io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('phone.html');
});

io.on('connection', function(socket){

  console.log('a client connected');

  socket.on('move', function (msg) {
    socket.broadcast.emit('move', msg);
  });

  socket.on('stop', function () {
    socket.broadcast.emit('stop');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
