import express from "express";
import registerController from "../controllers/registerController.js";
import authController from "../controllers/authController.js";
import postController from "../controllers/postController.js";
import authLogin from "../middlewares/auth.js";
const routes = express.Router()

routes.post("/register", registerController.registerResident)
routes.post("/login", authController.login)
routes.post("/posts", postController.publication)

export default routes;