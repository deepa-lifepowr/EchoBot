const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');


const app = express()
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

server= app.listen(port, () => console.log(`Listening on port ${port}`));

//socket.io instantiation , disable
const io = require("socket.io")(server,{ serveClient: false })

//listen on every connection
io.on('connection', (socket) => {

    console.log('New user connected')

    //listen on new_message
    socket.on('new_message', (data) => {
        //broadcast the new message
        setTimeout(() => {
              io.sockets.emit('new_message', {message : data.message, username : socket.username});
        }, 2000);
    })
})