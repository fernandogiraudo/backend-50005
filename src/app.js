import express from "express";
import handlebars from "express-handlebars";
import viewsRoutes from "./routes/views.routes.js";
import { Server } from "socket.io";

const app = express();
const httpServer = app.listen(8080, () => {
  console.log("Listening on " + 8080);
});

const io = new Server(httpServer);
const messages = [];
io.on('connection', (socket) => {
    console.log('Nuevo socket conectado');

    socket.on('message', data => {
        messages.push(data);
        io.emit('logMessages', messages);
    });

    socket.on('newUser', (data) => {
      io.emit('newUserFound', data);
    });

    socket.on('user_new', data => {
      socket.broadcast.emit('newConnection', data);
    });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("handlebars", handlebars.engine());
app.set("views", "src/views");
app.set("view engine", "handlebars");

app.use("/", viewsRoutes);
