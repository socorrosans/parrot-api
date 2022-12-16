import express from "express";
import myDatabase from "./src/database/index.js";
import routes from "./src/routes/index.js";
import cors from "cors";

const app = express();

myDatabase.testingConnection()
app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(3050, ()=> console.log("Servidor em localhost:3050"))