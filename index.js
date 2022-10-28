import express from "express";
import myDatabase from "./src/database/index.js";

const app = express();

myDatabase.testingConnection()
app.listen(3000, ()=> console.log("Servidor em localhost:3000"))