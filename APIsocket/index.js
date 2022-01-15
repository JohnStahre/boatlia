// detta är vår server
const express = require('express');
// för att använda sockets behöver vi också http modulen
const http = require('http');
const path = require('path');
const socket = require('socket.io');
// middleware paket "cors" kan behövas att användas
// const cors = require('cors');

// const io = require("socket.io")(server, {
//     cors: {
//         origin: "*",
//         methods: ["GET", "POST"]
//     }
// })

const app = express();
// kastar in vår express i http server
const server = http.createServer(app);


// Nedan är en middleware för att levera, lägger in sökvägen till mappen public.. Kan vara nån annan för react?
// Absolut sökväg från root folder, om det pushas upp kommer det vara root 
// byta ut join
app.use(express.static(path.join(__dirname, 'public')));


// lägger in en local host port nedan så läng, förhoppningen är att kanske undersökar hur det funkar och ändra
// använda docker?
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('server running on http://localhost:' + PORT);
})

const io = socket(server);

// skapar en eventlistener med ett connection events
// när någon connectar till vår socket kommer det att finnas info i vår socket.

io.on('connection', socket => {
    console.log('New user connected', socket.id);
    // När vi har fått ett connection vill vi göra allting som är här innanför.
    // specifiera vad vi vill göra

    // när vi connectar vill vi emitta och vi vill använda oss av socket emit event

    // socket.emit('message', 'welcome to the John man');
    // när någon connectar emittas ett meddelande välkommen till chatten som vi sen konsollogga

    // nedan lyssnar vi efter message

    socket.on('message', data => {
        console.log(data);
        // nu vill vi skicka till alla sockets och skicka vidare till vår front end
        io.sockets.emit('message', data);
    })

    // broadcast skickar till alla andra sockets förutom sin egen
    // alltså skickar upp till servern och vidare till alla andra förutom sin självt
    socket.on('typing', data => {
        socket.broadcast.emit('typing', data)

    })

})