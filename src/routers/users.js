import express from "express"
import userController from "../controllers/users.js"
import userMiddleware from "../middlewares/users.js"

let router = express.Router()

router
    .get("/user", userController.getUsers)
    .post("/user",userMiddleware.validateUser, userController.CreateUser)

export default router