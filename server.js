const express = require('express');
const path = require('path');

const server = express();

server.use(express.static('./public'));

server.get('/*',function(req, res){
  res.sendFile(path.join(__dirname, 'public','index.html'));
});


server.listen(process.env.PORT);