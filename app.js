const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http)

const mainRouter = require('./routes/index')

app.use(express.json())
app.use(mainRouter)

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

app.listen(8081, 'localhost', () => {
    console.log('Server running at http://127.0.0.1:8081/');
})