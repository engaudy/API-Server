const http = require('http');
const express = require('express');
let cors = require('cors');

const itemRouter = require('./routes/booking');

const app = express();
app.use(express.json());
app.use('/booking' , itemRouter);
app.use('/', function(res){
    res.send('API testing is working');
})

const server = http.createServer(app);
const port= 3000;
server.listen(port);
console.debug('Server is available, port: ' + port);