const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

function onConnection(socket){
  socket.on('music', function(data){ 
socket.broadcast.emit('music', data);
console.log(data);
});
}

io.on('connection', onConnection);

http.listen(port, () => console.log('listening on port ' + port));
