import express from "express";
import myDatabase from "./src/database/index.js";
import routes from "./src/routes/index.js";

const app = express();

myDatabase.testingConnection()
app.use(express.json())
app.use(routes)
app.listen(3000, ()=> console.log("Servidor em localhost:3000"))