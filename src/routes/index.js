import express from "express";
import registerController from "../controllers/registerController.js"
const routes = express.Router()

routes.post("/register", registerController.registerResident)

export default routes;