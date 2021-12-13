import dotenv from "dotenv";
dotenv.config();

import "./database";

import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(expressLayouts);
app.use(routes);

app.use(express.static(path.join(__dirname, "..", "public")));

app.set("view engine", "ejs");
app.set("layout extractScripts", true);
app.set("views", path.join(__dirname, "..", "public/views"));

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket: Socket) => {
	console.log(socket);
});

httpServer.listen(3000, () => {
	console.log("Running on http://localhost:3000");
});

//time 23:12