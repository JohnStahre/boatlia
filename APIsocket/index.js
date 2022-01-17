// detta är vår server
const app = require('express')();
// för att använda sockets behöver vi också http modulen
const server = require("http").createServer(app);


// const path = require('path');
// const socket = require('socket.io');
// middleware paket "cors" kan behövas att användas
const cors = require('cors');

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());

// lägger in en local host port nedan så läng, förhoppningen är att kanske undersökar hur det funkar och ändra
// använda docker?
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send('Server is running Johnny Bravo.');
});

io.on('connection', (socket) => {
    socket.emit('me', socket.id);

    socket.on('disconnect', () => {
        socket.broadcast.emit("callended");
    });

    socket.on("calluser", ({userToCall, signalData, from, name}) => {
        io.to(userToCall).emit("calluser", {signal: signalData, from, name});
    });
    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal);
    })
});



// 11:22 in i film

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));


// server.listen(PORT, () => {
//     console.log('server running on http://localhost:' + PORT);





