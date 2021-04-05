const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');


const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('Server is running.');
})

//for socket.io:
io.on('connection', (socket) =>{
    socket.emit('me', socket.id);

    socket.on('disconnect', () => {
        socket.broadcast.emit('callended');
    });

    socket.on('calluser', (data) =>{
        
    })

})

server.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));