// detta är vår server
const app = require('express')();
// för att använda sockets behöver vi också http modulen
const server = require("http").createServer(app);
const cors = require("cors");

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
    res.send('Server is running.');
});

io.on('connection', (socket) => {
    socket.emit('me', socket.id);
});

socket.on('disconnect', () => {
    socket.broadcast.emit("callended");
});

// 11:22 in i film


server.listen(PORT, () => {
    console.log('server running on http://localhost:' + PORT);
});




const app = express();
// kastar in vår express i http server
const server = http.createServer(app);


// Nedan är en middleware för att levera, lägger in sökvägen till mappen public.. Kan vara nån annan för react?
// Absolut sökväg från root folder, om det pushas upp kommer det vara root 
// byta ut join
app.use(express.static(path.join(__dirname, 'public')));






const io = socket(server);

// skapar en eventlistener med ett connection events
// när någon connectar till vår socket kommer det att finnas info i vår socket.


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